import { oswald } from "fonts"
import { Hero } from "@jsimonds/component-library"

const Homepage = async () => (
  <div>
    <Hero
      heading="Welcome"
      headingClass={oswald.className}
      intro="Looks like you've stumbled upon my private site. Here I plan to build out some custom UI to interact with back-end services. At the moment I have a simple Apollo GraphQL server running here that I'm using on my personal site."
    />
  </div>
)

export default Homepage
