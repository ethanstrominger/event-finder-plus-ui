const commonDebug = require('./commonDebug')

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

function _formatResponseText (responseText) {
  let formattedText = responseText
  if (responseText) {
    try {
      const json = JSON.parse(responseText)
      const key = Object.keys(json)[0]
      const value = Object.values(json)[0][0]
      formattedText = `- "${key}: ${value}"`
    } catch (err) {
      formattedText = responseText
    }
  } else {
    formattedText = ''
  }
  return formattedText
}

const showError = (message, response) => {
  commonDebug.debug('response', response)
  let errorMessage = ''
  if (response.status === 0) {
    errorMessage = message + ' - Connection error'
  } else {
    const responseText = _formatResponseText(response.responseText)
    errorMessage =
      `${message} (${response.status} ${response.statusText} ${responseText})`
  }
  $('#message').css('background-color', 'red')
  $('#message').css('color', 'white')
  $('#message').show()
  $('#message').text(errorMessage)
}

module.exports = {
  hideMessage,
  hideScreens,
  showScreen,
  showMessage,
  showError
}
