import React from 'react';

import EntityEditModal from './EntityEditModal';

import type { Entity } from '@eventespresso/data';
import type { ContainerProps } from './types';

const Container = <E extends Entity>({
	component: Component,
	entity,
	isOpen,
	onClose,
	title,
}: ContainerProps<E>): React.ReactElement => {
	return (
		isOpen && (
			<EntityEditModal isOpen={isOpen} onClose={onClose} title={title}>
				<Component entity={entity} onClose={onClose} />
			</EntityEditModal>
		)
	);
};

export default Container;
