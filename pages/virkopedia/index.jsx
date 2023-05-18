import { useState } from 'react'
import { VirkopediaArticle } from 'components/virkopedia/virkopedia-article'
import { VirkopediaTab } from 'components/virkopedia/virkopedia-tab'
import contentData from 'constants/database.json'
import { useTranslate } from 'translations/useTranslate'
import { API_ENDPOINT_TODOS } from '../../constants/constants'

const articles = contentData.virkopediaData

const Virkopedia = ({ rowData }) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)
  const { t } = useTranslate()
  const { content, title } = articles[activeButtonIndex]

  return (
    <div className="virkopedia">
      <h2>Virkopedia</h2>
      <div className="virkopedia-container">
        <div className="btn-container">
          {articles.map(({ title }, index) => (
            <VirkopediaTab
              key={t(title) + index}
              setActiveButtonIndex={setActiveButtonIndex}
              title={t(title)}
              index={index}
              activeButtonIndex={activeButtonIndex}
            />
          ))}
        </div>
        <VirkopediaArticle
          title={t(title)}
          content={t(content)}
        />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch(API_ENDPOINT_TODOS)
  const rowData = await response.json()
  // Axios
  // const response = await axios.get(API_ENDPOINT_TODOS)
  // const rowData = response.data  // This is for axios

  return {
    props: {
      rowData,
    },
  }
}

export default Virkopedia
