import { ChakraProvider, list } from "@chakra-ui/react"
import theme from './theme/index'
import { BrowserRouter as Router } from "react-router-dom"
import React, { useEffect } from 'react'
import Layout from 'components/Common/Layout'
import { useSelector, useDispatch } from 'react-redux'
import { listOrders } from './store/actions/orderActions'
import { getTokens } from './store/actions/walletActions'

function App() {
  const dispatch = useDispatch()
  const order = useSelector(state => state.order)
  const wallet = useSelector(state => state.wallet)

  useEffect(() => {
    dispatch(listOrders())
  }, [order.ordersFetching])

  useEffect(() => {
    dispatch(getTokens())
  }, [wallet.tokensFetching])

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Layout order={order} wallet={wallet}/>
      </Router>
    </ChakraProvider>
  );
}

export default App;