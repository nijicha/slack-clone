import { Button, Center, FormControl, FormHelperText, FormLabel, Input, SimpleGrid } from '@chakra-ui/react'
import * as React from 'react'

interface ProfileState {
  firstName: string
  lastName: string
  isLoading: boolean
}

const TryAnotherStateHook = () => {
  const initialState: ProfileState = {
    firstName: '',
    lastName: '',
    isLoading: false,
  }
  const [values, setValues] = React.useState(initialState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    setValues({ ...values, isLoading: true })
    setTimeout(() => {
      setValues({ ...values, isLoading: false })

      // eslint-disable-next-line no-console
      console.log(values)
    }, 3000)
  }

  return (
    <Center p={6}>
      <SimpleGrid columns={2} spacing={10}>
        <FormControl id="firstName" isRequired>
          <FormLabel>First Name</FormLabel>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            variant="filled"
            value={values.firstName}
            onChange={handleChange}
          />
          <FormHelperText>e.g. Clare, John</FormHelperText>
        </FormControl>

        <FormControl id="lastName" isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            variant="filled"
            value={values.lastName}
            onChange={handleChange}
          />
          <FormHelperText>e.g. Arison, Doe</FormHelperText>
        </FormControl>
      </SimpleGrid>
      <Button
        type="submit"
        onClick={handleSubmit}
        isLoading={values.isLoading}
        loadingText="Logging in..."
        colorScheme="teal"
        variant="solid"
        mb={2}
      >
        Log in
      </Button>
    </Center>
  )
}

export default TryAnotherStateHook
