'use strict'

module.exports = {
  ...require('./lib/shop'),
  ...require('./lib/product'),
  ...require('./lib/herarchie'),
  ...require('./lib/offer'),
  ...require('./lib/attributes'),
  ...require('./lib/valueList'),
  ...require('./lib/order'),
  ...require('./lib/shipping')
}
