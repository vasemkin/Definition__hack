import React from 'react'
import { 
    InputGroup,
    Input,
    InputLeftElement,
    Image,
    Box
} from "@chakra-ui/react"

function TableSearch() {
    return(
        <Box
            bg="#fff"
            p="20px"
            w="100%"
            borderRadius="5px"
            >
                <InputGroup>
                    <InputLeftElement
                    pointerEvents="none"
                    children={
                        <Box w="12px" h="12px">
                            <Image src='./img/search.svg' alt="icon"/>
                        </Box>
                    }
                    />
                    <Input 
                    type="text" 
                    variant="filled"
                    bg="#fff"
                    placeholder="Search" />
                </InputGroup>
        </Box>
    )
}

export default TableSearch