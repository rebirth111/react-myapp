import {Route,Link,NavLink} from 'react-router-dom'
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './components/Home'
import Phone from './components/phone'
import User from './components/User'
function App() {
  return (
    <div className="App">
      <div>
        <NavLink to="/home">点我去home</NavLink>
        <NavLink to="/phone">点我去phone</NavLink>
        <NavLink to="/user">点我去user</NavLink>
      </div>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/phone" component={Phone}/>
      <Route path="/user" component={User}/>
      <Route path="/user" component={User}/>
      <Redirect from="/" to="/home/homea" exact />
      </Switch>
    </div>
  );
}

export default App;
