import React from 'react'
import { Link } from 'react-router-dom'
import {
  Flex,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
  Spacer,
  Image,
  Text,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

import firebase from '../../../config/firebase'

interface RegisterForm {
  email: string
  password: string
  passwordConfirmation: string
}

const Register = () => {
  const [formState, setFormState] = React.useState<'initial' | 'submitting' | 'success'>('initial')
  const [error, setError] = React.useState(false)

  const [state, setState] = React.useState<RegisterForm>({
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setError(false)
    setFormState('submitting')

    firebase
      .auth()
      .createUserWithEmailAndPassword(state.email, state.password)
      .then(createdUser => {
        setFormState('success')

        console.log(createdUser)
      })
      .catch(err => {
        setError(true)
        setFormState('initial')

        console.error(err)
      })
  }

  return (
    <Stack minH="100vh" direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1}>
        <Image
          alt="Login Image"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
        />
      </Flex>
      <Flex as="form" p={8} flex={1} align="center" justify="center" onSubmit={handleSubmit}>
        <Stack spacing={4} w="full" maxW="md">
          <Heading fontSize="2xl">Register</Heading>

          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={handleChange} />
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={handleChange} />
          </FormControl>

          <FormControl id="passwordConfirmation">
            <FormLabel>Password Confirmation</FormLabel>
            <Input type="password" onChange={handleChange} />
          </FormControl>

          <Spacer />

          <Button
            variant="solid"
            type={formState === 'success' ? 'button' : 'submit'}
            colorScheme={formState === 'success' ? 'green' : 'blue'}
            isLoading={formState === 'submitting'}
          >
            {formState === 'success' ? <CheckIcon /> : 'Register'}
          </Button>

          <Divider />

          <Flex p={2} align="center" justify="center" border="1px" borderRadius={4}>
            <Text>
              Already have an account? &nbsp;
              <Link to="/login">Login</Link>
            </Text>
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  )
}

export default Register
