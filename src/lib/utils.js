'use strict'

// const csv = require('csvtojson')
// let csvToJson = require('convert-csv-to-json');
const csvjson = require('csvjson')

function csvToObject (csvText) {
  try {
    const options = {
      delimiter: ';',
      quote: "'"
    }

    return csvjson.toObject(csvText, options)
  } catch (error) {
    throw new Error('Error converting csv file: ', error.message)
  }
}

module.exports = {
  csvToObject
}
