import React, { memo } from 'react';
import { __ } from '@eventespresso/i18n';

import { Button, ButtonProps } from '../../../';
import { ChevronDoubleLeft, ChevronLeft } from '@eventespresso/icons';

interface Props extends ButtonProps {
	skippable?: boolean;
}

const Previous: React.FC<Props> = ({ isDisabled, onClick, skippable, ...props }) => {
	const buttonText = props.buttonText || __('Previous');
	const leftIcon = memo(() => (skippable ? <ChevronDoubleLeft size='smaller' /> : <ChevronLeft size='smaller' />));

	return <Button buttonText={buttonText} isDisabled={isDisabled} leftIcon={leftIcon} onClick={onClick} />;
};

export default memo(Previous);
