import React, { useState, useEffect } from 'react';
import '../Employee/Employee.css';

const TextFieldComponent = ({
    initialName,
    initialEmail,
    initialPassword,
    initialContact,
}) => {
    const [vname, setName] = useState(initialName);
    const [vemail, setEmail] = useState(initialEmail);
    const [vpassword, setPassword] = useState(initialPassword);
    const [vcontact, setContact] = useState(initialContact);

    useEffect(() => {
        setName(initialName);
        setEmail(initialEmail);
        setPassword(initialPassword);
        setContact(initialContact);
    }, [initialName, initialEmail, initialPassword, initialContact]);

    return (
        <div className='input'>
            <input
                className='vname'
                type="text"
                placeholder="Full Name"
                value={vname}
                readOnly
            />
            <input
                className='vcontact'
                type="number"
                placeholder="Contact"
                value={vcontact}
                readOnly
            />
            <input
                className='vemail'
                type="text"
                placeholder="Email"
                value={vemail}
                readOnly
            />
            <input
                className='vpassword'
                type="password"
                placeholder="Password"
                value={vpassword}
                readOnly
            />
        </div>
    );
};

export default TextFieldComponent;
