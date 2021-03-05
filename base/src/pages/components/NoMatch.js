import React, { Component} from "react";
import { Link } from 'react-router-dom'
class NoMatch extends Component{

  constructor(props){
    super(props);

  }
  componentDidMount(){

  }

  render(){
    return(
      <div className="m-NoMatch">
        找不到你要的页面
        <Link to="/list">list</Link>
      </div>
    );
  }
}

export default NoMatch;