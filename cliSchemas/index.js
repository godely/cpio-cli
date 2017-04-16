var fs = require('fs')
var path = require('path')
var basename = path.basename(__filename)

var files = fs.readdirSync(__dirname)

var schemas = { }

files.forEach((val, idx) => {
  if(val != basename)
    schemas[path.parse(val).name] = require(path.join(__dirname, val))
})

module.exports = schemas