import React from 'react';

import { formConfig } from './config';
import EspressoForm from './EspressoForm';

const subscription = {};

const TestForm: React.FC = () => <EspressoForm {...formConfig} subscription={subscription} />;

export default TestForm;
