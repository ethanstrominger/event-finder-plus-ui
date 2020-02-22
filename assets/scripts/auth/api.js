'use strict'
const commonApi = require('./../commonApi')

const signUp = (data) => commonApi.ajaxCall('POST', 'sign-up', data)
const signIn = (data) => commonApi.ajaxCall('POST', 'sign-in', data)
const signOut = () => commonApi.ajaxCall('DELETE', 'sign-out', undefined, true)
const changePw = (data) => commonApi.ajaxCall('PATCH', 'change-password', data, true)

module.exports = {
  signUp,
  signIn,
  changePw,
  signOut
}
