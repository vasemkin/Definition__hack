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
    Progress
} from '@chakra-ui/react'

function OrderDrawer(props) {

    const [progress, SetProgress] = useState({
        boughtCount : 40,
        totalCount : 50,
    })
  
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
                >Обратно к ордерам</Text>
            </Flex>
  
            <DrawerBody p="30px">
                <p>{props.order}</p>
                <br />

                <Box p="16px" bg="#F4F7F9" borderRadius="5px" mb="2rem">
                    <Flex justify="space-between" align="center">
                        <Flex>
                                <Text 
                                color="rgba(39, 39, 39, 0.78)"
                                fontSize="14px"
                                mr="1rem">
                                Куплено
                                </Text>

                                <Text
                                fontSize="14px"
                                >{progress.boughtCount}шт
                                </Text>
                        </Flex>

                            
                        <Flex>
                                <Text 
                                color="rgba(39, 39, 39, 0.78)"
                                fontSize="14px"
                                mr="1rem">
                                Всего
                                </Text>

                                <Text
                                fontSize="14px"
                                >{progress.totalCount}шт
                                </Text>
                        </Flex>
                    </Flex>

                    <Progress 
                    h="4px"
                    borderRadius="15px"
                    value={Math.floor((progress.boughtCount / progress.totalCount) * 100)} 
                    mt="1rem"
                    />
                </Box>

                <Box p="0 1rem" bg="#F4F7F9" borderRadius="5px">
                    <Box p="1rem 0" borderBottom="1px solid rgba(236, 236, 236, 1)">
                        <Text
                        color="rgba(39, 39, 39, 1)"
                        fontSize="14px"
                        mb="1rem"
                        >ETH</Text>

                        <Flex justify="space-between">
                            <Box w="50%">
                                <Text
                                color="rgba(39, 39, 39, 0.78)"
                                fontSize="12px"
                                >Количество</Text>

                                <Text
                                fontSize="12px"
                                color="rgba(39, 39, 39, 1)"
                                >{progress.boughtCount}шт</Text>
                            </Box>
                            
                            <Box w="50%">
                                <Text
                                color="rgba(39, 39, 39, 0.78)"
                                fontSize="12px"
                                >Цена</Text>
                                
                                <Text
                                fontSize="12px"
                                color="rgba(39, 39, 39, 1)"
                                >$145,134</Text>
                            </Box>
                        </Flex>
                    </Box>
                
                    <Box p="1rem 0">
                        <Text
                        color="rgba(39, 39, 39, 1)"
                        fontSize="14px"
                        mb="1rem"
                        >ETH</Text>

                        <Flex justify="space-between">
                            <Box w="50%">
                                <Text
                                color="rgba(39, 39, 39, 0.78)"
                                fontSize="12px"
                                >Количество</Text>

                                <Text
                                fontSize="12px"
                                color="rgba(39, 39, 39, 1)"
                                >{progress.boughtCount}шт</Text>
                            </Box>
                            
                            <Box w="50%">
                                <Text
                                color="rgba(39, 39, 39, 0.78)"
                                fontSize="12px"
                                >Цена</Text>
                                
                                <Text
                                fontSize="12px"
                                color="rgba(39, 39, 39, 1)"
                                >$145,134</Text>
                            </Box>
                        </Flex>
                    </Box>
                
                </Box>

            </DrawerBody>
  
            <DrawerFooter>
              <Button variant="primary" w="100%" onClick={props.onClose}>
                Отменить стратегию
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default OrderDrawer