import React from 'react';
import classNames from 'classnames';
import { __ } from '@wordpress/i18n';

import { Popover } from '@eventespresso/adapters';

import Content from './Content';
import Trigger from './Trigger';
import './style.scss';

export interface Props {
	className?: string;
	date: Date;
}

const TimezoneTimeInfo: React.FC<Props> = ({ date, ...props }) => {
	const className = classNames(props.className, 'ee-timezone-info');
	const content = () => <Content date={date} />;

	return (
		<div className={className}>
			<Popover
				content={content}
				header={__('This Date Converted To:')}
				trigger={<Trigger tooltip={__('click for timezone\ninformation')} />}
			/>
		</div>
	);
};

export default React.memo(TimezoneTimeInfo);
