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

  enable () {
    localStorage[debugFlag] = 'on'
  },

  disable () {
    localStorage.removeItem(debugFlag)
  },

  isDebugMode,

  getDebugFlag () {
    return debugFlag
  },

  getAngularInterceptors () {
    return function () {
      return {
        request: function (config) {
          if (isDebugMode()) {
            window.console.debug('%c REQUEST: ' + config.url, 'color: gray')
            window.console.debug(config)
          }
          return config
        },
        response: function (res) {
          if (isDebugMode()) {
            window.console.debug('%c RESPONSE: ' + res.config.url, 'color: green')
            window.console.debug(res)
          }
          return res
        }
      }
    }
  },

  getAngularUIRouterStateDebug () {
    rootRun.$inject = ['$rootScope']
    function rootRun ($rootScope) {
      // UI router state debugging
      $rootScope.$on('$stateChangeStart', (event, toState) => {
        window.console.debug('stateChangeStart:   ' + toState.name)
      })
      $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
        window.console.debug('stateChangeError:   ' + toState.name, error)
      })
      $rootScope.$on('$stateChangeSuccess', (event, toState) => {
        window.console.debug('stateChangeSuccess: ' + toState.name)
      })
    }
    return rootRun
  }
}

function isDebugMode () {
  return !!localStorage[debugFlag]
}
