/** @type {import("eslint").Linter.Config} */
const config = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: true,
	},
	plugins: ["@typescript-eslint", "drizzle"],
	extends: [
		"next/core-web-vitals",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:@typescript-eslint/stylistic-type-checked",
		"next",
		"prettier",
		"plugin:tailwindcss/recommended",
	],
	ignorePatterns: ["/src/components/ui/*.tsx"],
	rules: {
		"@typescript-eslint/array-type": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/consistent-type-definitions": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/consistent-type-imports": [
			"warn",
			{
				prefer: "type-imports",
				fixStyle: "inline-type-imports",
			},
		],
		"@typescript-eslint/no-non-null-asserted-optional-chain": "off",
		"@typescript-eslint/no-unused-vars": [
			"off",
			{
				argsIgnorePattern: "^_",
			},
		],
		"@typescript-eslint/require-await": "off",
		"prefer-const": "off",
		"@typescript-eslint/no-misused-promises": [
			"error",
			{
				checksVoidReturn: {
					attributes: false,
				},
			},
		],
		"drizzle/enforce-delete-with-where": [
			"error",
			{
				drizzleObjectName: ["db", "ctx.db"],
			},
		],
		"drizzle/enforce-update-with-where": [
			"error",
			{
				drizzleObjectName: ["db", "ctx.db"],
			},
		],
	},
	// https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/README.md
	// https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-custom-classname.md#whitelist-default-
	settings: {
		tailwindcss: {
			whitelist: ["^_.*"],
		},
	},
}
module.exports = config
