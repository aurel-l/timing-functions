import sleep from './sleep';

export default (timeout: number, promise: Promise<any>, message?: string) =>
  Promise.race([
    promise,
    sleep(timeout).then(
      () => new Error(message || `timed out after ${timeout}ms`)
    ),
  ]);
