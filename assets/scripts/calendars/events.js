'use strict'
// const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const commonUi = require('../commonUi')
const getFormFields = require('./../../../lib/get-form-fields')

const onGetIndex = (event) => {
  event.preventDefault()
  api.getCalendars()
    .then(ui.onGetIndexCalendarsSuccess)
    .catch(ui.onGetIndexCalendarsFail)
}

const onCreate = (event) => {
  event.preventDefault()
  const form = event.target.closest('form')
  const formData = getFormFields(form)
  api.createCalendar(formData)
    .then(function () {
      const name = formData.calendar.name
      commonUi.showMessage(
        `Calendar ${name} created.  Enter a new calendar or press back.`)
      $('#new-calendar-form').trigger('reset')
    })
    .catch(ui.onCreateCalendarFail)
}

const onDelete = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteCalendar(id)
    .then(function () {
      return onGetIndex(event)
    })
    .then(function () {
      commonUi.showMessage('Calendar deleted')
    })
    .catch(ui.onDeleteCalendarsFail)
}

const onUpdate = (event) => {
  // event.preventDefault()
  event.preventDefault()
  const form = event.target.closest('form')
  const formData = getFormFields(form)
  api.updateCalendar(formData)
    .then(function () {
      return onGetIndex(event)
    })
    .then(function () {
      commonUi.showMessage('Calendar updated')
    })
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
