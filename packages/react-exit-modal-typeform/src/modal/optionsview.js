import { createElement } from "@wordpress/element";
/**
 * External Dependencies
 */

import React from 'react';
import Button from './button';
import classNames from 'classnames';
export default function ExitModalOptions(_ref) {
  var onClose = _ref.onClose,
      onDoSurvey = _ref.onDoSurvey,
      introText = _ref.introText,
      doSurveyButtonText = _ref.doSurveyButtonText,
      skipButtonText = _ref.skipButtonText,
      doSurveyButtonClass = _ref.doSurveyButtonClass,
      closeModalButtonClass = _ref.closeModalButtonClass;
  var buttonClass = "ee-cancel-prompt-button";
  return createElement("div", {
    className: 'exit-modal-choices'
  }, createElement("p", null, introText), createElement(Button, {
    key: 'do survey',
    handleOnClick: onDoSurvey,
    buttonText: doSurveyButtonText,
    buttonClass: classNames(buttonClass, 'do-survey', doSurveyButtonClass)
  }), createElement(Button, {
    key: "close-modal-and-cancel",
    handleOnClick: onClose,
    buttonText: skipButtonText,
    buttonClass: classNames(buttonClass, 'close-modal-and-cancel', closeModalButtonClass)
  }));
}
;
//# sourceMappingURL=optionsview.js.map