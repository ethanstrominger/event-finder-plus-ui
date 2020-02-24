'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const authUi = require('./auth/ui')
const calendarUi = require('./calendar_links/ui')
// const calendarEvents = require('./calendar_links/events')
// const hideShow = require('./games/hide-show')

const _setupEventListeners = () => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePw)
  $('#sign-up-button').on('click', authUi.gotoSignUpScreen)
  $('#sign-in-button').on('click', authUi.gotoSignInScreen)
  $('#sign-out-button').on('click', authEvents.onClickSignOut)
  $('#change-password-button').on('click', authUi.gotoChangePasswordScreen)
  $('#main-div').on('click', '.calendar-row', calendarUi.gotoCalendarDetails)
  $('#details-div').on('submit', '#calendar-form', calendarUi.gotoCalendarList)
  $('#details-div').on('click', '#calendar-form', calendarUi.gotoCalendarList)
  // $('#main-div').on('submit', '.calendar-form', calendarUi.gotoCalendarDetails)
  // $('#main-div').on('click', '.delete-calendar-button', calendarEvents.onDelete)
  // $('#main-div').on('click', '#return-to-list-calendar-button', calendarUi.gotoCalendarList)
}

// use require without a reference to ensure a file is bundled
// require('./example')
// const store = require('./store.js')
$(() => {
  // store.currentBoard.player = 'x'
  _setupEventListeners()
})
