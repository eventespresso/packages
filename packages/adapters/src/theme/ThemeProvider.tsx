import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({ styles: null });

const ThemeProvider: React.FC = ({ children }) => {
	return (
		<ChakraProvider portalZIndex={1000000} theme={theme}>
			{children}
		</ChakraProvider>
	);
};

export default ThemeProvider;
