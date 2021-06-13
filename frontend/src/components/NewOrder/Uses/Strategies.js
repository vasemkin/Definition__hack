import React from 'react'

import { 
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
} from "@chakra-ui/react"

import SingleStrategy from "components/NewOrder/Uses/SingleStrategy"

function Strategies() {
    return(
        <Box mt="2rem">

            <Accordion allowToggle>

                <AccordionItem border="none" borderRadius="15px" bg="#fff" mb="2rem">
                    <h2>
                        <AccordionButton>
                            <Box flex="1" p="20px 30px" borderRadius="15px" textAlign="left">
                                Premium
                            </Box>
                            <AccordionIcon />

                        </AccordionButton>
                    </h2>

                    <AccordionPanel>
                        <SingleStrategy 
                        items={[
                            {
                                title : 'Creation',
                                description : 'creates order with market price',
                                imageSrc: './img/order.svg'
                            },
                            {
                                title : 'Anti-volatility',
                                description : 'anti-volatility rule: if market is volatile right now, we will avoid filling your order',
                                imageSrc: './img/margin.svg'
                            },
                            {
                                title : 'No margin',
                                description : 'margin trading: we provide you with margin to increase your trade profits',
                                imageSrc: './img/order.svg'
                            },
                            {
                                title : 'Combined',
                                description : 'combination of our best stategies into one',
                                imageSrc: './img/margin.svg'
                            }
                        ]}/>
                    </AccordionPanel>
                </AccordionItem>


                <AccordionItem border="none" borderRadius="15px" bg="#fff" mb="2rem">
                    <h2>
                        <AccordionButton>
                            <Box flex="1" p="20px 30px" borderRadius="15px" textAlign="left">
                                Get market price
                            </Box>
                            <AccordionIcon />

                        </AccordionButton>
                    </h2>

                    <AccordionPanel>
                        <SingleStrategy items={[
                            {
                                title : 'Price',
                                description : 'we get the current market price to create the order',
                                imageSrc: './img/order.svg'
                            }
                        ]}/>
                    </AccordionPanel>
                </AccordionItem>


                <AccordionItem border="none" borderRadius="15px" bg="#fff" mb="2rem">
                    <h2>
                        <AccordionButton>
                            <Box flex="1" p="20px 30px" borderRadius="15px" textAlign="left">
                                Anti-volatility
                            </Box>
                            <AccordionIcon />

                        </AccordionButton>
                    </h2>

                    <AccordionPanel>
                        <SingleStrategy items={[
                            {
                                title : 'Chainlink',
                                description : 'we monitor market volatility by utilizing chainlink data',
                                imageSrc: './img/margin.svg'
                            }
                        ]}/>
                    </AccordionPanel>
                </AccordionItem>


                <AccordionItem border="none" borderRadius="15px" bg="#fff" mb="2rem">
                    <h2>
                        <AccordionButton>
                            <Box flex="1" p="20px 30px" borderRadius="15px" textAlign="left">
                                Margin trading
                            </Box>
                            <AccordionIcon />

                        </AccordionButton>
                    </h2>

                    <AccordionPanel>
                        <SingleStrategy items={[
                            {
                                title : 'Aave',
                                description : 'aave helps us take margin and provide a shoulder',
                                imageSrc: './img/order.svg'
                            }
                        ]}/>
                    </AccordionPanel>
                </AccordionItem>

            
            </Accordion>

        </Box>
    )
}

export default Strategies