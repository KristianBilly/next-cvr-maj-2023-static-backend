import { CompanyData } from 'types/sharedTypes'

interface AllCompaniesProps {
  allCompanies: CompanyData[]
}

export const getFilteredCompanies = (
  searchField: string,
  allCompanies: AllCompaniesProps
) => {
  const filteredCompanies = allCompanies.filter(
    (company) =>
      company.companyName.toLowerCase().includes(searchField.toLowerCase()) ||
      company.address.toLowerCase().includes(searchField.toLowerCase()) ||
      company.cvrNumber.toLowerCase().includes(searchField.toLowerCase())
  )

  return searchField ? filteredCompanies : []
}
