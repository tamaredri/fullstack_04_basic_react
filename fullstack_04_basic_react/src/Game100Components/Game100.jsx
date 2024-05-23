import React from 'react';
import Registration from './Registration';
import FullGameBoard from './FullGameBoard';

const Game100 = () => {
    let isStartPlay = true;
    let users = [{ username: 'User 1', steps: [2, 5, 7] },
    { username: 'User 2', steps: [9, 7, 9] }]

    return (<>
    {/* <></> - add the top 3 palyers (according to steps avarage */}
    
        {isStartPlay ? <FullGameBoard registeredUsers={users} /> :
            <Registration />}
    </>)
}

export default Game100;
