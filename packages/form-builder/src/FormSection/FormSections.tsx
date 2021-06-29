import { memo, useCallback } from 'react';

import { getPropsAreEqual } from '@eventespresso/utils';
import { __ } from '@eventespresso/i18n';
import { Button } from '@eventespresso/ui-components';
import { Plus } from '@eventespresso/icons';

import { FormSection } from './FormSection';
import { useFormState } from '../state';

import type { FormSection as TFormSection } from '../types';

export type FormSectionsProps = {
	formSections: Array<TFormSection>;
};

export const FormSections: React.FC<FormSectionsProps> = memo(({ formSections }) => {
	const { addSection } = useFormState();

	const onAddSection = useCallback(() => {
		addSection({ afterId: null, section: {} });
	}, [addSection]);

	// If there are no sections, show add section button
	if (!formSections.length) {
		return <Button buttonText={__('Add Form Section')} icon={Plus} onClick={onAddSection} />;
	}

	return (
		<>
			{formSections.map((formSection, index) => (
				<FormSection key={formSection.id} formSection={formSection} index={index} />
			))}
		</>
	);
}, getPropsAreEqual([['formSections']]));
