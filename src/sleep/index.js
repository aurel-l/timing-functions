// @flow
import required from '../utils/required';

export default (time/* : number */ = required('time')) => new Promise(
  resolve => setTimeout(resolve, time)
);
