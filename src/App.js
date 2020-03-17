import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectListPage from './pages/ProjectListPage';
import ProjectPage from './pages/ProjectPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />           {/* exact makes sure it only appears when its JUST slash */}
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/project-list" component={ProjectListPage}></Route>
            <Route path="/project/:name" component={ProjectPage}></Route>   {/* :name allows us to use diffferent URL links to the page */}
            <Route component={NotFoundPage}></Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
