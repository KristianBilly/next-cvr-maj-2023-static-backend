import { PlaceholderRow } from 'components/placeholder/placeholder-row'
import contentData from 'constants/database.json'
import { API_ENDPOINT_TODOS } from '../constants/constants'

const landingPageRows = contentData.landingPageData

const Index = ({ rowData }) => {
  // const [row, setRows] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get(API_ENDPOINT_TODOS)
  //     setRows(result.data.data)
  //   }
  //   fetchData()
  // }, [])

  console.log(rowData)

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
      {/* <div>
        {result.map((rep) => {
          return (
            <div key={rep.attributes.createdAt}>{rep.attributes.createdAt}</div>
          )
        })}
      </div> */}
    </>
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

export default Index
