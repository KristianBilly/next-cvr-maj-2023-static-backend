export const getConvertedSearchData = ({
  cvrNumber,
  companyName,
  address,
  status,
  companyType,
  postNoCity,
  t,
}) => {
  return [
    { title: companyName, paragraphOne: address, paragraphTwo: postNoCity },
    { title: t('get.converted.search.data.cvr'), paragraphOne: cvrNumber },
    { title: t('get.converted.search.data.status'), paragraphOne: status },
    {
      title: t('get.converted.search.data.companytype'),
      paragraphOne: companyType,
    },
  ]
}
