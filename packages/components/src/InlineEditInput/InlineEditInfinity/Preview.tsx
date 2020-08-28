import React from 'react';
import classNames from 'classnames';

import { Edit } from '@eventespresso/icons';
import { isInfinite } from '@eventespresso/utils';

import { TabbableText } from '../../';
import type { PreviewProps } from '../types';

import '../style.scss';

const Preview: React.FC<PreviewProps> = ({ value, onRequestEdit, isEditing, ...props }) => {
	const isInfinity = isInfinite(value);
	const className = classNames('ee-inline-edit__infinity', {
		'ee-infinity-sign': isInfinity,
	});

	if (isEditing) {
		return null;
	}

	const text = isInfinity ? <span className={'ee-infinity-sign__inner'}>{'∞'}</span> : value;

	return (
		<div className='preview-wrapper preview-wrapper--infinity'>
			<Edit />
			<TabbableText className={className} onClick={onRequestEdit} text={text} />
		</div>
	);
};

export default Preview;
