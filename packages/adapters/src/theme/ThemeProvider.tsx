import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({ styles: null });

const ThemeProvider: React.FC = ({ children }) => {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeProvider;
