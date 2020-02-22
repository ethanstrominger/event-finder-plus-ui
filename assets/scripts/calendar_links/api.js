'use strict'
const commonApi = require('./../commonApi')

const getCalendarLinks = (data) => commonApi.ajaxCall('GET', 'calendar_links', undefined, true)

module.exports = {
  getCalendarLinks
}
