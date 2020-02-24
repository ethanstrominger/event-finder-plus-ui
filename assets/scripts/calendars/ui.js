const commonUi = require('./../commonUi')
const showCalendarLinksTemplate = require('../templates/calendars.handlebars')
const showCalendarTemplate = require('../templates/calendar.handlebars')
const getFormFields = require('./../../../lib/get-form-fields')

const gotoCalendar = (event) => {
  event.preventDefault()
  const calendarDetail = $(event.target).closest('tr').data('data-obj')
  const showHtml = showCalendarTemplate(calendarDetail)
  commonUi.hideScreens()
  $('#details-div').show()
  $('#details-div').html(showHtml)
  event.preventDefault()
}

const gotoCalendars = (event) => {
  event.preventDefault()
  const form = event.target.closest('form')
  const values = getFormFields(form)
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
  commonUi.showError('Calendar Links could not be listed', response)
}

module.exports = {
  gotoCalendar,
  gotoCalendars,
  onGetCalendarsFail,
  onGetCalendarsSuccess
}
