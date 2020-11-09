import React from 'react';

export interface UrlInputState {
	inputRef: React.MutableRefObject<HTMLInputElement>;
	isVisible: boolean;
	setIsVisible: (isVisible: boolean) => void;
	setUrlValue: (urlValue: string) => void;
	urlValue: string;
}
