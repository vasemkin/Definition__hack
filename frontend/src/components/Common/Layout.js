import { 
    Box
} from "@chakra-ui/react"

import {
    Switch,
    Route
} from "react-router-dom"

import Header from 'components/Common/Layout/Header'
import Orders from 'components/Orders/Orders'
import Wallet from 'components/Wallet/Wallet'
import NewOrder from 'components/NewOrder/NewOrder'
import React from "react"

function Layout(props) {
    return(
        <Box>
            <Header />

            <Box bg="#F4F7F9" p="30px">
                <Box  maxWidth="1024px" m="0 auto">    
                    <Switch>
                        <Route path="/orders">
                            <Orders order={props.order} wallet={props.wallet}/>
                        </Route>
    
                        <Route path='/neworder'>
                            <NewOrder />
                        </Route>

                        <Route path="/">
                            <Wallet order={props.order} wallet={props.wallet}/>
                        </Route>
                    </Switch>
                </Box> 
            </Box>
            
            </Box>
        )
}

export default Layout