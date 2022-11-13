//this file is used in way1 (using rgb)-if we want to use the hex property we don't need this file
function componentToHex(c) {
  var hex = c.toString(16);   //return c to the hexadecimal
  return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbToHex;
