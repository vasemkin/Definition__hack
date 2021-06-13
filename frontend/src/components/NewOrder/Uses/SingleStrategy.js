import React from 'react'

import { 
    Flex,
    Box,
    Image,
    Text,
    Grid,
    Button,
    useDisclosure
} from "@chakra-ui/react"

import PlaceOrderDrawer from "components/NewOrder/Uses/PlaceOrderDrawer"

function SingleStrategy(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <Box>
            <PlaceOrderDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>

            <Grid borderTop="1px solid rgba(236, 236, 236, 1)" p="20px" templateColumns="repeat(2, 1fr)" gap="2rem">

                    {props.items.map((item) => {
                        return(
                            <Flex key={Math.random()} justify="start" align="center">
                                <Box w="25px" h="25px" mr="1rem">
                                    <Image w="100%" src={item.imageSrc} alt="icon" />
                                </Box>
        
                                <Box>
                                    <Text
                                    color="rgba(120, 120, 120, 1)"
                                    fontSize="14px"
                                    >{item.title}</Text>
        
                                    <Text
                                    color="rgba(39, 39, 39, 1)"
                                    fontSize="12px"
                                    >{item.description}
                                    </Text>
                                </Box>
                            </Flex>
                        )
                    })}
            </Grid>

            <Flex justify="flex-end" p="20px" borderTop="1px solid rgba(236, 236, 236, 1)">
                <Button variant="main" size="sm" onClick={onOpen}>Применить</Button>
            </Flex>
        </Box>
    )
}

export default SingleStrategy