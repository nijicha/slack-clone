import { CheckIcon } from '@chakra-ui/icons'
import {
  Alert,
  AlertIcon,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'
import { Link } from 'react-router-dom'

import firebase from '../../../config/firebase'

interface RegisterFormState {
  email: string
  password: string
  passwordConfirmation: string
  errors: Array<string>
}

const Register = () => {
  const [state, setState] = React.useState<RegisterFormState>({
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: [],
  })

  const [formState, setFormState] = React.useState<'initial' | 'submitting' | 'success'>('initial')
  const [isError, setIsError] = React.useState(false)

  const isFormValid = () => {
    const errors = [...state.errors]

    if (isFormEmpty(state)) {
      errors.push('Fill all ')
      setState({ ...state, errors })
      return false
    }
    if (!isPasswordValid(state)) {
      setState({ ...state, errors: ['Password not match'] })
      return false
    }
    return true
  }

  const isFormEmpty = ({ email, password, passwordConfirmation }: RegisterFormState) => {
    return !email.length || !password.length || !passwordConfirmation.length
  }

  const isPasswordValid = ({
    password,
    passwordConfirmation,
  }: Pick<RegisterFormState, 'password' | 'passwordConfirmation'>) => {
    // TODO: should not hard code password length 6 here
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false
    }
    return password === passwordConfirmation
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.id]: e.target.value })

    if (['password', 'passwordConfirmation'].includes(e.target.id)) {
      // eslint-disable-next-line
      console.log('will do isPasswordValid()')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!isFormValid) {
      return
    }

    setIsError(false)
    setFormState('submitting')

    firebase
      .auth()
      .createUserWithEmailAndPassword(state.email, state.password)
      .then(createdUser => {
        setFormState('success')

        // eslint-disable-next-line
        console.log(createdUser)
      })
      .catch(err => {
        setIsError(true)
        setFormState('initial')

        // eslint-disable-next-line
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
          {isError && (
            <Alert status="error">
              <AlertIcon />
              There was an error processing your request
            </Alert>
          )}

          <Heading fontSize="2xl">Register</Heading>

          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={handleChange} borderRadius={20} />
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={handleChange} borderRadius={20} />
          </FormControl>

          <FormControl id="passwordConfirmation">
            <FormLabel>Password Confirmation</FormLabel>
            <Input type="password" onChange={handleChange} borderRadius={20} />
          </FormControl>

          <Spacer />

          <Button
            variant="solid"
            borderRadius={20}
            type={formState === 'success' ? 'button' : 'submit'}
            colorScheme={formState === 'success' ? 'green' : 'blue'}
            isLoading={formState === 'submitting'}
          >
            {formState === 'success' ? <CheckIcon /> : 'Register'}
          </Button>

          <Divider />

          <Flex p={2} align="center" justify="center" boxShadow="base" borderRadius={20}>
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
