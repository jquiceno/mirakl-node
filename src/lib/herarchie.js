'use strict'

const { request } = require('./request')
const boom = require('@hapi/boom')

class Hierarchie {
  constructor (id) {
    this.id = id
  }

  /**
   * API [CM51]
   * Export products from Mirakl
   */

  static async getall (params = {}) {
    try {
      const { data } = await request.get('/hierarchies', { params })

      return data || []
    } catch (error) {
      throw boom.boomify(error)
    }
  }
}

module.exports = (storeId) => {
  return new Hierarchie(storeId)
}

module.exports.getAllHierarchies = Hierarchie.getall
