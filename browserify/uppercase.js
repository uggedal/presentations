module.exports = function (str) {
  return str.replace(
    /(?:^|\s|-)\S/g,
    function (c) {
      return c.toUpperCase();
    }
  );
};
