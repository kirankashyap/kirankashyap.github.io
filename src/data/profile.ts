// Single source of truth for profile data. The home page, JSON-LD structured
// data, llms.txt, and the sitemap all read from here, so edit facts once.

export const SITE_URL = 'https://kirankashyap.github.io';

export const person = {
	name: 'Kiran Kashyap',
	givenName: 'Kiran',
	familyName: 'Kashyap',
	headline: 'Technical Program Manager, Product Owner and Agile Coach',
	roles: ['Technical Program Manager', 'Product Owner', 'Product Manager', 'Agile Coach', 'SAFe Program Consultant'],
	currentRole: 'Senior Agile Coach',
	currentEmployer: 'Amadeus',
	location: { city: 'Bengaluru', region: 'Karnataka', country: 'India', countryCode: 'IN' },
	email: 'kiran.kashyap.ds@gmail.com',
	yearsInTech: 13,
	yearsWithAgileTeams: 8,
	careerStart: '2013-10',
	summary:
		'Kiran Kashyap is a technical program manager, product owner and agile coach based in Bengaluru, India, with 13 years in software, 8 of them with agile teams. He is a certified SAFe Program Consultant (SPC) and a Senior Agile Coach at Amadeus, where he built an AI tool used by Scrum Masters, product owners, product managers and release train engineers across the company. He has written three books on engineering and agile practice, has a fourth on quantum computing on the way, and speaks at conferences in India and abroad.',
	links: {
		linkedin: 'https://www.linkedin.com/in/kirankashyapds/',
		github: 'https://github.com/kirankashyap/',
		medium: 'https://medium.com/@kiran.kashyap.ds',
		substack: 'https://substack.com/@kirankashyap608058',
		leanpub: 'https://leanpub.com/u/kiran-kashyap',
		youtube: 'https://www.youtube.com/playlist?list=PLU5wcuPNwfnM',
	},
};

export const sameAs = [
	person.links.linkedin,
	person.links.github,
	person.links.medium,
	person.links.substack,
	person.links.leanpub,
];

/** Search-facing keywords. Kept honest: every term maps to work on this page. */
export const keywords = [
	'Kiran Kashyap',
	'Technical Program Manager',
	'TPM',
	'Product Owner',
	'Product Manager',
	'Agile Coach',
	'Enterprise Agile Coach',
	'Scrum Master',
	'SAFe',
	'SAFe Program Consultant',
	'SPC',
	'Release Train Engineer',
	'Program Management',
	'Release Management',
	'Value Stream Mapping',
	'AI for agile teams',
	'GitHub Copilot',
	'Test-Driven Development',
	'Bengaluru',
	'Bangalore',
	'India',
];

export const knowsAbout = [
	'Technical program management',
	'Product ownership',
	'Product management',
	'Agile coaching',
	'Scrum',
	'Kanban',
	'Scaled Agile Framework (SAFe)',
	'Value stream mapping',
	'Release management',
	'Delivery forecasting',
	'Agile metrics',
	'Stakeholder management',
	'Leadership coaching',
	'AI agents and LLM workflows',
	'GitHub Copilot',
	'Test-driven development',
	'Mutation testing',
	'DevOps',
	'Quantum computing',
];

export type Practice = {
	id: string;
	title: string;
	summary: string;
	evidence: string[];
};

