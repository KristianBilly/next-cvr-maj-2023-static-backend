import { useState } from 'react'
import { contentData } from '../../constants/content-data'
import { VirkopediaArticle } from '../../components/virkopedia/virkopedia-article'
import { VirkopediaTab } from '../../components/virkopedia/virkopedia-tab'

const allArticles = contentData.virkopediaData

export const Virkopedia = () => {
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
