export default (obj, pickPropArr) =>
  Object.keys(obj)
    .filter((p) => pickPropArr.includes(p))
    .map((p) => ({ [p]: obj[p] }))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {});
