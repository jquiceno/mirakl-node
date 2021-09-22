'use strict'

const { boomify } = require('@hapi/boom')

async function get (id, params = {}) {
  try {
    const { data } = await this.request.get('/shops', {
      params: { shop_ids: id, ...params }
    })

    return data
  } catch (error) {
    throw boomify(error)
  }
}

async function getAll (params = {}) {
  try {
    const { data } = await this.request.get('/shops', { params })

    return data
  } catch (error) {
    throw boomify(error)
  }
}

module.exports = {
  get,
  getAll
}
