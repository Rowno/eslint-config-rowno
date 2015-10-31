# eslint-config-rowno

[![Build Status](https://api.travis-ci.org/Rowno/eslint-config-rowno.svg?branch=master)](https://travis-ci.org/Rowno/eslint-config-rowno)

Opinionated ESLint config. Focuses on flagging code breaking problems as errors, and bad practices and opinionated styles as warnings.

Contains ES5 and ES6 rule sets.


Usage
-----

Install the package:
```bash
npm install --save-dev eslint-config-rowno
```

Include the ES5 rules:
```yaml
---
root: true
extends: rowno
env:
    node: true
```

Or include the ES6 rules:
```yaml
---
root: true
extends: rowno/es6
env:
    node: true
```


License
-------
eslint-config-rowno is released under the ISC license.

Copyright © 2015, Roland Warmerdam.
