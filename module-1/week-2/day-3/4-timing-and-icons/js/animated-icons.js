// https://jsdoc.app/
// https://www.npmjs.com/package/jsdoc

/**
 * Pseudo animate a HTMLElement object with setInterval, unicodes and innerHTML updates
 *
 * @author Guillaume Amg <guillaume.amangoua@gmail.com>
 * @param {object} target a HTMLElement object to write the icon in
 * @param {string[]} unicodes an array of string containg font-awesome icons unicodes
 * @param {number} interval an integer indicating the interval, expressed in milliseconds
 * @returns {number} the interval's id
 * @throws {TypeError} if target is not a valid HTML object
 * @throws {TypeError} if interval is not a number
 * @version 1.0.0
 */
export function animateFaIcons(target, unicodes, interval = 1000) {
  var index = 0;

  if (!(target instanceof HTMLElement))
    throw new TypeError("target must be a HTMLElement object");

  if (isNaN(interval)) throw new TypeError("interval must a number");

  target.innerHTML = "&#x" + unicodes[index] + ";";

  return setInterval(() => {
    index = index + 1 < unicodes.length ? index + 1 : 0;
    target.innerHTML = "&#x" + unicodes[index] + ";";
  }, interval);
}

export const universalAnswer = 42;
