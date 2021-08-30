import React from 'react'
import { screen } from '@testing-library/react'
import { render } from '../../lib/test-utils'

import Register from '../../app/pages/Auth/Register'

test('renders register form', () => {
  render(<Register />)
  const linkElement = screen.getByText(/register/i)
  expect(linkElement).toBeInTheDocument()
})
