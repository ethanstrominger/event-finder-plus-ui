const commonUi = require('./../commonUi')
const showCalendarLinksTemplate = require('../templates/calendar_links.handlebars')
const showCalendarDetailsTemplate = require('../templates/calendar_links_details.handlebars')

const gotoCalendarLinksDetails = (event) => {
  const calendarDetail = $(event.target).closest('tr').data('data-obj')
  const showHtml = showCalendarDetailsTemplate(calendarDetail)
  $('#main-div').html(showHtml)
}

const onGetCalendarLinksSuccess = (data) => {
  const showHtml = showCalendarLinksTemplate({
    calendar_links: data.calendar_links
  })
  commonUi.showScreen('#main-div')
  $('#main-div').html(showHtml)
}

const onGetCalendarLinksFail = (response) => {
  commonUi.showError('Calendar Links could not be listed', response)
}

module.exports = {
  gotoCalendarLinksDetails,
  onGetCalendarLinksFail,
  onGetCalendarLinksSuccess
}
