Ajaxy
========

Simple small ajax library.

Weighs is at **1Kb**
support for older browsers

## Version

- this is first vertion `v0.1.0`

## Installing

```html
<script src="/ajaxy.js"></script>
```

## Use

```javascript
new ajaxy({url:"/path"}).send();
```

```javascript
new ajaxy({url:"/path" , onSuccess : (d)=>{alert(d)} }).send();
```
```javascript
new ajaxy({url:"/path" , onSuccess : (d)=>{alert(d)} }).send({name:"Xohdy",age:"27"});
```

```javascript
var ajx = new ajaxy();
ajs.url("/path")
ajs.onSuccess((d)=>{alert(d)})
ajs.onProcessing(()=>{console.log("Processing")})
ajs.onReceived(()=>{console.log("Received")})
ajs.onConnected(()=>{console.log("connected")})
ajs.onFail((d)=>{alert(d)})
ajs.send({name:"Xohdy",age:"27"})
```

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
