/* eslint-disable consistent-return */
import sortByParameter from './sortByParameter';

// Order by desc or asc a parameter
const sortByOrder = (order, orderBy) =>
  order === 'desc'
    ? (first, second) => sortByParameter(first, second, orderBy)
    : (first, second) => -sortByParameter(first, second, orderBy);

export default sortByOrder;
