import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

// Importación de plugins como objetos (requerido por Flat Config)
import prettier from 'eslint-plugin-prettier';
import filenames from 'eslint-plugin-filenames';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: {
		extends: [],
	},
});

const eslintConfig = [
	...compat.extends(
		'eslint:recommended',
		'next/core-web-vitals',
		'next',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:prettier/recommended'
	),
	{
		plugins: {
			prettier,
			filenames,
			import: importPlugin,
			'jsx-a11y': jsxA11y,
			'react-hooks': reactHooks,
		},
		rules: {
			// Prettier
			'prettier/prettier': 'error',

			// Convención de nombres de archivo
			'filenames/match-regex': '^[a-z]+(-[a-z]+)*$',

			// Buenas prácticas generales
			'no-console': 'warn',
			'prefer-const': 'warn',
			eqeqeq: ['error', 'always'],

			// TypeScript
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_' },
			],
			'@typescript-eslint/explicit-function-return-type': 'off',

			// React
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/self-closing-comp': 'warn',
			'react/jsx-boolean-value': ['error', 'never'],
			'react/jsx-no-useless-fragment': 'warn',
			'react/jsx-pascal-case': ['warn', { allowAllCaps: true }],

			// Hooks
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',

			// Accesibilidad
			'jsx-a11y/alt-text': 'warn',
			'jsx-a11y/anchor-is-valid': 'warn',

			// Import ordenado
			'import/order': [
				'warn',
				{
					groups: [
						'builtin',
						'external',
						'internal',
						'parent',
						'sibling',
						'index',
					],
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
				},
			],
		},
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];

export default eslintConfig;
