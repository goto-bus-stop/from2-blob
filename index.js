var from = require('from2')

var win = typeof window !== 'undefined' ? window : self

module.exports = function fromBlob (blob) {
  if (!win.Blob || !win.FileReader) {
    throw new Error('Blob or FileReader not supported')
  }
  if (!(blob instanceof win.Blob)) {
    throw new TypeError('Expected a Blob object')
  }
  var idx = 0

  return from(function read (size, next) {
    if (idx >= blob.size) return next(null, null)

    var start = idx
    idx += size
    var slice = blob.slice(start, idx)

    var reader = new win.FileReader()
    reader.onload = function () {
      next(null, Buffer.from(reader.result))
    }
    reader.onerror = function () {
      next(reader.error)
    }
    reader.readAsArrayBuffer(slice)
  })
}
