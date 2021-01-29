'use strict'

const { request } = require('./request')
const { csvToObject } = require('./utils')
const boom = require('@hapi/boom')

class Offer {
  constructor (id) {
    this.id = id
  }

  /**
   * API [OF51]
   * Export offers
   */

  static async export (params = {}) {
    try {
      const { data } = await request.get('/offers/export', { params })

      return { offers: csvToObject(data) } || []
    } catch (error) {
      const { response } = error

      throw boom.boomify(error, {
        message: response.data.message,
        statusCode: response.data.status
      })
    }
  }
}

module.exports.Offer = Offer
module.exports.exportOffers = Offer.export
