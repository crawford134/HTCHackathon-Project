import React from 'react'; 
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default function Footer(){
    let styleobj = {fontSize: 18}
    return(
        <div style={{color:'#3f51b5'}} style={{fontWeight:"bold"}}>
            We are not certified or licensed therapists. We have suggested things that may be able to help. IF you are having suicidal/dark thoughts 
            PLEASE go see a licensed therapist. In our resource page under "Links to Therapists" may help!
        </div>
    );
}
