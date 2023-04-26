import { Link, useParams } from 'react-router-dom'
import { contentData } from '../../constants/content-data'
import { getConvertedCompanyData } from '../../utils/get-converted-company-data'
import { CompanyTable } from '../../components/company/company-table'

export const Company = () => {
  const { routeParams } = useParams()
  const selectedCompany = contentData.companies[routeParams]
  const formattedCompany = getConvertedCompanyData(selectedCompany)
  const companyName = contentData.companies[routeParams].companyName

  if (!formattedCompany) return <h2>No companies found...</h2>

  return (
    <section className="company-page">
      <Link
        className="back-to-search"
        to="/">
        Back to search
      </Link>
      <h2> {companyName} </h2>
      <CompanyTable company={formattedCompany} />
    </section>
  )
}
