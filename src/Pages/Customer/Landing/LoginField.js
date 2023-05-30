import React, { useState } from 'react';
import '../Landing/LoginField.css';

const TextFieldComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

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
