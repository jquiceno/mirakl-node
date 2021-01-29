'use strict'

const { request } = require('./request')
const boom = require('@hapi/boom')

async function getAllValuesLists (params = {}) {
  try {
    const { data } = await request.get('/values_lists', { params })

    return data || []
  } catch (error) {
    throw boom.boomify(error)
  }
}

module.exports = {
  getAllValuesLists
}
