/**
 * Parts of this code are copied from https://github.com/chakra-ui/chakra-ui/issues/38#issuecomment-813463561
 */
import Select from 'react-select';
import { useTheme, useColorModeValue } from '@chakra-ui/react';

import { components } from './components';
import { useCallback } from 'react';
import { MultiSelectProps } from './types';

const chakraStyles = {
	input: (provided: Record<string, any>) => ({
		...provided,
		color: 'inherit',
		lineHeight: 1,
	}),
	menu: (provided: Record<string, any>) => ({
		...provided,
		boxShadow: 'none',
	}),
	valueContainer: (provided: Record<string, any>) => ({
		...provided,
		padding: '0.125rem 1rem',
	}),
};

export const MultiSelect: React.FC<MultiSelectProps> = (props) => {
	const chakraTheme = useTheme();

	const placeholderColor = useColorModeValue(chakraTheme.colors.gray[400], chakraTheme.colors.whiteAlpha[400]);

	const theme = useCallback(
		(baseTheme) => ({
			...baseTheme,
			borderRadius: chakraTheme.radii.md,
			colors: {
				...baseTheme.colors,
				neutral50: placeholderColor, // placeholder text color
				neutral40: placeholderColor, // noOptionsMessage color
			},
		}),
		[chakraTheme.radii.md, placeholderColor]
	);

	return <Select components={components} styles={chakraStyles} theme={theme} {...props} />;
};
