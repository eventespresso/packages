import { __ } from '@eventespresso/i18n';
import { Close } from '@eventespresso/icons';
import type { ButtonProps } from '../../Button';

import './styles.scss';

export const modalCloseButtonProps: ButtonProps = {
	'aria-label': __('close modal'),
	className: 'ee-modal__close-btn ee-icon-button ee-icon-button--borderless',
	icon: Close,
};
