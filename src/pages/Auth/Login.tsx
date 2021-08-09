import * as React from 'react'
import {
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

import { FaEye, FaEyeSlash } from 'react-icons/fa'

export default function Login() {
  const [isLoading, setIsLoading] = React.useState(false)
  const { toggleColorMode } = useColorMode()

  const styles = {
    formBackground: useColorModeValue('gray.200', 'gray.700'),
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
  }

  const handleButtonClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={styles.formBackground} border="1px" p={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>
        <Input type="email" placeholder="E-mail or username" variant="filled" mb={4} />
        <PasswordInput />
        <Button
          type="submit"
          onClick={handleButtonClick}
          isLoading={isLoading}
          loadingText="Logging in..."
          colorScheme="teal"
          variant="solid"
          mb={2}
        >
          Log in
        </Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Flex>
  )
}

const PasswordInput = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup>
      <Input type={show ? 'text' : 'password'} placeholder="Password" variant="filled" mb={6} pr="3rem" />
      <InputRightElement onClick={handleClick} width="3rem">
        {show ? <Icon as={FaEyeSlash} /> : <Icon as={FaEye} />}
      </InputRightElement>
    </InputGroup>
  )
}
