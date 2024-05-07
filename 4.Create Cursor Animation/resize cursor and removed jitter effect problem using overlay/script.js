var main = document.querySelector(".main"); // moin dev le liya
var cursor = document.querySelector(".cursor"); //cursor bana liya div se
var image = document.querySelector(".image"); //image dalni thi

// cursor banaya yahan, mouse move se***********(most imp )
main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
    ease: "back.out",
  });
});

//mouseenter hone se cursor ko change kiya

image.addEventListener("mouseenter", (dets) => {
  cursor.innerHTML = "view more";
  gsap.to(cursor, {
    scale: 6,
    backgroundColor: "#ffffff7c",

  });
});

// mouse leave hone se cursor ko change kiya hai
image.addEventListener("mouseleave", (dets) => {
  cursor.innerHTML = "";

  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "white",
  });
});

//use of ease : it defines the behaviour of the to() or from() animations
