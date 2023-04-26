import { LANDING_PAGE_PATH } from '../../../constants/constants'
import { TextLink } from '../../other/text-link'
import { FooterSection } from './footer-section'

export const Footer = ({ contentData }) => {
  const FooterSections = [
    { columnLinks: contentData.footerData.firstColumn, className: 'odd-link' },
    {
      columnLinks: contentData.footerData.secondColumn,
      className: 'first-link',
    },
    {
      columnLinks: contentData.footerData.thirdColumn,
      className: 'first-link',
    },
  ]

  return (
    <div className="footer">
      <div className="footer-center">
        <section className="footer-section virkdk-container">
          <TextLink
            path={LANDING_PAGE_PATH}
            text="Virk.dk"
            virkdk
          />
        </section>
        {FooterSections.map(({ columnLinks, className }, index) => (
          <FooterSection
            key={className + index}
            columnLinks={columnLinks}
            className={className}
          />
        ))}
      </div>
    </div>
  )
}
