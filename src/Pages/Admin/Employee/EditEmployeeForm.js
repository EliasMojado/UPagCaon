import React, { useState, useEffect } from 'react';
import '../Employee/Employee.css';

const TextFieldComponent = ({
    initialName,
    initialEmail,
    initialPassword,
    initialContact,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleContactNumberChange,
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
    }, [initialName, initialEmail, initialPassword, initialContact]);

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
        handleContactNumberChange(event);
    };

    return (
        <div className='input'>
            <input
                className='name'
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={handleNameInputChange}
            />
            <input
                className='contact'
                type="number"
                placeholder="Contact"
                value={contact}
                onChange={handleContactInputChange}
            />
            <input
                className='email'
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmailInputChange}
            />
            <input
                className='password'
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordInputChange}
            />
        </div>
    );
};

export default TextFieldComponent;
