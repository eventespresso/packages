import classNames from 'classnames';

import { IconComponent } from './types';

import './style.scss';

const withClassName = (WrappedComponent: IconComponent, svgName = ''): IconComponent => {
	const WrappedIcon: IconComponent = ({ noMargin, size, ...props }) => {
		const className = classNames(
			'ee-svg',
			size && `ee-icon--${size}`,
			noMargin && 'ee-icon--no-margin',
			svgName && `ee-svg--${svgName}`,
			props.className
		);

		return <WrappedComponent {...props} className={className} />;
	};

	return WrappedIcon;
};

export default withClassName;
