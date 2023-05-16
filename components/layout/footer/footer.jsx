import { LANDING_PAGE_PATH } from '../../../constants/constants'
import { TextLink } from '../../other/text-link'
import contentData from '../../database.json'
import { FooterSection } from './footer-section'

const footerData = contentData.footer

export const Footer = () => {
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
        {footerData.map(({ columnLinks, className }, index) => (
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
