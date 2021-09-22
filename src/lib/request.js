'use strict'

const Axios = require('axios')

function Request ({ hostUrl, apiKey } = {}) {
  if (!hostUrl || !apiKey) throw new Error('MIRAKL_HOST_URL or MIRAKL_API_KEY is not found')

  return Axios.create({
    baseURL: hostUrl,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: apiKey
    }
  })
}

module.exports = Request
