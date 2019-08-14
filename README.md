# chained-error

[![npm](https://img.shields.io/npm/v/chained-error.svg)](http://npm.im/chained-error)
[![minified size](https://badgen.net/bundlephobia/min/chained-error)](https://bundlephobia.com/result?p=chained-error)
[![minified & gziped size](https://badgen.net/bundlephobia/minzip/chained-error)](https://bundlephobia.com/result?p=chained-error)

Zero dependencies error that allows creating a chain of errors, preserving the original cause (with TypeScript support)

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save chained-error
```

## Basic usage

```js
import ChainedError from 'chained-error';

// ...
try {
    // ...
} catch (error) {
    throw new ChainedError('My message', error);
}
```

Later, when you catch the error, and you print it, you will see something like it:

```
ChainedError: My message
    at ...
    at ...
    at ...
Caused By: TheOtherErrorType: The other error message
    at ...
    at ...
    at ...
```

## Type definition

```ts
export default class ChainedError extends Error {
    cause: any;
    constructor(messageOrCause: any);
    constructor(message: string, cause: any);
}
```

## License

MIT

<!--
Edited with: https://stackedit.io/app
-->