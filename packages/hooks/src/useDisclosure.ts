import { useDisclosure as useDisclosureAdapter, UseDisclosureReturn, UseDisclosureProps } from '@chakra-ui/react';

export const useDisclosure = (props?: UseDisclosureProps): UseDisclosureReturn => {
	return useDisclosureAdapter(props);
};
