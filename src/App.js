import {Route,Link,NavLink} from 'react-router-dom'
import { Redirect, Switch ,withRouter} from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './components/Home'
import Phone from './components/phone'
import User from './components/User'
function App(props) { 
  props.history.listen((link)=>{
    console.log(link)
  })
  return (
    <div className="App">
      <div>
        <NavLink to="/home">点我去home</NavLink>
        <NavLink to="/phone/我是参数">点我去phone</NavLink>
        <NavLink to={{pathname:"/User",query:{name:"小明"}}}>点我去user</NavLink>
        <button onClick={()=>{props.history.push("/home")}}>点我去home</button>
        <button onClick={()=>{props.history.push("/phone")}}>点我去phone</button>
        <button onClick={()=>{props.history.push("/User")}}>点我去User</button>
      </div>
      <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/phone/:id" component={Phone}/>
      <Route path="/user" component={User}/>
      <Route path="/user" component={User}/>
      <Redirect from="/" to="/home/homea" exact />
      </Switch>
    </div>
  );
}

export default withRouter(App);
