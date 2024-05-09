
function breakthetext()
{


    var h1text =document.querySelector("h1").textContent;
    var h1 =document.querySelector("h1");
    
    var splittedtext =h1text.split("");
    
var halflength= splittedtext.length/2;


    //.split() : it splits the string into array collection of having elements of that string splitted around that mentioned character 
    // you can also pass nothing to split 
    
    var clutter="";

    splittedtext.forEach((elem, index)=>{
    
    if(index<halflength)
    
    {
      clutter+= `<span class="a"> ${elem}</span>`

    }
    else{

        clutter+= `<span class="b"> ${elem}</span>`
    }
    
       
    });
    h1.innerHTML=clutter;
  
}




breakthetext();


// we just made the function formate just for code beauty 



/*
//--------------------------simple one ---------------------
gsap.from("h1 span ",
{
    y:50,       // this will not work as span is an inline elements and transform translate will not work 
     duration:0.6,
     delay:0.4,
     opacity:0,
     stagger:-0.15,
     ease: "power3.out",


// you can reverse the effect by keeping negative of stagger 
// a cut our effect: make parent elemnt overflow hidden 

})

*/





gsap.from("h1 .a ",
{
    y:80,       // this will not work as span is an inline elements and transform translate will not work 
     duration:0.6,
     delay:0.4,
     opacity:0,
     stagger:0.15,
   



})
gsap.from("h1 .b ",
{
    y:80,       // this will not work as span is an inline elements and transform translate will not work 
     duration:0.6,
     delay:0.4,
     opacity:0,
     stagger:-0.15,
    //  ease: "power3.out",



})

