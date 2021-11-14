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
                    <Link to="/" style={{textDecoration: 'none', color:'#fff', paddingLeft:'30px', paddingRight:'30px'}}><Typography variant='h4'>Logout</Typography></Link>
                    <Link to="/page2" style={{textDecoration: 'none', color:'#fff', paddingLeft:'30px', paddingRight:'30px'}}><Typography variant='h4'>Resources</Typography></Link>
                    <Link to="/page3" style={{textDecoration: 'none', color:'#fff', paddingLeft:'30px', paddingRight:'30px'}}><Typography variant='h4'>Survey</Typography></Link>
                    <Link to="/page4" style={{textDecoration: 'none', color:'#fff', paddingLeft:'30px', paddingRight:'30px'}}><Typography variant='h4'>To Do List</Typography></Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}