import React from 'react';
import '../Employee/Employee.css';

const TextFieldComponent = ({
    name,
    email,
    password,
    contact,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleContactNumberChange,
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
        className='contact'
        type="number"
        placeholder="Contact"
        value={contact}
        onChange={handleContactNumberChange}
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

    </div>
  );
};

export default TextFieldComponent;