import { Heading, Stack, Text, Button, Flex, Link, Hide } from '@chakra-ui/react';
import React from 'react';  
import DegenTokenLogo from '../logos/degenTokenLogo';

const BuildingCommunity = () => (
  <Stack
    align={'center'}
    spacing={{ base: 8, md: 10 }}
    py={{ base: 10, md: 28 }}
    direction={{ base: 'column', md: 'row' }}>
    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: '4xl', sm: '4xl', lg: '6xl' }}>
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
            bg: 'purple.400',
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
      We are bootstrapping a community, Degen Token is our governance token.
      </Text>
      <Stack
        spacing={{ base: 4, sm: 6 }}
        direction={{ base: 'column', sm: 'row' }}>
        <Link href='https://discord.gg/yfzG2NX4Vz' _hover={{ textDecoration: 'none' }}>
          <Button
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            colorScheme={'purple'}
            bg={'purple.400'}
            _hover={{ bg: 'purple.500' }}
            w={['100%']}>
            Join Discord
          </Button>
        </Link>
        <Link href='https://app.pact.fi/swap?pair=ALGO0/DEGEN+TOKEN417708610(100)' _hover={{ textDecoration: 'none' }}>
          <Button
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            colorScheme={'purple'}
            bg={'green.400'}
            _hover={{ bg: 'green.500' }}
            w={['100%']}>
            Buy on PactFi
          </Button>
        </Link>
      </Stack>
    </Stack>
    <Hide below={'md'}>
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}>
          <DegenTokenLogo size={300} />
      </Flex>
    </Hide>
  </Stack>
)

export default BuildingCommunity;
