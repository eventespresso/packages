import { memo } from 'react';

import { getPropsAreEqual } from '@eventespresso/utils';

import { FormSection } from './FormSection';

import type { FormSection as TFormSection } from '../types';

export type FormSectionsProps = {
	formSections: Array<TFormSection>;
};

export const FormSections: React.FC<FormSectionsProps> = memo(({ formSections }) => {
	return (
		<>
			{formSections.map((formSection, index) => (
				<FormSection key={formSection.UUID} formSection={formSection} index={index} />
			))}
		</>
	);
}, getPropsAreEqual([['formSections']]));
