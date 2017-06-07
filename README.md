Jaxy
========

Simple small ajax library.

Weighs is at **1Kb**
support for older browsers

## Version

- this is first vertion `v0.1.0`

## Installing

```html
<script src="/jaxy.js"></script>
```

## Use

```javascript
var ajx = new Jaxy();
ajs.url("/path")
ajs.onSuccess((d)=>{alert(d)})
ajs.onProcessing(()=>{console.log("Processing")})
ajs.onReceived(()=>{console.log("Received")})
ajs.onConnected(()=>{console.log("connected")})
ajs.onFail((d)=>{alert(d)})
ajs.send({name:"Xohdy",age:"27"})

## Documentation

Parameters:

- `url`: string
- `method`: string - GET or POST
- `data`: JSON | object

- `onConnected`: Callback function
- `onProcessing`: Callback function
- `onReceived`: Callback function
- `onConnected`: Callback function
- `onFinished`: Callback function
- `onProcessing`: Callback function
- `onSend`: Callback function
- `onSuccess`: Callback function
- `onFail`: Callback function
- `onAbort`: Callback function
