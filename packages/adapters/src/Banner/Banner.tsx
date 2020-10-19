import React from 'react';
import classNames from 'classnames';
import { Alert as ChakraAlert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/core';

import type { BannerProps } from './types';

export const Banner: React.FC<BannerProps> = ({ children, description, iconProps, status, title, ...props }) => {
	const className = classNames(props.className, 'ee-banner', status && `ee-banner--${status}`);

	return (
		<ChakraAlert className={className}>
			<AlertIcon className={'ee-banner__icon'} {...iconProps} />

			{title && <AlertTitle className={'ee-banner__title'}>{title}</AlertTitle>}

			{description && <AlertDescription className={'ee-banner__desc'}>{description}</AlertDescription>}

			{children && children}
		</ChakraAlert>
	);
};
