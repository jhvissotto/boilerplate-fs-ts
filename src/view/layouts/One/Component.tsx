// libs
import { React } from '~/src/libs/packages'
// app
import { Parent } from '~/src/view/html'
// local
import { Header, Main, Footer } from './partials'

//
export const Component: React.FCC = ({ children }) => {
  return (
    <Parent.Body>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Parent.Body>
  )
}
