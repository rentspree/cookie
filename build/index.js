"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setOption = setOption;
exports.addChangeListener = addChangeListener;
exports.removeChangeListener = removeChangeListener;
exports.setLocalItem = setLocalItem;
exports.getLocalItem = getLocalItem;
exports.getAllLocalItem = getAllLocalItem;
exports.removeLocalItem = removeLocalItem;
exports.removeAllLocalItem = removeAllLocalItem;

var _universalCookie = require("universal-cookie");

var _universalCookie2 = _interopRequireDefault(_universalCookie);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {};
var cookies = new _universalCookie2.default();

/**
 * Set options for the next cookies that will be stored.
 *
 * @export
 * @param {Object} [options={}]
 */
function setOption() {
  var op = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  options = _lodash2.default.merge(options, op);
}

/**
 *  Add a listener to when a cookie is set or removed.
 *
 * @export
 * @param {function} callback
 */
function addChangeListener(callback) {
  cookies.addChangeListener(callback);
}

/**
 * Remove a listener from the change callback.
 *
 * @export
 * @param {function} callback
 */
function removeChangeListener(callback) {
  cookies.removeChangeListener(callback);
}

/**
 * Set a cookie value.
 *
 * @export
 * @param {string} localStorageName Cookie's name
 * @param {string, Object} data Cookie's value
 */
function setLocalItem(localStorageName, data) {
  // SAVE TO COOKIE
  cookies.set(localStorageName, data, options);
}

/**
 * Get a cookie value.
 *
 * @export
 * @param {string} localStorageName Cookie's name
 * @param {Object} [options={}] Cookie's options
 * @returns Return cookie or false if cookie is not found.
 */
function getLocalItem(localStorageName) {
  var op = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // GET ITEM FROM LOCAL STORAGE
  var cookie = cookies.get(localStorageName, op);
  if (cookie) {
    return cookie;
  } else {
    return false;
  }
}

/**
 * Get all cookies.
 *
 * @export
 * @param {Object} [options={}]
 * @returns Return all cookies.
 */
function getAllLocalItem() {
  var op = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return cookies.getAll(op);
}

/**
 * Remove a cookie.
 *
 * @export
 * @param {string} localStorageName Cookie's name
 * @param {Object} [options={}] Cookie's options
 */
function removeLocalItem(localStorageName) {
  var op = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // REMOVE ITEM FROM COOKIE
  var sentOptions = _lodash2.default.merge({
    path: "/"
  }, op);
  cookies.remove(localStorageName, sentOptions);
}

/**
 * Remove all cookies.
 *
 * @export
 * @param {string} prefix Prefix of the cookie's name to remove
 */
function removeAllLocalItem(prefix) {
  var storageName = cookies.getAll();
  Object.keys(storageName).forEach(function (key) {
    var regex = new RegExp("^" + prefix + ".*", 'i');
    if (regex.test(key)) {
      removeLocalItem(key);
    }
  });
}
//# sourceMappingURL=index.js.map