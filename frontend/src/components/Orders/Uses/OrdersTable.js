import React, { useState } from 'react'

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    Box,
    Flex,
    Image,
    useDisclosure,
    Text
} from '@chakra-ui/react'

import CustomTh from 'components/Common/Misc/CustomTh'
import OrderDrawer from 'components/Orders/Uses/OrderDrawer'
  
function OrdersTable (props) {
    const order = props.order

    console.log(order)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [currentOrder, setCurrentOrder] = useState({})

    const showOrderHandler = (order) => {
        setCurrentOrder(order)
        onOpen()
    }

    return(
        <Box mt="2rem">
            <Box p="20px" bg="#fff" borderRadius="5px 5px 0 0">
                <Text>Мои ордеры</Text>
            </Box>
            
            <OrderDrawer order={currentOrder} isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>

            <Table>
                <Thead
                bg="#F4F7F9"
                >
                    <Tr>
                        <CustomTh text="Название ордера"/>
                        <CustomTh text="Откуда"/>
                        <CustomTh text="Куда"/>
                        <CustomTh text="Стратегия"/>
                        <CustomTh text="Статус"/>
                        <CustomTh text="Действия"/>
                    </Tr>
                </Thead>
                <Tbody
                bg="#fff"
                >
                    {
                        Object.values(order.orders).length > 0 ?
                        Object.values(order.orders).map((order) => {
                            return(
                                <Tr key={Date.now() + Math.random()}>
                                    <Td>{order.id}</Td>
                                    <Td>{order.from}</Td>
                                    <Td>{order.to}</Td>
                                    <Td>XSH9</Td>
                                    <Td>
                                        <Flex 
                                        align="center"
                                        borderRadius="15px"
                                        p="7px"
                                        fontSize="12px"
                                        color="rgba(37, 175, 113, 1)"
                                        bg="#EAF8E9"
                                        w="fit-content"
                                        >
                                            <Box w="7px" h="7px" bg="#25AF71" mr="0.5rem" borderRadius="50%"></Box>
                                            <Text>{order.status}</Text>
                                        </Flex>
                                        
                                    </Td>
                                    <Td>
                                        <Button onClick={() => {showOrderHandler(order)}} variant="primary" size="sm">Подробнее</Button>
                                    </Td>
                                </Tr>
                            )
                        })
                        : null
                    }
                </Tbody>
            </Table>

        </Box>
        )
}  

export default OrdersTable