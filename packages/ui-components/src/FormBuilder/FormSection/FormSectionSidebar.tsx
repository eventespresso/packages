// import { useCallback } from 'react';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { Plus } from '@eventespresso/icons';

import { Button } from '../../Button';
import { Heading } from '../../Heading';
import { Select } from '../../';
import { ELEMENT_BLOCKS } from '../constants';
import { useFormState } from '../state';

import { FormSection } from '../types';

interface SidebarProps {
	className?: string;
	formSection: FormSection;
}

// this represents existing forms sections pulled from the database with a status of "default"
const mockFormSectionData = [
	{
		UUID: 'lkj567',
		adminLabel: 'pet questions',
		appliesTo: 'primary',
		belongsTo: '',
		customCss: '',
		description: '',
		elements: [],
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

const elementtypes = ELEMENT_BLOCKS.map((tag) => {
	return {
		label: tag.label,
		value: tag.type,
	};
});

export const FormSectionSidebar: React.FC<SidebarProps> = ({ className, formSection }) => {
	const { isElementOpen, toggleOpenElement } = useFormState();
	const sidebarID = `${formSection.UUID}-sidebar`;
	const sidebarOpen = isElementOpen(sidebarID);

	// console.log('%c sidebarID', 'color: LimeGreen;', sidebarID, 'open', sidebarOpen);
	/*
	const toggleSidebar = useCallback(() => {
		toggleOpenElement(sidebarID);
		console.log('%c sidebarID', 'color: Yellow;', sidebarID, 'open', isElementOpen(sidebarID));
	}, [sidebarID, isElementOpen, toggleOpenElement]);
 	*/
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
					size='small'
				/>
				<Button buttonText={__('Add')} buttonType='primary' size='small' />
			</div>
			<div className={sidebarItemClass}>
				<Select
					id={`${formSection.UUID}-add-new-section-selector`}
					label={__('add new form element')}
					options={elementtypes}
					size='small'
				/>
				<Button buttonText={__('Add')} buttonType='primary' size='small' />
			</div>
			<div className={sidebarItemClass}>
				<Button
					buttonText={__('Cancel')}
					// onClick={toggleSidebar}
					onClick={toggleOpenElement(sidebarID)}
					size='small'
				/>
			</div>
		</div>
	);

	return (
		<>
			<Button
				buttonText={__('Add Form Element')}
				className={toggleClass}
				icon={Plus}
				// onClick={toggleSidebar}
				onClick={toggleOpenElement(sidebarID)}
				size='small'
			/>
			{sidebar}
		</>
	);
};
