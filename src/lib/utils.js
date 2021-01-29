'use strict'

function csvToObject (csvText) {
  let [headers, ...lines] = csvText.trim().split('\n')
  headers = headers.split(';')

  return lines.map(line => {
    const values = line.split(';')

    const item = {}

    values.map((value, index) => {
      value = value.slice(0, -1).slice(1)
      item[headers[index]] = value
      return true
    })

    return item
  })
}

module.exports = {
  csvToObject
}
