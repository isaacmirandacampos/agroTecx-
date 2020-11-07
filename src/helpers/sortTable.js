// Order the data table an array of objects
/* eslint-disable consistent-return */
const sortTable = (data, sort) => {
  const stabilize = data?.map((element, index) => [element, index]);

  // eslint-disable-next-line no-unused-expressions
  stabilize?.sort((first, second) => {
    const order = sort(first[0], second[0]);

    if (order !== 0) return order;

    return first[1] - second[1];
  });

  return stabilize?.map(element => element[0]);
};

export default sortTable;
