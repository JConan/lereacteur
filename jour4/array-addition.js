export default (tab) =>
  tab.length <= 1
    ? false
    : tab.length === 2
    ? tab[0] === tab[1]
    : tab
        .filter((v) => v < Math.max(...tab))
        .reduce((total, value) => total + value, 0) === Math.max(...tab);
