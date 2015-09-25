'use strict'
let debugFlag = 'debug'

export default {
  init (newDebugFlag) {
    debugFlag = newDebugFlag
    if (!localStorage[debugFlag]) {
      // noop the console.debug
      console.debug = function () {}
    } else {
      // if the browser doesn't support console.debug
      if (!console.debug) {
        console.debug = function () {
          console.log.apply(console, arguments)
        }
      }
    }
  },

  isDebugMode () {
    return !!localStorage[debugFlag]
  },

  getDebugFlag () {
    return debugFlag
  }
}
