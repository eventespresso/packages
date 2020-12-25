import { Stack as ChakraStack, StackProps } from '@chakra-ui/react';

export const Stack: React.FC<StackProps> = ({ children, ...props }) => {
	return <ChakraStack {...props}>{children}</ChakraStack>;
};
