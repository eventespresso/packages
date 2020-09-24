import React from 'react';
const style = { margin: '5px', border: '1px solid red' };
const OptionsPopover: React.FC = ({ children }) => {
	// TODO convert this to modal
	return <div style={style}>{children}</div>;
};

export default OptionsPopover;
