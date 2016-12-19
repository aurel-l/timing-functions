[![Build Status](https://travis-ci.org/aurel-l/timing-functions.svg?branch=master)](https://travis-ci.org/aurel-l/timing-functions)

Timing functions
=======================

_in development_

Small functions that can be used to handle timing in async functions in
JavaScript.

**Note**:
 - Assumes support for at least es2015 (needs `Promise` and arrow functions).
Please transpile and/or add polyfills when appropriate.
 - The timing will *never* be precise as it depends on functions like setTimeout
that do not provide precise timing.
 - Keep in mind that these functions are never blocking.

## Usage
These functions are meant to be used within async functions (es2017).

They can be used inside the browser (main thread and worker) or NodeJs.

### Examples
```js
import {sleep} from 'timing-functions';

async function message() {
  console.log('it\' gonna be legend...');
  await sleep(200);// Waits for approximately 200ms
  console.log('...wait for it...');
  await sleep(1000);// Waits for approximately 1s
  console.log('...dary!');
}
message();
```

## API

### `sleep`
Waits for approximately the number of ms provided.

#### Parameters

|name|default value|accepted values|information|required|
|----|-------------|---------------|-----------|--------|
|`time`|none|number|time to wait in ms|yes|

### `frame`
Waits for the next animationFrame.

#### Parameters

none

### `schedule`
Tries to wait for an idle time.

#### Parameters

|name|default value|accepted values|information|required|
|----|-------------|---------------|-----------|--------|
|`maxTimeout`|none|number|maximum time to wait in before continuing|no|

### `timeout`
Provides a way to timeout a `Promise`. If the `Promise` you passed takes longer
than the timout to resolve, it will reject.

#### Parameters

|name|default value|accepted values|information|required|
|----|-------------|---------------|-----------|--------|
|`timeout`|none|number|time to wait in ms before timing out|yes|
|`promise`|none|Promise|`Promise` that will be wrapped|yes|
|`message`|none|string|message that will be passed when rejecting|no|

