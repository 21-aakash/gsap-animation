
function markanimation(){



window.addEventListener("wheel" , (dets)=>{

    
if(dets.deltaY>0)
    {
        gsap.to(".marque",{

            transform:"translateX(-200%)",
           
            duration:4,
            repeat:-1,
            ease:"none",
        
        
        
        
        })

        gsap.to(".marque img",{

            rotate:180,

        })
    }
    else{

        gsap.to(".marque",{

            transform:"translateX(0%)",
            
            duration:1,
            repeat:-1,
            ease:"none",
        
        
        
        })
        gsap.to(".marque img",{

            rotate:0,
            
        })
    }
})

}
markanimation()