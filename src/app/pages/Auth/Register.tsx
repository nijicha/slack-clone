import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  ListItem,
  Spacer,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaCheckCircle, FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link as RouteLink } from 'react-router-dom'

import firebase from '../../../config/firebase'

interface ErrorMsg {
  message: string
}

interface RegisterFormState {
  email: string
  password: string
  passwordConfirmation: string
  errors: Array<{ message: string }>
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
  const [isShowPassword, setIsShowPassword] = React.useState(false)

  const isFormValid = () => {
    const errors: Array<ErrorMsg> = []

    if (isFormEmpty(state)) {
      errors.push({ message: 'Fill in all fields' })
      setState({ ...state, errors })
      return false
    }

    if (!isPasswordValid(state)) {
      errors.push({ message: 'Password is invalid' })
      setState({ ...state, errors })
      return false
    }

    return true
  }

  const isFormEmpty = ({ email, password, passwordConfirmation }: Omit<RegisterFormState, 'errors'>) => {
    return !email.length || !password.length || !passwordConfirmation.length
  }

  const isPasswordValid = ({
    password,
    passwordConfirmation,
  }: Pick<RegisterFormState, 'password' | 'passwordConfirmation'>) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false
    }
    return password === passwordConfirmation
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (isFormValid()) {
      setIsError(false)
      setFormState('submitting')

      firebase
        .auth()
        .createUserWithEmailAndPassword(state.email, state.password)
        .then(_ => {
          setFormState('success')
          return true
        })
        .catch(_ => {
          setIsError(true)
          setFormState('initial')
        })
    } else {
      setIsError(true)
      setFormState('initial')
    }
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
          {isError && state.errors.length > 0 && (
            <Alert status="error">
              <AlertIcon />
              <Box flex="1">
                <AlertTitle>There was an error processing your request.</AlertTitle>
                <AlertDescription>
                  <UnorderedList>
                    {state.errors.map((error, index) => {
                      return <ListItem key={index}>{error.message}</ListItem>
                    })}
                  </UnorderedList>
                </AlertDescription>
              </Box>
              <CloseButton
                position="absolute"
                right="8px"
                top="8px"
                onClick={() => {
                  setIsError(false)
                  setFormState('initial')
                }}
              />
            </Alert>
          )}

          <Heading fontSize="2xl">Register</Heading>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              onChange={handleChange}
              value={state.email}
              type="email"
              placeholder="Email"
              borderRadius={20}
              autoFocus
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                onChange={handleChange}
                value={state.password}
                type={isShowPassword ? 'text' : 'password'}
                placeholder="Password"
                borderRadius={20}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  background="transparent"
                  borderRadius={20}
                  onClick={() => {
                    setIsShowPassword(!isShowPassword)
                  }}
                >
                  {isShowPassword ? <Icon as={FaEye} /> : <Icon as={FaEyeSlash} />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl id="passwordConfirmation" isRequired>
            <FormLabel>Password Confirmation</FormLabel>
            <InputGroup>
              <Input
                onChange={handleChange}
                value={state.passwordConfirmation}
                type={isShowPassword ? 'text' : 'password'}
                placeholder="Password Confirmation"
                borderRadius={20}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  background="transparent"
                  borderRadius={20}
                  onClick={() => {
                    setIsShowPassword(!isShowPassword)
                  }}
                >
                  {isShowPassword ? <Icon as={FaEye} /> : <Icon as={FaEyeSlash} />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Spacer />

          <Button
            variant="solid"
            borderRadius={20}
            type={formState === 'success' ? 'button' : 'submit'}
            colorScheme={formState === 'success' ? 'green' : 'blue'}
            isLoading={formState === 'submitting'}
          >
            {formState === 'success' ? <Icon as={FaCheckCircle} /> : 'Register'}
          </Button>

          <Divider />

          <Flex p={2} align="center" justify="center" borderRadius={20}>
            <RouteLink to="/login">
              {/* TODO: create Chakra color scheme for <Link /> */}
              <HStack>
                <Text>Already have an account?</Text>
                <Text color="blue.500">Login</Text>
              </HStack>
            </RouteLink>
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  )
}

export default Register
