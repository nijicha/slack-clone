import '@testing-library/jest-dom'

import { screen } from '@testing-library/react'
import * as React from 'react'
import { MemoryRouter } from 'react-router-dom'

import Register from '../../app/pages/Auth/Register'
import { render } from '../../lib/test-utils'

describe('Register', () => {
  it('renders the register form', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: 'Register' })).toBeInTheDocument()

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password Confirmation')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Register' })).toBeInTheDocument()
  })
})
