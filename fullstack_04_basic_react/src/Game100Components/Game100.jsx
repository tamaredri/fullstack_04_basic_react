import React, { useState } from 'react';
import Registration from './Registration';
import FullGameBoard from './FullGameBoard';
import TopThree from './TopThree';

const Game100 = () => {
    const [isStartPlay, setIsStartPlay] = useState(false);
    const [activeUsers, setActiveUsers] = useState([]);
    const [topPlayers, setTopPlayers] = useState(loadTopPlayers());


    function loadTopPlayers() {
        let users = JSON.parse(localStorage.getItem('Game100')) || [];
        return activeUsers.map(username => {
            let user = users.find(storedUser => storedUser.username === username);
            return ({
                username: user.username,
                avrSteps: calculateAverage(user.steps)
            });
        }).filter(user => user.avrSteps > 0).sort((a, b) => a.avrSteps - b.avrSteps).slice(0, 3);
    }

    function calculateAverage(steps) {
        const sum = steps.reduce((acc, curr) => acc + curr, 0);
        return Math.ceil(sum / steps.length);
    }

    return (<>
        {isStartPlay ? <>
            <TopThree topPlayers={topPlayers} />
            <FullGameBoard 
                registeredUsers={activeUsers}
                onTop3Change={() => setTopPlayers(loadTopPlayers())} />
        </>
            :
            <Registration
                activeUsers={activeUsers}
                onActiveUsersChange={setActiveUsers}
                onRegistrationDone={() => {
                    setTopPlayers(loadTopPlayers());
                    setIsStartPlay(true);
                }}

            />}
    </>)
}

export default Game100;
