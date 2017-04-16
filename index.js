var prompt = require('prompt')
var Async = require('async')

var schemas = require('./cliSchemas')

prompt.message = '>'
prompt.delimiter = ''

prompt.start()

Async.waterfall([
  function(callback) {
    prompt.get(schemas.login, function(err, val) {
      if(err)
        return callback({message: 'couldn\'t read login or password'})
      callback(null, val.email, val.password)
    })
  },
  function(email, password, callback) {
    
  }
], function(err) {
  prompt.stop();
  if(err) return console.log('Error:', err.message)
})