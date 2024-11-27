/**
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    const length = s.length - 1;

    let i;
    for (i = length; i >= 0; i--) {
      if (s.charAt(i) === " ") {
        break;
      }
    }

    //paso#4
    return length - i;
};