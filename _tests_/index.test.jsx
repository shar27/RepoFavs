import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom/extend-expect';


describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Github's Finest/i,
    })

    expect(heading).toBeInTheDocument()
  })
})