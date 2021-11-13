import React from 'react'; 
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <div>
            <AppBar>
                <Toolbar>
                    <Link to="/" >Homepage</Link>
                    <Link to="/page2" >page2</Link>
                    <Link to="/page3" >page3</Link>
                    <Link to="/page4" >page4</Link>
                    <Link to="/page5" >page5</Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}