import React, { Component} from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import List from "./components/List";
import Edit from "./components/Edit";
import NoMatch from "./components/NoMatch";
import "./App.less";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();
class App extends Component{
  
  render(){
    return(
      <BrowserRouter>
        <Route path="/" component={List}>
          <Route path="/list" component={List}/>
          <Route path="/edit" component={Edit}/>
          <Route path="*" component={NoMatch}/>
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;