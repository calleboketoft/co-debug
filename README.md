# co-debug

Disable console.debug if localStorage flag is not truthy

```javascript
import coDebug from 'co-debug'
coDebug.init('debug') // initializes the debug mode toggler with LS flag 'debug'

coDebug.isDebugMode() // is debug mode on, for use in code

coDebug.getDebugFlag() // -> 'debug'
```