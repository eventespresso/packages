import { addNewDate, addNewTicket } from './';
import type { Entity } from '../types';

interface Props extends Entity {
	name: string;
}

export const addNewEntity = async ({ entity, name }: Props) => {
	entity === 'datetime' && (await addNewDate({ name }));
	entity === 'ticket' && (await addNewTicket({ name }));
};
