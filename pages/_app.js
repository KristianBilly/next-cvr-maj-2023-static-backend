import { SiteContextProvider } from 'my-project/context/site-context'
import '../styles/main.scss'
import { Layout } from 'my-project/components/layout/layout'

export default function App({ Component, pageProps }) {
  return (
    <SiteContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SiteContextProvider>
  )
}
