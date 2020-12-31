import { __ } from '@eventespresso/i18n';

import { Button } from '../../../';
import { getStepperIconComponent } from '../utils';
import { StepperButtonProps } from './types';

const Previous: React.FC<StepperButtonProps> = ({ isDisabled, onClick, skipsSteps, ...props }) => {
	const buttonText = props.buttonText || __('Previous');

	const IconComponent = getStepperIconComponent({ skipsSteps, isNext: false });
	const leftIcon = <IconComponent size='smaller' />;

	return <Button {...props} buttonText={buttonText} isDisabled={isDisabled} leftIcon={leftIcon} onClick={onClick} />;
};

export default Previous;
