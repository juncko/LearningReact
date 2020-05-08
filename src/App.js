import React, { Component } from 'react';
import './App.css';
import ProductsList from './components/views/ProductsList';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme/themeApp';
import AppNavBar from './components/layouts/AppNavbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

class App extends Component{
  render(){
    return (
      <Router>
        <MuiThemeProvider theme = {theme}>
          <AppNavBar/>
         <Grid container>
            <Switch>
                <Route path ="/" exact component = {ProductsList} ></Route>
            </Switch>
         </Grid>
        </MuiThemeProvider>
      </Router>
      );
}
}

export default App;
