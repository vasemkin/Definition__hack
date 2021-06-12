import React, { useState } from 'react'
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
    Checkbox
} from '@chakra-ui/react'

function OrderDrawer(props) {
  
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
                        <Select variant="flushed" iconColor="#D2D2D2" w="100%">
                            <option value="ETH">ETH</option>
                            <option value="DAI">DAI</option>
                            <option value="BTC">BTC</option>
                        </Select>
                    </Box>  
                    
                    <Box w="49%">
                        <Text
                        color="rgba(120, 120, 120, 1)"
                        fontSize="14px"
                        >To</Text>
                        <Select variant="flushed" iconColor="#D2D2D2" w="100%">
                            <option value="ETH">ETH</option>
                            <option value="DAI">DAI</option>
                            <option value="BTC">BTC</option>
                        </Select>
                    </Box>  
                </Flex>

                <Box mt="2rem">
                    <Text
                    color="rgba(120, 120, 120, 1)"
                    fontSize="14px"
                    >Quantity from
                    </Text>
                    <Input variant="flushed" />
                </Box>

                <Box mt="2rem">
                    <Text
                    color="rgba(120, 120, 120, 1)"
                    fontSize="14px"
                    >Limit price
                    </Text>
                    <Input variant="flushed" />
                </Box>

                <Box mt="2rem">
                    <Text
                    color="rgba(120, 120, 120, 1)"
                    fontSize="14px"
                    >Margin
                    </Text>
                    <Input variant="flushed" />
                </Box>

                <Box mt="2rem">
                    <Checkbox defaultIsChecked>Do not execute order if price is volatile</Checkbox>
                </Box>

                <Box mt="1rem">
                    <Checkbox defaultIsChecked>Use margin</Checkbox>
                </Box>

                <Box mt="1rem">
                    <Checkbox defaultIsChecked>Buy at market price</Checkbox>
                </Box>

            </DrawerBody>
  
            <DrawerFooter>
              <Button variant="main" w="100%" onClick={props.onClose}>
                Отправить
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default OrderDrawer