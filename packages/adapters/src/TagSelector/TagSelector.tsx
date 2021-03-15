import React, { useCallback, useMemo, useState } from 'react';
import { useCombobox, useMultipleSelection, UseComboboxProps, UseMultipleSelectionProps } from 'downshift';
import { Input, IconButton, HStack, List, ListItem } from '@chakra-ui/react';
import { allPass, complement, flip, includes, isNil, pipe, startsWith, toLower } from 'ramda';

import { ArrowDownAlt } from '@eventespresso/icons';
import { __ } from '@eventespresso/i18n';
import type { TagSelectorProps } from './types';

export const TagSelector: React.FC<TagSelectorProps> = ({
	className,
	comboBoxClassName,
	defaultValue,
	listClassName,
	items,
	onChange,
	SelectedItem,
	toggleClassName,
	value,
}) => {
	const [inputValue, setInputValue] = useState('');

	const multipleSelectionProps = useMemo(() => {
		const props: UseMultipleSelectionProps<string> = {};
		// downshift considers the component to be controlled if value props are passed,
		// even if they are null or undefined ¯\_(ツ)_/¯
		if (!isNil(defaultValue)) {
			props.initialSelectedItems = defaultValue;
		}
		if (!isNil(value)) {
			props.selectedItems = value;
		}
		return props;
	}, [defaultValue, value]);

	const {
		getSelectedItemProps,
		getDropdownProps,
		addSelectedItem,
		removeSelectedItem,
		selectedItems,
	} = useMultipleSelection(multipleSelectionProps);

	const mayBeFireOnChange = useCallback(
		(selectedItem) => {
			onChange?.([...selectedItems, selectedItem]);
		},
		[onChange, selectedItems]
	);

	const getFilteredItems = useCallback(() => {
		const isNotInSelectedItems = complement(flip(includes)(selectedItems));
		const matchesInputKeywords = pipe(toLower, startsWith(toLower(inputValue)));

		return items.filter(allPass([isNotInSelectedItems, matchesInputKeywords]));
	}, [inputValue, items, selectedItems]);

	const onStateChange = useCallback<UseComboboxProps<string>['onStateChange']>(
		({ inputValue, type, selectedItem }) => {
			switch (type) {
				case useCombobox.stateChangeTypes.InputChange:
					setInputValue(inputValue);
					break;
				case useCombobox.stateChangeTypes.InputKeyDownEnter:
				case useCombobox.stateChangeTypes.ItemClick:
				case useCombobox.stateChangeTypes.InputBlur:
					if (selectedItem) {
						setInputValue('');
						addSelectedItem(selectedItem);
						mayBeFireOnChange(selectedItem);
					}
					break;
			}
		},
		[addSelectedItem, mayBeFireOnChange]
	);

	const {
		isOpen,
		getToggleButtonProps,
		getMenuProps,
		getInputProps,
		getComboboxProps,
		highlightedIndex,
		getItemProps,
	} = useCombobox({
		inputValue,
		items: getFilteredItems(),
		onStateChange,
	});

	const removeItem = useCallback(
		(selectedItem) => () => {
			removeSelectedItem(selectedItem);
		},
		[removeSelectedItem]
	);

	return (
		<div className={className}>
			<HStack flexWrap='wrap'>
				{selectedItems.map((selectedItem, index) => (
					<SelectedItem
						key={`selected-item-${index}`}
						onClose={removeItem(selectedItem)}
						{...getSelectedItemProps({ selectedItem, index })}
					>
						{selectedItem}
					</SelectedItem>
				))}
			</HStack>
			<div {...getComboboxProps()} className={comboBoxClassName}>
				<Input {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))} />
				<IconButton
					{...getToggleButtonProps()}
					aria-label='toggle menu'
					className={toggleClassName}
					icon={<ArrowDownAlt />}
				/>
				<List {...getMenuProps()} className={listClassName}>
					{isOpen &&
						getFilteredItems().map((item, index) => (
							<ListItem
								backgroundColor={highlightedIndex === index ? '#bde4ff' : null}
								key={`${item}${index}`}
								{...getItemProps({ item, index })}
							>
								{item}
							</ListItem>
						))}
				</List>
			</div>
		</div>
	);
};
