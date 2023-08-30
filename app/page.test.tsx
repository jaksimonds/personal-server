import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Homepage from './page'

describe('Homepage', () => {
  test('tests default', async () => {
    const Page = await Homepage()
    const { container } = render(Page)
    
    const hero = container.querySelector('.hero')
    expect(hero).toBeInTheDocument()
  })
})