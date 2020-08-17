import React from 'react';
import classNames from 'classnames';

class StyleButton extends React.Component<any> {
	onToggle: (e: any) => void;

	constructor() {
		super();
		this.onToggle = (e) => {
			e.preventDefault();
			this.props.onToggle(this.props.style);
		};
	}

	render() {
		const className = classNames('RichEditor-styleButton', this.props.active && 'RichEditor-activeButton');

		return (
			<span className={className} onMouseDown={this.onToggle} role='button' tabIndex={0}>
				{this.props.label}
			</span>
		);
	}
}

export default StyleButton;
