import { Footer } from './footer/footer'
import { Header } from './header/header'
import { MainContainer } from './main-container/main-container'
import { Navbar } from './navbar/navbar'
import { ThemeWrapper } from './theme-wrapper/theme-wrapper'

export const Layout = ({ children }) => (
  <ThemeWrapper>
    <Navbar />
    <MainContainer>
      <Header />
      {children}
    </MainContainer>
    <Footer />
  </ThemeWrapper>
)
