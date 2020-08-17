import React from 'react';
import classNames from 'classnames';

const StyleButton = (props) => {
	const className = classNames('RichEditor-styleButton', this.props.active && 'RichEditor-activeButton');

	const onToggle = (e) => {
		e.preventDefault();
		props.onToggle(props.style);
	};

	return (
		<span className={className} onMouseDown={onToggle} role='button' tabIndex={0}>
			{props.label}
		</span>
	);
};

export default StyleButton;
