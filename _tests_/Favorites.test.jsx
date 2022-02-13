import Favorites from '../pages/index'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';


describe('Favorites', () => {
    it('renders a button', () => {
      render(<Favorites />)
  
      const button = screen.getByRole('button', {
        name: /delete all/i,
      })
  
      expect(button).toBeInTheDocument()
    })
  })