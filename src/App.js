import GameOptions from './Page/GameOptions/GameOptions'
import { Switch, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import React from 'react';
import styled from 'styled-components';
import Leaderboard from './Page/Leaderboard/Leaderboard';
import Game from './Page/Game/Game'

const Wrapper = styled.div`
max-width:100vw;
overflow:hidden;
`

function App() {
  const location = useLocation()

  return (
    <Wrapper>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname} >
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/game' component={Game} />
          <Route path='/' component={GameOptions} />
        </Switch>
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
