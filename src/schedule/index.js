// @flow
import env from '../utils/env';
import sleep from '../sleep';
import frame from '../frame';

let schedule;

if (env === 'browser' && 'requestIdleCallback' in window) {
  schedule = (maxTimeout/* : ?number */) => new Promise(
    resolve => window.requestIdleCallback(resolve, {timeout: maxTimeout})
  );
} else {
  // Does not support requestIdleCallback
  // IdleDeadline stub
  const idleDeadline = Object.freeze({
    didTimeout: true,
    timeRemaining () { return Infinity },
  });
  schedule = (maxTimeout/* : ?number */) => (
    sleep((maxTimeout || 0) / 2).then(frame).then(() => idleDeadline)
  );
}

export default schedule;
