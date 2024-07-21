import resolvers from './resolvers'

jest.mock('./data', () => ({
	pages: [
		{
			slug: 'test',
		},
	],
	projects: [
		{
			id: 0,
			year: 2020,
			slug: 'test',
		},
		{
			id: 1,
			year: 2021,
			slug: 'foo',
		},
		{
			id: 2,
			year: 2020,
			slug: 'bar',
		},
		{
			id: 3,
			year: 2022,
			slug: 'other',
		},
	],
}))

describe('data', () => {
	test('tests projects resolver', () => {
		const projectsResponse = resolvers.Query.projects()

		expect(projectsResponse).toBeDefined()
	})

	test('tests featuredProjects resolver', () => {
		const featuredProjectsResponse = resolvers.Query.featuredProjects()

		expect(featuredProjectsResponse).toBeDefined()
	})

	test('tests project resolver', () => {
		const projectResponse = resolvers.Query.project(null, { slug: 'test' })

		expect(projectResponse).toBeDefined()
	})

	test('tests page resolver', () => {
		const pageResponse = resolvers.Query.page(null, { slug: 'test' })

		expect(pageResponse).toBeDefined()
	})
})
