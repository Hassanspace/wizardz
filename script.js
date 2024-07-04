function page1animation(){
    var tl = gsap.timeline()
tl.from("nav .part1,nav h4,nav button",{
    y:-30,
    opacity:0,
    duration:0.7,
    delay:1,
    stagger:0.1
})

tl.from(".center-part1 h1",{
    x:-300,
    duration:0.7,
    opacity:0
})
tl.from(".center-part1 p",{
    x:300,
    duration:0.5,
    opacity:0
})
tl.from(".center-part1 button",{
    
    duration:0.4,
    opacity:0
})
tl.from(".center-part2 img",{
    
    duration:0.4,
    opacity:0
},"-=0.5")
tl.from(".section1bottom img",{
  
    y:30,
    duration:0.6,
    opacity:0,
    stagger:0.2,
  
   
})
}
page1animation()


function page2animation(){
    tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2 ",
            scroller:"body",
       
            start:"top 30%",
            end:"top 0%",
            scrub:2
            
        }
    })
    tl2.from(".section2-part1 ",{
        y:30,
        opacity:0,
      
       
    })
    tl2.from(".elem1",{
        x:-300,
        opacity:0,
      
       
    })
    tl2.from(".elem2",{
        x:300,
        opacity:0,
      
       
    })
    tl2.from(".elem3",{
        x:-300,
        opacity:0,
      
       
    })
    tl2.from(".elem4",{
        x:300,
        opacity:0,
      
       
    })
}
page2animation()

function page3animation(){
    tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".section3 ",
            scroller:"body",
       
            start:"top 90%",
            end:"top 0%",
            scrub:2
            
        }
    })
    
    tl3.from(".section3",{
        x:300,
        opacity:0
    })
   
}
page3animation()


