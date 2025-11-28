// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				starlightThemeRapide(),
			],
			title: 'Mokulate',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/black-trooper/zmk-config-Mokulate' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/black_trooper' },
			],
			sidebar: [
				{
					label: 'ビルドガイド',
					autogenerate: { directory: 'build-guide' },
				},
			],
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
