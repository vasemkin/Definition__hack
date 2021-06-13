import { ChakraProvider, list } from "@chakra-ui/react"
import theme from './theme/index'
import { BrowserRouter as Router } from "react-router-dom"
import React, { useEffect } from 'react'
import Layout from 'components/Common/Layout'
import { useSelector, useDispatch } from 'react-redux'
import { listOrders } from './store/actions/orderActions'

function App() {
  const dispatch = useDispatch()
  const order = useSelector(state => state.order)

  useEffect(() => {
    dispatch(listOrders())
  }, [order.ordersFetching])

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Layout order={order}/>
      </Router>
    </ChakraProvider>
  );
}

export default App;