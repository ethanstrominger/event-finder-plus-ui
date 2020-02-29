const commonUi = require('./../commonUi')
const showCalendarsTemplate = require('../templates/calendars.handlebars')
const showCalendarTemplate = require('../templates/calendar.handlebars')
const showNewCalendarTemplate = require('../templates/calendar-new.handlebars')
// const getFormFields = require('./../../../lib/get-form-fields')

const gotoCalendar = (event) => {
  event.preventDefault()
  commonUi.hideMessage()
  const calendarDetail = $(event.target).closest('tr').data('data-obj')
  const showHtml = showCalendarTemplate(calendarDetail)
  commonUi.hideScreens()
  $('#buttons-when-signed-in').hide()
  $('#details-div').show()
  $('#details-div').html(showHtml)
  event.preventDefault()
}

const gotoNewCalendar = (event) => {
  commonUi.hideMessage()
  event.preventDefault()
  const showHtml = showNewCalendarTemplate()
  commonUi.hideScreens()
  $('#buttons-when-signed-in').hide()
  $('#details-div').show()
  $('#details-div').html(showHtml)
}

const backToCalendarsFromForm = (event) => {
  event.preventDefault()
  const form = event.target.closest('form')
  // const values = getFormFields(form)
  commonUi.showScreen('#buttons-when-signed-in')
  $(form).remove()
  commonUi.showScreen('#main-div')
  // $('#main-div').html('<p>Goto calendar list</p>')
}

const backToCalendarsFromChangePassword = (event) => {
  event.preventDefault()
  // const values = getFormFields(form)
  commonUi.showScreen('#buttons-when-signed-in')
  $('#change-password-form').hide()
  commonUi.showScreen('#main-div')
  // $('#main-div').html('<p>Goto calendar list</p>')
}

// called after signing up then signing in
function displayNoCalendars () {
  const data = {calendar: []}
  onGetIndexCalendarsSuccess(data)
}

function onGetIndexCalendarsSuccess (data) {
  showCalendarsList(data)
}

const onGetIndexCalendarsFail = (response) => {
  commonUi.showError('Calendars could not be listed', response)
}

const onDeleteFail = (response) => {
  commonUi.showError('Calendar could not be deleted', response)
}

const onUpdateFail = (response) => {
  commonUi.showError('Calendar could not be updated', response)
}

function showCalendarsList (data) {
  const showHtml = showCalendarsTemplate({
    calendars: data.calendars
  })
  commonUi.hideScreens()
  commonUi.showScreen('#buttons-when-signed-in')
  commonUi.showScreen('#main-div')
  $('#main-div').html(showHtml)
}

module.exports = {
  displayNoCalendars,
  gotoCalendar,
  backToCalendarsFromForm,
  backToCalendarsFromChangePassword,
  gotoNewCalendar,
  onDeleteFail,
  onUpdateFail,
  onGetIndexCalendarsFail,
  onGetIndexCalendarsSuccess,
  showCalendarsList
}
