import './style.scss';

export type RequiredIndicatorProps = {
	isRequired?: boolean;
};

export const RequiredIndicator: React.FC<RequiredIndicatorProps> = ({ isRequired }) => {
	return isRequired ? (
		<span role='presentation' aria-hidden='true' className='ee-required-indicator'>
			*
		</span>
	) : null;
};
