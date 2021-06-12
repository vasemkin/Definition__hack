import { ChakraProvider } from "@chakra-ui/react"
import theme from './theme/index'
import { BrowserRouter as Router } from "react-router-dom"
import React from 'react'
import Layout from 'components/Common/Layout'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Layout />
      </Router>
    </ChakraProvider>
  );
}

export default App;