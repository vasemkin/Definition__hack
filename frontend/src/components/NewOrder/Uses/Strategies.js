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
                                Ебем рыночек 24/7 бесплатные деньги
                            </Box>
                            <AccordionIcon />

                        </AccordionButton>
                    </h2>

                    <AccordionPanel>
                        <SingleStrategy items={[
                            {
                                title : 'Создание',
                                description : 'Создает два ордера'
                            },
                            {
                                title : 'Покупка дешевле',
                                description : 'Ордер на покупку чуть дешевле рыночной цены'
                            },
                            {
                                title : 'Увеличиваем позицию',
                                description : 'Увеличиваем вашу позицию за счет моментального займа(margin)'
                            },
                            {
                                title : 'Продажа дороже',
                                description : 'Ордер на продажу чуть дороже рыночной цены'
                            },
                            {
                                title : 'Безопасность',
                                description : 'при высокой волатильности ни один из ордеров не исполняется'
                            }
                        ]}/>
                    </AccordionPanel>
                </AccordionItem>


                <AccordionItem border="none" borderRadius="15px" bg="#fff" mb="2rem">
                    <h2>
                        <AccordionButton>
                            <Box flex="1" p="20px 30px" borderRadius="15px" textAlign="left">
                                Очередная суперская стратегия на рынке
                            </Box>
                            <AccordionIcon />

                        </AccordionButton>
                    </h2>

                    <AccordionPanel>
                        <SingleStrategy items={[
                            {
                                title : 'Создание',
                                description : 'Создает два ордера'
                            },
                            {
                                title : 'Покупка дешевле',
                                description : 'Ордер на покупку чуть дешевле рыночной цены'
                            }
                        ]}/>
                    </AccordionPanel>
                </AccordionItem>

            
            </Accordion>

        </Box>
    )
}

export default Strategies