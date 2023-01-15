import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleSubmit = e => {
        const user = { email }

        fetch('https://camera-shop-api.projuktibangla.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                }
            })
        e.preventDefault()
    }

    return (
        <div>
            <h1>make admin</h1>
            <form onSubmit={handleSubmit} >
                <TextField type="email"
                    sx={{ width: '50%' }}
                    id="outlined-basic"
                    label="Admin Email"
                    onBlur={handleOnBlur}
                    variant="outlined" />
                <Button variant="contained" type="submit">Make Admin</Button>
            </form>
            {
                success && <Alert severity="success">Made Admin Sucessfully</Alert>
            }
        </div>
    );
};

export default MakeAdmin;