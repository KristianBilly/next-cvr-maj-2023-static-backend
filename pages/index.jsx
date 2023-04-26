import { PlaceholderRow } from '../components/placeholder/placeholder-row'
import { contentData } from '../constants/content-data'

const Index = () => {
  const LandingPageRows = contentData.landingPageData

  return (
    <>
      {LandingPageRows.map((row, index) => {
        return (
          <PlaceholderRow
            key={row.textColumnOne + index}
            row={row}
          />
        )
      })}
    </>
  )
}

export default Index
