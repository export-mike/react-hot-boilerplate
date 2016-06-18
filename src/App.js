if (process.env.NODE_ENV === 'production') {
  module.exports = require('./App.production'); // eslint-disable-line global-require
} else {
  module.exports = require('./App.development'); // eslint-disable-line global-require
}
