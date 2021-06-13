import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postOrder } from '../../../store/actions/orderActions'
import { useSelector } from 'react-redux'

import {
    Drawer,
    DrawerContent,
    DrawerOverlay,
    DrawerBody,
    DrawerFooter,
    DrawerCloseButton,
    Button,
    Box,
    Text,
    Flex,
    Image,
    Select,
    Input,
    Checkbox,
    useToast
} from '@chakra-ui/react'

function OrderDrawer(props) {
    const wallet = useSelector(state => state.wallet)
    
    const toast = useToast()
    const dispatch = useDispatch()
    const [order, setOrder] = useState({
      from : 'WETH',
      to : 'WETH',
      quantityFrom : null,
      limitPrice : null,
      margin : null,
      enableAntiVolatility : true,
      useMargin : true,
      buyAtMarketPrice : true
    })

    const dispatchOrder = () => { 
      toast({
        position: "bottom",
        render: () => (
          <Box color="rgba(9, 107, 239, 1)" p="1rem" borderRadius="20px" textAlign="center" bg="#E8F7FF">
            Ордер успешно отправлен
          </Box>
        ),
        duration: 4000,
      })
      dispatch(postOrder(order))
    }

    return (
      <>
        <Drawer
          isOpen={props.isOpen}
          placement="right"
          size="sm"
          onClose={props.onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <Flex 
            p="30px 30px 30px 39px"
            align="center"
            borderBottom="1px solid rgba(236, 236, 236, 1)"
            >
                <Box 
                as={DrawerCloseButton}
                position="relative"
                bg="none"
                w="20px"
                h="auto"
                mt="-14px"
                p="4px"
                >
                    <Image src='./img/arrowleft.svg' alt="back"/>
                </Box>
                <Text
                color="rgba(120, 120, 120, 1)"
                fontSize="14px"
                >Обратно к стратегиям</Text>
            </Flex>
  
            <DrawerBody p="30px">

                <Flex justify="space-between">
                    <Box w="49%">
                        <Text
                        color="rgba(120, 120, 120, 1)"
                        fontSize="14px"
                        >From</Text>
                        <Select 
                        onChange={(e) => {
                          setOrder({
                            ...order,
                            from : e.target.value
                          })
                        }}
                        required variant="flushed" iconColor="#D2D2D2" w="100%">
                            {Object.values(wallet.tokens).length > 0 ?
                              Object.values(wallet.tokens).map((token) => {
                                return(<option value={token.name}>{token.name}</option>)
                              }) : null}
                        </Select>
                    </Box>  
                    
                    <Box w="49%">
                        <Text
                        color="rgba(120, 120, 120, 1)"
                        fontSize="14px"
                        >To</Text>
                        <Select 
                        onChange={(e) => {
                          setOrder({
                            ...order,
                            to : e.target.value
                          })
                        }}
                        required variant="flushed" iconColor="#D2D2D2" w="100%">
                          {Object.values(wallet.tokens).length > 0 ?
                              Object.values(wallet.tokens).map((token) => {
                                return(<option value={token.name}>{token.name}</option>)
                              }) : null}
                        </Select>
                    </Box>  
                </Flex>

                <Box mt="2rem">
                    <Text
                    color="rgba(120, 120, 120, 1)"
                    fontSize="14px"
                    >Quantity from
                    </Text>
                    <Input 
                    onChange={(e) => {
                      setOrder({
                        ...order,
                        quantityFrom : e.target.value
                      })
                    }}
                    required variant="flushed" />
                </Box>

                <Box mt="2rem">
                    <Text
                    color="rgba(120, 120, 120, 1)"
                    fontSize="14px"
                    >Limit price
                    </Text>
                    <Input 
                    onChange={(e) => {
                      setOrder({
                        ...order,
                        limitPrice : e.target.value
                      })
                    }}
                    required variant="flushed" />
                </Box>

                <Box mt="2rem">
                    <Text
                    color="rgba(120, 120, 120, 1)"
                    fontSize="14px"
                    >Margin
                    </Text>
                    <Input 
                    onChange={(e) => {
                      setOrder({
                        ...order,
                        margin : e.target.value
                      })
                    }}
                    required variant="flushed" />
                </Box>

                <Box mt="2rem">
                    <Checkbox 
                    onChange={(e) => {
                      setOrder({
                        ...order,
                        enableAntiVolatility : e.target.checked
                      })
                    }}
                    defaultIsChecked>Do not execute order if price is volatile</Checkbox>
                </Box>

                <Box mt="1rem">
                    <Checkbox 
                    onChange={(e) => {
                      setOrder({
                        ...order,
                        useMargin : e.target.checked
                      })
                    }}
                    defaultIsChecked>Use margin</Checkbox>
                </Box>

                <Box mt="1rem">
                    <Checkbox 
                    onChange={(e) => {
                      setOrder({
                        ...order,
                        buyAtMarketPrice : e.target.checked
                      })
                    }}
                    defaultIsChecked>Buy at market price</Checkbox>
                </Box>

            </DrawerBody>
  
            <DrawerFooter>
              <Button 
              onClick={dispatchOrder}
              variant="main" w="100%">
                Отправить
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default OrderDrawer