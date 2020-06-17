import { diff } from '@eventespresso/services';
import { now } from '@sharedServices/utils/dateAndTime';

const switchTenseForDate = (date: Date, textForPastDate: string, textForFutureDate: string): string => {
  return diff('minutes', date, now) < 0 ? textForPastDate : textForFutureDate;
};

export default switchTenseForDate;
