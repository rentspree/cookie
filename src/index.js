import Cookies from "universal-cookie"
import merge from "lodash.merge"

let options = {}
const cookies = new Cookies()

/**
 * Set options for the next cookies that will be stored.
 *
 * @export
 * @param {Object} [options={}]
 */
export function setOption(op = {}) {
  options = merge(options, op)
}

/**
 *  Add a listener to when a cookie is set or removed.
 *
 * @export
 * @param {function} callback
 */
export function addChangeListener(callback) {
  cookies.addChangeListener(callback)
}

/**
 * Remove a listener from the change callback.
 *
 * @export
 * @param {function} callback
 */
export function removeChangeListener(callback) {
  cookies.removeChangeListener(callback)
}

/**
 * Set a cookie value.
 *
 * @export
 * @param {string} localStorageName Cookie's name
 * @param {string, Object} data Cookie's value
 */
export function setLocalItem(localStorageName, data) {
  // SAVE TO COOKIE
  cookies.set(localStorageName, data, options)
}

/**
 * Get a cookie value.
 *
 * @export
 * @param {string} localStorageName Cookie's name
 * @param {Object} [options={}] Cookie's options
 * @returns Return cookie or false if cookie is not found.
 */
export function getLocalItem(localStorageName, op = {}) {
  // GET ITEM FROM LOCAL STORAGE
  const cookie = cookies.get(localStorageName, op)
  if (cookie) {
    return cookie
  } else {
    return false
  }
}

/**
 * Get all cookies.
 *
 * @export
 * @param {Object} [options={}]
 * @returns Return all cookies.
 */
export function getAllLocalItem(op = {}) {
  return cookies.getAll(op)
}

/**
 * Remove a cookie.
 *
 * @export
 * @param {string} localStorageName Cookie's name
 * @param {Object} [options={}] Cookie's options
 */
export function removeLocalItem(localStorageName) {
  // REMOVE ITEM FROM COOKIE
  cookies.remove(localStorageName, options)
}

/**
 * Remove all cookies.
 *
 * @export
 * @param {string} prefix Prefix of the cookie's name to remove
 */
export function removeAllLocalItem(prefix) {
  const storageName = cookies.getAll()
  Object.keys(storageName).forEach(function (key) {
    const regex = new RegExp("^" + prefix + ".*", 'i')
    if (regex.test(key)) {
      removeLocalItem(key)
    }
  })
}
