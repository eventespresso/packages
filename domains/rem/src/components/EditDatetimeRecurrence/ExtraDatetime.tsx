import React from 'react';
import DateTime from 'react-datetime';
import { __ } from '@wordpress/i18n';
import { Dashicon, IconButton, Tooltip } from '@wordpress/components';

const AddDate = ({ addDateHandler }) => {
	return (
		<Tooltip text={__('Add Extra Event Date')}>
			<IconButton
				id={'add-datetime-button'}
				className={'components-button components-icon-button'}
				onClick={addDateHandler}
			>
				<Dashicon icon={'insert'} />
			</IconButton>
		</Tooltip>
	);
};

const DeleteDate = ({ deleteDateHandler }) => {
	return (
		<Tooltip text={__('Delete this Event Date')}>
			<IconButton
				id={'delete-datetime-button'}
				className={'components-button components-icon-button'}
				onClick={deleteDateHandler}
			>
				<Dashicon icon={'trash'} />
			</IconButton>
		</Tooltip>
	);
};

const Actions = ({ lastItem, addDateHandler, deleteDateHandler }) => {
	return lastItem ? (
		<AddDate addDateHandler={addDateHandler} />
	) : (
		<DeleteDate deleteDateHandler={deleteDateHandler} />
	);
};

const ExtraDatetime = ({
	extraDate,
	options,
	handleChange,
	datetimeCount,
	addDateHandler,
	deleteDateHandler,
	index,
}) => {
	const calendarAttributes = {
		'aria-label': __('Datetime picker for an extra date', 'event_espresso'),
		value: extraDate.start,
		dateFormat: options.dateFormat,
		locale: options.locale,
		readOnly: true,
	};

	return (
		<>
			<DateTime
				{...calendarAttributes}
				inputProps={{ name: extraDate.name, readOnly: true }}
				timeFormat={false}
				viewMode='days'
				closeOnSelect
				closeOnTab
				required
				onChange={handleChange}
			/>
			<Actions
				lastItem={index === datetimeCount}
				addDateHandler={addDateHandler}
				deleteDateHandler={deleteDateHandler}
			/>
		</>
	);
};

export default ExtraDatetime;
