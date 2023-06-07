import React, { useState, useEffect } from 'react';
import '../Employee/Employee.css';

const TextFieldComponent = ({
    initialName,
    initialEmail,
    initialContact,
}) => {
    const [vname, setName] = useState(initialName);
    const [vemail, setEmail] = useState(initialEmail);
    const [vcontact, setContact] = useState(initialContact);

    useEffect(() => {
        setName(initialName);
        setEmail(initialEmail);
        setContact(initialContact);
    }, [initialName, initialEmail, initialContact]);

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
        </div>
    );
};

export default TextFieldComponent;
