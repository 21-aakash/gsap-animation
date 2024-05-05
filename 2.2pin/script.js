gsap.to(".page2 h1",{
 transform:"translateX(-150%)",
scrollTrigger:{

trigger:".page2",     //trigger karo page 2 ko 
scroller:"body",
markers:true,
start:"top 0%",
end: "top -150%",    //if you want to scroll more increase this value 
scrub: 2,
pin:true,

}

})


//when we use pin we trigger the parent elemets 


// Notes:
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