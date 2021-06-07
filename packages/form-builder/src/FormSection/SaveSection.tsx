import { useCallback, useState } from 'react';

import { __ } from '@eventespresso/i18n';
import { Save } from '@eventespresso/icons';
import { RadioGroup } from '@eventespresso/adapters';
import { IconButton, Radio, PopoverForm, PopoverFormProps } from '@eventespresso/ui-components';

import { useFormState } from '../state';
import type { FormSectionProps, FormSectionStatus } from '../types';

export const SaveSection: React.FC<FormSectionProps> = ({ formSection }) => {
	const { isElementOpen, copySection } = useFormState();
	const tabIndex = isElementOpen({ UUID: formSection.UUID }) ? 0 : -1;

	const [value, setValue] = useState('shared');
	const onSave = useCallback(() => {
		// Lets create a copy of the section with status set to the selected value
		copySection({ UUID: formSection.UUID, section: { status: value as FormSectionStatus } });
	}, [copySection, formSection.UUID, value]);

	const renderTrigger = useCallback<PopoverFormProps['renderTrigger']>(
		({ onOpen, ...props }) => (
			<IconButton
				{...props}
				borderless
				className='ee-form-section__toolbar-button'
				icon={Save}
				onClick={onOpen}
				size='smaller'
				tabIndex={tabIndex}
				tooltip={__('save form section for use in other forms')}
				transparentBg
			/>
		),
		[tabIndex]
	);

	const id = `save-section-${formSection.UUID}`;
	return (
		<PopoverForm
			closeOnBlur
			renderTrigger={renderTrigger}
			title={__('save form section for use in other forms')}
			onSubmit={onSave}
		>
			<label id={`${id}-label`} htmlFor={id}>
				{__('save as')}
			</label>
			<RadioGroup value={value} onChange={setValue} id={id} aria-labelledby={`${id}-label`}>
				<Radio value='default' aria-describedby={`${id}-default-desc`}>
					{__('default')}
				</Radio>
				<p id={`${id}-default-desc`}>
					{__(' a copy of this form section will be automatically added to ALL new events')}
				</p>
				<Radio value='shared' aria-describedby={`${id}-shared-desc`}>
					{__('shared')}
				</Radio>
				<p id={`${id}-shared-desc`}>
					{__('a copy of this form section will be saved for use in other events but not loaded by default')}
				</p>
			</RadioGroup>
		</PopoverForm>
	);
};
