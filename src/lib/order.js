'use strict'

const boom = require('@hapi/boom')
const { request } = require('./request')

class Order {
  constructor (id) {
    if (!id) throw new Error('Order id not found or invalid')
    this.id = id
  }

  static async getAll (params = {}) {
    try {
      const { data } = await request.get('/orders', { params })

      return data
    } catch (error) {
      const { data } = error.response
      throw boom.boomify(error, {
        message: data.message,
        statusCode: data.status
      })
    }
  }

  static async getById (orderId) {
    try {
      const [order] = await this.getAll({ order_ids: orderId })

      return order
    } catch (error) {
      throw boom.boomify(error)
    }
  }

  async accept (orderLinesIds = []) {
    try {
      const { data } = await this.request({
        url: `${this.base_URL}/api/orders/${this.id}/accept`,
        method: 'PUT',
        data: {
          order_lines: orderLinesIds.map(id => {
            return {
              accepted: true,
              id
            }
          })
        },
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: this.apikey
        }
      })

      return data.orders
    } catch (error) {
      throw boom.boomify(error)
    }
  }

  async getEvaluations () {
    try {
      const { data } = await this.request.get(`/orders/${this.id}/evaluation`)

      return data
    } catch (error) {
      throw boom.boomify(error)
    }
  }

  static async getTaxes () {
    try {
      const { data } = await this.request.get('/orders/taxes')

      return data.taxes
    } catch (error) {
      throw boom.boomify(error)
    }
  }

  /**
   * API [OR01]
   * Create an order
   * @param {object} newOrderData
   */

  static async add (newOrderData = {}) {
    try {
      const { data } = await request.post('/orders', { ...newOrderData })

      return data.orders
    } catch (error) {
      const { data } = error.response
      throw boom.boomify(error, {
        message: data.message,
        statusCode: data.status
      })
    }
  }
}

module.exports.Order = Order
module.exports.getOrderTaxes = Order.getTaxes
module.exports.getOrderById = Order.getById
module.exports.getAllOrders = Order.getAll
module.exports.createOrder = Order.add
