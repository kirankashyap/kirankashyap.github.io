// Plain-text profile for LLMs and AI search crawlers (https://llmstxt.org).
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import {
	SITE_URL,
	contributions,
	coreSkills,
	credentials,
	experience,
	formatDate,
	formatRange,
	person,
	practices,
	projects,
	talks,
	tools,
	writings,
} from '../data/profile';

export const GET: APIRoute = async () => {
	const books = (await getCollection('books')).sort(
		(a, b) => (b.data.publishDate?.valueOf() ?? Infinity) - (a.data.publishDate?.valueOf() ?? Infinity),
	);

	const lines = [
		`# ${person.name}`,
		'',
		`> ${person.headline}. ${person.currentRole} at ${person.currentEmployer}, based in ${person.location.city}, ${person.location.country}. ${person.yearsInTech} years in software, ${person.yearsWithAgileTeams} with agile teams.`,
		'',
		person.summary,
		'',
		'## Quick facts',
		'',
		`- Roles: ${person.roles.join(', ')}`,
		`- Current: ${person.currentRole}, ${person.currentEmployer} (since ${formatDate(experience[0].start)})`,
		`- Location: ${person.location.city}, ${person.location.region}, ${person.location.country}`,
		`- Certifications: ${credentials.map((c) => `${c.name} (${c.short})`).join('; ')}`,
		`- Core skills: ${coreSkills.join(', ')}`,
		`- Tools: ${tools.join(', ')}`,
		`- Email: ${person.email}`,
		`- Website: ${SITE_URL}/`,
		`- LinkedIn: ${person.links.linkedin}`,
		`- GitHub: ${person.links.github}`,
		'',
		'## Areas of work (in his own words)',
		'',
		...practices.flatMap((p) => [`### ${p.title}`, '', p.summary, '', ...p.evidence.map((e) => `- ${e}`), '']),
		'## Experience',
		'',
		...experience.flatMap((job) => [
			`### ${job.role}, ${job.company} (${formatRange(job.start, job.end)})${job.note ? `, ${job.note}` : ''}`,
			'',
			...job.highlights.map((h) => `- ${h}`),
			'',
		]),
		'## Books',
		'',
		...books.map(
			(b) =>
				`- [${b.data.title}: ${b.data.subtitle}](${SITE_URL}/books/${b.id}/) by ${b.data.authors.join(', ')}. ${
					b.data.status === 'upcoming' ? 'Upcoming.' : `Published ${b.data.publishDate?.getFullYear()}.`
				} ${b.data.description.replace(/\s+/g, ' ').trim()}`,
		),
		'',
		'## Talks',
		'',
		...talks.map((t) => {
			const when = t.date ? formatDate(t.date) : '';
			const where = [t.venue, t.location].filter(Boolean).join(', ');
			const name = t.title === t.event ? t.event : `"${t.title}", ${t.event}`;
			return `- ${[name, t.organizer, where, when].filter(Boolean).join(', ')}`;
		}),
		'',
		'## Writing',
		'',
		...writings.map((w) => `- [${w.title}](${w.href}): ${w.description}`),
		'',
		'## Projects and pages on this site',
		'',
		...projects.map((p) => `- [${p.title}](${p.href}): ${p.description}`),
		'',
		'## Open source contributions',
		'',
		...contributions.map((c) => `- [${c.title}](${c.href}): ${c.description}`),
		'',
	];

	return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
