import React, { useCallback } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { Save } from '@eventespresso/icons';
import { Divider } from '@eventespresso/adapters';

import { Button, ButtonType, Popover } from '../../';
import { PopoverFormProps } from './types';

const PopoverForm: React.FC<PopoverFormProps> = ({
	content,
	isSubmitDisabled,
	onClose: _onClose,
	onSubmit,
	submitLabel,
	title,
	triggerText,
	triggerProps,
	...props
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const className = classNames(props.className, 'ee-popover-form__content');

	const onSave = useCallback(() => {
		onSubmit?.();
		onClose();
	}, [onClose, onSubmit]);

	const onClosePopover = useCallback(() => {
		_onClose?.();
		onClose();
	}, [_onClose, onClose]);

	const popoverContent = (
		<div className={className}>
			{content}
			<Divider />
			<Button
				buttonText={submitLabel || __('save')}
				buttonType={ButtonType.PRIMARY}
				icon={Save}
				isDisabled={isSubmitDisabled}
				noMargin
				onClick={onSave}
			/>
		</div>
	);

	const triggerClassName = classNames(props.className, 'ee-popover-form__btn');

	return (
		<Popover
			className='ee-popover-form'
			closeOnBlur={false}
			content={popoverContent}
			header={<strong>{title}</strong>}
			isOpen={isOpen}
			onClose={onClosePopover}
			trigger={
				<Button buttonText={triggerText} {...triggerProps} className={triggerClassName} onClick={onOpen} />
			}
		/>
	);
};

export default PopoverForm;
