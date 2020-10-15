import React from "react";
import "../App.css";

const OnboardForm = (props) => {
  const { values, change, submit, disabled, errors } = props;

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label className='form-label'>
          Name
          <input
            className='input-field'
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>
        <label className='form-label'>
          Email
          <input
            className='input-field'
            value={values.email}
            onChange={onChange}
            name='email'
            type='email'
          />
        </label>
        <label className='form-label'>
          Password
          <input
            className='input-field'
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>
        <div className='checkbox-container'>
          <label className='form-label form-label-checkbox'>
            <input
              className='input-checkbox'
              value={values.tos}
              onChange={onChange}
              name='tos'
              type='checkbox'
              checked={values.tos}
            />
            <span className='checkmark'></span>I accept the Terms Of Service.
          </label>
        </div>
      </div>
      <button className='submit' disabled={disabled}>
        Submit
      </button>
      <div className='errors'>
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.tos}</div>
      </div>
    </form>
  );
};

export default OnboardForm;
