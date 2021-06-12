import { 
    Flex,
    Box,
    Image,
    Text
} from "@chakra-ui/react"
import React from 'react'
import classes from 'components/Common/Layout/InnerLink.module.css'

function InnerLink(props) {
    return(
        <Box 
        className={ props.isActive ? classes.active : '' } 
        as="button"
        p="28px">
            <Flex justify="start" align="center">
                <Box w="12px" h="12px" mt={props.imageOffet} mr="0.5rem">
                    <Image src={props.imagePath} alt="icon"/>
                </Box>
                <Text fontSize="14px">{props.text}</Text>
            </Flex>
        </Box>
    )
}

export default InnerLink