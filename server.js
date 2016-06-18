if (process.env.NODE_ENV === 'production') {
  require('./server.production'); // eslint-disable-line global-require
} else {
  require('./server.development'); // eslint-disable-line global-require
}
