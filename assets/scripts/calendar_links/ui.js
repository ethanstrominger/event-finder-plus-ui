const commonUi = require('./../commonUi')
const showCalendarLinksTemplate = require('../templates/calendar_links.handlebars')
const showCalendarDetailsTemplate = require('../templates/calendar_links_details.handlebars')

const gotoCalendarDetails = (event) => {
  event.preventDefault()
  const calendarDetail = $(event.target).closest('tr').data('data-obj')
  const showHtml = showCalendarDetailsTemplate(calendarDetail)
  commonUi.hideScreens()
  $('#details-div').html(showHtml)
  event.preventDefault()
}

const gotoCalendarList = (event) => {
  event.preventDefault()
  const form = event.target.closest('form')
  $(form).remove()
  commonUi.showScreen('#main-div')
  console.log('gotoCalendar List')
  // $('#main-div').html('<p>Goto calendar list</p>')
}

const ongetCalendarsSuccess = (data) => {
  const showHtml = showCalendarLinksTemplate({
    calendar_links: data.calendar_links
  })
  commonUi.showScreen('#main-div')
  $('#main-div').html(showHtml)
}

const ongetCalendarsFail = (response) => {
  commonUi.showError('Calendar Links could not be listed', response)
}

module.exports = {
  gotoCalendarDetails,
  gotoCalendarList,
  ongetCalendarsFail,
  ongetCalendarsSuccess
}
