import classNames from 'classnames';
import { __ } from '@eventespresso/i18n';
import { DragHandle, Trash } from '@eventespresso/icons';

import { Button, IconButton } from '../Button';
import { ELEMENT_BLOCKS } from './constants';
import { Select } from '../';

import type { FormSectionProps } from './types';

const options = ELEMENT_BLOCKS.map((tag) => {
	return {
		label: tag.label,
		value: tag.type,
	};
});
const locations = [
	{
		label: 'top of this form section',
		value: 'top',
	},
	{
		label: 'bottom of this form section',
		value: 'bottom',
	},
];

export const FormSectionToolbar: React.FC<FormSectionProps> = ({ active, formSection }) => {
	const toolbarClass = classNames('ee-form-section__toolbar', active && 'ee-form-section__toolbar--active');
	return (
		<div className={toolbarClass}>
			<div className={'ee-form-section__toolbar-tools'}>
				<div className='ee-form-section__toolbar-item'>
					<Select
						id={`${formSection.UUID}-add-new-section-selector`}
						label={__('add new')}
						options={options}
						size='small'
					/>
					<Select
						id={`${formSection.UUID}-new-location-selector`}
						label={__('to the')}
						options={locations}
						size='small'
					/>
					<Button buttonText={__('Add')} size='small' />
				</div>
				<div className='ee-form-section__toolbar-item'>
					<IconButton icon={Trash} borderless size='small' transparentBg />
					<IconButton icon={DragHandle} borderless className='ee-drag-handle' size='small' transparentBg />
				</div>
			</div>
		</div>
	);
};
