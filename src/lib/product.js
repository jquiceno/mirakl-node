'use strict'

const { request } = require('./request')
const boom = require('@hapi/boom')

class Product {
  constructor (id) {
    this.id = id
  }

  /**
   * API [CM51]
   * Export products from Mirakl
   */

  static async export (params = {}) {
    try {
      const { data } = await request.get('/mcm/products/export', { params })

      return data || []
    } catch (error) {
      throw boom.boomify(error)
    }
  }
}

module.exports = (productId) => {
  return new Product(productId)
}

module.exports.exportProducts = Product.export
