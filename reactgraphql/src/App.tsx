import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Allpage from './container/allpage';

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Allpage}/>
      </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
