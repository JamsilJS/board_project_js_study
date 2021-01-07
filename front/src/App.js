import Login from './pages/login/Login';
import NotFound from './pages/NotFound';
import Board from './pages/board/Board';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { GET_USER_INFO } from './services/API';
import BoardDetail from './components/BoardDetail';
function App() {
  const loggedCheck = GET_USER_INFO();

  return (
    <Router>
      <Switch>
        {<Route exact path="/" component={loggedCheck ? Board : Login} />}
        <Route exact path="/board/:no" component={loggedCheck ? BoardDetail : Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
