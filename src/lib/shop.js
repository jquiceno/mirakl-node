'use strict'

const { request } = require('./request')
const boom = require('@hapi/boom')

class Shop {
  constructor (id) {
    this.id = id
  }

  async get (params = {}) {
    try {
      const { data } = await request.get('/shops', {
        params: { shop_ids: this.id, ...params }
      })

      return data
    } catch (error) {
      throw boom.boomify(error)
    }
  }

  static async getAll (params = {}) {
    try {
      const { data } = await request.get('/shops', { params })

      return data
    } catch (error) {
      throw boom.boomify(error)
    }
  }
}

module.exports = (storeId) => {
  return new Shop(storeId)
}

module.exports.getAllShops = Shop.getAll
