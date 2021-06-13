import { 
    Flex,
    Box,
    Menu,
    MenuButton,
    Link,
    Image,
    MenuList,
    MenuItem
} from "@chakra-ui/react"

import {
    Link as RouterLink,
    useLocation
} from "react-router-dom"

import React, { useEffect } from 'react'
import InnerLink from 'components/Common/Layout/InnerLink'

function Header() {
    const location = useLocation()
    const walletLink = '/wallet'
    const ordersLink = '/orders'
    const newOrderLink = '/neworder'

    return(
        <Box borderBottom="1px solid #ccc" bg="#fff" p="0 87px">
            <Flex align="center" justify="space-between" maxWidth="1024px" m="0 auto">

                <Box w="130px" h="30px">
                    MIKROMARKET
                    {/* <Image src="./img/Promo__logo.png" alt="NSD" /> */}
                </Box>

                <Flex>
                        <RouterLink to={walletLink}>     
                            <InnerLink isActive={walletLink === location.pathname} imagePath="./img/wallet.svg" imageOffet="2px" text="Кошелек" />
                        </RouterLink>

                        <RouterLink to={ordersLink}>
                            <InnerLink isActive={ordersLink === location.pathname} imagePath="./img/shoppingbag.svg" imageOffet="0" text="Ордеры" />
                        </RouterLink>

                        <RouterLink to={newOrderLink}>
                            <InnerLink isActive={newOrderLink === location.pathname} imagePath="./img/shoppingbag.svg" imageOffet="0" text="Стратегии" />
                        </RouterLink>

                </Flex>
                
                <Flex align="center">
                            <Box overflow="hidden" w="34px" h="34px" mr="1rem" borderRadius="50%">
                                <Image src='./img/yaaaa.jpg' alt="profile"/>
                            </Box>

                            <Menu>
                                <MenuButton as={Link}>
                                    vasemkin
                                    {/* {user.uuid} */}
                                </MenuButton>
                                <MenuList>
                                    <RouterLink to="/">
                                        <MenuItem>Главная</MenuItem>
                                    </RouterLink>
                                    <MenuItem>Выйти</MenuItem>
                                </MenuList>
                            </Menu>

                        </Flex>
            
            </Flex>    

        </Box>
        )
}

export default Header