import * as React from 'react'
import { Container, Divider, Heading } from '@chakra-ui/react'
import StateHook from './01_StateHook'
import AnotherStateHook from './02_AnotherStateHook'
import ReducerHook from './03_ReducerHook'

const TryReactHooks = () => {
  return (
    <Container maxW="7xl" p={12}>
      <Heading>1. Counters (เคาเตอร์)</Heading>
      <StateHook />

      <Divider my={6} />

      <Heading>2. Input (อินพุต)</Heading>
      <AnotherStateHook />

      <Divider my={6} />

      <Heading>3. Reducers Hook (รีดิวเซอร์ ฮุค)</Heading>
      <ReducerHook />
    </Container>
  )
}

export default TryReactHooks
