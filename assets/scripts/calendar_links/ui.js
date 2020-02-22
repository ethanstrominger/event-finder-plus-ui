const commonUi = require('./../commonUi')
const showBooksTemplate = require('../templates/calendar_links.handlebars')

const onGetCalendarLinksSuccess = (data) => {
  const showHtml = showBooksTemplate({
    calendar_links: data.calendar_links
  })
  $('#data-section').html(showHtml)
}

const onGetCalendarLinksFail = (response) => {
  commonUi.showError('Calendar Links could not be listed', response)
  // console.log('Failed')
}

module.exports = {
  onGetCalendarLinksFail,
  onGetCalendarLinksSuccess
}
