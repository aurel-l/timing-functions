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
  // IdleDeadline stub
  const idleDeadline = Object.freeze({
    didTimeout: true,
    timeRemaining () { return Infinity },
  });
  // Does not support requestIdleCallback
  schedule = (maxTimeout/* : ?number */) => (
    sleep((maxTimeout || 0) / 2).then(() => idleDeadline)
  );
  if (env === 'browser' && 'requestAnimationFrame' in window) {
    // But does support requestAnimationFrame
    const _schedule = schedule;
    schedule = () => _schedule().then(frame).then(() => idleDeadline);
  }
}

export default schedule;
