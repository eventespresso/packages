import React, { useState, useCallback } from 'react';
import type { FormRenderProps } from 'react-final-form';
import { __ } from '@wordpress/i18n';
import { Button, ButtonType } from '@eventespresso/components';
import { Check, Plus } from '@eventespresso/icons';
import useFormStateListener from './useFormStateListener';

const FormWrapper: React.FC<FormRenderProps> = ({ children, form }) => {
	const formState = useFormStateListener(form);

	const [showForm, setShowForm] = useState(false);
	const toggleShowForm = useCallback(() => setShowForm((v) => !v), []);
	const onReset = useCallback(() => form.reset(), [form]);
	const onSubmit = useCallback(() => {
		form.submit();
		form.reset();
		toggleShowForm();
	}, [form, toggleShowForm]);

	const isResetDisabled = formState?.pristine;
	const isSubmitDisabled = showForm && (formState?.hasValidationErrors || formState?.pristine);

	return (
		<div className='rem-tickets__form'>
			<p>{__('Or')}</p>
			<p>{__('Add ticket details manually')}</p>
			<div className='rem-tickets__form-btns'>
				{showForm && (
					<Button
						buttonText={__('Reset')}
						className='rem-tickets__form-btn'
						onClick={onReset}
						isDisabled={isResetDisabled}
					/>
				)}
				<Button
					buttonText={__('Add')}
					buttonType={showForm ? ButtonType.PRIMARY : null}
					className='rem-tickets__form-btn'
					icon={showForm ? Check : Plus}
					onClick={showForm ? onSubmit : toggleShowForm}
					isDisabled={isSubmitDisabled}
				/>
			</div>
			{showForm && <>{children}</>}
		</div>
	);
};

export default FormWrapper;
