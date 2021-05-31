import { formatISO, parseISO, addMonths, addYears } from 'date-fns';

// parse and format to make sure it works well for precision tests
export const NOW = parseISO(formatISO(new Date()));
export const CURRENT_YEAR = NOW.getFullYear();
export const CURRENT_MONTH = NOW.getMonth();
export const CURRENT_DATE = NOW.getDate(); // day of the month
export const PLUS_ONE_MONTH = addMonths(NOW, 1);
export const PLUS_TWO_MONTHS = addMonths(NOW, 2);
export const PLUS_TEN_YEARS = addYears(NOW, 10);
export const A_LONG_TIME_AGO = new Date(CURRENT_YEAR - 100, 0, 1);
