import { Button, Center, Heading, VStack } from '@chakra-ui/react'
import * as React from 'react'

export default function ReducerHook(): JSX.Element {
  const [state, dispatch] = React.useReducer(counterReducer, { count: 0 })

  return (
    <Center p={6}>
      <VStack p={3}>
        <Heading>{state.count}</Heading>
        <Button
          variant="solid"
          background="brand.800"
          onClick={() => {
            dispatch({ type: CountActionKind.INCREASE, payload: 1 })
          }}
        >
          Click Here
        </Button>
      </VStack>
    </Center>
  )
}
// An enum with all the types of actions to use in our reducer
enum CountActionKind {
  INCREASE,
  DECREASE,
}

// An interface for our actions
interface CountAction {
  type: CountActionKind
  payload: number
}

// An interface for our state
interface CountState {
  count: number
}

// Our reducer function that uses a switch statement to handle our actions
function counterReducer(state: CountState, action: CountAction) {
  const { type, payload } = action
  switch (type) {
    case CountActionKind.INCREASE:
      return { count: state.count + payload }
    case CountActionKind.DECREASE:
      return { count: state.count - payload }
    default:
      return state
  }
}
