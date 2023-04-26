import { useState } from 'react'
import { VirkopediaArticle } from '../../components/virkopedia/virkopedia-article'
import { VirkopediaTab } from '../../components/virkopedia/virkopedia-tab'
import { API_ENDPOINT } from '../../constants/constants'

const Virkopedia = ({ contentData }) => {
  const allArticles = contentData.virkopediaData

  const [activeButtonIndex, setActiveButtonIndex] = useState(0)
  const { content, title } = allArticles[activeButtonIndex]

  return (
    <div className="virkopedia">
      <h2>Virkopedia</h2>
      <div className="virkopedia-container">
        <div className="btn-container">
          {allArticles.map(({ title }, index) => (
            <VirkopediaTab
              key={title + index}
              setActiveButtonIndex={setActiveButtonIndex}
              title={title}
              index={index}
              activeButtonIndex={activeButtonIndex}
            />
          ))}
        </div>
        <VirkopediaArticle
          title={title}
          content={content}
        />
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(API_ENDPOINT)
  const contentData = await res.json()

  return {
    props: {
      contentData,
    },
  }
}

export default Virkopedia
