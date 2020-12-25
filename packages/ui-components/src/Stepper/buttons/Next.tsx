import { __ } from '@eventespresso/i18n';

import { Button, ButtonType } from '../../../';
import { ChevronDoubleRight, ChevronRight } from '@eventespresso/icons';

interface Props extends React.ComponentProps<typeof Button> {
	skippable?: boolean;
}

const Next: React.FC<Props> = ({ isDisabled, onClick, skippable, ...props }) => {
	const buttonText = props.buttonText || __('Next');
	const buttonType = props.buttonType || ButtonType.PRIMARY;
	const rightIcon = skippable ? <ChevronDoubleRight size='smaller' /> : <ChevronRight size='smaller' />;

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
