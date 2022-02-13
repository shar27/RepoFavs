import RepoList from '../components/RepoList'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Fetch', () => {
    it('renders a button', () => {
      render(<RepoList />)
  
      const button = screen.getByRole('button', {
        name: /Favorite me/i,
      })
  
      expect(button).toBeInTheDocument()
    })
  })