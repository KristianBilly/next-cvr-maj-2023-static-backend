import { LandingPageRow } from '../components/placeholder/placeholder-row'
import { contentData } from '../constants/content-data'

const Index = () => {
  const LandingPageRows = contentData.landingPageData

  return (
    <>
      {LandingPageRows.map((row) => {
        return <LandingPageRow row={row} />
      })}
    </>
  )
}

export default Index
