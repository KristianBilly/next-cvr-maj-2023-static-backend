import { PlaceholderRow } from 'components/placeholder/placeholder-row'
import contentData from 'constants/database.json'

const landingPageRows = contentData.landingPageData

const Index = () => {
  return (
    <>
      {landingPageRows.map((row, index) => {
        return (
          <PlaceholderRow
            key={row.contentColumnOne + index}
            row={row}
          />
        )
      })}
    </>
  )
}

export default Index
