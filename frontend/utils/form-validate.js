function validEmail (email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

function validateEmail (value) {
  if (!validEmail(value)) {
    return 'Please fill in correct form/邮箱格式不正确，请使用正确邮箱格式'
  } else {
    return ''
  }
}

function validateRequiredAndSpace (value) {
  if (!value || value.trim() === '') {
    return 'Please fill/请填写'
  } else {
    return ''
  }
}

export function chectRequiredAndSpace (rule, value, callback) {
  const result = validateRequiredAndSpace(value)
  if (result === '') {
    callback()
  } else {
    callback(new Error(result))
  }
}

export function checkEmail (rule, value, callback) {
  const result = validateEmail(value)
  if (result === '') {
    callback()
  } else {
    callback(new Error(result))
  }
}
