// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: "https://black-trooper.github.io",
	base: "/Mokulate/",
	integrations: [
		starlight({
			plugins: [
				starlightThemeRapide(),
			],
			title: 'Mokulate',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/black-trooper/Mokulate' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/black_trooper' },
			],
			sidebar: [
				{
					label: 'ビルドガイド',
					autogenerate: { directory: 'build-guide' },
				},
			],
			customCss: ['./src/styles/global.css'],
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://black-trooper.github.io/Mokulate/og-image.jpg',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:title',
						content: 'Mokulate',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:description',
						content: 'Mokulateは木製削り出しケースの美しさと、快適なタイピングを追求した無線分割キーボードです。',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:image',
						content: 'https://black-trooper.github.io/Mokulate/og-image.jpg',
					},
				},
			],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
