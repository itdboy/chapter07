import React from 'react';
import './App.css';
import home from './components/home';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import webboard from './components/webboard';
import contactus from './components/contactus';
import urlnotfound from './components/urlnotfound';

function App() {
  return (

    <BrowserRouter>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-brand" href="http://www.itd-cp0304.com">ITD</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navMain" aria-controls="navMain"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navMain" class="collapse navbar-collapse"  >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active" >
              <Link class="nav-link" to="/">หน้าแรก</Link>
            </li>
            <li>
              <Link class="nav-link" to="/webboard/1001">เว็บบอร์ด</Link>
            </li>
            <li>
              <Link class="nav-link" to="/contactus">ติดต่อเรา</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/webboard/:kid" component={webboard} />
          <Route exact path="/contactus" component={contactus} />
          <Route component={urlnotfound} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
