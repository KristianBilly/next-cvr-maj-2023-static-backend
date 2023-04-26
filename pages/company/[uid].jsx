import { getConvertedCompanyData } from '../../utils/get-converted-company-data'
import { CompanyTable } from '../../components/company/company-table'
import Link from 'next/link'
import { API_ENDPOINT } from '../../constants/constants'

const Company = ({ selectedCompany, companyName }) => {
  const formattedCompany = getConvertedCompanyData(selectedCompany)

  if (!formattedCompany) return <h2>No companies found...</h2>

  return (
    <section className="company-page">
      <Link
        className="back-to-search"
        href="/">
        Back to search
      </Link>
      <h2> {companyName} </h2>
      <CompanyTable company={formattedCompany} />
    </section>
  )
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(API_ENDPOINT)
  const contentData = await res.json()
  const selectedCompany = contentData.companies[params.uid]
  const companyName = contentData.companies[params.uid].companyName

  return {
    props: {
      selectedCompany,
      companyName,
    },
  }
}

export async function getStaticPaths() {
  const res = await fetch(API_ENDPOINT)
  const contentData = await res.json()

  const paths = contentData.companies.map(({ uid }) => ({
    params: { uid },
  }))

  return {
    paths: paths,
    fallback: false,
  }
}

export default Company
