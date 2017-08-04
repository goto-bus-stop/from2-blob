# from2-buffer

Create a readable stream from a Buffer with [`from2`](https://github.com/hughsk/from2).

## Install

```bash
npm install from2-buffer
```

## Usage

```js
var fromBuffer = require('from2-buffer')
var buffer = require('fs').readFileSync(__filename)

fromBuffer(buffer).pipe(process.stdout)
```

## API

### `fromBuffer(buffer: Buffer): Readable`

Create a readable stream that will stream appropriately sized chunks of the given Buffer.

## Related

 - [from2](https://github.com/hughsk/from2) - Convenience wrapper for ReadableStream, with an API lifted from "from" and "through2"
 - [from2-array](https://github.com/binocarlos/from2-array) - Create a from2 stream based on an array of source values
 - [from2-string](https://github.com/yoshuawuyts/from2-string) - Create a stream from a string. Sugary wrapper around from2

## License

[MIT](./LICENSE)
