import { CheckIcon } from '@chakra-ui/icons'
import { Button, Center, Flex, FormControl, FormHelperText, FormLabel, Input, Stack } from '@chakra-ui/react'
import * as React from 'react'

const RefHook = () => {
  const [formState, setFormState] = React.useState<'initial' | 'submitting' | 'success'>('initial')
  const [error, setError] = React.useState(false)

  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setError(false)
    setFormState('submitting')

    setTimeout(() => {
      if (inputRef?.current?.value === 'failed') {
        setError(true)
        setFormState('initial')
        return
      }

      setFormState('success')
    }, 1000)
  }

  return (
    <Center>
      <Flex as="form" direction={{ base: 'column', md: 'row' }} p={12} onSubmit={handleSubmit}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Stack direction={{ base: 'column', md: 'row' }}>
            <Input id="name" type="text" placeholder="Name" aria-labelledby="Name" variant="filled" ref={inputRef} />
            <Button
              w="100%"
              variant="solid"
              type={formState === 'success' ? 'button' : 'submit'}
              colorScheme={formState === 'success' ? 'green' : 'blue'}
              isLoading={formState === 'submitting'}
            >
              {formState === 'success' ? <CheckIcon /> : 'Change Name'}
            </Button>
          </Stack>
          <FormHelperText mt={2} color={error ? 'red.500' : 'gray.500'}>
            {error ? 'Oh no an error occured! 😢 Please try again later.' : "You won't receive any spam! ✌️"}
          </FormHelperText>
        </FormControl>
      </Flex>
    </Center>
  )
}

export default RefHook
