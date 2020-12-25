import { MoneyInputWrapper, MoneyInputWrapperProps } from '@eventespresso/ui-components';
import { useConfig } from '@eventespresso/services';

interface Props extends Omit<MoneyInputWrapperProps, 'sign' | 'signB4'> {}

export const MoneyInputWithConfig: React.FC<Props> = (props) => {
	const { currency } = useConfig();

	return <MoneyInputWrapper {...props} sign={currency?.sign} signB4={currency?.signB4} />;
};
