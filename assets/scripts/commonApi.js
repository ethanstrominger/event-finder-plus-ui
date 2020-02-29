const config = require('./config')
const store = require('./store')
const calendarDebug = require('./calendarDebug')

const ajaxCall = (method, endPoint, data, useToken) => {
  // set endPoint to blank string if undefined
  if (endPoint === undefined) {
    endPoint = ''
  }
  // add slash to endPoint if non-empty
  if (endPoint !== '') {
    endPoint = '/' + endPoint
  }

  // create adjaxArg
  const ajaxArg = {
    url: config.apiUrl + endPoint,
    method: method
  }

  // add headers property with authorization to ajax argument
  if (useToken) {
    ajaxArg.headers =
      {
        // store.user defined in onSignInSuccess, includes token
        Authorization: `Token  token=${store.user.token}`
      }
  }
  if (data !== undefined) {
    ajaxArg.data = data
  }
  calendarDebug.debug('Ajax args')
  calendarDebug.debug(ajaxArg)
  const retVal = $.ajax(ajaxArg)
  calendarDebug.debug('retVal')
  calendarDebug.debug(retVal)

  return retVal
}

module.exports = {
  ajaxCall
}
