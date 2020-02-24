const commonUi = require('./../commonUi')
const showCalendarLinksTemplate = require('../templates/calendars.handlebars')
const showCalendarTemplate = require('../templates/calendar.handlebars')
const showNewCalendarTemplate = require('../templates/calendar-new.handlebars')
// const getFormFields = require('./../../../lib/get-form-fields')

const gotoCalendar = (event) => {
  event.preventDefault()
  const calendarDetail = $(event.target).closest('tr').data('data-obj')
  const showHtml = showCalendarTemplate(calendarDetail)
  commonUi.hideScreens()
  $('#details-div').show()
  $('#details-div').html(showHtml)
  event.preventDefault()
}

const gotoNewCalendar = (event) => {
  event.preventDefault()
  console.log('Go to new calendar')
  const showHtml = showNewCalendarTemplate()
  commonUi.hideScreens()
  $('#details-div').show()
  $('#details-div').html(showHtml)
}

const backToCalendarsFromForm = (event) => {
  event.preventDefault()
  const form = event.target.closest('form')
  // const values = getFormFields(form)
  $(form).remove()
  commonUi.showScreen('#main-div')
  // $('#main-div').html('<p>Goto calendar list</p>')
}

const onGetCalendarsSuccess = (data) => {
  const showHtml = showCalendarLinksTemplate({
    calendars: data.calendar_links
  })
  commonUi.hideScreens()
  commonUi.showScreen('#main-div')
  $('#main-div').html(showHtml)
}

const onGetCalendarsFail = (response) => {
  commonUi.showError('Calendars could not be listed', response)
}

const onDeleteFail = (response) => {
  commonUi.showError('Calendar could not be deleted', response)
}

const onUpdateFail = (response) => {
  commonUi.showError('Calendar could not be updated', response)
}

module.exports = {
  gotoCalendar,
  backToCalendarsFromForm,
  gotoNewCalendar,
  onGetCalendarsFail,
  onGetCalendarsSuccess,
  onDeleteFail,
  onUpdateFail
}
