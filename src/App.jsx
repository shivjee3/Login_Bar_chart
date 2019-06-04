import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './Home/Login.jsx';
import BarCharts from './Home/BarChat.jsx';

class App extends React.Component {
  render(){
  return (
    <Router>
      <Route exact path="/Login_Bar_chart/" component={Login} />
      <Route path="/Login_Bar_chart/BarCharts/" component={BarCharts} />
    </Router>
  );
  }
}
 
export default App;
