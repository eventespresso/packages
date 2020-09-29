import React from 'react';
import { __ } from '@eventespresso/i18n';

import { ErrorMessage } from '@eventespresso/form';
import type { EspressoFormProps } from '@eventespresso/form';

import { EntityEditModal } from '../../';
import FormWrapper from './FormWrapper';
import { FormWithConfig } from '../../FormWithConfig';

import './styles.scss';

export interface BulkEditDetailsProps {
	formConfig: EspressoFormProps;
	isOpen: boolean;
	onClose: VoidFunction;
	title?: string;
	warning?: string;
}

export const BulkEditDetails: React.FC<BulkEditDetailsProps> = ({ isOpen, onClose, formConfig, title, warning }) => {
	const message = __('Note: ') + (warning || __('any changes will be applied to ALL of the selected entities.'));
	return (
		<EntityEditModal
			isOpen={isOpen}
			onClose={onClose}
			closeOnOverlayClick={true}
			title={title || __('Bulk edit details')}
		>
			<ErrorMessage message={message} />
			<FormWithConfig {...formConfig} formWrapper={FormWrapper} />
		</EntityEditModal>
	);
};