/** The three roles people hire Kiran for, plus the AI work that now runs through all of them. */
export const practices: Practice[] = [
	{
		id: 'technical-program-management',
		title: 'Technical program management',
		summary:
			'I plan and run programs that span many teams, from cloud migrations to release trains, and keep dependencies and risks visible the whole way.',
		evidence: [
			"Key contributor to planning and running a multi-team cloud transformation at Lowe's",
			'Owned end-to-end release management for a microservices product on Google Cloud, with 7 self-organizing teams',
			'Set up quarterly cross-team planning and release discipline at a startup',
		],
	},
	{
		id: 'product-ownership',
		title: 'Product ownership and management',
		summary:
			'I turn strategy into roadmaps and forecasts that leadership trusts, and measure whether what we shipped worked.',
		evidence: [
			'Built data-driven delivery forecasting and CXO metrics dashboards at Tailorbird',
			"Facilitated roadmaps and timelines for Lowe's tech transformation",
			'Envisioned, built and ran an AI product for every agile role at Amadeus',
		],
	},
	{
		id: 'agile-coaching',
		title: 'Agile and leadership coaching',
		summary:
			'I coach teams, Scrum Masters and leaders, and I tend to measure the result. One set of value stream mapping workshops gave an agile release train a 20% efficiency gain.',
		evidence: [
			'Senior Agile Coach at Amadeus since 2024',
			'Introduced agile ways of working from scratch as the in-house coach at a startup',
			'Certified SAFe Program Consultant (SPC), and ICP-ACC, CSM and PSM I certified',
			'Mentored junior Scrum Masters and engineers',
		],
	},
	{
		id: 'ai-builder',
		title: 'Building with AI',
		summary:
			'I write code. I build AI agents, skills and prompts that other teams reuse, and I teach engineers to keep AI-written code honest with tests.',
		evidence: [
			'Agents, skills and prompts adopted by teams across Amadeus',
			'AI-enabled workshops that save RTEs, Scrum Masters, POs and PMs hours every week',
			'Co-author of Test-First Copilot, on TDD with GitHub Copilot',
		],
	},
];

export type Job = {
	company: string;
	role: string;
	start: string; // YYYY-MM
	end?: string; // YYYY-MM, omitted for current role
	note?: string;
	highlights: string[];
};

export const experience: Job[] = [
	{
		company: 'Amadeus',
		role: 'Senior Agile Coach',
		start: '2024-02',
		highlights: [
			'Envisioned, built, deployed and maintain an AI tool for every agile role: Scrum Masters, product managers, product owners and release train engineers.',
			'Created reusable agents, skills and prompts that teams across Amadeus adopted.',
			'Ran value stream mapping workshops that led to a 20% efficiency gain for an agile release train.',
			'Facilitated AI-enabled workshops for RTEs, Scrum Masters, POs and PMs that save them several hours a week.',
		],
	},
	{
		company: 'Tailorbird',
		role: 'Senior Scrum Master and Quality Leader',
		start: '2022-11',
		end: '2024-01',
		note: 'Startup',
		highlights: [
			'Joined as an early employee and held several roles at once.',
			'Started quarterly cross-team planning and a systematic release management process.',
			'Designed and implemented the company test strategy as quality lead, and managed the QA team across India and Latin America.',
			'Set up data-driven delivery forecasting and built metrics dashboards for the CXOs.',
			'Introduced agile ways of working from scratch as the in-house coach, and ran Scrum of Scrums with visual tracking of dependencies and risks.',
			'Built the production support process for customer requests.',
		],
	},
	{
		company: 'ConverseNow',
		role: 'Senior Scrum Master and Project Manager',
		start: '2022-05',
		end: '2022-08',
		note: 'Startup',
		highlights: [
			'Created and owned end-to-end release management for a microservices product on Google Cloud, built so its 7 teams could self-organize.',
			'Built a semi-automated process for onboarding new customers onto the automatic speech recognition system.',
		],
	},
	{
		company: "Lowe's",
		role: 'Senior Scrum Master',
		start: '2020-02',
		end: '2022-05',
		highlights: [
			'Key contributor to planning and running a multi-team cloud transformation.',
			'Facilitated the roadmaps and timelines for the tech transformation.',
			'Led an initiative to raise code quality and engineer engagement with mutation testing and TDD.',
			'Designed and maintained metrics dashboards for leadership, and mentored junior Scrum Masters and engineers.',
		],
	},
	{
		company: 'Societe Generale',
		role: 'Scrum Master',
		start: '2019-04',
		end: '2020-02',
		highlights: [
			'Scrum Master for two product development teams.',
			'Co-facilitated PI planning events with the release train engineer.',
		],
	},
	{
		company: 'Cognizant Technology Solutions',
		role: 'Scrum Master, Production Support Analyst, PEGA Developer',
		start: '2013-10',
		end: '2019-04',
		highlights: [
			'Volunteered as Scrum Master for a SAFe pilot team (and served the coffee and carried the whiteboards).',
			'Resolved about 1,500 production incidents with good CSAT scores.',
			'Started out as a PEGA developer.',
		],
	},
];

