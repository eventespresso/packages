import React from 'react';

import type { EntityDetailProps } from './types';

const EntityDetails: React.FC<EntityDetailProps> = ({ render: Component, ...props }) => {
	if (Component) {
		return <Component {...props} />;
	}

	const { label, value, className = '' } = props;

	return (
		<div className={`ee-entity-details ${className}`}>
			<div className={`ee-entity-details__label`}>{label}</div>
			<div className={`ee-entity-details__value`}>{value}</div>
		</div>
	);
};

export default EntityDetails;
