//import React from 'react';

import * as React from 'react';
import {Tabs,Tab,AppBar} from '@material-ui/core';
import ReactPlayer from "react-player"


/*
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
;
*/
export default function Resources(){


    
    const[value, setValue]=React.useState(0)
    const handleTabs=(e,val)=>{
        console.warn(val)
        setValue(val)
    }
    let styleobj = {fontSize: 18}
    let titleSize= {fontSize: 48}
    return(
        <div>
            <h1>Resources to help Mental Health and Illness</h1>
            <AppBar position = 'static'>
                <Tabs value={value} onChange={handleTabs} position ='static'>
                    <Tab label = ' Meditation Videos' />
                    <Tab label = ' Self Help Books' />
                    <Tab label = ' CBT Resources' />
                    <Tab label = 'Links to Therapists' />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} > <h1 style = {titleSize}> Mindfulness </h1>
           <p style = {styleobj}> Mindfulness is a type of meditation in which the user's goal is to become aware or focused on what you are feeling in the moment. 
           Many users attemping to help have created thousands of videos on youtube. If you have 10 - 15 minutes, close your eyes and try out these mindfulness practicing videos!</p>
            <div id = "player">
            <ReactPlayer 
            url = "https://www.youtube.com/watch?v=ZToicYcHIOU"
            /></div>
            <div id = "player">
            <ReactPlayer
            url = "https://www.youtube.com/watch?v=6p_yaNFSYao"
            /></div>
            <p style = {styleobj}> if you liked those videos and want to find more, here is a direct <a href = "https://www.youtube.com/results?search_query=mindfulness+meditation">link</a>to the search on YouTube.</p>
            </TabPanel>
            <TabPanel value={value} index={1} > <h1 style = {titleSize}>Self Help Books </h1>
                <p style = {styleobj}>Mindfulness can also be obtained by reading books. Many self help books are filled with incorrect information giving the reader a wrong and even harmful advice.
                On positive mind we list therapist suggested mindfulness/ self help books to actually help you. If videos are not for you, sit down with a nice cup of tea or coffee and enjoy these books!</p>
                    <a href = "https://www.amazon.ca/Wherever-You-There-Are-Mindfulness/dp/1401307787/ref=sr_1_1?keywords=where+ever+you+go+there+you+are&qid=1636841567&s=books&sr=1-1">
                    <img src = "https://m.media-amazon.com/images/I/51zAVNhacqL._SY346_.jpg"/>
                    </a>
                <p style = {styleobj}> These books help the reader learn and practice mindfulness. This book above was written by Jon Kabat Zin who is renown for his expertise on mindfulness. Clicking on the photo will bring you to an amazon link to purchase the book!</p>
                    <a href = "https://www.amazon.ca/Miracle-Mindfulness-Introduction-Practice-Meditation/dp/0807012394/ref=sr_1_1?crid=P7SVR57Y5WNN&keywords=the+miracle+of+mindfulness+by+thich+nhat+hanh&qid=1636846913&sprefix=the+mir%2Caps%2C243&sr=8-1">
                    <img src = "https://i.insider.com/60ca0e9e23393a00188e37ba?width=700&format=jpeg&auto=webp"/>
                    </a>
                <p style = {styleobj}>This book is written to help users go through small moments around you and become more self aware of your surroundings. If either of these books interest you and you would like more suggestions, these were taken from this <a href= "https://www.businessinsider.com/best-mindfulness-books" rel="noopener">article</a> 
                they interviewed three psycologist asking which mindfulness books they recommended and these were the suggested books.
                </p>
            </TabPanel>
            <TabPanel value={value} index={2} ><h1 style = {titleSize}>Cognitive Behavioral Therapy </h1>
            <p style = {styleobj}>Cognitive Behavioral Therapy (CBT) is a common talk based therapy used by many. 
            Focusing on analyzing your negative and inaccurate thoughts, coming to understand why these thoughts are negatively affecting you and not necessarily correct. Supplied below is a quick video to explain CBT. Below is a video of What CBT is</p>
            <div id = 'player'>
                <ReactPlayer
                url = "https://www.youtube.com/watch?v=q6aAQgXauQw"
                /> </div>
            <p style = {styleobj}>If you are still confused on how Cognitive BehavioralTherapy works here is another video to watch to understand!</p>
            <div id = "player">
                <ReactPlayer
                url = "https://www.youtube.com/watch?v=ZdyOwZ4_RnI">
                </ReactPlayer></div>
            <p style = {styleobj}>This method is often used and has been approved by the American Psychology Association. They have even written a small article explaining the goals and benefits of it. 
            This article can be found <a href = "https://www.apa.org/ptsd-guideline/patients-and-families/cognitive-behavioral"> here</a></p>
            </TabPanel>
            <TabPanel value={value} index={3} ><h1 style = {titleSize}> Find Help</h1>
            <p style = {styleobj}>While you may believe you are alone in facing these issues, millions everywhere are also struggling with their mental help. You are not alone in this struggle are there are people out there to help you.
            If you would like meet with a therapist we have recommened these links below!</p>
            <a href = "https://calgarycounselling.com/about">
            <img src= "https://i.ytimg.com/vi/Aq8NSk9SUEE/maxresdefault.jpg" />
            </a>
            <p style = {styleobj}> Calgary counselling is a charitable organization for any calgarians struggling with mental health and/or mental illness. 
            With the calgary counselling center, you can state your income and they charge you based on your income. They also assure your therapist is not based off of the income. It allows those who may be struggling financially to seek help!
            </p> 
            </TabPanel>
            
        </div>
    );
}

function TabPanel(props)
{
    const {children,value,index}=props;
    return(
        <div>
        {
        value === index && (
            <h1>{children}</h1>
        )
        }
        </div>
    )
}

/* sources: 
https://www.npmjs.com/package/react-player
https://mui.com/components/tabs/
*/ 