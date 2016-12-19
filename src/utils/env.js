// @flow

let env = 'node';
if (typeof importScripts !== 'undefined') {
  env = 'worker';
} else if (typeof window !== 'undefined') {
  env = 'browser';
}

export default env;
