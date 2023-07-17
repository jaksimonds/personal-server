import { gql } from 'graphql-tag'

const typeDefs = gql`
  type Hero {
    image: String
    intro: String
  }

  type Link {
    text: String
    href: String!
    target: String
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
    tech: [Tech]
  }

  type Tech {
    id: Int!
    name: String!,
    label: String!,
    content: String,
    cta: Link
  }

  type Page {
    tech: [Tech]
  }

  type Query {
    projects: [Project]
    featuredProjects: [Project]
    project(slug: String): Project
    page(slug: String): Page
  }
`

export default typeDefs