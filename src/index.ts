import { Linter } from 'eslint'

const config: Linter.Config = {
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	ignorePatterns: ['node_modules', 'dist'],
	overrides: [
		{
			files: '*.ts',
			extends: ['plugin:unicorn/recommended'],
		},
		{
			files: '*.cjs',
			env: {
				node: true,
			},
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
}

export default config
