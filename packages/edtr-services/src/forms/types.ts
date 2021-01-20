import type { EspressoFormProps } from '@eventespresso/form';

import { UpdateDatetimeInput, UpdateTicketInput } from '../apollo/mutations';
import type { Entity } from '@eventespresso/data';

export interface DateFormShape extends UpdateDatetimeInput, Partial<Entity> {}

export type DateFormConfig = EspressoFormProps<DateFormShape>;

export interface TicketFormShape extends UpdateTicketInput, Partial<Entity> {}

export type TicketFormConfig = EspressoFormProps<TicketFormShape>;
