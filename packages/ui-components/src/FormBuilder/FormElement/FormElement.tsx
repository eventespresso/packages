import { useCallback } from 'react';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { More } from '@eventespresso/icons';

import { IconButton } from '../../Button';
import { FormElementInput } from './FormElementInput';
import { FormElementToolbar } from './FormElementToolbar';
import { FormElementTabs } from './Tabs';
import { useFormState } from '../state';

import type { FormElementProps } from '../types';

export const FormElement: React.FC<FormElementProps> = ({ element }) => {
	const { isElementOpen, toggleOpenElement } = useFormState();
	const active = isElementOpen(element.UUID);
	const wrapperClass = classNames('ee-form-element__wrapper', active && 'ee-form-element__wrapper--active');

	const onToggle = useCallback(() => toggleOpenElement(element.UUID), [element.UUID, toggleOpenElement]);

	return (
		<div className={wrapperClass}>
			<div className='ee-form-element'>
				<FormElementInput element={element} />
				<IconButton
					active={active}
					borderless
					className='ee-form-element__menu-button'
					icon={More}
					onClick={onToggle}
					size='small'
					tooltip={__('click to view form element toolbar and settings')}
					transparentBg
				/>
				<FormElementToolbar element={element} />
			</div>
			<FormElementTabs element={element} />
		</div>
	);
};
