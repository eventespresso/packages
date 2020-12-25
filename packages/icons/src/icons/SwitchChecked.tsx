import withEnhance from '../withEnhance';
import { IconProps } from '../types';

const SvgSwitchChecked = (props: IconProps): JSX.Element => {
	return (
		<svg aria-hidden='true' fill='currentColor' height={11} width={14} {...props}>
			<path d='M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0' fill='#fff' />
		</svg>
	);
};

export default withEnhance(SvgSwitchChecked);
