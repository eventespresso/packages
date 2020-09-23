import React from 'react';
import classNames from 'classnames';
import { __ } from '@eventespresso/i18n';

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

	return (
		<div className={className}>
			<Popover
				content={<Content date={date} />}
				header={__('This Date Converted To:')}
				trigger={<Trigger tooltip={__('click for timezone\ninformation')} />}
			/>
		</div>
	);
};

export default React.memo(TimezoneTimeInfo);
