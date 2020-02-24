'use strict'
// const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onGetIndex = (event) => {
  event.preventDefault()
  api.getCalendars()
    .then(ui.onGetCalendarsSuccess)
    .catch(ui.onGetCalendarsFail)
}

const onCreate = (event) => {
  event.preventDefault()
  const form = event.target.closest('form')
  const formData = getFormFields(form)
  api.createCalendar(formData)
    .then(api.getCalendars)
    .then(ui.onGetCalendarsSuccess)
    .catch(ui.onAddCalendarsFail)
}

const onDelete = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteCalendar(id)
    .then(api.getCalendars)
    .then(ui.onGetCalendarsSuccess)
    .catch(ui.onDeleteCalendarsFail)
}

const onUpdate = (event) => {
  // event.preventDefault()
  event.preventDefault()
  const form = event.target.closest('form')
  const formData = getFormFields(form)
  api.updateCalendar(formData)
    .then(api.getCalendars)
    .then(ui.onGetCalendarsSuccess)
    .catch(ui.onGetUpdateFail)
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
  onCreate,
  onUpdate,
  onDelete,
  onGetIndex
}
