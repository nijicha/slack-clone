import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const fonts = {
  heading: 'Noto Sans Thai, Noto Sans',
  body: 'Noto Sans Thai, Noto Sans',
}

const theme = extendTheme({
  config,
  colors,
  fonts,
})

export default theme