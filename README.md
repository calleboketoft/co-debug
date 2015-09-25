# co-debug

Disable console.debug if localStorage flag is not truthy

```javascript
import coDebug from 'co-debug'

coDebug.init('debug') // initializes the debug mode (doesn't enable)

coDebug.enable() // Enable debug mode

coDebug.disable() // Disable debug mode

coDebug.isDebugMode() // is debug mode on, for use in code

coDebug.getDebugFlag() // -> 'debug'

// Adding Angular 1 http interceptors for debugging requests and responses
angular.module('app', [])
  .config(coDebug.getAngularHttpInterceptors())

// Add Angular 1 UI Router state debugging
angular.module('app', [])
  .run(coDebug.getAngularUIRouterStateDebug())
```