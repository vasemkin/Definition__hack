const axios = require('axios');
const uuid = require('uuid');

const index = async function (app) {
    let tokens = {
      'WETH' : {
        name : 'WETH',
        count : 332,
        balance : 2331
      },
      'DAI' : {
        name : 'DAI',
        count : 1334,
        balance : 1334
      },
      'ENJ' : {
        name : 'ENJ',
        count : 32,
        balance : 331
      },
      'MANA' : {
        name : 'MANA',
        count : 264,
        balance : 341
      },
      'UNI' : {
        name : 'UNI',
        count : 342,
        balance : 2241
      }
    }
    let idToOrder = {}

    app.get('/api/get_tokens', (req, res) => {
      res.json(tokens)
    })

    app.post('/api/create_new_order', (req, res) => {

      const body = req.body
      const id = uuid.v1()

      idToOrder = {
        ...idToOrder,
        [id] : {
          ...body,
          filled : 0,
          status : 'Accepted',
          id : id
        }
      }

      res.json({
        'orderId' : id
      })

      console.log(idToOrder)

    });

    app.get('/api/list_orders', (req, res) => {

      res.json(idToOrder)

    })
      

}

module.exports = index;