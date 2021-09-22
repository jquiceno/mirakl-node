'use strict'

require('dotenv').config()

const shop = require('./lib/shop')
const attributes = require('./lib/attributes')
const Request = require('./lib/request')

const { MIRAKL_HOST_URL, MIRAKL_API_KEY } = process.env

let modules = {}

if (MIRAKL_HOST_URL && MIRAKL_API_KEY) {
  const request = Request({ hostUrl: MIRAKL_HOST_URL, apiKey: MIRAKL_API_KEY })

  modules = {
    shop: { ...shop, request },
    // ...require('./lib/product'),
    // ...require('./lib/herarchie'),
    // ...require('./lib/offer'),
    attribute: { ...attributes, request }
    // ...require('./lib/valueList'),
    // ...require('./lib/order'),
    // ...require('./lib/shipping')
  }
}

class Mirakl {
  constructor ({ hostUrl, apiKey }) {
    const request = Request({ hostUrl, apiKey })
    this.request = request
    this.shop = { ...shop, request }
    this.attribute = { ...attributes, request }
  }
}

module.exports = {
  ...modules,
  Mirakl
}
