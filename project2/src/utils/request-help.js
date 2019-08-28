const Cookies = require('js-cookie')

export function getCookie (name, option) {
  return Cookies.get(name, option) || null
}
export function clearCookie (name, option) {
  return Cookies.remove(name, option) || null
}
