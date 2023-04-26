import { SiteContextProvider } from 'context/site-context'
import '../styles/main.scss'
import { Layout } from '../components/layout/layout'

export default function App({ Component, pageProps, data }) {
  return (
    <SiteContextProvider>
      <Layout data={data}>
        <Component {...pageProps} />
      </Layout>
    </SiteContextProvider>
  )
}

export async function getStaticProps({ params, previewData }) {
  const data = [
    {
      text: 'Landing Page',
      link: LANDING_PAGE_PATH,
    },
    {
      text: 'Search CVR',
      link: SEARCH_PATH,
    },
    {
      text: 'Help - Virkopedia',
      link: VIRKOPEDIA_PATH,
    },
  ]

  return {
    props: {
      page,
      data,
    },
  }
}
