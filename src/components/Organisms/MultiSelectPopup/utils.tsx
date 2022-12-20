export const searchInObject = ({ search, item, dataSearchFields, dataTextField }) => {
  const searchFields = dataSearchFields || [dataTextField];

  return searchFields
    .map(searchField => item[searchField]?.includes(search) || false)

    .reduce((prev, field) => prev || field, false);
};
