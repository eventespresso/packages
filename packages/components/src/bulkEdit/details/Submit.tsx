import React, { useState, useEffect, useCallback } from 'react';
import { __ } from '@eventespresso/i18n';
import type { FormRenderProps } from 'react-final-form';
import type { FormState } from 'final-form';

import { Button, ButtonRow, ButtonType, useConfirmationDialog } from '../../';

const subscription = { submitting: true, hasValidationErrors: true, hasSubmitErrors: true, pristine: true };

const Submit: React.FC<Pick<FormRenderProps<any>, 'form'>> = ({ form }) => {
	const [formState, setFormState] = useState<Partial<FormState<any>>>({});

	const { submitting, hasValidationErrors, hasSubmitErrors, pristine } = formState;
	const isSubmitDisabled = submitting || hasValidationErrors || hasSubmitErrors;

	useEffect(() => {
		// subscribe to RFF state.
		const unsubscribe = form.subscribe((state) => {
			setFormState(state);
		}, subscription);

		// housekeeping
		return unsubscribe;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { confirmationDialog, onOpen } = useConfirmationDialog({
		message: __('Are you sure you want to bulk update the details?'),
		title: __('Bulk update details'),
		onConfirm: form.submit,
	});

	const onReset = useCallback(() => form.reset(), [form]);

	return (
		<ButtonRow>
			<Button
				buttonText={__('Submit')}
				buttonType={ButtonType.PRIMARY}
				isDisabled={isSubmitDisabled}
				type='submit'
				onClick={onOpen}
			/>
			{confirmationDialog}
			<Button buttonText={__('Reset')} isDisabled={pristine} type='reset' onClick={onReset} />
		</ButtonRow>
	);
};

export default Submit;
