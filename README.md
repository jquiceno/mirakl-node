# Mirakl - NodeJs Client API 

 Mirakl NodeJs client API

## Installation

Use the package manager [npm](https://www.npmjs.com/package/mirakl) to install Mirakl API Client.

```bash
npm install --save mirakl
```

## Usage

```script
const Mirakl = require('mirakl')


Mirakl.exportProducts()              // return all products

Mirakl.getAllOrders(params)          // return all orders

Mirakl.getAllOrders({.               // return order with parameters
    paginate: false,
    start_update_date: updateSinceDate
  })
```


## License
[MIT](https://choosealicense.com/licenses/mit/)
