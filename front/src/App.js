import LoginPage from './pages/login/LoginPage';
import NotFound from './pages/NotFound';
import Board from './pages/board/Board';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { GET_USER_INFO } from './services/API';
import Header from './components/Header';
import Footer from './components/Footer';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  app: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
})

function App() {
  const loggedCheck = GET_USER_INFO();
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Header></Header>
        <Router>
          <Switch>
            {<Route exact path="/" component={loggedCheck ? Board : LoginPage} />}
            <Route component={NotFound} />
          </Switch>
        </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
