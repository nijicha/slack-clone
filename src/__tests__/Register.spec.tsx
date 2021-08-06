import React from 'react'
import { screen } from '@testing-library/react'
import { render } from '../test-utils'

import Register from '../pages/Auth/Register'

test('renders register form', () => {
  render(<Register />)
  const linkElement = screen.getByText(/register/i)
  expect(linkElement).toBeInTheDocument()
})
