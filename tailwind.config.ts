import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			zIndex: {
				60: '60',
				70: '70',
				80: '80',
				90: '90',
				100: '100',
			},
			fontSize: {
				xxs: '0.65rem',
			},
			fontFamily: {
				sans: ['Open Sans', 'sans-serif'],
			},
			colors: {
				'custom-gray': {
					100: '#f0f0f0',
					200: '#ebebeb',
					300: '#dddddd',
					400: '#bfbfbf',
					500: '#a3a3a3',
				},
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: '#00af6c',
				regular: 'rgba(25,27,38,.88)',
				bold: '#000',
				light: 'rgba(25,27,38,.64)',
				'white-opacity-30': '#ffffff29',
			},
			width: {
				'2px': '2px',
				30: '30rem',
				33: '33rem',
				37: '37rem',
				40: '40rem',
				50: '50rem',
			},
			maxWidth: {
        '72': '72rem',
        '90': '90rem',
        'content': '65ch',
      },
		},
		screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1732px",
      // => @media (min-width: 1732px) { ... }
    },
	},
	plugins: [],
} satisfies Config;
