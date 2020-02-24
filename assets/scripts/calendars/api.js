'use strict'
const commonApi = require('./../commonApi')

const createCalendar = (data) =>
  commonApi.ajaxCall('POST', 'calendar_links', data, true)
const getCalendars = (data) => commonApi.ajaxCall('GET', 'calendar_links', undefined, true)
const updateCalendar = (data) =>
  commonApi.ajaxCall('PATCH', `calendar_links/${data.calendar_link.id}`, data, true)
const deleteCalendar = (id) =>
  commonApi.ajaxCall('DELETE', `calendar_links/${id}`, undefined, true)

module.exports = {
  createCalendar,
  deleteCalendar,
  getCalendars,
  updateCalendar
}
