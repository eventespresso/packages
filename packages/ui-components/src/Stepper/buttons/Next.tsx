import { __ } from '@eventespresso/i18n';

import { Button, ButtonType } from '../../../';
import { StepperButtonProps } from './types';
import { getStepperIconComponent } from '../utils';

const Next: React.FC<StepperButtonProps> = ({ isDisabled, onClick, skipsSteps, ...props }) => {
	const buttonText = props.buttonText || __('Next');
	const buttonType = props.buttonType || ButtonType.PRIMARY;

	const IconComponent = getStepperIconComponent({ skipsSteps });
	const rightIcon = <IconComponent size='smaller' />;

	return (
		<Button
			{...props}
			buttonText={buttonText}
			buttonType={buttonType}
			isDisabled={isDisabled}
			onClick={onClick}
			rightIcon={rightIcon}
		/>
	);
};

export default Next;
