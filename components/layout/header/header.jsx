import Link from 'next/link'

export const Header = ({ contentData }) => {
  const {
    headerData: { titleLinks },
  } = contentData

  return (
    <div className="header">
      <h1 className="header-title">CVR - Business in Denmark</h1>
      <div className="header-container">
        {titleLinks.map(({ text, link }, index) => (
          <Link
            className="header-linLink"
            href={link}
            key={link + index}>
            {text}
          </Link>
        ))}
      </div>
    </div>
  )
}
