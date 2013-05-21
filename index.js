
/**
 * Export `hms`.
 */

module.exports = hms;

/**
 * Get an array / object of `h, m, s` from `ms`.
 *
 * Example:
 *
 *      var ret = hms(2400000);
 *      ret;
 *      // > { h: 0, m: 40, s: 0 }
 *      ret[0];
 *      // > 0
 *      ret[1];
 *      // > 40
 *      ret[0];
 *      // > 0
 *      ret.join(':');
 *      // > 0:40:0
 *      ret.map(function(n){ return 10 > n ? '0' + n : n }).join(':');
 *      // > 00:40:00
 *
 * @param {Number} ms
 * @return {Array}
 */

function hms(ms){
  var ret = [];
  ret.push(ret.h = ms / 36e5 | 0);
  ret.push(ret.m = ((ms % 36e5) / 6e4) | 0);
  ret.push(ret.s = ((ms % 6e4) / 1000) | 0);
  return ret;
}
