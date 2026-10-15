import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_URL, projects } from '../data/profile';

export const GET: APIRoute = async () => {
	const today = new Date().toISOString().slice(0, 10);
	const books = await getCollection('books');
	const urls = [
		{ loc: `${SITE_URL}/`, priority: '1.0' },
		...books.map((b) => ({ loc: `${SITE_URL}/books/${b.id}/`, priority: '0.7' })),
		...projects.map((p) => ({ loc: p.href, priority: '0.5' })),
		{ loc: `${SITE_URL}/llms.txt`, priority: '0.3' },
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>
`;
	return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
