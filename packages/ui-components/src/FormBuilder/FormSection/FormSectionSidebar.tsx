import { useCallback, useState } from 'react';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { Plus } from '@eventespresso/icons';

import { Button } from '../../Button';
import { Heading } from '../../Heading';
import { Select, SelectProps } from '../../';
import { ELEMENT_BLOCKS_OPTIONS } from '../constants';
import { useFormState } from '../state';
import { FormSection, ElementType } from '../types';
import { find, propEq } from 'ramda';

interface SidebarProps {
	className?: string;
	formSection: FormSection;
}

// this represents existing forms sections pulled from the database with a status of "default"
const mockFormSectionData: Array<FormSection> = [
	{
		UUID: 'lkj567',
		adminLabel: 'pet questions',
		appliesTo: 'primary',
		belongsTo: '',
		customCss: '',
		description: '',
		htmlClass: '',
		name: 'About Your Pet',
		order: 3,
		relation: '',
		showName: false,
		showDescription: false,
		status: 'default',
		wpUser: 1,
	},
];

const existingFormSections = mockFormSectionData.map((section: FormSection) => {
	return {
		label: section.adminLabel,
		value: section.UUID,
	};
});

export const FormSectionSidebar: React.FC<SidebarProps> = ({ className, formSection }) => {
	const { isElementOpen, toggleOpenElement, addSection, addElement } = useFormState();
	const [selectedElement, setSelectedElement] = useState<ElementType>('formSection');
	const [selectedSection, setSelectedSection] = useState(existingFormSections[0].value);

	const sidebarID = `${formSection.UUID}-sidebar`;
	const sidebarOpen = isElementOpen(sidebarID);

	const toggleSidebar = useCallback(() => toggleOpenElement(sidebarID), [sidebarID, toggleOpenElement]);

	const onAddElement = useCallback(() => {
		if (selectedElement === 'formSection') {
			addSection({}, formSection.UUID);
		} else {
			addElement({ type: selectedElement, belongsTo: formSection.UUID });
		}
	}, [addElement, addSection, formSection.UUID, selectedElement]);

	const onAddExistingSection = useCallback(() => {
		const section = find(propEq('UUID', selectedSection), mockFormSectionData);
		addSection(section, formSection.UUID);
	}, [addSection, formSection.UUID, selectedSection]);

	const onChangeElement = useCallback<SelectProps['onChangeValue']>((value) => {
		setSelectedElement(value as ElementType);
	}, []);
	const onChangeSection = useCallback<SelectProps['onChangeValue']>((value) => {
		setSelectedSection(value as string);
	}, []);

	const sidebarClass = classNames(
		className,
		'ee-form-section__sidebar',
		sidebarOpen && 'ee-form-section__sidebar--active'
	);
	const sidebarItemClass = classNames(
		className,
		'ee-form-section__sidebar-item',
		sidebarOpen && 'ee-form-section__sidebar-item--active'
	);
	const toggleClass = classNames(
		className,
		'ee-form-section__sidebar-toggle',
		sidebarOpen && 'ee-form-section__sidebar-toggle--active'
	);

	const tabIndex = sidebarOpen ? 0 : -1;

	const sidebar = (
		<div className={sidebarClass}>
			<Heading as='h5'>{__('Add Form Element')}</Heading>
			<p>
				{__(
					'form element order can be changed after adding by using the drag handles in the form element toolbar'
				)}
			</p>
			<div className={sidebarItemClass}>
				<Select
					id={`${formSection.UUID}-load-existing-section-selector`}
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
			<div className={sidebarItemClass}>
				<Select
					id={`${formSection.UUID}-add-new-section-selector`}
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
			<div className={sidebarItemClass}>
				<Button buttonText={__('Cancel')} onClick={toggleSidebar} size='small' tabIndex={tabIndex} />
			</div>
		</div>
	);

	return (
		<>
			{sidebar}
			<Button
				buttonText={__('Add Form Element')}
				className={toggleClass}
				icon={Plus}
				onClick={toggleSidebar}
				size='small'
			/>
		</>
	);
};
