'use strict'

const csv = require('csvtojson')

async function csvToObject (csvText) {
  return await csv().fromString(csvText)
}

module.exports = {
  csvToObject
}
