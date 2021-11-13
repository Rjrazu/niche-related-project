import React, { useState } from 'react';

const AddAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://warm-crag-33369.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }

    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                />
                <input className="ms-2 btn btn-success" type="submit" value="Add Admin" />

            </form>
            {success && <h3 className="success mt-5">Made Admin successfully!</h3>}
        </div >
    );
};

export default AddAdmin;