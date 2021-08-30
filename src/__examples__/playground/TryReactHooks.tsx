import * as React from 'react'
import { Container, Divider, Heading } from '@chakra-ui/react'
import StateHook from './01_StateHook'
import AnotherStateHook from './02_AnotherStateHook'
import ReducerHook from './03_ReducerHook'
import EffectHook from './04_EffectHook'
import ReactQuery from './05_ReactQuery'
import RefHook from './06_RefHook'

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

      <Divider my={6} />

      <Heading>4. useEffect Hook</Heading>
      <EffectHook />

      <Divider my={6} />

      <Heading>5. ReactQuery</Heading>
      <ReactQuery />

      <Divider my={6} />

      <Heading>6. React useRef</Heading>
      <RefHook />
    </Container>
  )
}

export default TryReactHooks
