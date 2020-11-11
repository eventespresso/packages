import React, { cloneElement } from 'react';
import classNames from 'classnames';

import { ButtonGroup as ButtonGroupAdapter, ButtonGroupProps } from '@eventespresso/adapters';
import { cleanChildren } from '@eventespresso/utils';

import './style.scss';

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, size, ...props }) => {
	const className = classNames('ee-btn-group', props.className);
	const validChildren = cleanChildren(children);
	const clones = validChildren.map((child: any) => {
		return cloneElement(child, {
			size: size || child.props.size,
		});
	});

	return <ButtonGroupAdapter className={className}>{clones}</ButtonGroupAdapter>;
};

export default ButtonGroup;
