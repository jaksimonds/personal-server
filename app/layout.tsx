import { inter } from './fonts'
import { Footer } from '@jsimonds/component-library'

import '@jsimonds/component-library/lib/index.css'
import './styles/site.scss'

interface IRootLayout {
  children: any
}

const RootLayout = ({ children }: IRootLayout) => (
  <html lang='en'>
    <body className={inter.className}>
      <main>
        {children}
      </main>
      <Footer />
    </body>
  </html>
)

export default RootLayout