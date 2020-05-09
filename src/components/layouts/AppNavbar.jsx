import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import BarSession from './bar/BarSession';
class AppNavbar extends React.Component{
    render(){
        return (
            <div>
                <AppBar position="static">
                    <BarSession/>
                </AppBar>
            </div>
          );
    }
}
export default AppNavbar;