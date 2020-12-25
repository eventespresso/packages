import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { useForm } from 'react-final-form';

import { Button, ButtonProps } from '@eventespresso/adapters';

const ResetButton: React.FC<ButtonProps> = ({ isDisabled, buttonText, ...props }) => {
	const form = useForm();
	const onClick = useCallback(() => form.reset(), [form]);
	return (
		<div className='reset-button'>
			<Button
				type='reset'
				isDisabled={isDisabled}
				className='reset-button'
				onClick={onClick}
				buttonText={buttonText || __('Reset')}
				{...props}
			/>
		</div>
	);
};

export default ResetButton;
