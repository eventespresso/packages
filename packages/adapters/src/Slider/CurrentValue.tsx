import { useSliderContext } from '@chakra-ui/react';

export const CurrentValue: React.FC = () => {
	const { state } = useSliderContext();

	return <>{state.value}</>;
};
