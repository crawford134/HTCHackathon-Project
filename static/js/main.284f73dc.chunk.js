(this.webpackJsonphackathonproject=this.webpackJsonphackathonproject||[]).push([[0],{55:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var i=a(1),l=a.n(i),s=a(23),n=a.n(s),o=a(19),c=(a(55),a(6)),r=a(21),j=a(20),h="jimmybob",d="password",b=a(0),u=h,p=d,x=Math.floor(7*Math.random());var O,y=function(){var e=Object(c.f)(),t=Object(i.useState)([]),a=Object(j.a)(t,2),l=a[0],s=a[1];Object(i.useEffect)((function(){fetch("./Information/Quotes.json").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]);var n=Object(i.useState)({username:"",password:""}),o=Object(j.a)(n,2),h=o[0],d=o[1];return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("h1",{className:"home-title",style:{color:"#fff",paddingTop:"30px"},children:"Welcome to Positive Mind"}),Object(b.jsx)("img",{src:"/Logo.svg"}),l.map((function(e,t){if(e.id==x)return Object(b.jsxs)("h2",{className:"quote",children:[e.quote," "]})})),Object(b.jsx)("div",{style:{paddingBottom:"100px"},children:Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{children:"Username:"}),Object(b.jsx)("input",{type:"text",value:h.username,onChange:function(e){d(Object(r.a)(Object(r.a)({},h),{},{username:e.target.value}))}}),Object(b.jsx)("label",{children:"Password:"}),Object(b.jsx)("input",{type:"password",value:h.password,onChange:function(e){d(Object(r.a)(Object(r.a)({},h),{},{password:e.target.value}))}}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",value:"Login",onClick:function(){h.username==u&&h.password==p?e.push("/Page2"):alert("Your Username or password was incorrect, Please try again!")}})]})})]})})},m=a(104),v=a(103),f=a(100),g=a(28),w=a.n(g);function k(){var e=i.useState(0),t=Object(j.a)(e,2),a=t[0],l=t[1],s={fontSize:18},n={fontSize:48};return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{style:{paddingTop:"100px"},children:"Resources to help Mental Health and Illness"}),Object(b.jsx)(m.a,{position:"static",style:{backgroundColor:"#9bdb36"},children:Object(b.jsxs)(v.a,{value:a,onChange:function(e,t){console.warn(t),l(t)},position:"static",children:[Object(b.jsx)(f.a,{label:" Meditation Videos",style:{color:"black"}}),Object(b.jsx)(f.a,{label:" Self Help Books",style:{color:"black"}}),Object(b.jsx)(f.a,{label:" CBT Resources",style:{color:"black"}}),Object(b.jsx)(f.a,{label:"Links to Therapists",style:{color:"black"}})]})}),Object(b.jsxs)(C,{value:a,index:0,children:[" ",Object(b.jsx)("h1",{style:n,children:" Mindfulness "}),Object(b.jsx)("p",{style:s,children:" Mindfulness is a type of meditation in which the user's goal is to become aware or focused on what you are feeling in the moment. Many users attemping to help have created thousands of videos on youtube. If you have 10 - 15 minutes, close your eyes and try out these mindfulness practicing videos!"}),Object(b.jsx)("div",{id:"player",children:Object(b.jsx)(w.a,{url:"https://www.youtube.com/watch?v=ZToicYcHIOU"})}),Object(b.jsx)("div",{id:"player",children:Object(b.jsx)(w.a,{url:"https://www.youtube.com/watch?v=6p_yaNFSYao"})}),Object(b.jsxs)("p",{style:s,children:[" if you liked those videos and want to find more, here is a direct ",Object(b.jsx)("a",{href:"https://www.youtube.com/results?search_query=mindfulness+meditation",children:"link"}),"to the search on YouTube."]})]}),Object(b.jsxs)(C,{value:a,index:1,children:[" ",Object(b.jsx)("h1",{style:n,children:"Self Help Books "}),Object(b.jsx)("p",{style:s,children:"Mindfulness can also be obtained by reading books. Many self help books are filled with incorrect information giving the reader a wrong and even harmful advice. On positive mind we list therapist suggested mindfulness/ self help books to actually help you. If videos are not for you, sit down with a nice cup of tea or coffee and enjoy these books!"}),Object(b.jsx)("a",{href:"https://www.amazon.ca/Wherever-You-There-Are-Mindfulness/dp/1401307787/ref=sr_1_1?keywords=where+ever+you+go+there+you+are&qid=1636841567&s=books&sr=1-1",children:Object(b.jsx)("img",{src:"https://m.media-amazon.com/images/I/51zAVNhacqL._SY346_.jpg"})}),Object(b.jsx)("p",{style:s,children:" These books help the reader learn and practice mindfulness. This book above was written by Jon Kabat Zin who is renown for his expertise on mindfulness. Clicking on the photo will bring you to an amazon link to purchase the book!"}),Object(b.jsx)("a",{href:"https://www.amazon.ca/Miracle-Mindfulness-Introduction-Practice-Meditation/dp/0807012394/ref=sr_1_1?crid=P7SVR57Y5WNN&keywords=the+miracle+of+mindfulness+by+thich+nhat+hanh&qid=1636846913&sprefix=the+mir%2Caps%2C243&sr=8-1",children:Object(b.jsx)("img",{src:"https://i.insider.com/60ca0e9e23393a00188e37ba?width=700&format=jpeg&auto=webp"})}),Object(b.jsxs)("p",{style:s,children:["This book is written to help users go through small moments around you and become more self aware of your surroundings. If either of these books interest you and you would like more suggestions, these were taken from this ",Object(b.jsx)("a",{href:"https://www.businessinsider.com/best-mindfulness-books",rel:"noopener",children:"article"}),"they interviewed three psycologist asking which mindfulness books they recommended and these were the suggested books."]})]}),Object(b.jsxs)(C,{value:a,index:2,children:[Object(b.jsx)("h1",{style:n,children:"Cognitive Behavioral Therapy "}),Object(b.jsx)("p",{style:s,children:"Cognitive Behavioral Therapy (CBT) is a common talk based therapy used by many. Focusing on analyzing your negative and inaccurate thoughts, coming to understand why these thoughts are negatively affecting you and not necessarily correct. Supplied below is a quick video to explain CBT. Below is a video of What CBT is"}),Object(b.jsx)("div",{id:"player",children:Object(b.jsx)(w.a,{url:"https://www.youtube.com/watch?v=q6aAQgXauQw"})}),Object(b.jsx)("p",{style:s,children:"If you are still confused on how Cognitive BehavioralTherapy works here is another video to watch to understand!"}),Object(b.jsx)("div",{id:"player",children:Object(b.jsx)(w.a,{url:"https://www.youtube.com/watch?v=ZdyOwZ4_RnI"})}),Object(b.jsxs)("p",{style:s,children:["This method is often used and has been approved by the American Psychology Association. They have even written a small article explaining the goals and benefits of it. This article can be found ",Object(b.jsx)("a",{href:"https://www.apa.org/ptsd-guideline/patients-and-families/cognitive-behavioral",children:" here"})]})]}),Object(b.jsxs)(C,{value:a,index:3,children:[Object(b.jsx)("h1",{style:n,children:" Find Help"}),Object(b.jsx)("p",{style:s,children:"While you may believe you are alone in facing these issues, millions everywhere are also struggling with their mental help. You are not alone in this struggle are there are people out there to help you. If you would like meet with a therapist we have recommened these links below!"}),Object(b.jsx)("a",{href:"https://calgarycounselling.com/about",children:Object(b.jsx)("img",{src:"https://i.ytimg.com/vi/Aq8NSk9SUEE/maxresdefault.jpg"})}),Object(b.jsx)("p",{style:s,children:" Calgary counselling is a charitable organization for any calgarians struggling with mental health and/or mental illness. With the calgary counselling center, you can state your income and they charge you based on your income. They also assure your therapist is not based off of the income. It allows those who may be struggling financially to seek help!"})]})]})}function C(e){var t=e.children,a=e.value,i=e.index;return Object(b.jsx)("div",{children:a===i&&Object(b.jsx)("h1",{children:t})})}var N={SURVEYANSWERS:O,updateSurveyAnswers:function(e){O=e,console.log("SURVEYANSWERS",O)}},M=a(101),S=a(102);function A(){return Object(b.jsx)("div",{children:Object(b.jsx)(m.a,{children:Object(b.jsxs)(M.a,{children:[Object(b.jsx)(o.b,{to:"/",style:{textDecoration:"none",color:"#fff",paddingLeft:"30px",paddingRight:"30px"},children:Object(b.jsx)(S.a,{variant:"h4",children:"Logout"})}),Object(b.jsx)(o.b,{to:"/page2",style:{textDecoration:"none",color:"#fff",paddingLeft:"30px",paddingRight:"30px"},children:Object(b.jsx)(S.a,{variant:"h4",children:"Resources"})}),Object(b.jsx)(o.b,{to:"/page3",style:{textDecoration:"none",color:"#fff",paddingLeft:"30px",paddingRight:"30px"},children:Object(b.jsx)(S.a,{variant:"h4",children:"Survey"})}),Object(b.jsx)(o.b,{to:"/page4",style:{textDecoration:"none",color:"#fff",paddingLeft:"30px",paddingRight:"30px"},children:Object(b.jsx)(S.a,{variant:"h4",children:"To Do List"})})]})})})}var T=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(A,{}),Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)(k,{}),console.log("Page2:",N)]})]})},H=a(37),L=a.n(H),Y=a(22),D=a(46);function q(){var e=Object(c.f)(),t=Object(i.useState)({gender:"",age:"",dailylifephysical:"",dailylifeemotional:"",mentalhealth:"",low:"",relationships:"",calmandpeaceful:"",energetic:"",gloomy:"",angry:"",mentaldisorder:"",mentalhealthexamination:"",familymentaldisorders:"",familymember:"",dailyactivities:"",dailyLightphysicalactivities:"",dailyModeratephysicalactivities:"",dailyHeavyphysicalactivities:"",therapist:"",medication:"",sleephours:"",sleepquality:"",maritalstatus:"",smoker:"",alcoholic:"",lifepositivity:"",id:null,errormessage:""}),a=Object(j.a)(t,2),l=a[0],s=a[1];Object(i.useEffect)((function(){console.log("useeffect:",l)}),[l]);var n=function(){var e=Object(D.a)(L.a.mark((function e(t){var a,i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.name,i=t.target.value,"id"===a&&console.log(i),console.log("value",i),s(Object(r.a)(Object(r.a)({},l),{},Object(Y.a)({},a,t.target.value)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log("handle complete"),Object(b.jsxs)("form",{children:[Object(b.jsxs)("label",{children:["Gender:",Object(b.jsxs)("select",{onChange:n,name:"gender",value:l.gender,children:[Object(b.jsx)("option",{value:"Male",children:"Male"}),Object(b.jsx)("option",{value:"Female",children:"Female"}),Object(b.jsx)("option",{value:"Other",children:"Other"}),Object(b.jsx)("option",{value:"Anonymous",children:"Prefer not to say"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["Age:",Object(b.jsxs)("select",{onChange:n,name:"age",value:l.age,children:[Object(b.jsx)("option",{value:"ageA",children:"6-15"}),Object(b.jsx)("option",{value:"ageB",children:"16-18"}),Object(b.jsx)("option",{value:"ageC",children:"19-25"}),Object(b.jsx)("option",{value:"ageD",children:"25+"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"During the past 4 weeks, have you had any problems with your work or daily life due to your physical health?"',Object(b.jsxs)("select",{onChange:n,name:"dailylifephysical",value:l.dailylifephysical,children:[Object(b.jsx)("option",{value:"dailylifephysicalYes",children:"Yes"}),Object(b.jsx)("option",{value:"dailylifephysicalNo",children:"No"}),Object(b.jsx)("option",{value:"dailylifephysicalDk",children:'"Don\'t Know"'})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"During the past 4 weeks, have you had any problems with your work or daily life due to any emotional problems, such as feeling depressed, sad, or anxious?"',Object(b.jsxs)("select",{onChange:n,name:"dailylifeemotional",value:l.dailylifeemotional,children:[Object(b.jsx)("option",{value:"dailylifeemotionalYes",children:"Yes"}),Object(b.jsx)("option",{value:"dailylifeemotionalNo",children:"No"}),Object(b.jsx)("option",{value:"dailylifeemotionalDk",children:'"Don\'t Know"'})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"Overall how would you rate your mental health?"',Object(b.jsxs)("select",{onChange:n,name:"mentalhealth",value:l.mentalhealth,children:[Object(b.jsx)("option",{value:"mentalhealtha",children:"Excellent"}),Object(b.jsx)("option",{value:"mentalhealthb",children:"Somewhat good"}),Object(b.jsx)("option",{value:"mentalhealthc",children:"Average"}),Object(b.jsx)("option",{value:"mentalhealthd",children:"Somewhat poor"}),Object(b.jsx)("option",{value:"mentalhealthe",children:"Poor"}),Object(b.jsx)("option",{value:"mentalhealthf",children:"Not sure"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"Have you felt particularly low or down for more than 2 weeks in a row?"',Object(b.jsxs)("select",{onChange:n,name:"low",value:l.low,children:[Object(b.jsx)("option",{value:"lowa",children:"Very often"}),Object(b.jsx)("option",{value:"lowb",children:"Somewhat often"}),Object(b.jsx)("option",{value:"lowc",children:"Not so often"}),Object(b.jsx)("option",{value:"lowd",children:"Not at all"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"During the past two weeks, how often has your mental health affected your relationships?"',Object(b.jsxs)("select",{onChange:n,name:"relationships",value:l.relationships,children:[Object(b.jsx)("option",{value:"relationshipsa",children:"Very often"}),Object(b.jsx)("option",{value:"relationshipsb",children:"Somewhat often"}),Object(b.jsx)("option",{value:"relationshipsc",children:"Not so often"}),Object(b.jsx)("option",{value:"relationshipsd",children:"Not at all"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"How often do you experience calm and peaceful?"',Object(b.jsxs)("select",{onChange:n,name:"calmandpeaceful",value:l.calmandpeaceful,children:[Object(b.jsx)("option",{value:"calmandpeacefula",children:"Always"}),Object(b.jsx)("option",{value:"calmandpeacefulb",children:"Most of the time"}),Object(b.jsx)("option",{value:"calmandpeacefulc",children:"About half the time"}),Object(b.jsx)("option",{value:"calmandpeacefuld",children:"Once in a while"}),Object(b.jsx)("option",{value:"calmandpeacefule",children:"Never"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"How often do you experience energetic?"',Object(b.jsxs)("select",{onChange:n,name:"energetic",value:l.energetic,children:[Object(b.jsx)("option",{value:"energetica",children:"Always"}),Object(b.jsx)("option",{value:"energeticb",children:"Most of the time"}),Object(b.jsx)("option",{value:"energeticc",children:"About half the time"}),Object(b.jsx)("option",{value:"energeticd",children:"Once in a while"}),Object(b.jsx)("option",{value:"energetice",children:"Never"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"How often do you experience gloomy?"',Object(b.jsxs)("select",{onChange:n,name:"gloomy",value:l.gloomy,children:[Object(b.jsx)("option",{value:"gloomya",children:"Always"}),Object(b.jsx)("option",{value:"gloomyb",children:"Most of the time"}),Object(b.jsx)("option",{value:"gloomyc",children:"About half the time"}),Object(b.jsx)("option",{value:"gloomyd",children:"Once in a while"}),Object(b.jsx)("option",{value:"gloomye",children:"Never"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"How often do you experience angry?"',Object(b.jsxs)("select",{onChange:n,name:"angry",value:l.angry,children:[Object(b.jsx)("option",{value:"angrya",children:"Always"}),Object(b.jsx)("option",{value:"angryb",children:"Most of the time"}),Object(b.jsx)("option",{value:"angryc",children:"About half the time"}),Object(b.jsx)("option",{value:"angryd",children:"Once in a while"}),Object(b.jsx)("option",{value:"angrye",children:"Never"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"Have you ever been diagnosed with a mental disorder before?"',Object(b.jsxs)("select",{onChange:n,name:"mentaldisorder",value:l.mentaldisorder,children:[Object(b.jsx)("option",{value:"mentaldisordera",children:"Yes"}),Object(b.jsx)("option",{value:"mentaldisorderb",children:"No"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"When did you last get your mental health examination done?"',Object(b.jsxs)("select",{onChange:n,name:"mentalhealthexamination",value:l.mentalhealthexamination,children:[Object(b.jsx)("option",{value:"mentalhealthexaminationa",children:"Less than 6 months ago"}),Object(b.jsx)("option",{value:"mentalhealthexaminationab",children:"6 months ago"}),Object(b.jsx)("option",{value:"mentalhealthexaminationac",children:"A year ago"}),Object(b.jsx)("option",{value:"mentalhealthexaminationad",children:"More than a year ago"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"Is there a history of mental disorders in your family?"',Object(b.jsxs)("select",{onChange:n,name:"familymentaldisorders",value:l.familymentaldisorders,children:[Object(b.jsx)("option",{value:"familymentaldisordersa",children:"Yes"}),Object(b.jsx)("option",{value:"familymentaldisordersb",children:"No"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"If Yes, please select which of the family member(s) has/had a history of mental illness."',Object(b.jsxs)("select",{onChange:n,name:"familymember",value:l.familymember,children:[Object(b.jsx)("option",{value:"familymembera",children:"Mother"}),Object(b.jsx)("option",{value:"familymemberb",children:"Father"}),Object(b.jsx)("option",{value:"familymemberc",children:"Brother"}),Object(b.jsx)("option",{value:"familymemberd",children:"Sister"}),Object(b.jsx)("option",{value:"familymembere",children:"Grandfather"}),Object(b.jsx)("option",{value:"familymemberf",children:"Grandmother"}),Object(b.jsx)("option",{value:"familymemberg",children:"Other__"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"Does your health limit you in doing daily activities?"',Object(b.jsxs)("select",{onChange:n,name:"dailyactivities",value:l.dailyactivities,children:[Object(b.jsx)("option",{value:"dailyactivitiesa",children:"Yes"}),Object(b.jsx)("option",{value:"dailyactivitiesab",children:"No"}),Object(b.jsx)("option",{value:"dailyactivitiesac",children:'"Don\'t know"'})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"Does your health limit you in doing daily Light physical activities?"',Object(b.jsxs)("select",{onChange:n,name:"dailyLightphysicalactivities",value:l.dailyLightphysicalactivities,children:[Object(b.jsx)("option",{value:"dailyLightphysicalactivitiesa",children:"No problem"}),Object(b.jsx)("option",{value:"dailyLightphysicalactivitiesab",children:"Very much"}),Object(b.jsx)("option",{value:"dailyLightphysicalactivitiesac",children:"Moderately"}),Object(b.jsx)("option",{value:"dailyLightphysicalactivitiesad",children:"Very less"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"Does your health limit you in doing daily Moderate physical activities?"',Object(b.jsxs)("select",{onChange:n,name:"dailyModeratephysicalactivities",value:l.dailyModeratephysicalactivities,children:[Object(b.jsx)("option",{value:"dailyModeratephysicalactivitiesa",children:"No problem"}),Object(b.jsx)("option",{value:"dailyModeratephysicalactivitiesab",children:"Very much"}),Object(b.jsx)("option",{value:"dailyModeratephysicalactivitiesac",children:"Moderately"}),Object(b.jsx)("option",{value:"dailyModeratephysicalactivitiesad",children:"Very less"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"Does your health limit you in doing daily Heavy physical activities?"',Object(b.jsxs)("select",{onChange:n,name:"dailyHeavyphysicalactivities",value:l.dailyHeavyphysicalactivities,children:[Object(b.jsx)("option",{value:"dailyHeavyphysicalactivitiesa",children:"No problem"}),Object(b.jsx)("option",{value:"dailyHeavyphysicalactivitiesb",children:"Very much"}),Object(b.jsx)("option",{value:"dailyHeavyphysicalactivitiesc",children:"Moderately"}),Object(b.jsx)("option",{value:"dailyHeavyphysicalactivitiesd",children:"Very less"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"Have you seen a therapist in the recent past?"',Object(b.jsxs)("select",{onChange:n,name:"therapist",value:l.therapist,children:[Object(b.jsx)("option",{value:"therapista",children:"Yes"}),Object(b.jsx)("option",{value:"therapistb",children:"No"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"Are you currently taking any medication?"',Object(b.jsxs)("select",{onChange:n,name:"medication",value:l.medication,children:[Object(b.jsx)("option",{value:"medicationa",children:"Yes"}),Object(b.jsx)("option",{value:"medicationb",children:"No"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"How many hours do you sleep per day?"',Object(b.jsxs)("select",{onChange:n,name:"sleephours",value:l.sleephours,children:[Object(b.jsx)("option",{value:"sleephoursa",children:"Less than 4"}),Object(b.jsx)("option",{value:"sleephoursb",children:"4-6"}),Object(b.jsx)("option",{value:"sleephoursc",children:"7-9"}),Object(b.jsx)("option",{value:"sleephoursd",children:"9+"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"How is your quality of sleep?"',Object(b.jsxs)("select",{onChange:n,name:"sleepquality",value:l.sleepquality,children:[Object(b.jsx)("option",{value:"sleepqualitya",children:"Very bad"}),Object(b.jsx)("option",{value:"sleepqualityb",children:"Bad"}),Object(b.jsx)("option",{value:"sleepqualityc",children:"Normal"}),Object(b.jsx)("option",{value:"sleepqualityd",children:"Good"}),Object(b.jsx)("option",{value:"sleepqualitye",children:"Very good"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"What is your marital status?"',Object(b.jsxs)("select",{onChange:n,name:"maritalstatus",value:l.maritalstatus,children:[Object(b.jsx)("option",{value:"maritalstatusa",children:"Married"}),Object(b.jsx)("option",{value:"maritalstatusb",children:"Widowed"}),Object(b.jsx)("option",{value:"maritalstatusc",children:"Divorced"}),Object(b.jsx)("option",{value:"maritalstatusd",children:"Separated"}),Object(b.jsx)("option",{value:"maritalstatuse",children:"Never married"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"Are you a heavy smoker?"',Object(b.jsxs)("select",{onChange:n,name:"smoker",value:l.smoker,children:[Object(b.jsx)("option",{value:"smokera",children:"Yes"}),Object(b.jsx)("option",{value:"smokerb",children:"No"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"Are you an alcoholic?"',Object(b.jsxs)("select",{onChange:n,name:"alcoholic",value:l.alcoholic,children:[Object(b.jsx)("option",{value:"alcoholica",children:"Yes"}),Object(b.jsx)("option",{value:"alcoholicb",children:"No"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:['"How often do you feel positive about your life?"',Object(b.jsxs)("select",{onChange:n,name:"lifepositivity",value:l.lifepositivity,children:[Object(b.jsx)("option",{value:"lifepositivitya",children:"Never"}),Object(b.jsx)("option",{value:"lifepositivityb",children:"Once in a while"}),Object(b.jsx)("option",{value:"lifepositivityc",children:"About half the time"}),Object(b.jsx)("option",{value:"lifepositivityd",children:"Most of the time"}),Object(b.jsx)("option",{value:"lifepositivitye",children:"Always"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",value:"Submit",onClick:function(){e.push("/Page4")}})]})}var I=function(){return Object(b.jsxs)("div",{className:"BG-color",children:[Object(b.jsx)(A,{}),Object(b.jsx)("h1",{style:{paddingTop:"70px",color:"#ffff",fontSize:"70px"},children:"Mental Health Survey"}),Object(b.jsx)("header",{className:"Questions",children:Object(b.jsx)(q,{})})]})},B=Math.floor(10*Math.random());function V(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),a=t[0],l=t[1];Object(i.useEffect)((function(){fetch("./Information/Tasks.json").then((function(e){return e.json()})).then((function(e){l(e)}))}),[]);return Object(b.jsx)("div",{children:a.map((function(e,t){if(e.taskid==B)return e.items.map((function(e,t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"checkbox",value:e,style:{height:"50px",width:"50px"}},t)," ",Object(b.jsx)("label",{children:e})]})}))}))})}var W=function(){return Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)(A,{}),Object(b.jsx)("h1",{children:"Try to complete this list:"}),Object(b.jsx)(V,{})]})};function E(){var e;return Object(b.jsx)("div",(e={style:{color:"#3f51b5"}},Object(Y.a)(e,"style",{fontWeight:"bold"}),Object(Y.a)(e,"children",'We are not certified or licensed therapists. We have suggested things that may be able to help. IF you are having suicidal/dark thoughts PLEASE go see a licensed therapist. In our resource page under "Links to Therapists" may help!'),e))}var R=function(){return Object(b.jsxs)("div",{className:"root",children:[Object(b.jsxs)(c.c,{children:[Object(b.jsx)(c.a,{exact:!0,path:"/",component:y}),Object(b.jsx)(c.a,{exact:!0,path:"/page2",component:T}),Object(b.jsx)(c.a,{exact:!0,path:"/page3",component:I}),Object(b.jsx)(c.a,{exact:!0,path:"/page4",component:W})]}),Object(b.jsx)(y,{}),Object(b.jsx)(E,{})]})};n.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(o.a,{children:Object(b.jsx)(R,{})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.284f73dc.chunk.js.map