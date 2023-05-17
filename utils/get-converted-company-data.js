import { useTranslate } from '../translations/useTranslate'

export const getConvertedCompanyData = ({
  cvrNumber,
  address,
  postNoCity,
  companyType,
}) => {
  const { t } = useTranslate()

  return [
    { title: t('get.converted.company.cvr'), field: cvrNumber },
    { title: t('get.converted.company.address'), field: address },
    { title: t('get.converted.company.postcode.city'), field: postNoCity },
    { title: t('get.converted.company.companytype'), field: companyType },
  ]
}
