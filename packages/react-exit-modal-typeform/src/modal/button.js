import { createElement } from "@wordpress/element";
/**
 * External Dependencies
 */

import React from 'react';
export default function Button(_ref) {
  var handleOnClick = _ref.handleOnClick,
      buttonText = _ref.buttonText,
      buttonClass = _ref.buttonClass;
  return createElement("button", {
    className: buttonClass,
    onClick: handleOnClick
  }, buttonText);
}
//# sourceMappingURL=button.js.map