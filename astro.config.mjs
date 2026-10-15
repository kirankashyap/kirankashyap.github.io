// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://kirankashyap.github.io',
	trailingSlash: 'ignore',
	// Book pages used to live under /work/.
	redirects: {
		'/work/metrics-for-agile-product-teams': '/books/metrics-for-agile-product-teams/',
		'/work/tdd-for-java-spring-boot-micro-services': '/books/tdd-for-java-spring-boot-micro-services/',
		'/work/test-first-copilot': '/books/test-first-copilot/',
	},
});
