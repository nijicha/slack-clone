import * as React from 'react'
import { Box, Grid, VStack } from '@chakra-ui/react'

const Register = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <VStack spacing={8}>
        <h1>Register</h1>

        <Box as="button" borderRadius="md" bg="tomato" color="white" px={4} h={8}>
          Button
        </Box>
      </VStack>
    </Grid>
  </Box>
)

export default Register
