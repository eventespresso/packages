import classNames from 'classnames';
import { __ } from '@eventespresso/i18n';
import { useDisclosure } from '@eventespresso/hooks';
import { DragHandle, SettingsOutlined, Trash } from '@eventespresso/icons';

import { Button, IconButton } from '../Button';
import { ELEMENT_BLOCKS } from './constants';
import { FormSectionSettings } from './FormSectionSettings';
import { Select } from '../';

import type { FormSectionProps } from './types';

const options = ELEMENT_BLOCKS.map((tag) => {
	return {
		label: tag.label,
		value: tag.type,
	};
});

export const FormSectionToolbar: React.FC<FormSectionProps> = ({ active, formSection }) => {
	const { isOpen, onToggle } = useDisclosure();
	const toolbarClass = classNames('ee-form-section__toolbar', active && 'ee-form-section__toolbar--active');
	return (
		<>
			<div className={toolbarClass}>
				<div className={'ee-form-section__toolbar-tools'}>
					<div className='ee-form-section__toolbar-item ee-form-section__toolbar-item-name'>
						<h4>{formSection.adminLabel}</h4>
					</div>
					<div className='ee-form-section__toolbar-item'>
						<Select
							id={`${formSection.UUID}-add-new-section-selector`}
							label={__('add new')}
							options={options}
							size='small'
						/>
						<Button buttonText={__('Add')} size='small' />
					</div>
					<div className='ee-form-section__toolbar-item'>
						<IconButton
							active={isOpen}
							borderless
							icon={SettingsOutlined}
							onClick={onToggle}
							size='small'
							transparentBg
						/>
						<IconButton icon={Trash} borderless size='small' transparentBg />
						<IconButton
							icon={DragHandle}
							borderless
							className='ee-drag-handle'
							size='small'
							transparentBg
						/>
					</div>
				</div>
			</div>
			{/* <div className='break' /> */}
			<FormSectionSettings formSection={formSection} open={isOpen} />
		</>
	);
};
