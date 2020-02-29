'use strict'
const store = require('./../store')
const commonUi = require('./../commonUi')

const gotoSignUpScreen = () => {
  commonUi.hideScreens()
  $('#sign-up-form').trigger('reset')
  commonUi.showScreen('#sign-up-form')
}

const gotoSignInScreen = () => {
  commonUi.hideScreens()
  $('#sign-in-form').trigger('reset')
  commonUi.showScreen('#sign-in-form')
}

const gotoChangePasswordScreen = () => {
  commonUi.hideScreens()
  commonUi.hideMessage()
  $('#buttons-when-signed-in').hide()
  $('#change-password-form').trigger('reset')
  commonUi.showScreen('#change-password-form')
}

const onSignUpSuccess = function (response) {
  $('#sign-up-form').hide()
  $('#sign-up-form').trigger('reset')
}

const onSignUpFail = function (response) {
  commonUi.showError('Sign up failed', response)
  $('#sign-up-form').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#buttons-when-signed-out').hide()
  commonUi.hideScreens()
  commonUi.showScreen('#buttons-when-signed-in')
  $('#sign-in-form').trigger('reset')
}

const onSignInFail = function (response) {
  commonUi.showError('Sign in failed', response)
}

const onChangePwSuccess = function (response) {
  $('#change-password-form').trigger('reset')
  $('#change-password-form').hide()
  commonUi.hideScreens()
  commonUi.showMessage('Successfully changed password')
  commonUi.showScreen('#buttons-when-signed-in')
  commonUi.showScreen('#main-div')
}

const onChangePwFail = function (response) {
  commonUi.showError('Change pw failed', response)
}

const onSignOutSuccess = function (response) {
  commonUi.hideScreens()
  commonUi.showMessage('Successfully signed out')
  $('#buttons-when-signed-in').hide()
  $('#h1').show()
  commonUi.showScreen('#buttons-when-signed-out')
}

const onSignOutFail = function (response) {
  commonUi.showError('failed to sign out', response)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFail,
  onSignInSuccess,
  onSignInFail,
  onChangePwFail,
  onChangePwSuccess,
  onSignOutSuccess,
  onSignOutFail,
  gotoSignInScreen,
  gotoSignUpScreen,
  gotoChangePasswordScreen
}
