import React from 'react';
import Routes from './routers/Router'

import { Router} from 'react-router-dom'
import history from './routers/Services/history'
function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
