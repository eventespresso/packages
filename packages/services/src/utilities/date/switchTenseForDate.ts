import { diff } from '@eventespresso/services';

const now = new Date();

const switchTenseForDate = (date: Date, textForPastDate: string, textForFutureDate: string): string => {
  return diff('minutes', date, now) < 0 ? textForPastDate : textForFutureDate;
};

export default switchTenseForDate;
