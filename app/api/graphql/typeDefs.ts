import { gql } from 'graphql-tag'

const typeDefs = gql`
  type Hero {
    image: String
    intro: String
  }

  type Project {
    id: Int!
    slug: String!
    title: String!
    excerpt: String
    url: String
    thumbnail: String
    year: Int!
    hero: Hero
  }

  type Query {
    projects: [Project]
    featuredProjects: [Project]
    project(slug: String): Project
  }
`

export default typeDefs