export type Talk = {
	title: string;
	event: string;
	organizer?: string;
	date?: string; // YYYY-MM-DD or YYYY-MM or YYYY
	endDate?: string;
	location?: string;
	venue?: string;
	url?: string;
	description?: string;
	featured?: boolean;
};

export const talks: Talk[] = [
	{
		title: "AI in delivery: where it's amazing, where it's risky. Lessons from the ground",
		event: 'PM Footprints',
		organizer: 'PMI Bangalore Chapter',
		date: '2026-10-10',
		location: 'Bengaluru, India',
		venue: 'Radisson Blu, Outer Ring Road',
		url: 'https://www.pmibangalorechapter.in/special-programs/pm-footprints',
		description:
			'A talk for project and program managers on where AI helps delivery work and where it adds risk.',
		featured: true,
	},
	{
		title: 'ICAISE 2026',
		event: '5th International Conference on Artificial Intelligence and Software Engineering',
		date: '2026-08-21',
		endDate: '2026-08-23',
		location: 'Tokyo, Japan',
		venue: 'The University of Electro-Communications',
		url: 'https://www.icaise.org/',
		description: 'Spoke on AI in software engineering at the 5th International Conference on Artificial Intelligence and Software Engineering.',
		featured: true,
	},
	{
		title: 'WTH is quantum computing!!!',
		event: 'Tech Coach Circle',
		description: 'An introductory talk on quantum computing.',
		featured: true,
	},
	{ title: 'Agile India 2022', event: 'Agile India', date: '2022' },
	{ title: 'Agile India 2021', event: 'Agile India', date: '2021' },
	{ title: 'Agile India 2020', event: 'Agile India', date: '2020' },
	{ title: 'Regional Scrum Gathering Hyderabad 2020', event: 'Regional Scrum Gathering', date: '2020', location: 'Hyderabad, India' },
	{ title: 'XP 2019', event: 'XP 2019', date: '2019', location: 'Montreal, Canada' },
	{ title: 'World DevOps Summit 2019', event: 'World DevOps Summit', date: '2019' },
	{ title: 'Regional Scrum Gathering 2019', event: 'Regional Scrum Gathering', date: '2019' },
	{ title: 'Agile NCR 2019', event: 'Agile NCR', date: '2019' },
	{ title: 'NextGen DevOps Conference', event: 'NextGen DevOps Conference', location: 'Bengaluru, India' },
];

export const credentials = [
	{ name: 'SAFe Program Consultant', short: 'SPC', issuer: 'Scaled Agile' },
	{ name: 'ICAgile Certified Professional in Agile Coaching', short: 'ICP-ACC', issuer: 'ICAgile' },
	{ name: 'Certified ScrumMaster', short: 'CSM', issuer: 'Scrum Alliance' },
	{ name: 'Professional Scrum Master I', short: 'PSM I', issuer: 'Scrum.org' },
	{ name: 'SAFe Agilist', short: 'SA', issuer: 'Scaled Agile' },
	{ name: 'Management 3.0', short: 'M3.0', issuer: 'Management 3.0' },
];

export const coreSkills = [
	'Stakeholder management',
	'Program management',
	'People management',
	'Hands-on technical agility',
	'Servant leadership',
	'Team and leadership coaching',
	'Training and mentoring',
];

export const tools = [
	'Jira',
	'Miro',
	'Google Cloud',
	'GitHub Copilot',
	'Docker',
	'Jenkins',
	'n8n',
	'Power Automate',
	'Selenium',
	'JavaScript',
	'React',
	'Spring Boot',
	'Python',
	'BDD',
	'CI/CD',
];

export type LinkItem = { title: string; description: string; href: string };

