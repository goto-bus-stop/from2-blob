var fromBlob = require('./')

log('Select a file:')

var inp = document.createElement('input')
inp.type = 'file'
inp.onchange = function () {
  fromBlob(inp.files[0])
    .on('data', function (chunk) {
      log('chunk of ' + chunk.length + ' bytes')
    })
    .on('error', function (err) {
      alert(err.message)
      throw err
    })
}

document.body.appendChild(inp)

function log (text) {
  var p = document.createElement('p')
  p.textContent = text
  document.body.appendChild(p)
}
