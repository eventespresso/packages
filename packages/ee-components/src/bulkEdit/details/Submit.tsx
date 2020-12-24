import React, { useCallback } from 'react';
import type { FormRenderProps } from 'react-final-form';

import { __ } from '@eventespresso/i18n';
import { useFormState } from '@eventespresso/form';
import { Button, ButtonRow, ButtonType, useConfirmationDialog } from '@eventespresso/components';

const subscription = { submitting: true, hasValidationErrors: true, hasSubmitErrors: true, pristine: true };

const Submit: React.FC<Pick<FormRenderProps<any>, 'form'>> = ({ form }) => {
	const { submitting, hasValidationErrors, hasSubmitErrors, pristine } = useFormState({ subscription });

	const isSubmitDisabled = submitting || hasValidationErrors || hasSubmitErrors;

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
