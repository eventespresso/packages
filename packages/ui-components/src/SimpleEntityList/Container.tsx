import type { SimpleEntityListContainerProps as SELCP } from './types';
import type { Entity } from '@eventespresso/data';

const Container = <E extends Entity>({ ContentRenderer, entity, isOpen, onClose }: SELCP<E>): JSX.Element => {
	return isOpen && <ContentRenderer entity={entity} onClose={onClose} />;
};

export default Container;
