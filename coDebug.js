export default function (debugFlag) {
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
}
