import React from 'react';

import type { SwitchProps } from './types';

import ReactRoggle from 'react-toggle'; // for ES6 modules
import 'react-toggle/style.css'; // for ES6 modules

const Switch: React.FC<SwitchProps> = (props) => {
	return <ReactRoggle {...props} />;
};

export default Switch;
