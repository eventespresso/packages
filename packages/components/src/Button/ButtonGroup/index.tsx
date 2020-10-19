import React, { cloneElement } from 'react';
import classNames from 'classnames';

import { ButtonGroup as ButtonGroupAdapter } from '@eventespresso/adapters';
import { cleanChildren } from './utils';
import type { ButtonGroupProps } from './types';

import './style.scss';

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttonSize, children, ...props }) => {
	const className = classNames(props.className, 'ee-btn-group');
	const validChildren = cleanChildren(children);
	const clones = validChildren.map((child: any) => {
		return cloneElement(child, {
			buttonSize: buttonSize || child.props.buttonSize,
		});
	});

	return <ButtonGroupAdapter className={className}>{clones}</ButtonGroupAdapter>;
};

export default ButtonGroup;
