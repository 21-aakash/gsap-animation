

// gsap.to(".box1",{

// x:1500,
// duration:1.5,
// delay:0.5,
// rotate:360,


// })
// gsap.to(".box2",{

// x:1500,
// duration:1.5,
// delay:2,
// rotate:360,
// backgroundColor:"green",


// })
// gsap.to(".box3",{

// x:1500,
// duration:1.5,
// delay:3.5,

// scale:0.5,
// borderRadius:"50%",




// })



//===========here delay were calculated by summinh up previous delay and that too tediouos sometimes so we use timelines ========================



// var tl= gsap.timeline();   //just make a timline amd use it through a variable , no need to mention separate delay 

// tl.to(".box1",{

//     x:1500,
//     duration:1.5,
//     delay:0.2,
//     rotate:360,
    
    
//     })
//     tl.to(".box2",{
    
//     x:1500,
//     duration:0.5,
   
//     rotate:360,
//     backgroundColor:"green",
    
    
//     })
//     tl.to(".box3",{
    
//     x:1500,
//     duration:0.5,
    
    
//     scale:0.5,
//     borderRadius:"50%",
    
    
    
    
//     })

//=======================================================example 2=================================================================



var tl= gsap.timeline();

tl.from("h2",{

    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,


})
tl.from("h4",{

    y:-20,
    opacity:0,
   
   stagger:0.3,
    



})
tl.from("h1",{

    y:20,
    opacity:0,
   
   duration:0.5,
   scale:0.2,
    



})


