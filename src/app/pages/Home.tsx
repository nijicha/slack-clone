import { Box, Code, Grid, HStack, Icon, Link, Text, VStack } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaVimeoSquare, FaWordpressSimple } from 'react-icons/fa'

import { ColorModeSwitcher } from '../components/ColorModeSwitcher'
import { Logo } from '../components/Logo'

const Home = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <VStack spacing={8}>
        <Logo h="40vmin" pointerEvents="none" />
        <Text>
          Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
        </Text>
        <Link color="teal.500" href="https://chakra-ui.com" fontSize="2xl" target="_blank" rel="noopener noreferrer">
          Learn Chakra
        </Link>
        <HStack>
          <Icon as={FaFacebook} />
          <Icon as={FaVimeoSquare} />
          <Icon as={FaWordpressSimple} />
        </HStack>
      </VStack>
    </Grid>
  </Box>
)

export default Home
