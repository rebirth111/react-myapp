/* import React, { Component } from 'react'
import axios from 'axios'
export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            arr:[]
        }
    }
    componentDidMount(){
        this.ajaxfun()
    }
    ajaxfun=()=>{
        axios.get("http://localhost:4000/arr").then((ok)=>{
            console.log(ok)
            this.setState({
                arr:ok.data
            })
        })
    }
    render() {
        return (
            <div>
                {this.data.arr.map((v,i)=>{
                    return <p key={i}>{v.name}</p>
                })}
            </div>
        )
    }
}
 */
/* import React, { Component } from 'react'
import axios from 'axios'
import {Route,NavLink} from 'react-router-dom'
import HomeA from './home/Homea'
import HomeB from './home/Homeb'
export default class Home extends Component {
    componentDidMount(){
        axios.get("/api/101320101.html").then((ok)=>{
            console.log(ok)
        })
    }
    render() {
        return (
            <div>
                home
                <NavLink to="/home/homea">homea</NavLink>
                <NavLink to="/home/homeb">homeb</NavLink>
                <Route path="/home/homea" component={HomeA} />
                <Route path="/home/homeb" component={HomeB} />
            </div>
        )
    }
} */


import React, { Component } from 'react'
import {store} from '../redux/store'
import * as action from '../redux/action'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            num:store.getState()
        }
    }
    componentDidMount(){
        store.subscribe(()=>{this.setState({
            num:store.getState()
        })})
    }
    render() {
        return (
            <div>
                home-----{this.state.num}
                <button onClick={()=>{store.dispatch(action.add(1))}}>点我加1</button>
                <button onClick={()=>{store.dispatch(action.del(1))}}>点我减1</button>
            </div>
        )
    }
}

