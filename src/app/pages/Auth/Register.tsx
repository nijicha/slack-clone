import {
  Alert,
  AlertIcon,
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
import { FormErrorsMsg } from '../../types/common/form'
import { FirebaseAuthResponse } from '../../types/vendor/firebase'

interface RegisterFormState {
  email: string
  password: string
  passwordConfirmation: string
  formErrors: Array<FormErrorsMsg>
  firebaseResponse: FirebaseAuthResponse
}

const Register = () => {
  const [state, setState] = React.useState<RegisterFormState>({
    email: '',
    password: '',
    passwordConfirmation: '',
    formErrors: [],
    firebaseResponse: {},
  })
  const [formState, setFormState] = React.useState<'initial' | 'submitting' | 'success'>('initial')
  const [isShowPassword, setIsShowPassword] = React.useState(false)

  const isFormValid = () => {
    setState(prevState => ({ ...prevState, formErrors: [] }))

    if (isFormEmpty(state)) {
      setState(prevState => ({
        ...prevState,
        formErrors: [...prevState.formErrors, { message: 'Fill in all fields' }],
      }))
      return false
    }

    if (!isPasswordValid(state)) {
      setState(prevState => ({
        ...prevState,
        formErrors: [...prevState.formErrors, { message: 'Password is invalid' }],
      }))
      return false
    }

    return true
  }

  const isFormEmpty = ({ email, password, passwordConfirmation }: Omit<RegisterFormState, 'formErrors'>) => {
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
    setState(prevState => ({ ...prevState, [event.target.id]: event.target.value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    setIsShowPassword(false)

    if (isFormValid()) {
      setState(prevState => ({
        ...prevState,
        formErrors: [],
        firebaseResponse: {},
      }))
      setFormState('submitting')

      firebase
        .auth()
        .createUserWithEmailAndPassword(state.email, state.password)
        .then(response => {
          setState(prevState => ({ ...prevState, firebaseResponse: { response } }))
          setFormState('success')
          return true
        })
        .catch(error => {
          setState(prevState => ({ ...prevState, firebaseResponse: { error } }))
          setFormState('initial')
        })
    } else {
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
          {state.formErrors.length > 0 && (
            <Box>
              <Alert status="error" flexDirection="column" alignItems="flex-start">
                <Flex>
                  <AlertIcon />
                  There was an error processing your request.
                  <CloseButton
                    position="absolute"
                    right="8px"
                    top="8px"
                    onClick={() => {
                      setState(prevState => ({ ...prevState, formErrors: [] }))
                      setFormState('initial')
                    }}
                  />
                </Flex>
                <Box px="1rem" pt={3}>
                  <UnorderedList>
                    {state.formErrors.map((formError, index) => {
                      return <ListItem key={index}>{formError.message}</ListItem>
                    })}
                  </UnorderedList>
                </Box>
              </Alert>
            </Box>
          )}

          <Heading fontSize="2xl">Register</Heading>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              value={state.email}
              type="email"
              placeholder="Email"
              autoFocus
              borderRadius={20}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                value={state.password}
                type={isShowPassword ? 'text' : 'password'}
                placeholder="Password"
                borderRadius={20}
                onChange={handleChange}
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
                value={state.passwordConfirmation}
                type={isShowPassword ? 'text' : 'password'}
                placeholder="Password Confirmation"
                borderRadius={20}
                onChange={handleChange}
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
