
const loginKey = 'login-key'

const login = function () {
  localStorage.setItem(loginKey, Math.ceil(Math.random() * 100000000))
}

const isLogin = function () {
  return localStorage.getItem(loginKey)
}

const logout = function () {
  localStorage.removeItem(loginKey)
}

export {
  login,
  isLogin,
  logout
}
