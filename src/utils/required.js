// @flow
export default (paramName/* : string */) => {
  throw new Error(`Parameter '${paramName}' is required`);
};
