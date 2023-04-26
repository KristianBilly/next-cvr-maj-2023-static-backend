import { TextInput } from '../../components/other/text-input'
import { SearchResults } from '../../components/search/search-results'
import { API_ENDPOINT } from '../../constants/constants'
import { useSiteContext } from '../../context/site-context'

const SearchWrapper = ({ contentData }) => {
  const { searchField, setSearchField } = useSiteContext()

  return (
    <div className="search">
      <div className="search-container">
        <h2 className="search-title">Search the CVR</h2>
        <TextInput
          search
          type="search"
          value={searchField}
          placeholder="Write Company Name, Cvr Number or Address"
          onChange={(e) => setSearchField(e.target.value)}
          autoFocus
        />
        <SearchResults contentData={contentData} />
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

export default SearchWrapper
