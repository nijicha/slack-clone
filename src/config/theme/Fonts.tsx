import { Global } from '@emotion/react'
import * as React from 'react'

const Fonts = () => {
  return (
    <Global
      styles={`
      @font-face {
        font-family: 'Noto Sans Thai';
        font-style: normal;
        font-weight: 400;
        src: url('fonts/Noto Sans/th/NotoSansThai-Regular.ttf') format('truetype');
      }

      @font-face {
        font-family: 'Noto Sans Thai';
        font-style: normal;
        font-weight: 700;
        src: url('fonts/Noto Sans/th/NotoSansThai-Bold.ttf') format('truetype');
      }

      @font-face {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        src: url('fonts/Noto Sans/en/NotoSans-Regular.ttf') format('truetype');
      }

      @font-face {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 700;
        src: url('fonts/Noto Sans/en/NotoSans-Bold.ttf') format('truetype');
      }
      `}
    />
  )
}

export default Fonts
