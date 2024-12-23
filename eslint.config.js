import antfu from '@antfu/eslint-config'

export default antfu({
    stylistic: {
        indent: 4, // 4, or 'tab'
        quotes: 'single', // or 'double'
    },

    react: true,
    typescript: true,
    vue: false,
    astro: true,
    markdown: false,

    rules: {
        'no-console': 'off',
        'curly': ['error', 'all'],
        'node/prefer-global/process': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
        "operator-linebreak": ["error", "after"],
        "brace-style": ["error", "stroustrup"],
        "jsx-indent-props": ["error", 2]  
    },

    jsonc: false,
    yaml: false,
})
