export default (arr, matchingItem) =>
  arr.filter(
    (item) =>
      Object.keys(matchingItem).length &&
      !Object.keys(matchingItem)
        .map((p) => item[p] === matchingItem[p])
        .filter((v) => v === false)
        .includes(false)
  )[0] || null;
