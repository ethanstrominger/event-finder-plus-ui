'use strict'
const commonApi = require('./../commonApi')

const getCalendars = (data) => commonApi.ajaxCall('GET', 'calendar_links', undefined, true)
const updateCalendar = (data) =>
  commonApi.ajaxCall('PATCH', `calendar_links/${data.calendar_link.id}`, data, true)

module.exports = {
  getCalendars,
  updateCalendar
}
