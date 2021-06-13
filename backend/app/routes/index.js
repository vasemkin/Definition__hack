const axios = require('axios');
const uuid = require('uuid');
const createOrder = require('../../orders/create-order');

const index = async function (app) {

    let idToOrder = {}

    app.post('/api/create_new_order', async (req, res) => {

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
      await createOrder(body.quantityFrom)
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