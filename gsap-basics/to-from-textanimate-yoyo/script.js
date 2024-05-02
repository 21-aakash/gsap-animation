gsap.to(".box1",
{

            
x:1000,                  //1000 in x axis 
duration:2,   //how much time it will take to that distance
delay:1   ,         // start after 1s

rotate:360,
borderRadius:"50%",
backgroundColor: "blue",

// scale:2 //size double
scale:0.5,

})



gsap.from(".box2",
{

            
x:1000,              

duration:2,  
delay:1       ,
rotate:360


})


//gsap.to(){it transforms the state (animation )from initial to final position }
//gsap.from(){it transforms the state (animation )from final to initial position }
// you can also apply css propertioes in this row functions 
// start with gsap.
//choose to /from 
//tow paramters:  1. "<elemets_name_as _it_is_as_css>", properties in key value pair 

//gsap is js library(animation)
//use camel case in name formatting in js /gsap ex: background-color: ->> backgroungColor:


//=============================text animations-stagger  ====================================================================
// gsap.to("h1", {

// color:"red",
// duration:5,
// delay:1,



// })
// gsap.from("h1", {      //all h1 all selected ata time 

// opacity:0,
// y:50,
// x:-50,
// duration:1,
// delay:1,


// })

//if i want gradual selection 

gsap.from("h1", {     
opacity:0,                      //initially opacty is 0 and bring back to 1
y:50,                      //takes distance from y axis 

duration:1,              // these properties will appear for this interval of time 
delay:1,             // these properties will be applied after this delay
stagger:0.3       //it helps to apply properties one by one and takes interval of 1    , you ccan also gove -1


})



//=========Repeat Animation/ yoyo============================

gsap.to(".box3",
{

            
x:1200,              
borderRadius:"50%",
duration:0.5,  
delay:1       ,
rotate:360,
// repeat:1           // it will run 2 times 

repeat:-1,      //infinite times (initial to final only )
yoyo: true,              // it will repeate to and froth , cool property 




})

