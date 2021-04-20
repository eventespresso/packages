import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { isRTL } from '@eventespresso/i18n';

const theme = extendTheme({ styles: null, direction: isRTL() ? 'rtl' : 'ltr' });

const environment = { window, document };

const ThemeProvider: React.FC = ({ children }) => {
	return (
		<ChakraProvider theme={theme} resetCSS environment={environment}>
			{children}
		</ChakraProvider>
	);
};

export default ThemeProvider;
