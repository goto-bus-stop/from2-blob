var from = require('from2')
var blobToBuffer = require('blob-to-buffer')

module.exports = function fromBlob (blob) {
  if (typeof Blob === 'undefined') {
    throw new Error('Blob not supported')
  }
  if (!(blob instanceof Blob)) {
    throw new TypeError('Expected a Blob object')
  }
  var idx = 0

  return from(function read (size, next) {
    if (idx >= blob.size) return next(null, null)

    var start = idx
    idx += size
    var slice = blob.slice(start, idx)
    blobToBuffer(slice, next)
  })
}
