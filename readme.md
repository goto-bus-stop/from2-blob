# from2-blob

Create a readable stream from a Blob with [`from2`](https://github.com/hughsk/from2).

## Install

```bash
npm install from2-blob
```

## Usage

```js
var fromBlob = require('from2-blob')
var toBlob = require('stream-to-blob')
var zlib = require('zlib')

fileInput.onchange = function () {
  var stream = fromBlob(fileInput.files[0])
    .pipe(zlib.createDeflate())
  toBlob(stream, function (err, blob) {
    if (err) throw err
    window.open( URL.createObjectURL(blob) )
  })
}
```

## API

### `fromBlob(blob: Blob): Readable`

Create a readable stream that will stream appropriately sized chunks of the given Blob.

## Related

 - [from2](https://github.com/hughsk/from2) - Convenience wrapper for ReadableStream, with an API lifted from "from" and "through2"
 - [from2-array](https://github.com/binocarlos/from2-array) - Create a from2 stream based on an array of source values
 - [from2-buffer](https://github.com/goto-bus-stop/from2-buffer) - Create a readable stream from a Buffer with from2
 - [from2-string](https://github.com/yoshuawuyts/from2-string) - Create a stream from a string. Sugary wrapper around from2

## License

[MIT](./LICENSE)
