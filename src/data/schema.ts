// Builds schema.org JSON-LD so search engines and AI crawlers can read the
// profile as structured data. All facts come from ./profile.ts and the books
// content collection.
import type { CollectionEntry } from 'astro:content';
import {
	SITE_URL,
	credentials,
	experience,
	keywords,
	knowsAbout,
	person,
	sameAs,
	talks,
	type Talk,
} from './profile';

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const PROFILE_IMAGE = `${SITE_URL}/kiran-kashyap.jpg`;

const ref = (id: string) => ({ '@id': id });

export function bookUrl(book: CollectionEntry<'books'>) {
	return `${SITE_URL}/books/${book.id}/`;
}

export function personNode() {
	const current = experience.find((job) => !job.end)!;
	return {
		'@type': 'Person',
		'@id': PERSON_ID,
		name: person.name,
		givenName: person.givenName,
		familyName: person.familyName,
		url: `${SITE_URL}/`,
		image: PROFILE_IMAGE,
		email: `mailto:${person.email}`,
		description: person.summary,
		jobTitle: [person.currentRole, ...person.roles],
		worksFor: { '@type': 'Organization', name: current.company },
		hasOccupation: person.roles.map((role) => ({
			'@type': 'Occupation',
			name: role,
			occupationLocation: { '@type': 'City', name: person.location.city },
		})),
		address: {
			'@type': 'PostalAddress',
			addressLocality: person.location.city,
			addressRegion: person.location.region,
			addressCountry: person.location.countryCode,
		},
		knowsAbout,
		hasCredential: credentials.map((c) => ({
			'@type': 'EducationalOccupationalCredential',
			name: c.name,
			alternateName: c.short,
			credentialCategory: 'certification',
			recognizedBy: { '@type': 'Organization', name: c.issuer },
		})),
		alumniOf: experience
			.filter((job) => job.end)
			.map((job) => ({ '@type': 'Organization', name: job.company })),
		sameAs,
	};
}

export function bookNode(book: CollectionEntry<'books'>, coverUrl: string) {
	const { data } = book;
	return {
		'@type': 'Book',
		'@id': `${bookUrl(book)}#book`,
		name: data.title,
		alternativeHeadline: data.subtitle,
		description: data.description.trim(),
		url: bookUrl(book),
		image: new URL(coverUrl, SITE_URL).href,
		author: data.authors.map((name) =>
			name === person.name ? ref(PERSON_ID) : { '@type': 'Person', name },
		),
		inLanguage: 'en',
		keywords: data.tags.join(', '),
		...(data.publishDate && { datePublished: data.publishDate.toISOString().slice(0, 10) }),
		...(data.status === 'upcoming'
			? { creativeWorkStatus: 'Upcoming' }
			: { creativeWorkStatus: 'Published' }),
		...(data.amazonUrl && {
			offers: { '@type': 'Offer', url: data.amazonUrl, availability: 'https://schema.org/InStock' },
		}),
	};
}

function talkNode(talk: Talk) {
	// Only dated talks with a known place make valid Event nodes.
	if (!talk.date || talk.date.length < 7) return null;
	return {
		'@type': 'Event',
		name: talk.title === talk.event ? talk.event : `${talk.title} (${talk.event})`,
		description: talk.description,
		startDate: talk.date,
		...(talk.endDate && { endDate: talk.endDate }),
		eventStatus: 'https://schema.org/EventScheduled',
		eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
		location: {
			'@type': 'Place',
			name: talk.venue ?? talk.location,
			address: talk.location,
		},
		...(talk.organizer && { organizer: { '@type': 'Organization', name: talk.organizer } }),
		...(talk.url && { url: talk.url }),
		performer: ref(PERSON_ID),
	};
}

/** Graph for the home page: website, profile page, person, books and recent talks. */
export function homeGraph(books: { entry: CollectionEntry<'books'>; coverUrl: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': WEBSITE_ID,
				url: `${SITE_URL}/`,
				name: person.name,
				description: `${person.name}: ${person.headline}`,
				inLanguage: 'en',
				publisher: ref(PERSON_ID),
			},
			{
				'@type': 'ProfilePage',
				'@id': `${SITE_URL}/#profile`,
				url: `${SITE_URL}/`,
				name: `${person.name}, ${person.headline}`,
				isPartOf: ref(WEBSITE_ID),
				about: ref(PERSON_ID),
				mainEntity: ref(PERSON_ID),
				keywords: keywords.join(', '),
				dateModified: new Date().toISOString().slice(0, 10),
			},
			personNode(),
			...books.map(({ entry, coverUrl }) => bookNode(entry, coverUrl)),
			...talks.map(talkNode).filter(Boolean),
		],
	};
}

/** Graph for a single book page. */
export function bookGraph(book: CollectionEntry<'books'>, coverUrl: string) {
	return {
		'@context': 'https://schema.org',
		'@graph': [
			bookNode(book, coverUrl),
			personNode(),
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
					{ '@type': 'ListItem', position: 2, name: 'Books', item: `${SITE_URL}/#books` },
					{ '@type': 'ListItem', position: 3, name: book.data.title, item: bookUrl(book) },
				],
			},
		],
	};
}
