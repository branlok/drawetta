module.exports = function drawetta(string) {
    if (typeof string !== "string") throw new TypeError("Drawetta wants a string!");
    return string.replace(/\s/g, "");
};
