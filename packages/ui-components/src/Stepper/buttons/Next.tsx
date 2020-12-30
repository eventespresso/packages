import { __, isRTL } from '@eventespresso/i18n';

import { ChevronDoubleLeft, ChevronDoubleRight, ChevronLeft, ChevronRight } from '@eventespresso/icons';
import { Button, ButtonType } from '../../../';

interface Props extends React.ComponentProps<typeof Button> {
	skippable?: boolean;
}

const Next: React.FC<Props> = ({ isDisabled, onClick, skippable, ...props }) => {
	const buttonText = props.buttonText || __('Next');
	const buttonType = props.buttonType || ButtonType.PRIMARY;
	const leftIcon = isRTL() && skippable ? <ChevronDoubleLeft size='smaller' /> : <ChevronLeft size='smaller' />;
	const rightIcon = !isRTL() && skippable ? <ChevronDoubleRight size='smaller' /> : <ChevronRight size='smaller' />;

	return (
		<Button
			{...props}
			buttonText={buttonText}
			buttonType={buttonType}
			isDisabled={isDisabled}
			leftIcon={leftIcon}
			onClick={onClick}
			rightIcon={rightIcon}
		/>
	);
};

export default Next;
