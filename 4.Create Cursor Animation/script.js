var main =document.querySelector(".main");
var cursor =document.querySelector(".cursor");


main.addEventListener("mousemove", (dets)=>{



gsap.to(cursor, {

    x:dets.x,
    y:dets.y,
    duration:1,
    ease:"back.out",
    
    
})



})


//use of ease : it defines the behaviour of the to() or from() animations 


