import React, { useState } from 'react';
import '../Landing/SignupForm.css';

const TextFieldComponent = ({
    name,
    email,
    password,
    contact,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleContactChange,
}) => {

  return (
    <div className='input'>
      <input
        className='name'
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        className='email'
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        className='password'
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <input
        className='contact'
        type="number"
        placeholder="Contact Number"
        value={contact}
        onChange={handleContactChange}
      />
    </div>
  );
};

export default TextFieldComponent;
