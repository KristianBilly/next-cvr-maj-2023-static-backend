import { contentData } from '../../components/database.json'
const handler = (req, res) => {
  res.status(200).json(contentData)
}

export default handler
