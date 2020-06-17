import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import { createElement } from "@wordpress/element";
/**
 * External Dependencies
 */

import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
/**
 * Internal dependencies
 */

import { ExitModalOptions, TypeFormEmbed } from './modal/index';
export var CLOSE_MODAL_EVENT = 'closeModalEvent';

var ExitModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ExitModal, _React$Component);

  function ExitModal() {
    var _this;

    _classCallCheck(this, ExitModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExitModal).call(this));
    _this.state = {
      showModal: true,
      initialView: true
    };
    return _this;
  }

  _createClass(ExitModal, [{
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextProps.showModal !== this.state.showModal) {
        this.setState({
          showModal: nextProps.showModal
        });
        this.setState({
          initialView: nextProps.initialView
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.closeModalEvent = new Event(CLOSE_MODAL_EVENT, {
        modalOpen: this.state.showModal
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.closeModalEvent = null;
    }
  }, {
    key: "handleCloseModal",
    value: function handleCloseModal() {
      this.setState({
        showModal: false
      }); //so external scripts listening on the react element can react.

      this.el.dispatchEvent(this.closeModalEvent);
    }
  }, {
    key: "onDoSurvey",
    value: function onDoSurvey() {
      this.setState({
        initialView: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var content = this.state.initialView ? createElement(ExitModalOptions, {
        onClose: function onClose() {
          return _this2.handleCloseModal();
        },
        onDoSurvey: function onDoSurvey() {
          return _this2.onDoSurvey();
        },
        introText: this.props.introText,
        doSurveyButtonText: this.props.doSurveyButtonText,
        skipButtonText: this.props.skipButtonText,
        doSurveyButtonClass: this.props.buttonClass.doSurvey,
        closeModalButtonClass: this.props.buttonClass.closeModal
      }) : createElement(TypeFormEmbed, {
        onSubmit: function onSubmit() {
          return _this2.handleCloseModal();
        },
        url: this.props.typeFormUrl,
        popup: false,
        typeFormStyle: this.props.styles.typeFormStyle
      });
      return createElement("div", {
        ref: function ref(el) {
          return _this2.el = el;
        }
      }, createElement(ReactModal, {
        isOpen: this.state.showModal,
        style: this.props.styles
      }, content));
    }
  }]);

  return ExitModal;
}(React.Component);

export { ExitModal as default };
ExitModal.defaultProps = {
  showModal: true,
  showTypeForm: false,
  styles: {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    },
    typeFormStyle: {
      width: '600px',
      height: '400px'
    }
  },
  buttonClass: {
    doSurvey: '',
    closeModal: ''
  },
  modalClassName: {
    content: '',
    overlay: ''
  },
  typeFormUrl: '',
  introText: "We're sorry to see you go! Will you share feedback through a short survey to help us improve our product?",
  doSurveyButtonText: "Sure I'll help!",
  skipButtonText: "Skip"
};
ExitModal.propTypes = {
  showModal: PropTypes.bool,
  showTypeForm: PropTypes.bool,
  styles: PropTypes.shape({
    overlay: PropTypes.object,
    content: PropTypes.object,
    typeFormStyle: PropTypes.object
  }),
  modalClassName: PropTypes.shape({
    overlay: PropTypes.string,
    content: PropTypes.string,
    typeFormStyle: PropTypes.string
  }),
  buttonClass: PropTypes.shape({
    doSurvey: PropTypes.string,
    closeModal: PropTypes.string
  }),
  typeFormUrl: PropTypes.string.isRequired,
  introText: PropTypes.string,
  skipButtonText: PropTypes.string,
  doSurveyButtonText: PropTypes.string
};
//# sourceMappingURL=index.js.map