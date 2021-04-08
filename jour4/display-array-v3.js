export default (tab, option) =>
  option !== true
    ? tab.join(" ")
    : `${tab.slice(0, -1).join(", ")} et ${tab.slice(-1)}`;
