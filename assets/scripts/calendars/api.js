'use strict'
const commonApi = require('./../commonApi')

const createCalendar = (data) =>
  commonApi.ajaxCall('POST', 'calendars', data, true)
const getCalendars = (data) => commonApi.ajaxCall('GET', 'calendars', undefined, true)
const updateCalendar = (data) =>
  commonApi.ajaxCall('PATCH', `calendars/${data.calendar.id}`, data, true)
const deleteCalendar = (id) =>
  commonApi.ajaxCall('DELETE', `calendars/${id}`, undefined, true)

module.exports = {
  createCalendar,
  deleteCalendar,
  getCalendars,
  updateCalendar
}
