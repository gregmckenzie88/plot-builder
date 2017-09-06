// keys.js -- figure out which set of creds to return
if (process.env.NODE_ENV === 'production'){
  // we are in prod, return prod keys
  module.exports = require('./prod.js'); 
} else {
  // we are in dev, return dev keys
  module.exports = require('./dev.js');
}
