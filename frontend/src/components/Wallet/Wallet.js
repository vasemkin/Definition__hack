import React from 'react'

import { 
    Flex,
    Box
} from "@chakra-ui/react"

import Balance from "components/Wallet/Uses/Balance"
import TableSearch from "components/Wallet/Uses/TableSearch"
import Tokens from "components/Wallet/Uses/Tokens"

function Wallet (props) {
    return(
        <Box>
            <Box mb="2rem">
                <Flex justify="space-between" align="center">
                    <Balance wallet={props.wallet}/>
                    <TableSearch />   
                </Flex>    
            </Box>
            
            <Box>
                <Tokens wallet={props.wallet}/>
            </Box>    
        </Box>
        
    )
}

export default Wallet