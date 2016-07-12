'use strict';

module.exports = {
    extends: './index.js',
    env: { es6: true },
    rules: {
        // ES6
        'arrow-body-style': 0,
        'arrow-parens': 1,
        'arrow-spacing': [1, { before: true, after: true }],
        'constructor-super': 2,
        'generator-star-spacing': [1, { before: true, after: false }],
        'no-class-assign': 2,
        'no-confusing-arrow': 2,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-duplicate-imports': 2,
        'no-new-symbol': 2,
        'no-this-before-super': 2,
        'no-useless-constructor': 1,
        'no-var': 1,
        'object-shorthand': [1, 'always'],
        'prefer-arrow-callback': 1,
        'prefer-const': 1,
        'prefer-spread': 1,
        'prefer-reflect': 1,
        'prefer-rest-params': 1,
        'prefer-template': 1,
        'require-yield': 0,
        'template-curly-spacing': [1, 'never'],
        'yield-star-spacing': 1,
    }
};
