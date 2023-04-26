import { useEffect } from 'react'
import { SearchCompany } from './search-company'
import { SearchNoResults } from './search-no-results'
import { useSiteContext } from '../../context/site-context'
import { getConvertedSearchData, getFilteredCompanies } from '../../utils'

export const SearchResults = ({ contentData }) => {
  const {
    searchField,
    companies,
    setCompanies,
    isCompaniesFound,
    isSearchFieldEmpty,
  } = useSiteContext()

  const allCompanies = contentData.companies

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
