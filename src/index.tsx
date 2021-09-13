import { Box, CSSReset, ChakraProvider, ColorModeScript, Text } from '@chakra-ui/react'
import * as React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './config/routes'
import theme from './config/theme'
import Fonts from './config/theme/Fonts'
import reportWebVitals from './lib/reportWebVitals'
import * as serviceWorker from './lib/serviceWorker'

const queryClient = new QueryClient()

const AppDevHint = () => {
  const envName = process.env.NODE_ENV === 'development' ? 'Development' : process.env.REACT_APP_DEV_ENV_NAME
  const colorScheme =
    process.env.NODE_ENV === 'development' ? 'yellow' : process.env.REACT_APP_DEV_ENV_COLOR_SCHEME ?? 'yellow'

  if (!envName) {
    return null
  }

  return (
    <Box zIndex="100" position="fixed" top="0" insetStart="0" insetEnd="0" h="2px" bg={`${colorScheme}.400`}>
      <Text
        position="fixed"
        top="0"
        insetStart="4"
        bg={`${colorScheme}.400`}
        color={`${colorScheme}.900`}
        fontSize="0.6rem"
        fontWeight="bold"
        px="1"
        borderBottomStartRadius="sm"
        borderBottomEndRadius="sm"
        textTransform="uppercase"
      >
        {envName}
      </Text>
    </Box>
  )
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <Fonts />
      <Router>
        <Routes />
      </Router>
      <AppDevHint />
    </ChakraProvider>
  </QueryClientProvider>
)

ReactDOM.render(
  <React.StrictMode>
    <CSSReset />
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
