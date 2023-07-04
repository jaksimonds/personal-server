import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone'

const typeDefs = `#graphql
  type Project {
    id: Int
    slug: String
    title: String
    excerpt: String
  }

  type Query {
    projects: [Project]
  }
`

const projects = [
  {
    id: 0,
    slug: 'personal-site',
    title: 'Personal Site',
    excerpt: 'The site you are currently browsing'
  },
  {
    id: 1,
    slug: 'mmoca-redesign',
    title: 'MMoCA Redesign',
    excerpt: 'Contemporary Art Museum site to showcase Galleries and Artists.'
  },
  {
    id: 2,
    slug: 'karavan-trailers',
    title: 'Karavan Trailers',
    excerpt: 'Online catalog and information site.'
  },
  {
    id: 3,
    slug: 'abc-supply-careers',
    title: 'ABC Supply Careers',
    excerpt: 'Careers site with a location based search.'
  },
  {
    id: 4,
    slug: 'abc-lw-search',
    title: 'ABC/LW Supply Search Package',
    excerpt: 'A reusable NPM package built for ease of maintenance.'
  },
  {
    id: 5,
    slug: 'acis-redesign',
    title: 'ACIS Redesign',
    excerpt: 'A simple site rebuild from the ground up.'
  },
  {
    id: 6,
    slug: 'culvers',
    title: 'Culver\'s',
    excerpt: 'From new components to full Branded Content.'
  },
  {
    id: 7,
    slug: 'schneider-jobs',
    title: 'Schneider Jobs',
    excerpt: 'Built from the ground up on NextJS and GraphQL.'
  },
  {
    id: 10,
    slug: 'hiebing',
    title: 'Hiebing',
    excerpt: 'The Hiebing.com site built on NextJS with WPEngine Atlas.'
  }
]

const resolvers = {
  Query: {
    projects: () => projects,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);