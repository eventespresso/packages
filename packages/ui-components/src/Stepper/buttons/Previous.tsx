import React from 'react';
import { __ } from '@eventespresso/i18n';

import { ChevronDoubleLeft, ChevronLeft } from '@eventespresso/icons';
import { Button } from '../../../';

interface Props extends React.ComponentProps<typeof Button> {
	skippable?: boolean;
}

const Previous: React.FC<Props> = ({ isDisabled, onClick, skippable, ...props }) => {
	const buttonText = props.buttonText || __('Previous');
	const leftIcon = skippable ? <ChevronDoubleLeft size='smaller' /> : <ChevronLeft size='smaller' />;

	return <Button {...props} buttonText={buttonText} isDisabled={isDisabled} leftIcon={leftIcon} onClick={onClick} />;
};

export default Previous;
