# React Exit Modal for Typeform

This is a react component that provides an embedded [typeform](https://typeform.com) for use a exit modal survey.  Use-cases are:

- Applications that want to collect information when users cancel a subscription or deactivate a feature in the main app.
- Triggering a [Typeform](https://typeform.com) survey from any user action in an application.

The modal that opens has an initial "options" view where the user is presented with two buttons.  One to fill out a survey, and another to skip the survey.  Skipping the survey will continue on with the original action triggered.  If they choose to fill out a survey, then the next view in the modal will present them with an embedded typeform to fill out.

## Installation

Install the module

```bash
npm install @eventespresso/react-exit-modal-typeform --save
``` 

## Usage

A very basic usage example (triggering outside react):

1. Importing the component
2. Attaching the modal to the DOM on your trigger action
3. Setting a listener for the custom modal close callback


```js
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReactModal from 'react-modal';
import ExitModal, { CLOSE_MODAL_EVENT } from '@eventespresso/react-exit-modal-typeform';

const modalProps = {
    typeFormUrl: 'https://yourtypeformdomain.typeform.com/to/XXXXX'
}

/**
* Element that the modal is anchored to
*/
const modalAnchor = document.getElementById('react-cancel-modal');

let modalComponent = {};

const closeModalCallback = (e) => {
    //do stuff that happens after the modal closes, eg continue with a subscription cancel action etc.
    processSubscriptionCancel();
    //make sure you remove the event listener.
    modalComponent.el.removeEventListener(CLOSE_MODAL_EVENT, closeModalCallback);
};

$('.some-dom-element-trigger-container').on('click', '.element-clicked', function(e) {
   e.preventDefault();
   ReactModal.setAppElement(modalAnchor);
   modalComponent = ReactDOM.render(
       <ExitModal {...modalProps} />,
       modalAnchor
   );
   
   //set listener
   modalComponent.el.addEventListener(
       CLOSE_MODAL_EVENT,
       closeModalCallback,
       false
    );
});

```

There are a number of properties you can use to control the ExitModal.  The only _required_ property is the `typeFormUrl` property.

| Property | Type | Description |
| --------- | --------- | --------- |
| `showModal` | bool | Whether to initialize with the modal open or not.
| `showTypeForm` | bool | Whether to display the typeForm right away or not.
| `styles` | object | You set inline styles for the modal via this property.
| `styles.overlay` | object | Inline styles for the overlay when the modal is open.  Use javascript DOM style notation for the keys.<br>**Note:** It's recommended you use `modalClassName` and style via css class instead.  However inline styles are provided for cases where style attributes may be dynamically calculated. |
| `styles.content` | object | Inline styles for the modal content container.
| `styles.typeFormStyle` | object | Inline styles for the container holding the embedded typeform (defaults to 600x400). |
| `buttonClass` | object | Provde css class for button styles.
| `buttonClass.doSurvey` | string | CSS classname for the button triggering doing the survey.
| `buttonClass.closeModal` | string | CSS classname for the button triggering closing the modal. 
| `modalClassName` | object | Provide css class to use with styling.
| `modalClassName.content` | string | CSS classname to use for the modal content container.
| `modalClassName.overlay` | string | CSS classname to use for the modal overlay.
| `typeFormUrl` | string | **required** The url to your TypeForm that will be embedded in the modal content.
| `introText` | string | Text displayed in the initial view.  Defaults to _We're sorry to see you go! Will you share feedback through a short survey to help us improve our product?_ |
| `skipButtonText` | string | Skip button text.  Defaults to  _Skip_
| `doSurveyButtonText` | string | Start survey button text. Defaults to _Sure I'll help!_ |