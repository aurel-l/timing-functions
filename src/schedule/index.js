// @flow
import env from 'utils/env';
import sleep from 'sleep';
import frame from 'frame';

let schedule;

if (env === 'browser' && 'requestIdleCallback' in window) {
  schedule = (maxTimeout/* : ?number */) => new Promise(
    resolve => window.requestIdleCallback(resolve, {timeout: maxTimeout})
  );
} else {
  // Does not support requestIdleCallback
  schedule = (maxTimeout/* : ?number */) => sleep((maxTimeout || 0) / 2);
  if (sleep !== frame) {
    // But does support requestAnimationFrame
    schedule = schedule.then(frame);
  }
}

export default schedule;
