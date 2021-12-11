import GameOptions from './Page/GameOptions/GameOptions'
import { Switch, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Suspense } from 'react';
import React from 'react';
import styled from 'styled-components';
import Leaderboard from './Page/Leaderboard/Leaderboard';
const Game = React.lazy(() => import('./Page/Game/Game.js'));

const Wrapper = styled.div`
max-width:100vw;
overflow:hidden;
`

function App() {
  const location = useLocation()

  return (
    <Wrapper>
      <AnimatePresence exitBeforeEnter>
        <Suspense fallback={<div>Loading ...</div>}>
          <Switch location={location} key={location.pathname} >
            <Route path='/leaderboard' component={Leaderboard} />
            <Route path='/game' component={Game} />
            <Route path='/' component={GameOptions} />
          </Switch>
        </Suspense>
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
