import React, { useContext } from 'react';

import { MemberContext } from '../contexts/MemberContext';
import MemberDetails from './MemberDetails';

const MembersList = () => {
    const { members } = useContext(MemberContext);

    return (
        <div className="members">
            <ul>
                {members.map(member => {
                    return (<MemberDetails member={member} key={member.id} />);
                })}
            </ul>

        </div>
    )
}

export default MembersList;