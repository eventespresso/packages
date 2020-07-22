import { useDisclosure } from '@chakra-ui/hooks';

import { TicketPriceCalculatorHook } from '../types';
import ModalContainer from '../components/ModalContainer';

const useTicketPriceCalculator = (): TicketPriceCalculatorHook => {
	const disclosure = useDisclosure();

	return {
		...disclosure,
		ModalContainer,
	};
};

export default useTicketPriceCalculator;
