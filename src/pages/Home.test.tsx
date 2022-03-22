import React from 'react'
import { render, screen } from '@testing-library/react'
import { Home } from './Home'

test('renders application name', () => {
  render(<Home />)
  const headerElement = screen.getByText(/CollectionDB/i)
  expect(headerElement).toBeInTheDocument()
})
