import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// import theme from './theme';

const ThemeProvider: React.FC = ({ children }) => {
	return <ChakraProvider>{children}</ChakraProvider>;
};

export default ThemeProvider;
