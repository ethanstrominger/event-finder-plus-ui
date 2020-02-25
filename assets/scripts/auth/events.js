'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const calendarUi = require('../calendars/ui')
// const calendarApi = require('../calendars/api')
const calendarEvents = require('../calendars/events')

const onClickSignUp = (event) => {
  ui.gotoSignUpScreen()
}

const onClickSignIn = (event) => {
  ui.gotoSignInScreen()
}

const onClickChangePassword = (event) => {
  ui.gotoChangePasswordScreen()
}
// aa
const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  const signupData = getFormFields(form)

  api.signUp(signupData)
    .then(function () {
      signinUsingFormData(signupData)
        .then(ui.onSignInSuccess)
    })
    .then(
      $('#sign-up-form').trigger('reset')
    )
    .then(function () {
      calendarEvents.onGetIndex(event)
    })
    .catch(ui.onSignUpFail)
}

const signinUsingFormData = (formData) => {
  const email = formData.credentials.email
  const password = formData.credentials.password
  const signinData = {credentials: {email: email, password: password}}
  return api.signIn(signinData)
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const email = formData.credentials.email
  const password = formData.credentials.password
  const signinData = {credentials: {email: email, password: password}}
  signinUsingFormData(signinData)
    .then(ui.onSignInSuccess)
    .then(function () {
      calendarEvents.onGetIndex(event)
    })
    .catch(ui.onSignInFail)
}

const onChangePw = (event) => {
  event.preventDefault()
  const form = event.target
  const signInData = getFormFields(form)
  api.changePw(signInData)
    .then(ui.onChangePwSuccess)
    .catch(ui.onChangePwFail)
}

const onClickSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onClickSignOut,
  onClickSignIn,
  onClickSignUp,
  onClickChangePassword
}
