import React, { useState } from 'react';
import Registration from './Registration';
import FullGameBoard from './FullGameBoard';

const Game100 = () => {
    const [isStartPlay, setIsStartPlay] = useState(false);
    const [activeUsers, setActiveUsers] = useState([]);

    return (<>
    {/* <></> - add the top 3 palyers (according to steps avarage */}
    
        {isStartPlay ? <FullGameBoard registeredUsers={activeUsers} /> :
            <Registration 
            activeUsers={activeUsers}
            onActiveUsersChange={setActiveUsers} 
            onRegistrationDone={setIsStartPlay} />}
    </>)
}

export default Game100;
