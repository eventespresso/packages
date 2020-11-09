import { useMemo, useRef, useState } from 'react';

import { UrlInputState } from './types';

const useUrlInputState = (): UrlInputState => {
	const [urlValue, setUrlValue] = useState('');
	const [isVisible, setIsVisible] = useState(false);
	const inputRef = useRef<HTMLInputElement>();

	return useMemo(() => ({ inputRef, urlValue, setUrlValue, isVisible, setIsVisible }), [isVisible, urlValue]);
};

export default useUrlInputState;
