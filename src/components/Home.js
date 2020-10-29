import React, { Component ,Fragment} from 'react'
import ImgA from '../assets/1.jpg'
export default class Home extends Component {
    render() {
        return (
            <Fragment>
            <div>
                你好，我是组件{/* {parseInt(Math.random()*10)} */}
            </div>
            <div>我是组件2</div>
            {/* <img src="1.jpg"></img> */}
            <img src={ImgA}/>
            <img src={require("../assets/1.jpg")}/>
            </Fragment>
        )
    }
}
