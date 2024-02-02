import React, { Component } from 'react';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom'
import Category from './Category';
import Home from './Home';
import Expsense from './Expsenses';
import './index.css'
import './App.css'

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <Switch>
                     <Route path='/' exact={true} component={Home}/>
                     <Route path='/categories' exact={true} component={Category}/>
                     <Route path='/expenses' exact={true} component={Expsense}/>
                </Switch>
             </Router>
        );
    }
}
 
export default App;