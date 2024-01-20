import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMsg: ""
  });

  const [formError, setFormError] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const validateFormInput = (e) => {
    e.preventDefault();

    let inputError = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!formInput.email && !formInput.password) {
      setFormError({
        ...inputError,
        email: "Invalid Email Format",
        password: "Empty"
      })
    }

    if (!formInput.email) {
      setFormError({
        ...inputError,
        email: "Invalid Email Format",
      });
      return;
    }

    if (formInput.password.length < 8) {
      setFormError({
        ...inputError,
        password: "Password must be atleast 8 characters",
      });
      return;
    }

    if (formInput.password !== formInput.confirmPassword || formInput.confirmPassword.length < 8) {
      setFormError({
        ...inputError,
        confirmPassword: "Password do not match",
      });
      return;
    }

     setFormError(inputError);
     setFormInput((prevState) => ({
      ...prevState,
      successMsg: window.alert('Validation Succesfull'),
     }))
  };

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-body'>
          <form onSubmit={validateFormInput}>
            <p className='label'>Email</p>

            <input
              value={formInput.email}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value)
              }}
              name='email'
              type='email'
              className={`input ${formInput.email !== '' && formError.email !== '' ? 'input-invalid' : formInput.email !== '' ? 'input-valid' : ''}`}
              placeholder='Enter Email' />

            <p className='error-msg'>{formError.email}</p>

            <p className='label'>Password</p>

            <input
              value={formInput.password}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value)
              }}
              name='password'
              type='password'
              minlength='8'
              className={`input ${formError.password? 'input-invalid' : 'input-valid'}`}
              placeholder='Enter Password' />

            <p className='error-msg'>{formError.password}</p>

            <p className='label'>Confirm Password</p>

            <input
              value={formInput.confirmPassword}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value)
              }}
              name='confirmPassword'
              type='password'
              minlength='8'
              className={`input ${formError.confirmPassword? 'input-invalid' : 'input-valid'}`}
              placeholder='Enter Confirm Password' />

            <p className='error-msg'>{formError.confirmPassword}</p>
            <p className='success-msg'>{formError.successMsg}</p>
            
            <div className='submit-btn'>
              <input type="submit" className='btn' value='submit' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App;
