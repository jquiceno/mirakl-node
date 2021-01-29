'use strict'

const Axios = require('axios')
require('dotenv').config()

const { MIRAKL_HOST_URL, MIRAKL_API_KEY } = process.env

function Request ({ hostUrl, apiKey } = {}) {
  this.hostUrl = hostUrl || MIRAKL_HOST_URL
  this.apiKey = apiKey || MIRAKL_API_KEY

  if (!this.hostUrl || !this.apiKey) throw new Error('MIRAKL_HOST_URL or MIRAKL_API_KEY is not found')

  return Axios.create({
    baseURL: this.hostUrl,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: this.apiKey
    }
  })
}

module.exports = Request
module.exports.request = new Request({ MIRAKL_HOST_URL, MIRAKL_API_KEY })
