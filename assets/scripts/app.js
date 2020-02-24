'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const authUi = require('./auth/ui')
const calendarUi = require('./calendars/ui')
const calendarEvents = require('./calendars/events')
// const calendarEvents = require('./calendars/events')
// const hideShow = require('./games/hide-show')

const _setupEventListeners = () => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePw)
  $('#sign-up-button').on('click', authUi.gotoSignUpScreen)
  $('#sign-in-button').on('click', authUi.gotoSignInScreen)
  $('#sign-out-button').on('click', authEvents.onClickSignOut)
  $('#new-calendar-button').on('click', calendarUi.gotoNewCalendar)
  $('#change-password-button').on('click', authUi.gotoChangePasswordScreen)
  $('#main-div').on('click', '.calendar-row', calendarUi.gotoCalendar)
  $('#details-div').on('submit', '#calendar-form', calendarEvents.onUpdate)
  $('#details-div').on('submit', '#new-calendar-form', calendarEvents.onCreate)
  // $('#details-div').on('submit', '#calendar-form', calendarUi.onCreate)
  $('#details-div').on('click', '#delete-calendar-button', calendarEvents.onDelete)
  $('#details-div').on('click', '#back-from-calendar-button', calendarUi.backToCalendarsFromForm)
}

// use require without a reference to ensure a file is bundled
// require('./example')
// const store = require('./store.js')
$(() => {
  // store.currentBoard.player = 'x'
  _setupEventListeners()
})
