import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({ styles: null });

const environment = { window, document };

const ThemeProvider: React.FC = ({ children }) => {
	return (
		<ChakraProvider theme={theme} environment={environment}>
			{children}
		</ChakraProvider>
	);
};

export default ThemeProvider;
