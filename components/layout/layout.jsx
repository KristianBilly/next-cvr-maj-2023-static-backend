import { Footer } from './footer/footer'
import { Header } from './header/header'
import { MainContainer } from './main-container/main-container'
import { Navbar } from './navbar/navbar'
import { ThemeWrapper } from './theme-wrapper/theme-wrapper'
import { contentData } from '../../constants/content-data'

export const Layout = ({ children }) => (
  <ThemeWrapper>
    <Navbar />
    <MainContainer>
      <Header contentData={contentData} />
      {children}
    </MainContainer>
    <Footer contentData={contentData} />
  </ThemeWrapper>
)
