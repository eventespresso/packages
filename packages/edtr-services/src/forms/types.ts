import type { EspressoFormProps } from '@eventespresso/form';
import type { TpcPriceModifier } from '@eventespresso/tpc';

import { UpdateDatetimeInput, UpdateTicketInput } from '../apollo/mutations';
import type { Entity } from '@eventespresso/data';

export interface DateFormShape extends UpdateDatetimeInput, Partial<Entity> {}

export type DateFormConfig = EspressoFormProps<DateFormShape>;

export interface TicketFormShape extends Omit<UpdateTicketInput, 'prices'>, Partial<Entity> {
	prices?: TpcPriceModifier[];
}

export type TicketFormConfig = EspressoFormProps<TicketFormShape>;
