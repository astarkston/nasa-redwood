import { render, cleanup } from '@testing-library/react'

import PictureOfTheDayPage from './PictureOfTheDayPage'

describe('PictureOfTheDayPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<PictureOfTheDayPage />)
    }).not.toThrow()
  })
})
