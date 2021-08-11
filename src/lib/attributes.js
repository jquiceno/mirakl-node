'use strict'

const { request } = require('./request')
const boom = require('@hapi/boom')

/**
   * API [PM11]
   * Export attributes from Mirakl
   */

async function getAttributes (params = {}) {
  try {
    const { data } = await request.get('/products/attributes', { params })

    return data || []
  } catch (error) {
    throw boom.boomify(error)
  }
}

module.exports = {
  getAttributes
}
