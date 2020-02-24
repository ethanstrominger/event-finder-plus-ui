'use strict'
const commonApi = require('./../commonApi')

const getCalendars = (data) => commonApi.ajaxCall('GET', 'calendar_links', undefined, true)

module.exports = {
  getCalendars
}
