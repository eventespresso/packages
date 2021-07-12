/**
 * Parts of this code are copied from https://github.com/chakra-ui/chakra-ui/issues/38#issuecomment-813463561
 */
import { useMemo } from 'react';
import { components as selectComponents } from 'react-select';
import {
	Flex,
	Tag,
	TagCloseButton,
	TagLabel,
	CloseButton,
	Center,
	Box,
	Portal,
	StylesProvider,
	useMultiStyleConfig,
	useStyles,
	RecursiveCSSObject,
	CSSWithMultiValues,
} from '@chakra-ui/react';
import { ArrowDownAlt } from '@eventespresso/icons';

import { MultiSelectProps } from './types';

export const components: MultiSelectProps['components'] = {
	Control: ({ children, innerRef, innerProps, isDisabled, isFocused }) => {
		const inputStyles = useMultiStyleConfig('Input', {});
		const sx = useMemo(
			() => ({
				...inputStyles.field,
				p: 0,
				overflow: 'hidden',
				h: 'auto',
				minH: 10,
			}),
			[inputStyles.field]
		);
		return (
			<StylesProvider value={inputStyles}>
				<Flex
					ref={innerRef}
					sx={sx}
					{...innerProps}
					{...(isFocused && { 'data-focus': true })}
					{...(isDisabled && { disabled: true })}
				>
					{children}
				</Flex>
			</StylesProvider>
		);
	},
	MultiValueContainer: ({ children, innerRef, innerProps, data: { isFixed } }) => (
		<Tag ref={innerRef} {...innerProps} m='0.125rem' variant={isFixed ? 'solid' : 'subtle'}>
			{children}
		</Tag>
	),
	MultiValueLabel: ({ children, innerRef, innerProps }) => (
		<TagLabel ref={innerRef} {...innerProps}>
			{children}
		</TagLabel>
	),
	MultiValueRemove: ({ children, innerRef, innerProps, data: { isFixed } }) => {
		if (isFixed) {
			return null;
		}

		return (
			<TagCloseButton ref={innerRef} {...innerProps}>
				{children}
			</TagCloseButton>
		);
	},
	IndicatorSeparator: () => null,
	ClearIndicator: ({ innerProps }) => <CloseButton {...innerProps} size='sm' mx={2} />,
	DropdownIndicator: ({ innerProps }) => {
		const sx = useMemo(
			() => ({
				h: '100%',
				p: 0,
				borderRadius: 0,
				borderWidth: 0,
				cursor: 'pointer',
			}),
			[]
		);

		return (
			<Center {...innerProps} sx={sx}>
				<ArrowDownAlt />
			</Center>
		);
	},
	// Menu components
	MenuPortal: ({ children, ...portalProps }) => <Portal {...portalProps}>{children}</Portal>,
	Menu: ({ children, ...menuProps }) => {
		const menuStyles = useMultiStyleConfig('Menu', {});
		return (
			<selectComponents.Menu {...menuProps}>
				<StylesProvider value={menuStyles}>{children}</StylesProvider>
			</selectComponents.Menu>
		);
	},
	MenuList: ({ innerRef, children, maxHeight }) => {
		const { list } = useStyles();

		const sx = useMemo(
			() => ({
				...list,
				maxH: `${maxHeight}px`,
				overflowY: 'auto',
			}),
			[list, maxHeight]
		);
		return (
			<Box sx={sx} ref={innerRef}>
				{children}
			</Box>
		);
	},
	GroupHeading: ({ innerProps, children }) => {
		const { groupTitle } = useStyles();
		return (
			<Box sx={groupTitle} {...innerProps}>
				{children}
			</Box>
		);
	},
	Option: ({ innerRef, innerProps, children, isFocused, isDisabled }) => {
		const { item } = useStyles();
		interface ItemProps extends CSSWithMultiValues {
			_disabled: CSSWithMultiValues;
			_focus: CSSWithMultiValues;
		}

		const sx = useMemo(
			() => ({
				...item,
				w: '100%',
				textAlign: 'left',
				cursor: 'pointer',
				bg: isFocused ? (item as RecursiveCSSObject<ItemProps>)._focus.bg : 'transparent',
				...(isDisabled && (item as RecursiveCSSObject<ItemProps>)._disabled),
			}),
			[isDisabled, isFocused, item]
		);
		return (
			<Box sx={sx} ref={innerRef} {...innerProps} {...(isDisabled && { disabled: true })}>
				{children}
			</Box>
		);
	},
};
