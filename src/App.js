import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout';

const Overview = lazy(() => import('./pages/Overview'));
const Livestream = lazy(() => import('./pages/Livestream'));
const LeaderBoard = lazy(() => import('./pages/LeaderBoard'));
const Brackets = lazy(() => import('./pages/Brackets'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/livestream' component={Livestream} />
          <Route path='/leaderboard' component={LeaderBoard} />
          <Route path='/brackets' component={Brackets} />
          <Route path='/' component={Overview} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
