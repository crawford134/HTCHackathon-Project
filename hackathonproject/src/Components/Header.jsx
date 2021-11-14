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
                    <Link to="/" ><Typography>Homepage</Typography></Link>
                    <Link to="/page2" ><Typography>Resources</Typography></Link>
                    <Link to="/page3" ><Typography>Survey</Typography></Link>
                    <Link to="/page4" ><Typography>To Do List</Typography></Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}