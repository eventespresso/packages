import classNames from 'classnames';

import { IconComponent } from './types';

import './style.scss';

const withClassName = (WrappedComponent: IconComponent): IconComponent => {
	const WrappedIcon: IconComponent = ({ noMargin, size, ...props }) => {
		const className = classNames(
			'ee-svg',
			size && `ee-icon--${size}`,
			noMargin && 'ee-icon--no-margin',
			props.className
		);

		return <WrappedComponent {...props} className={className} />;
	};

	return WrappedIcon;
};

export default withClassName;
