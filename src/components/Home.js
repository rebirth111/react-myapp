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
import React, { Component } from 'react'
import axios from 'axios'
export default class Home extends Component {
    componentDidMount(){
        axios.get("/api/101320101.html").then((ok)=>{
            console.log(ok)
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

