import * as React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { render } from '../../lib/test-utils'
import { findInput } from '../helpers/dom-utils'

import Register from '../../app/pages/Auth/Register'

describe('Register', () => {
  it('renders the register form', () => {
    render(<Register />)

    expect(screen.getByRole('heading', { name: 'Register' })).toBeInTheDocument()

    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Password Confirmation')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Register' })).toBeInTheDocument()
  })

  it('Email address fields should be blank', () => {
    const { input } = findInput({
      formComponent: <Register />,
      inputLabeledText: /email address/i,
    })

    fireEvent.change(input, { target: { value: 'john@doe.com' } })
    expect(input.value).toBe('john@doe.com')
  })
})
