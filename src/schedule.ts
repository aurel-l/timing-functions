import env from './utils/env';
import sleep from './sleep';
import frame from './frame';

export interface IdleDeadline {
  didTimeout: boolean;
  timeRemaining: () => number;
}

type IdleCallbackHandle = number;

declare global {
  interface Window {
    requestIdleCallback: (
      callback: () => unknown,
      options?: { timeout?: number }
    ) => IdleCallbackHandle;
    cancelIdleCallback: (handle: IdleCallbackHandle) => void;
  }
}

let schedule: (maxTimeout?: number) => Promise<IdleDeadline>;

if (env === 'browser' && 'requestIdleCallback' in window) {
  schedule = (maxTimeout?: number): Promise<IdleDeadline> =>
    new Promise((resolve) =>
      window.requestIdleCallback(resolve, { timeout: maxTimeout })
    );
} else {
  // IdleDeadline stub
  const idleDeadline: IdleDeadline = Object.freeze({
    didTimeout: true,
    timeRemaining() {
      return Infinity;
    },
  });
  // Does not support requestIdleCallback
  schedule = (maxTimeout?: number): Promise<IdleDeadline> =>
    sleep((maxTimeout || 0) / 2).then(() => idleDeadline);
  if (env === 'browser' && 'requestAnimationFrame' in window) {
    // But does support requestAnimationFrame
    const _schedule = schedule;
    schedule = (): Promise<IdleDeadline> =>
      _schedule()
        .then(frame)
        .then(() => idleDeadline);
  }
}

export default schedule;
