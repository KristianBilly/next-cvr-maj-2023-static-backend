import { useEffect } from 'react'
import { SearchCompany } from './search-company'
import { SearchNoResults } from './search-no-results'
import { useSiteContext } from '../../context/site-context'
import { contentData } from '../../constants/content-data'
import { getConvertedSearchData, getFilteredCompanies } from '../../utils'

const allCompanies = contentData.companies

export const SearchResults = () => {
  const {
    searchField,
    companies,
    setCompanies,
    isCompaniesFound,
    isSearchFieldEmpty,
  } = useSiteContext()

  useEffect(() => {
    setCompanies(getFilteredCompanies(searchField, allCompanies))
  }, [searchField])

  if (!isCompaniesFound && !isSearchFieldEmpty) return <SearchNoResults />

  if (isCompaniesFound)
    return (
      <div>
        {companies.map((company, index) => {
          const convertedData = getConvertedSearchData({ ...company })
          return (
            <SearchCompany
              key={index}
              index={index}
              convertedData={convertedData}
            />
          )
        })}
      </div>
    )

  return
}
