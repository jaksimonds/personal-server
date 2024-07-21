/* eslint-disable react/display-name */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import RootLayout from './layout'

describe('RootLayout', () => {
	beforeAll(() => {
		jest.spyOn(console, 'error').mockImplementation(() => null)
	})

	afterAll(() => {
		jest.clearAllMocks()
	})

	test('tests default', () => {
		const { container } = render(
			<RootLayout>
				<section>test</section>
			</RootLayout>,
		)

		const footer = container.querySelector('footer')
		expect(footer).toBeInTheDocument()
	})
})
