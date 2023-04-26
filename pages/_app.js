import { SiteContextProvider } from 'context/site-context'
import '../styles/main.scss'
import { Layout } from '../components/layout/layout'

export default function App({ Component, pageProps, data }) {
  return (
    <SiteContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SiteContextProvider>
  )
}
