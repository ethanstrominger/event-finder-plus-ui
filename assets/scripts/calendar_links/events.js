'use strict'
// const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onDelete = (event) => {
  event.preventDefault()
  console.log('gotoCalendar List')
}

const onUpdate = (event) => {
  event.preventDefault()
  api.getCalendars()
    .then(ui.ongetCalendarsSuccess)
    .catch(ui.onGetCalendarsFail)
}

// const onSignUp = (event) => {
//   event.preventDefault()
//   const form = event.target
//   const signInData = getFormFields(form)
//   api.signUp(signInData)
//     .then(ui.onSignUpSuccess)
//     .catch(ui.onSignUpFail)
// }

module.exports = {
  onUpdate,
  onDelete
}
