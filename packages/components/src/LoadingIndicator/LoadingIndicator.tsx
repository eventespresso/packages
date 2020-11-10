import React from 'react';
import { __ } from '@eventespresso/i18n';

import { Spinner, SpinnerProps } from '@eventespresso/adapters';

const LoadingIndicator: React.FC<SpinnerProps> = (props) => {
	const label = props.label || __('loading …');

	return <Spinner {...props} label={label} />;
};

export default LoadingIndicator;
