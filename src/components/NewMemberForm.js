import React, { useState, useContext } from 'react';
import { MemberContext } from '../contexts/MemberContext';

const NewMemberForm = () => {
    const { dispatch } = useContext(MemberContext);
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_MEMBER', member: {
                name
            }
        });
        setName('');
    }
    return (
        <form className="members-form-bg" onSubmit={handleSubmit}>
            <h1>Members</h1>
            <input type="text" value={name} required onChange={(e) => setName(e.target.value)} placeholder="member" />
            <input className="button-member" type="submit" value="add" />
        </form>
    );
}

export default NewMemberForm;