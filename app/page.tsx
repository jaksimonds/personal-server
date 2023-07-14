
import Hero from "./components/Hero"

const Homepage = async () => (
  <div>
    <Hero
      heading="Welcome"
      intro="Looks like you've stumbled upon my private site. Here I plan to build out some custom UI to interact with back-end services. At the moment I have a simple Apollo GraphQL server running here that I'm using on my personal site."
    />
  </div>
)

export default Homepage
