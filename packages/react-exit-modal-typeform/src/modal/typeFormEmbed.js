import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import { createElement } from '@wordpress/element';
/**
 * External Dependencies
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as tfEmbed from '@typeform/embed';

var TypeFormEmbed =
	/*#__PURE__*/
	(function (_Component) {
		_inherits(TypeFormEmbed, _Component);

		function TypeFormEmbed() {
			_classCallCheck(this, TypeFormEmbed);

			return _possibleConstructorReturn(this, _getPrototypeOf(TypeFormEmbed).apply(this, arguments));
		}

		_createClass(TypeFormEmbed, [
			{
				key: 'componentDidMount',
				value: function componentDidMount() {
					var _this$props = this.props,
						url = _this$props.url,
						hideHeaders = _this$props.hideHeaders,
						hideFooter = _this$props.hideFooter,
						opacity = _this$props.opacity,
						buttonText = _this$props.buttonText,
						popup = _this$props.popup,
						mode = _this$props.mode,
						autoOpen = _this$props.autoOpen,
						autoClose = _this$props.autoClose,
						onSubmit = _this$props.onSubmit;
					var options = {
						hideHeaders: hideHeaders,
						hideFooter: hideFooter,
						opacity: opacity,
						buttonText: buttonText,
						mode: mode,
						autoOpen: autoOpen,
						autoClose: autoClose,
						onSubmit: onSubmit,
					};

					if (popup) {
						this.typeform = tfEmbed.makePopup(url, options);
					} else {
						var el = this.typeformEl;
						tfEmbed.makeWidget(el, url, options);
					}
				},
			},
			{
				key: 'render',
				value: function render() {
					var _this = this;

					return createElement('div', {
						className: 'react-typeform-embed',
						ref: function ref(tf) {
							return (_this.typeformEl = tf);
						},
						style: this.props.typeFormStyle,
					});
				},
			},
		]);

		return TypeFormEmbed;
	})(Component);

export { TypeFormEmbed as default };
TypeFormEmbed.propTypes = {
	typeFormStyle: PropTypes.object,
	url: PropTypes.string.isRequired,
	popup: PropTypes.bool,
	hideHeaders: PropTypes.bool,
	hideFooter: PropTypes.bool,
	// Widget options
	opacity: PropTypes.number,
	buttonText: PropTypes.string,
	// Popup options
	mode: PropTypes.oneOf(['popup', 'drawer_left', 'drawer_right']),
	autoOpen: PropTypes.bool,
	autoClose: PropTypes.number,
	onSubmit: PropTypes.func,
};
TypeFormEmbed.defaultProps = {
	typeFormStyle: {},
	url: '',
	popup: false,
	hideHeaders: false,
	hideFooter: false,
	opacity: 100,
	buttonText: 'Start',
	mode: 'popup',
	autoOpen: false,
};
//# sourceMappingURL=typeFormEmbed.js.map
