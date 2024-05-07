//right is neagtive same as width in full

//var tl = gsap.timeline({paused:true});       //to make the whole timeline paused


var menu= document.querySelector(".nav i");
var cross= document.querySelector(".full i");

//----------------------------timeline code ----------------------------

var tl = gsap.timeline();       

tl.to(".full", {

  right: 0,
  duration:0.4,


});

tl.from(".full h4",{

    x:100,
    duration:0.5,
    stagger:0.175,
    opacity:0,



})
tl.from(".full i",{

    
    opacity:0,



})
//--------------------------------------------------------------------------------

tl.pause();       // another way to pause


menu.addEventListener('click' , ()=>{

    tl.play();

})


cross.addEventListener('click', ()=>{


    tl.reverse();

})




