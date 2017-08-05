require('jsdom-global')()
var test = require('tape')
var concat = require('concat-stream')
var fromBlob = require('./')

global.Blob = window.Blob
global.FileReader = window.FileReader

test('should turn a blob into a stream', function (t) {
  t.plan(1)

  var buffer = Buffer.allocUnsafe(64 * 1024)
  var blob = new Blob([ buffer.buffer ])
  fromBlob(blob).pipe(concat(function (result) {
    t.equal(
      buffer.toString('base64'),
      result.toString('base64')
    )
  }))
})
