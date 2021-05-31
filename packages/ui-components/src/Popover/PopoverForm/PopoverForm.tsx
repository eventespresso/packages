import { useCallback } from 'react';

import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { SaveOutlined } from '@eventespresso/icons';
import { Divider } from '@eventespresso/adapters';
import { useDisclosure } from '@eventespresso/hooks';

import { Button, ButtonType, Popover } from '../../';
import type { PopoverFormProps } from './types';

export const PopoverForm: React.FC<PopoverFormProps> = ({
	children,
	className,
	content,
	isSubmitDisabled,
	onClose: _onClose,
	onSubmit,
	renderTrigger,
	submitLabel,
	title,
	...props
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const contentClassName = classNames(className, 'ee-popover-form__content');

	const onSave = useCallback(() => {
		onSubmit?.();
		onClose();
	}, [onClose, onSubmit]);

	const onClosePopover = useCallback(() => {
		_onClose?.();
		onClose();
	}, [_onClose, onClose]);

	const popoverContent = (
		<div className={contentClassName}>
			{content || children}
			<Divider />
			<Button
				buttonText={submitLabel || __('save')}
				buttonType={ButtonType.PRIMARY}
				icon={SaveOutlined}
				isDisabled={isSubmitDisabled}
				noMargin
				onClick={onSave}
			/>
		</div>
	);

	const triggerClassName = 'ee-popover-form__btn';

	return (
		<Popover
			className='ee-popover-form'
			closeOnBlur={false}
			content={popoverContent}
			header={<strong>{title}</strong>}
			isOpen={isOpen}
			onClose={onClosePopover}
			trigger={renderTrigger({ className: triggerClassName, onOpen })}
			{...props}
		/>
	);
};
