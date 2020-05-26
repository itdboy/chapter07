import React from 'react';
import './App.css';
import home from './components/home' ;
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import webboard from './components/webboard';
import contactus from './components/contactus';
import urlnotfound from './components/urlnotfound';

function App() {
  return (
     <BrowserRouter>
<div id="navMain"  >
<ul >
  <li >
    <Link to="/">หน้าแรก</Link>
  </li>
  <li>
    <Link to="/webboard">เว็บบอร์ด</Link>
  </li>
  <li>
    <Link to="/contactus">ติดต่อเรา</Link>
  </li>
</ul>
<div>
<Switch>
  <Route exact path="/" component={home}/>
  <Route exact path="/webboard" component={webboard}/>
  <Route exact path="/contactus" component={contactus}/>
  <Route component={urlnotfound}/>

</Switch>
</div>
</div>

     </BrowserRouter>
  );
}

export default App;
