import React from "react"

import { 
    Box,
    Text
} from "@chakra-ui/react"

import Strategies from "components/NewOrder/Uses/Strategies"
import BackToList from "components/NewOrder/Uses/BackToList"

function NewOrder () {

    return (
        <Box>
            <BackToList />
            <Box 
            borderRadius="5px" 
            color="#fff" 
            mt="2rem" 
            p="20px" 
            bgImage="./img/banner.svg"
            bgPos="center"
            bgSize="cover"
            bgRepeat="no-repeat">
                <Text>Выберите подходящие под вас стратегии</Text>
            </Box>
            <Strategies />
        </Box>
    )
}

export default NewOrder