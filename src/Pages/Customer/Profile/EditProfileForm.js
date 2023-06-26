import React, { useState, useEffect } from "react";

import '../Landing/SignupForm.css';

const TextFieldComponent = ({
    initialName,
    initialEmail,
    initialPassword,
    initialContact,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleContactChange,
}) => {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);
  const [contact, setContact] = useState(initialContact);

  useEffect(() => {
    setName(initialName);
    setEmail(initialEmail);
    setPassword(initialPassword);
    setContact(initialContact);
  }, [
    initialName,
    initialEmail,
    initialPassword,
    initialContact,
  ]);

  const handleNameInputChange = (event) => {
    setName(event.target.value);
    handleNameChange(event);
  };

  const handleEmailInputChange = (event) => {
    setEmail(event.target.value);
    handleEmailChange(event);
  };

  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
    handlePasswordChange(event);
  };

  const handleContactInputChange = (event) => {
    setContact(event.target.value);
    handleContactChange(event);
  };

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
        type="email"
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