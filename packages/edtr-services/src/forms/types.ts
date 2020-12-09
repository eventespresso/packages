import type { EspressoFormProps } from '@eventespresso/form';

import { UpdateDatetimeInput, UpdateTicketInput } from '../apollo/mutations';

export interface DateFormShape extends UpdateDatetimeInput {}

export type DateFormConfig = EspressoFormProps<DateFormShape>;

export interface TicketFormShape extends UpdateTicketInput {}

export type TicketFormConfig = EspressoFormProps<TicketFormShape>;
