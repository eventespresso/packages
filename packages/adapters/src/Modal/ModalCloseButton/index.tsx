import React from 'react';
import classNames from 'classnames';
import { Close } from '@eventespresso/icons';
import { ModalCloseButton as ChakraModalCloseButton } from '@chakra-ui/core';

import type { ModalCloseButtonProps } from './types';
import './styles.scss';

const ModalCloseButton: React.FC<ModalCloseButtonProps> = (props) => {
	const className = classNames(props.className, 'ee-confirm-close ee-icon-button ee-icon-button--borderless');
	return <ChakraModalCloseButton icon={Close} {...props} className={className} />;
};

export default ModalCloseButton;