export const writings: LinkItem[] = [
	{
		title: 'Are your engineering teams slowing down despite using AI?',
		description: 'Whether AI adoption is improving engineering productivity or creating new bottlenecks.',
		href: 'https://substack.com/@kirankashyap608058/p-200991497',
	},
	{
		title: 'The 1978 prophecy: why Dijkstra would have deleted your AI prompts',
		description: "Edsger Dijkstra's principles read against modern prompt engineering, with an attempt to fix it.",
		href: 'https://substack.com/@kirankashyap608058/p-195897717',
	},
	{
		title: 'The writer who shaped my path: a tribute to S.L. Bhyrappa',
		description: 'A personal tribute to the Kannada novelist.',
		href: 'https://substack.com/@kirankashyap608058/p-175049850',
	},
	{
		title: 'Crafting a true pull system using a Kanban board',
		description: 'How to set up a Kanban board so work is pulled, not pushed.',
		href: 'https://medium.com/@kiran.kashyap.ds/crafting-a-true-pull-system-using-kanban-board-7775d87b82b8',
	},
	{
		title: 'Pick a question: a remote retrospective',
		description: 'A retrospective format for remote teams.',
		href: 'https://medium.com/@kiran.kashyap.ds/pick-a-question-a-remote-retrospective-a7c1e2f0b30a',
	},
	{
		title: 'The happiness curve retrospective for distributed teams',
		description: 'A retrospective format built around how the sprint felt.',
		href: 'https://medium.com/@kiran.kashyap.ds/the-happiness-curve-retrospective-for-distributed-teams-f8cdc8987805',
	},
	{
		title: 'Scrum Master interview questions (advanced)',
		description: 'Harder questions for hiring an experienced Scrum Master.',
		href: 'https://medium.com/@kiran.kashyap.ds/scrum-master-interview-questions-advanced-14c574282aef',
	},
	{
		title: 'How to be a despicable Scrum Master?',
		description: 'Scrum Master anti-patterns, written as satire.',
		href: 'https://medium.com/@kiran.kashyap.ds/how-to-be-a-despicable-scrum-master-b42de25b6661',
	},
];

export const contributions: LinkItem[] = [
	{
		title: 'github/copilot-sdk',
		description: 'Added per-language custom instruction links to the FAQ.',
		href: 'https://github.com/github/copilot-sdk/pull/740',
	},
	{
		title: 'stryker-mutator/stryker-js',
		description: "Added a '% score of covered' column to the clear-text mutation testing report.",
		href: 'https://github.com/stryker-mutator/stryker-js/pull/4945',
	},
	{
		title: 'ampyard/Llaboratory',
		description: 'Implemented the tool-calls history UI and API.',
		href: 'https://github.com/ampyard/Llaboratory/pull/28',
	},
	{
		title: 'ampyard/spec-tracer',
		description: 'Made module name matching case-insensitive.',
		href: 'https://github.com/ampyard/spec-tracer/pull/17',
	},
];

/**
 * Standalone pages hosted on this domain. Most are separate repos with GitHub
 * Pages turned on; /kathopanishad lives in public/ of this repo. Listed in the
 * sitemap and llms.txt but not on the home page.
 */
export const projects: LinkItem[] = [
	{
		title: 'Nachiketa talks with Yama',
		description:
			'The story of Nachiketa from the Katha Upanishad, told simply as an illustrated conversation between the boy and Yama.',
		href: `${SITE_URL}/kathopanishad/`,
	},
	{
		title: 'momonaku: Tokyo Lines',
		description: "A 10-question memory game about Tokyo's train system. Unofficial and fan-made.",
		href: `${SITE_URL}/momonaku/`,
	},
	{
		title: 'India personal inflation calculator',
		description:
			'Works out your personal inflation rate in India from your own spending, for rural or urban households.',
		href: `${SITE_URL}/calculate-your-inflation-india/`,
	},
	{
		title: 'Pick a question retrospective',
		description: 'The tool for running the remote "pick a question" retrospective format.',
		href: `${SITE_URL}/pick-a-question-retro/`,
	},
];

// ---------------------------------------------------------------------------
// Formatting helpers shared by pages and machine-readable endpoints.

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2024-02" -> "Feb 2024"; "2026-10-10" -> "10 Oct 2026"; "2019" -> "2019". */
export function formatDate(value?: string): string {
	if (!value) return '';
	const [y, m, d] = value.split('-');
	if (!m) return y;
	const month = MONTHS[Number(m) - 1];
	return d ? `${Number(d)} ${month} ${y}` : `${month} ${y}`;
}

export function formatRange(start: string, end?: string): string {
	return `${formatDate(start)} – ${end ? formatDate(end) : 'Present'}`;
}

export function talkYear(talk: Talk): string {
	return talk.date ? talk.date.slice(0, 4) : '';
}
