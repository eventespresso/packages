import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { canUseDOM } from '@eventespresso/utils';
import series from './utils/series';
import whilst from './utils/whilst';
import throttle from './utils/throttle';
import uniqueId from './utils/uniqueId';
import { innerWidth, innerHeight } from './utils/innerSize';

function assertElementFitsWidth(el, width) {
	// -1: temporary bugfix, will be refactored soon
	return el.scrollWidth - 1 <= width;
}

function assertElementFitsHeight(el, height) {
	// -1: temporary bugfix, will be refactored soon
	return el.scrollHeight - 1 <= height;
}

const noop = () => null;

export const TextFit = ({
	autoResize = true,
	children,
	text,
	style,
	min = 1,
	max = 100,
	mode = 'multi',
	forceWidth,
	forceSingleModeWidth = true,
	throttle = 50,
	onReady = noop,
	...props
}) => {
	const [fontSize, setFontSize] = useState(null);
	const [ready, setReady] = useState(false);

	const parent = useRef<HTMLDivElement>();
	const child = useRef<HTMLDivElement>();
	const pid = useRef();

	const process = () => {
		const originalWidth = innerWidth(parent);
		const originalHeight = innerHeight(parent);

		if (originalHeight <= 0 || isNaN(originalHeight)) {
			console.warn(
				'Can not process element without height. Make sure the element is displayed and has a static height.'
			);
			return;
		}

		if (originalWidth <= 0 || isNaN(originalWidth)) {
			console.warn(
				'Can not process element without width. Make sure the element is displayed and has a static width.'
			);
			return;
		}

		const pid = uniqueId();
		this.pid = pid;

		const shouldCancelProcess = () => pid !== this.pid;

		const testPrimary =
			mode === 'multi'
				? () => assertElementFitsHeight(child, originalHeight)
				: () => assertElementFitsWidth(child, originalWidth);

		const testSecondary =
			mode === 'multi'
				? () => assertElementFitsWidth(child, originalWidth)
				: () => assertElementFitsHeight(child, originalHeight);

		let mid;
		let low: number = min;
		let high: number = max;

		setReady(false);

		series(
			[
				// Step 1:
				// Binary search to fit the element's height (multi line) / width (single line)
				(stepCallback) =>
					whilst(
						() => low <= high,
						(whilstCallback) => {
							if (shouldCancelProcess()) return whilstCallback(true);

							mid = Math.floor((low + high) / 2);

							setFontSize(mid);

							if (shouldCancelProcess()) return whilstCallback(true);

							if (testPrimary()) {
								low = mid + 1;
							} else {
								high = mid - 1;
							}

							return whilstCallback();
						},
						stepCallback
					),
				// Step 2:
				// Binary search to fit the element's width (multi line) / height (single line)
				// If mode is single and forceSingleModeWidth is true, skip this step
				// in order to not fit the elements height and decrease the width
				(stepCallback) => {
					if (mode === 'single' && forceSingleModeWidth) return stepCallback();
					if (testSecondary()) return stepCallback();

					low = min;
					high = mid;

					return whilst(
						() => low < high,
						(whilstCallback) => {
							if (shouldCancelProcess()) return whilstCallback(true);
							mid = Math.floor((low + high) / 2);

							setFontSize(mid);

							this.setState({ fontSize: mid }, () => {
								if (pid !== this.pid) return whilstCallback(true);
								if (testSecondary()) low = mid + 1;
								else high = mid - 1;
								return whilstCallback();
							});
						},
						stepCallback
					);
				},
				// Step 3
				// Limits
				(stepCallback) => {
					// We break the previous loop without updating mid for the final time,
					// so we do it here:
					mid = Math.min(low, high);

					// Ensure we hit the user-supplied limits
					mid = Math.max(mid, min);
					mid = Math.min(mid, max);

					// Sanity check:
					mid = Math.max(mid, 0);

					if (shouldCancelProcess()) return stepCallback(true);
					this.setState({ fontSize: mid }, stepCallback);
				},
			],
			(err) => {
				// err will be true, if another process was triggered
				if (err || shouldCancelProcess()) return;
				this.setState({ ready: true }, () => onReady(mid));
			}
		);
	};

	useEffect(() => {
		// this.handleWindowResize = throttle(this.handleWindowResize, this.props.throttle);
		if (canUseDOM && autoResize) {
			document.addEventListener('resize', process);
		}

		process();

		return () => {
			if (canUseDOM && autoResize) {
				document.removeEventListener('resize', process);
			}

			// Setting a new pid will cancel all running processes
			this.pid = uniqueId();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		// this.handleWindowResize = throttle(this.handleWindowResize, this.props.throttle);
		if (ready) {
			process();
		}
	}, [ready]);

	const finalStyle = {
		...style,
		fontSize: fontSize,
	};

	const wrapperStyle = {
		display: ready ? 'block' : 'inline-block',
	};

	if (mode === 'single') wrapperStyle.whiteSpace = 'nowrap';

	return (
		<div ref={parent} style={finalStyle} {...props}>
			<div ref={child} style={wrapperStyle}>
				{text && typeof children === 'function' ? (ready ? children(text) : text) : children}
			</div>
		</div>
	);
};
