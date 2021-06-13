import React from 'react'

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
    Text
} from '@chakra-ui/react'

import {
    Link as RouterLink
} from "react-router-dom";

import CustomTh from 'components/Common/Misc/CustomTh'
  
function Tokens (props) {
    const wallet = props.wallet

    return(
        <Box mt="2rem">

            <Box p="20px" bg="#fff" borderRadius="5px 5px 0 0">
                <Text>Мои токены</Text>
            </Box>

            <Table>
                <Thead
                bg="#F4F7F9"
                >
                    <Tr>
                        <CustomTh text="Название токена"/>
                        <CustomTh text="Кол-во токенов"/>
                        <CustomTh text="Баланс токена"/>
                        <CustomTh text="Действия"/>
                    </Tr>
                </Thead>
                <Tbody
                bg="#fff"
                >
                    {
                        Object.values(wallet.tokens).length > 0 ?
                        Object.values(wallet.tokens).map((token) => {
                            return(
                                <Tr key={Date.now() + Math.random()}>
                                    <Td>{token.name}</Td>
                                    <Td>{token.count}</Td>
                                    <Td>
                                        <Flex align="center">
                                            <Text mr="1rem">{token.balance}</Text>
                                            <Box 
                                            borderRadius="15px"
                                            p="7px"
                                            fontSize="12px"
                                            color="rgba(37, 175, 113, 1)"
                                            bg="#EAF8E9">+{Math.floor(Math.random() * 23)}%</Box>
                                        </Flex>
                                        
                                    </Td>
                                    <Td>
                                        <Flex>
                                            <RouterLink to="/orders">
                                                <Button variant="primary" size="sm">Перейти к ордерам</Button>
                                            </RouterLink>
                                            <RouterLink to='/neworder'>
                                                <Button ml="1rem" variant="secondary" size="sm">Новый ордер</Button>
                                            </RouterLink>
                                        </Flex>
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

export default Tokens