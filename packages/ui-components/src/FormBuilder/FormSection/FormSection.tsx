import classNames from 'classnames';
import { More } from '@eventespresso/icons';
import { useDisclosure } from '@eventespresso/hooks';

import { IconButton } from '../../Button';
import { FormElement } from '../FormElement';
import { FormSectionToolbar } from './FormSectionToolbar';
import { FormSectionTabs } from './Tabs';

import type { FormSectionProps } from '../types';

export const FormSection: React.FC<FormSectionProps> = ({ formSection }) => {
	const { isOpen, onToggle } = useDisclosure();
	const fieldsetClass = classNames('ee-form-section', isOpen && 'ee-form-section--active');
	const formElements = formSection.elements.map((element, index) => <FormElement key={index} element={element} />);
	return (
		<fieldset className={fieldsetClass}>
			<div className={'ee-form-section__wrapper'}>
				{/* <div className='ee-form-section__name'> */}
				<h4 className='ee-form-section__name'>{formSection.adminLabel || formSection.name}</h4>
				{/* </div> */}
				<IconButton
					active={isOpen}
					borderless
					className='ee-form-section__menu-button'
					icon={More}
					onClick={onToggle}
					size='small'
					transparentBg
				/>
				<FormSectionToolbar active={isOpen} formSection={formSection} />
			</div>
			<FormSectionTabs formSection={formSection} open={isOpen} />
			{formElements}
		</fieldset>
	);
};
