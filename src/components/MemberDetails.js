import React, { useContext } from 'react';
import { MemberContext } from '../contexts/MemberContext';

const MemberDetails = ({ member }) => {
    const { dispatch } = useContext(MemberContext);
    return (
        <li className="m-details" onClick={() => dispatch({ type: 'REMOVE_MEMBER', id: member.id })}>
            <div>{member.name}</div>
        </li>
    )
}

export default MemberDetails;