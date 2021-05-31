'use strict'

const { request } = require('./request')
const boom = require('@hapi/boom')

async function getShippingRates (params = {}) {
  try {
    const { data } = await request.get('/shipping/rates', { params })
    return data || []
  } catch (error) {
    throw boom.boomify(error)
  }
}

module.exports = {
  getShippingRates
}
