'use strict'

const { request } = require('./request')
const { csvToObject } = require('./utils')
const { boomify } = require('@hapi/boom')

class Offer {
  constructor (id) {
    this.id = id
  }

  /**
   * API [OF51]
   * Export offers
   */

  static async export (params = {}, { format = false } = {}) {
    try {
      let offers = []
      const { data } = await request.get('/offers/export', { params })

      if (['array', 'json'].includes(format)) {
        offers = await csvToObject(data)
        offers = format === 'json' ? JSON.stringify(offers) : offers
      }

      return { offers } || []
    } catch (error) {
      const { response } = error
      if (!response) throw boomify(error)

      throw boomify(error, {
        message: response.data.message,
        statusCode: response.data.status
      })
    }
  }
}

module.exports.Offer = Offer
module.exports.exportOffers = Offer.export
