import { useCallback, useState } from 'react';
import * as R from 'ramda';

import { __ } from '@eventespresso/i18n';
import { Plus } from '@eventespresso/icons';
import { useDisclosure } from '@eventespresso/hooks';
import { Button, Heading, Popover, SelectWithLabel, SelectProps } from '@eventespresso/ui-components';

import { ELEMENT_BLOCKS_OPTIONS } from '../constants';
import { useFormState } from '../state';
import { FormSection, ElementType } from '../types';

interface SidebarProps {
	className?: string;
	formSection: FormSection;
}

// this represents existing forms sections pulled from the database with a status of "default"
const mockFormSectionData: Array<FormSection> = [
	{
		adminLabel: 'pet questions',
		appliesTo: 'PRIMARY',
		belongsTo: '',
		htmlClass: '',
		id: 'lkj567',
		order: 3,
		publicLabel: 'About Your Pet',
		showLabel: false,
		status: 'DEFAULT',
	},
];

const existingFormSections = mockFormSectionData.map((section: FormSection) => {
	return {
		label: section.adminLabel,
		value: section.id,
	};
});

export const AddFormElementPopover: React.FC<SidebarProps> = ({ formSection }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { addSection, addElement } = useFormState();
	const [selectedElement, setSelectedElement] = useState<ElementType>('formSection');
	const [selectedSection, setSelectedSection] = useState(existingFormSections[0].value);

	const onAddElement = useCallback(() => {
		if (selectedElement === 'formSection') {
			addSection({ afterId: formSection.id, section: {} });
		} else {
			addElement({ element: { type: selectedElement, belongsTo: formSection.id } });
		}
		onClose();
	}, [addElement, addSection, formSection.id, onClose, selectedElement]);

	const onAddExistingSection = useCallback(() => {
		const section = R.find(R.propEq('id', selectedSection), mockFormSectionData);
		addSection({ section, afterId: formSection.id });
		onClose();
	}, [addSection, formSection.id, onClose, selectedSection]);

	const onChangeElement = useCallback<SelectProps['onChangeValue']>((value) => {
		setSelectedElement(value as ElementType);
	}, []);
	const onChangeSection = useCallback<SelectProps['onChangeValue']>((value) => {
		setSelectedSection(value as string);
	}, []);

	const tabIndex = isOpen ? 0 : -1;

	return (
		<Popover
			className={'ee-add-form-element__popover'}
			contentClassName={'ee-add-form-element__content'}
			header={<Heading as='h5'>{__('Add Form Element')}</Heading>}
			isOpen={isOpen}
			onClose={onClose}
			placement='top-end'
			trigger={
				<Button
					buttonText={__('Add Form Element')}
					className={'ee-add-form-element__trigger'}
					icon={Plus}
					onClick={onOpen}
					size='small'
				/>
			}
		>
			<p>
				{__(
					'form element order can be changed after adding by using the drag handles in the form element toolbar'
				)}
			</p>
			<div className={'ee-add-form-element__option'}>
				<SelectWithLabel
					id={`${formSection.id}-load-existing-section-selector`}
					label={__('load existing form section')}
					options={existingFormSections}
					onChangeValue={onChangeSection}
					size='small'
					tabIndex={tabIndex}
				/>
				<Button
					buttonText={__('Add')}
					onClick={onAddExistingSection}
					buttonType='primary'
					size='small'
					tabIndex={tabIndex}
				/>
			</div>
			<div className={'ee-add-form-element__option'}>
				<SelectWithLabel
					id={`${formSection.id}-add-new-section-selector`}
					label={__('add new form element')}
					options={ELEMENT_BLOCKS_OPTIONS}
					onChangeValue={onChangeElement}
					size='small'
					tabIndex={tabIndex}
				/>
				<Button
					buttonText={__('Add')}
					onClick={onAddElement}
					buttonType='primary'
					size='small'
					tabIndex={tabIndex}
				/>
			</div>
		</Popover>
	);
};
