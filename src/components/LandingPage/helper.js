export const filterMarkDown = (filter, markdowns) => {
  return markdowns.filter(
    (markdown) => getFilePathSubstring(markdown.parent.dir) === filter
  );
};

export const getFilePathSubstring = (dirString) => {
  return (
    dirString.substring(dirString.lastIndexOf("/") + 1, dirString.length) ||
    dirString
  );
};
