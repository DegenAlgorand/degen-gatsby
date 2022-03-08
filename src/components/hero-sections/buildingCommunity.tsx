import { Heading, Stack, Text, Button, Image, Flex, Box, createIcon, Link } from '@chakra-ui/react';
import React from 'react';  
import DegenTokenLogo from '../logos/degenTokenLogo';

const BuildingCommunity = () => (
    <Stack
    align={'center'}
    spacing={{ base: 8, md: 10 }}
    py={{ base: 20, md: 28 }}
    direction={{ base: 'column', md: 'row' }}>
    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
        <Text
          as={'span'}
          position={'relative'}
          _after={{
            content: "''",
            width: 'full',
            height: '2%',
            position: 'absolute',
            bottom: 1,
            left: 0,
            bg: 'green.400',
          }}>
          Decentralized Community on Algorand.
        </Text>
        <br />
        <Text as={'span'}>
        </Text>
      </Heading>
      <Text color={'gray.500'}>
      100% of Degen initially went into the Tinyman liquidity pool and no 
      Degen was withheld for the team. In fact, there is no predetermined 'team', 
      Degen token holders will have a say in determining the direction of Degen. 
      We are bootstrapping a community, Degen Token is our governance.
      </Text>
      <Stack
        spacing={{ base: 4, sm: 6 }}
        direction={{ base: 'column', sm: 'row' }}>
        <Link href='https://discord.gg/yfzG2NX4Vz'>
          <Button
            rounded={'full'}
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            colorScheme={'green'}
            bg={'green.400'}
            _hover={{ bg: 'green.500' }}>
            Join Discord
          </Button>
        </Link>
      </Stack>
    </Stack>
    <Flex
      flex={1}
      justify={'center'}
      align={'center'}
      position={'relative'}
      w={'full'}>
        <DegenTokenLogo size={300} />
    </Flex>
  </Stack>
)

export default BuildingCommunity;
