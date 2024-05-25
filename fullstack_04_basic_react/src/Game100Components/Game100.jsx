import React, { useState } from 'react';
import Registration from './Registration';
import FullGameBoard from './FullGameBoard';
import classes from './modules_css/Game100.module.css';

const Game100 = () => {
    const [isStartPlay, setIsStartPlay] = useState(false);
    const [activeUsers, setActiveUsers] = useState([]);
    
    const [top3, setTop3] = useState(false);

    return (<div className={classes.container}>
        {isStartPlay ? <>
            {/* add here top 3 - add a way to rerender the list once a user finishes his game */}
            <FullGameBoard registeredUsers={activeUsers} />
        </>
            :
            <Registration
                activeUsers={activeUsers}
                onActiveUsersChange={setActiveUsers}
                onRegistrationDone={setIsStartPlay} />}
    </div>)
}

export default Game100;
