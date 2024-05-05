//scalable vector graphics : svg
//svg is container , it has lot of stuff like path , circle , rectangle etc


var path = `M 10 200 Q 500 200 990 200`;       //initial curve (static made by 3 points (coordinates))
var finalpath=`M 10 200 Q 500 200 990 200`;



let  string =document.querySelector(".string")    // we want that effect to be shown inside the string div 

string.addEventListener("mousemove", (dets)=>{

    path = `M 10 200 Q ${dets.x} ${dets.y} 990 200`       // dynamically we are chaing the path by mouse event properties(its x and y coordinates on rwal time)

    gsap.to("svg path ", {

             attr: {d:path},           //attr help sto change the attributes of element sin gsap 
             duration:0.2,
             ease:"power3.out",             // it control speed of animations 



    })
})


//now i want to return it back to previous coordinates
string.addEventListener("mouseleave", (dets)=>{

  

    gsap.to("svg path ", {

             attr: {d:finalpath},           //attr help sto change the attributes of element sin gsap 
               duration:1.5,
               ease: "elastic.out(1, 0, 2)",



    })
})


/*
string.addEventListener("mouseenter", (dets)=>{

    console.log(dets);

})
string.addEventListener("mouseleave", ()=>{

    console.log("left");

})
--------------------------------------------------------------------------------------------------------------------------
summary :

calable vector Graphic (SVG) - used to make 2D graphics

svg : treated like a container  and it has attributes  height and width,
path : child of svg element , it can be used to create Lines, Curves, Arcs and more.
- stroke : "color" => attribute used to provide color to the line or path 
- d : "commands and parameters " => attribute contains series of commands and parameter used by these commands.

example: 
<svg width="500" height="200">
     <path d="M x y Q x1 y1 x2 y2" stroke="black" fill="transparent" />  
</svg>

=> here 
- M : "move to" command 
- x : x axis coordinate ,  
- y : y axis coordinate

Curves => in path curves are two types CUBIC CURVE and QUADRATIC CURVES
- C : used for cubic curve => it is complex and it has two control points
- Q : used for Quadratic curve => it is simple than cubic and it has one control point

GSAP property -------------------------------------------------------------------------------------

- attr : {key: value} => used to manipulate attributes of html element, it contains value as object in which key is attribute itself and value is value of attribute.
- ease : used for provide easing to element , there are multiple predefined easing functions you can check out on GSAP official website

YOU CAN use {ease : "elastic.out(1, 0.2)"}  which is predefined easing function to animate like guitar string

*/