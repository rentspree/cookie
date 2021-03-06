<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## Installation

npm install @rentspree/cookie

## Update a newer version

run

```bash
npm version patch
```

### Table of Contents

- [setOption][1]
  - [Parameters][2]
- [addChangeListener][3]
  - [Parameters][4]
- [removeChangeListener][5]
  - [Parameters][6]
- [setLocalItem][7]
  - [Parameters][8]
- [getLocalItem][9]
  - [Parameters][10]
- [getAllLocalItem][11]
  - [Parameters][12]
- [removeLocalItem][13]
  - [Parameters][14]
- [removeAllLocalItem][15]

## setOption

Set options for the to be stored cookies.

### Parameters

- `options` **[Object][16]** (optional, default `{}`)

## addChangeListener

Add a listener to when a cookie is set or removed.

### Parameters

- `callback` **[function][17]**

## removeChangeListener

Remove a listener from the change callback.

### Parameters

- `callback` **[function][17]**

## setLocalItem

Set a cookie value.

### Parameters

- `name` **[string][18]** Cookie's name
- `value` **[string][18]**/**[Object][16]** Cookie's value

## getLocalItem

Get a cookie value.

### Parameters

- `name` **[string][18]** Cookie's name
- `options` **[Object][16]** Cookie's options (optional, default `{}`)

Returns **any** cookie or false if cookie is not found.

## getAllLocalItem

Get all cookies.

### Parameters

- `options` **[Object][16]** (optional, default `{}`)

Returns **all** cookies.

## removeLocalItem

Remove a cookie.

### Parameters

- `name` **[string][18]** Cookie's name
- `options` **[Object][16]** Cookie's options (optional, default `{}`)

## removeAllLocalItem

Remove all cookies that has the same prefix as the parameter.

### Parameters

- `prefix` **[string][18]** Prefix of the cookie to be removed

## License

MIT (http://www.opensource.org/licenses/mit-license.php)

[1]: #setoption
[2]: #parameters
[3]: #addchangelistener
[4]: #parameters-1
[5]: #removechangelistener
[6]: #parameters-2
[7]: #setlocalitem
[8]: #parameters-3
[9]: #getlocalitem
[10]: #parameters-4
[11]: #getalllocalitem
[12]: #parameters-5
[13]: #removelocalitem
[14]: #parameters-6
[15]: #removealllocalitem
[16]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
[17]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function
[18]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
