import {
    Box
} from '@chakra-ui/react'
import React from 'react'
import OrdersTable from 'components/Orders/Uses/OrdersTable'
import TableSearch from 'components/Orders/Uses/TableSearch'

export default function Orders(props) {
    return(
        <Box>
            <Box mb="2rem">
                <TableSearch />
            </Box>

            <Box>
                <OrdersTable order={props.order} />
            </Box>
        </Box>
    )
}