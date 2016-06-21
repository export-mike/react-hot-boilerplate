import React from 'react';
import { reduxForm } from 'redux-form';

const Form = () =>
  <h1>{'hi!'}</h1>;

export default reduxForm({
  form: 'test',
})(Form);
