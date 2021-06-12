import { Th } from '@chakra-ui/react'

export default function CustomTh (props) {
    return(
        <Th 
        fontSize="14px" 
        textTransform="none" 
        color="rgba(39, 39, 39, 1);"
        fontWeight="normal" 
        >{props.text}
        </Th>
    )
}