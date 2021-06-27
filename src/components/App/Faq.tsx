
import React from 'react';
import { Flex, Heading} from '@chakra-ui/react';

export default function FAQ() {
    return (
    <Flex
    align="center"
    justifyContent="space-between"
    w="100%"
    flex="1"
    flexDir="column"
    bg="brand.background"
  >
    <Flex flexDir="column" align="center" maxW="600px" pt={20}>
    
      <Heading color="white" size="xl" pb={8}>
       Gangogh clean NFTs is built with Open Minter, an open source Tezos based dApp for minting NFTs. <br/>
       Due to it’s proof-of-stake design, which requires millions of times less energy consumption (and therefore has a miniscule comparative carbon-footprint)
      </Heading>
      <Flex minW="400px" justify="center" pb={20}>
        
      </Flex>
    </Flex>
    </Flex>
    )
}