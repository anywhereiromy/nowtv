import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

export const getHumanReadableDateTime = (timestamp) => {
  // TODO: make this timezone friendly
  dayjs.extend(advancedFormat);
  return timestamp ? dayjs(timestamp).format('Do MMM YYYY HH:mm') : 'Invalid Date';
};
