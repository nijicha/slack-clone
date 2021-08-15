import React from 'react'
import { Flex, Heading, VStack } from '@chakra-ui/react'
import Card from '../../components/examples/Card'

const Register = () => (
  <Flex height="100vh" alignItems="center" justifyContent="center">
    <VStack>
      <Heading>Register</Heading>
      <Card />
    </VStack>
  </Flex>
)

export default Register
