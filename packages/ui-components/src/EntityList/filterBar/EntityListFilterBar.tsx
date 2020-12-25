import { useEffect, useState, useCallback } from 'react';

import { Collapsible } from '../../..';
import { ToggleFiltersButton } from './buttons';

import './style.scss';

export interface EntityListFilterBarProps {
	collapsibleButtons?: React.ReactNode;
	disableFilters?: boolean;
	id?: string;
	mainButtons?: React.ReactNode;
}

/**
 * EntityListFilterBar
 * a group of inputs for controlling how a list of entities is displayed
 */
export const EntityListFilterBar: React.FC<EntityListFilterBarProps> = ({
	collapsibleButtons,
	disableFilters,
	id,
	mainButtons,
}) => {
	const [showEntityFilters, setShowEntityFilters] = useState(false);
	const toggleEntityFilters = useCallback(() => setShowEntityFilters((v) => !v), []);

	useEffect(() => {
		if (disableFilters) {
			setShowEntityFilters(false);
		}
	}, [disableFilters]);

	return (
		<div className='ee-filter-bar'>
			<div className='ee-filter-bar__main'>
				{mainButtons}
				<ToggleFiltersButton
					id={id}
					value={showEntityFilters}
					onClick={toggleEntityFilters}
					isDisabled={disableFilters}
				/>
			</div>

			<Collapsible className='ee-filter-bar__collapsible' show={showEntityFilters}>
				{collapsibleButtons}
			</Collapsible>
		</div>
	);
};
