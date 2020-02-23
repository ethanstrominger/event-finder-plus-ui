const commonUi = require('./../commonUi')
const showCalendarLinksTemplate = require('../templates/calendar_links.handlebars')
// const showCalendarDetailsTemplate = require('../templates/calendar_link_details.handlebars')

const gotoCalendarLinksDetails = (event) => {
  console.log('gocld', $(event.target).parent())
  // const showHtml = showCalendarDetailsTemplate({
  //   calendar_link_details: data.calendar_link_details
  // })
  // $('#data-section').html(showHtml)
}

const onGetCalendarLinksSuccess = (data) => {
  console.log('xxxxxxxxxxxxxxxx', data)
  const showHtml = showCalendarLinksTemplate({
    calendar_links: data.calendar_links
  })
  console.log(showHtml)
  commonUi.showScreen('#data-section')
  $('#data-section').html(showHtml)
}

const onGetCalendarLinksFail = (response) => {
  commonUi.showError('Calendar Links could not be listed', response)
  // console.log('Failed')
}

module.exports = {
  gotoCalendarLinksDetails,
  onGetCalendarLinksFail,
  onGetCalendarLinksSuccess
}
