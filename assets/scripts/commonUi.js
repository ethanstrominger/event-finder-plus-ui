const hideScreens = () => {
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#change-password-form').hide()
  $('#main-div').hide()
  $('#details-div').hide()
  $('#message').hide()
}

const showScreen = (screen) => {
  $(screen).removeAttr('display')
  $(screen).show()
}

const hideMessage = () => {
  $('#message').hide()
  $('#message').text('')
}

const showMessage = (message) => {
  $('#message').css('background-color', 'green')
  $('#message').css('color', 'white')
  $('#message').show()
  $('#message').text(message)
}

const showError = (message, response) => {
  $('#message').css('background-color', 'red')
  $('#message').css('color', 'white')
  $('#message').show()
  $('#message').text(`${message} (${response.status} ${response.statusText})`)
}

module.exports = {
  hideMessage,
  hideScreens,
  showScreen,
  showMessage,
  showError
}
