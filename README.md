# co-debug

Disable console.debug if localStorage flag is not truthy

```javascript
import coDebug from 'co-debug'
coDebug.init('debug') // initializes the debug mode toggler with LS flag 'debug'

// Set debug flag 'on'
coDebug.enable()

// Remove debug flag
coDebug.disable()

coDebug.isDebugMode() // is debug mode on, for use in code

coDebug.getDebugFlag() // -> 'debug'

// Adding Angular 1 http interceptors for debugging requests and responses
$httpProvider.interceptors.push(coDebug.getAngularInterceptors())
```