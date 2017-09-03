import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { styles } from '.';

import AsyncHome from '../../routes/Home/Home';
import AsyncProject from '../../routes/Project/Project';

const App = () => (
  <Router>
    <div className={styles.container}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/project-1">Project 1</Link></li>
      </ul>

      <Route exact path="/" component={AsyncHome} />
      <Route exact path="/project-:id" component={AsyncProject} />
    </div>
  </Router>
);

export default App;
