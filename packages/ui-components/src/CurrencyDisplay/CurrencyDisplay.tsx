import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { getCurrencySignCharacterCountClassName, getCurrencySignPositionClassName } from '@eventespresso/utils';

import { CurrencySign } from '../CurrencySign';
import type { CurrencyDisplayProps } from './types';

import './style.scss';

export const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({ sign, signB4, value, vertical, ...props }) => {
	const signOutput = <CurrencySign sign={sign} />;

	const characters = getCurrencySignCharacterCountClassName(sign);
	const position = getCurrencySignPositionClassName(signB4);

	const className = classNames(
		'ee-currency-display',
		characters,
		position,
		vertical && 'ee-currency-display--vertical',
		props.className
	);

	return (
		<div className={className}>
			{value ? (
				<>
					{signB4 && signOutput}
					<span>{value}</span>
					{!signB4 && signOutput}
				</>
			) : (
				__('free')
			)}
		</div>
	);
};
