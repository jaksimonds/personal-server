import { NextRequest } from 'next/server'
import { GET, POST } from './route'

const mockRequest = {}
jest.mock('@as-integrations/next', () => ({
	startServerAndCreateNextHandler: jest.fn(() => jest.fn()),
}))
jest.mock('@apollo/server', () => {
	const originalModule = jest.requireActual('@apollo/server')
	const MockedApolloServer = jest.fn()
	return {
		__esModule: true,
		...originalModule,
		ApolloServer: MockedApolloServer,
	}
})

describe('graphql route', () => {
	test('tests GET', async () => {
		await GET(mockRequest as NextRequest)
	})

	test('tests POST', async () => {
		await POST(mockRequest as NextRequest)
	})
})
