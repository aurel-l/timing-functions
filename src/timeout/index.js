// @flow
import required from 'utils/required';
import sleep from 'sleep';

export default (
  timeout/* : number */ = required('timeout'),
  promise/* : Promise<any> */ = required('promise'),
  message/* : ?string */
) => Promise.race([
  promise,
  sleep(timeout)
    .then(() => new Error(message || `timed out after ${timeout}ms`)),
]);
