import React from "react";

import { 
    Flex,
    Box,
    Image,
    Text
} from "@chakra-ui/react"

import {
    Link as RouterLink
} from "react-router-dom";

function BackToList() {
    return(<Box 
            w="100%"
            borderRadius="15px"
            bg="#fff"
            p="20px"
            >

                <RouterLink to="/wallet">
                    <Flex 
                    align="center"
                    >
                        <Box 
                        position="relative"
                        bg="none"
                        w="20px"
                        h="auto"
                        p="4px"
                        mr="0.5rem"
                        >
                            <Image src='./img/arrowleft.svg' alt="back"/>
                        </Box>
                        <Text
                        color="rgba(120, 120, 120, 1)"
                        fontSize="14px"
                        >Обратно к списку</Text>
                    </Flex>
                </RouterLink>
        </Box>
    )
}

export default BackToList