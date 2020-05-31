import React, { createContext, useReducer, useEffect } from 'react';
import { memberReducer } from '../reducers/memberReducer';

export const MemberContext = createContext();

const MemberContextProvider = (props) => {
    const [members, dispatch] = useReducer(memberReducer, [], () => {
        const localData = localStorage.getItem('members');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('members', JSON.stringify(members))
    }, [members])
    return (
        <MemberContext.Provider value={{ members, dispatch }}>
            {props.children}
        </MemberContext.Provider>
    )
}

export default MemberContextProvider;