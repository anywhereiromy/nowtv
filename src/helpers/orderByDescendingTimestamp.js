export const orderByDescendingTimestamp = (array) => array.sort(sortFunction);

const sortFunction = (a, b) => {
  if (a.timestamp > b.timestamp) {
    return -1;
  }
  if (a.timestamp < b.timestamp) {
    return 1;
  }
  return 0;
};
