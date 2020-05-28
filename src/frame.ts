import env from './utils/env';
import sleep from './sleep';

let frame = () => sleep(0);

if (env === 'browser' && 'requestAnimationFrame' in window) {
  frame = () =>
    new Promise((resolve) => window.requestAnimationFrame(() => resolve()));
}

export default frame;
