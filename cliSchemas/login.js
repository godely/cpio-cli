module.exports = {
  properties: {
    email: {
      description: ' email',
      pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'the input must be a valid email address',
      required: true
    }, password: {
      description: ' password',
      hidden: true,
      replace: '*',
      message: 'the password is required',
      required: true,
    }
  }
}