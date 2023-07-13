import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express'
import http from 'http'
import cors from 'cors'
import bodyParser from "body-parser";
import { VercelRequest, VercelResponse } from "@vercel/node";

interface ServerContext {
  token?: String
}

const typeDefs = `#graphql
  type Project {
    id: Int!
    slug: String!
    title: String!
    excerpt: String
    url: String
    image: String
  }

  type Query {
    projects: [Project]
    featuredProjects: [Project]
    project(slug: String): Project
  }
`

const projects = [
  {
    id: 0,
    slug: 'mmoca-redesign',
    title: 'MMoCA Redesign',
    excerpt: 'Contemporary Art Museum site to showcase Galleries and Artists.',
    url: 'https://www.mmoca.org/'
  },
  {
    id: 1,
    slug: 'karavan-trailers',
    title: 'Karavan Trailers',
    excerpt: 'Online catalog and information site.',
    url: 'https://www.karavantrailers.com/'
  },
  {
    id: 2,
    slug: 'abc-supply-careers',
    title: 'ABC Supply Careers',
    excerpt: 'Careers site with a location based search.',
    url: 'https://careers.abcsupply.com/'
  },
  {
    id: 3,
    slug: 'abc-lw-search',
    title: 'ABC/LW Supply Search Package',
    excerpt: 'A reusable NPM package built for ease of maintenance.'
  },
  {
    id: 4,
    slug: 'acis-redesign',
    title: 'ACIS Redesign',
    excerpt: 'A simple site rebuild from the ground up.',
    url: 'https://www.americanclassicvinylsiding.com/'
  },
  {
    id: 5,
    slug: 'hiusa',
    title: 'HI USA',
    excerpt: 'Hostelling International\'s site for finding and booking a Hostel in the US.',
    url: 'https://www.hiusa.org/'
  },
  {
    id: 6,
    slug: 'qtigroup',
    title: 'The QTI Group',
    excerpt: 'Job Recruiter site built for candidates as well as hiring teams.',
    url: 'https://www.qtigroup.com/'
  },
  {
    id: 7,
    slug: 'summit',
    title: 'Summit Credit Union',
    excerpt: 'Custom Drupal theme development with a wide range of product offerings.',
    url: 'https://www.qtigroup.com/'
  },
  {
    id: 8,
    slug: 'wain-roy',
    title: 'Wain-Roy',
    excerpt: 'Construction Equipment product catalog site with a custom dealer locator.',
    url: 'https://wainroy.com/'
  },
  {
    id: 9,
    slug: 'culvers',
    title: 'Culver\'s',
    excerpt: 'From new components to full Branded Content.',
    url: 'https://www.culvers.com/',
    image: 'culvers.jpg'
  },
  {
    id: 10,
    slug: 'schneider-jobs',
    title: 'Schneider Jobs',
    excerpt: 'Built from the ground up on NextJS and GraphQL.',
    url: 'https://schneiderjobs.com/',
    image: 'schneiderjobs.jpg'
  },
  {
    id: 11,
    slug: 'hiebing',
    title: 'Hiebing',
    excerpt: 'The Hiebing.com site built on NextJS with WPEngine Atlas.',
    url: 'https://www.hiebing.com/',
    image: 'hiebing.png'
  }
]

const resolvers = {
  Query: {
    projects: () => projects,
    featuredProjects: () => projects.filter(project => project.id > projects.length - 4)
      .sort((a, b) => b.id - a.id),
    project: (_, args) => projects.find((project) => project.slug === args.slug)
  },
};

const server = async (request: VercelRequest, response: VercelResponse) => {
  const app = express()

  const httpServer = http.createServer(app)

  const server = new ApolloServer<ServerContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
  })

  await server.start()

  app.use(
    '/',
    cors<cors.CorsRequest>(),
    bodyParser.json({
      limit: '50mb'
    }),
    expressMiddleware(server, {
      context: async ({req}) => ({ token: req.headers.token })
    })
  )

  await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve))

  console.log(`Server ready`);
}

export default server