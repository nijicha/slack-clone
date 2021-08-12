import * as React from 'react'
import { Box, Button, Center } from '@chakra-ui/react'

const TryStateHook = () => {
  const [counter, setCounter] = React.useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  return (
    <Center p={6}>
      <Box>
        <Button onClick={increment}>+</Button>
        <Box as="span" w="200px" mx="24px">
          {counter}
        </Box>
        <Button onClick={decrement}>-</Button>
      </Box>
    </Center>
  )
}

export default TryStateHook
