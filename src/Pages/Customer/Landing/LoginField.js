import React from 'react';
import '../Landing/LoginField.css';

const TextFieldComponent = ({
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
}) => {
  return (
    <div className='input'>
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
    </div>
  );
};

export default TextFieldComponent;
