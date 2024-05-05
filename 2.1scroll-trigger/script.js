/*

gsap.from(".page1 .box", {
  scale: 0,
  duration: 1,
  delay: 1,
  rotate: 360,
});
gsap.from(".page2 .box", {
  scale: 0,
  duration: 1,
  delay: 1,
  rotate: 360,
});
gsap.from(".page3 .box", {
  scale: 0,
  duration: 1,
  delay: 1,
  rotate: 360,
});

*/

//==============problem with above code: i want the animations to run when insee the page or part of that website , or sun acc to my scrolling behavior================

//==============solution : scroll trigger(here animations written in gsap but excution turns acc to scroll trigger (cdn)) =============================================================================================================================

gsap.from(".page1 .box", {
    scale: 0,
    duration: 1,
    delay: 1,                        //as it is above 
    rotate: 360,
  });

  gsap.from(".page2 .box", {
    scale: 0,
    duration: 2,
    delay: 1,
    rotate: 720,
    // scrollTrigger:".page2 .box"                  //simple way

   scrollTrigger:{                                 //formal way 
      

      trigger:".page2 .box",
      scroller:"body",    //maxtimes it will be body 
      markers: true,       //keeping markers for element
      start:"top 60%",    //put scroller start 60% from top 
    end:"top 30%",        //put scroller end 30% from top 
     scrub: true,          // it makes the animation between the start and end markers set by you , maked reverse animation when you go revese scrolll
    // scrub:1/2/5 // you can make that smoother by these values 
   }


  });


//---------------------concept of markers , scrollers of page -----------------------------------------------------------------------------------------------------

/*
                                 <<--------------scroller-end
                                         |
                                         |
                                         |
                                         |
                                         |
                                         |
                                         |
                                         |
                                         |              (main page)                 {when marker of element /start touches the scroller start (60%from top in above case )animations got triggered on element}
                                         |
                                         |
                                         |
                                         |
                                         |
                                         |
                                         |
                                         |
                                << ------------scroller-start      
 (goes up)                               
^                                
|                   start 
|                  ------>>
|                   end
   

(element markers) 


*/
//------------------------------------------------------------textual example ----------------------------------------------------------------------------------------------------------------------
/*

gsap.from(".page2 h1", {

      opacity:0,
      duration:1,
      x:500,

      scrollTrigger:{

        trigger:".page2 h1",
        scroller:"body",
           markers:true,
           start: "top 60%"
      }



})

gsap.from(".page2 h2", {

      opacity:0,
      duration:1,
      x:-500,

      scrollTrigger:{

        trigger:".page2 h2",
        scroller:"body",
           markers:true,
           start: "top 60%"
      }



})
*/
//-----------------------------------------------------------------------------------------------------------------------------------------------

// 1. GSAP used for animate elements
// 2. ScrollTrigger used for animate elements on basis of scrolling
// properties of scrollTrigger
// - trigger: 'select element you wants to trigger',
// -scroller: " body most of the times",
// -start : "animation start point",
// -end: "animation end point",
// -markers : " Boolean" -helps us to make perfect animtion  we can remove it later,
// -scrub: "Boolean or any no. between 1-5" -to make animation back and forth,
// -pin : pin the page while animating elements
//  ** note: while using pin property make sure trigger must be parent element