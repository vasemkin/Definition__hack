import React from 'react'
import { 
    Flex,
    Box,
    Heading,
    Text,
    Image
} from "@chakra-ui/react"


function Balance() {
    return(
        <Flex 
        w="30%" 
        justify="space-between" 
        align="center" 
        bg="#fff" p="20px 0 20px 20px" borderRadius="5px">
            <Box>
                <Heading 
                as="h5" 
                fontSize="16px" 
                color="rgba(120, 120, 120, 1)" 
                fontWeight="400"
                mb="0.25rem"
                >
                    Общий счет
                </Heading>
                
                <Text
                fontWeight="500"
                fontSize="24px" 
                >$145400
                </Text>
            </Box>

            <Flex
            bg="#EAF8E9"
            p="14px"
            align="center"
            borderRadius="15px 0px 0px 15px" 
            >
                <Box w="16px" h="12px" mr="0.5rem" mt="2px">
                    <Image src='./img/curvy.svg' alt="icon"/>
                </Box>
                <Text color="rgba(37, 175, 113, 1)" fontSize="16px">+12%</Text>
            </Flex>
        </Flex>

    )
}

export default Balance