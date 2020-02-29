'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const commonUi = require('../commonUi')
// const calendarUi = require('../calendars/ui')
// const calendarApi = require('../calendars/api')
// TODO: Change onSignUp, etc to onSubmitSignUp
const calendarEvents = require('../calendars/events')
const calendarUi = require('../calendars/ui')

const _emailAndPasswordFromFormData = (formData) => {
  const retVal =
    {credentials:
      { email: formData.credentials.email,
        password: formData.credentials.password
      }
    }
  return retVal
}

const _signinUsingFormData = (formData) => {
  // Defining emailAndPassword as formData may include extra fields
  const emailAndPassword = _emailAndPasswordFromFormData(formData)
  return api.signIn(emailAndPassword)
}

const onClickSignUp = (event) => {
  ui.gotoSignUpScreen()
}

const onClickSignIn = (event) => {
  ui.gotoSignInScreen()
}

const onClickChangePassword = (event) => {
  ui.gotoChangePasswordScreen()
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  _signinUsingFormData(formData)
    .then(ui.onSignInSuccess)
    .then(function () {
      calendarEvents.onGetIndex(event)
    })
    .catch(ui.onSignInFail)
}

// ****** onSignUp method ******
const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .then(function () {
      return _signinUsingFormData(formData)
    })
    .then(ui.onSignInSuccess)
    .then(function () {
      calendarUi.showCalendarsList({calendar: []})
    })
    .catch(ui.onSignUpFail) // TODO: Raise exception on this and all fails
}

const onChangePw = (event) => {
  event.preventDefault()
  const form = event.target
  const signInData = getFormFields(form)
  api.changePw(signInData)
    .then(function () {
      return calendarEvents.onGetIndex(event)
    })
    // TODO: Move all showMessages to ui - below is onChangePwSuccess
    .then(function () {
      commonUi.showMessage('Password changed')
    })
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
