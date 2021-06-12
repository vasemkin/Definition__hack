import React from 'react'

import { 
    Flex,
    Box
} from "@chakra-ui/react"

import Balance from "components/Wallet/Uses/Balance"
import TableSearch from "components/Wallet/Uses/TableSearch"
import Tokens from "components/Wallet/Uses/Tokens"

function Wallet () {
    return(
        <Box>
            <Box mb="2rem">
                <Flex justify="space-between" align="center">
                    <Balance />
                    <TableSearch />   
                </Flex>    
            </Box>
            
            <Box>
                <Tokens />
            </Box>    
        </Box>
        
    )
}

export default Wallet