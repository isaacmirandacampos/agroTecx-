// Order the first and second objects by a parameter
/* eslint-disable consistent-return */
const sortByParameter = (first, second, orderBy) => {
  if (second[orderBy] < first[orderBy]) return -1;

  if (second[orderBy] > first[orderBy]) return 1;

  return 0;
};

export default sortByParameter;
