'use strict'

const boom = require('@hapi/boom')

/**
   * API [PM11]
   * Export attributes from Mirakl
   */

async function getAll (params = {}) {
  try {
    const { data } = await this.request.get('/products/attributes', { params })

    return data || []
  } catch (error) {
    throw boom.boomify(error)
  }
}

module.exports = {
  getAll
}
