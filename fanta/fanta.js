

var tl= gsap.timeline({scrollTrigger:{
         trigger:".two",
         start:"0% 95%",
        end:"53% 50%",
        scrub:true,
        // markers:true,
     }
     })


tl.to("#fanta",{
    top:"130%",
    left:"0%",

},"one")

tl.to("#orange",{
      top:"170%",
      left:"19%",


},"one"
)


tl.to("#orange-grp",{
    width:"20%",
    top:"170%",
    right:"5%",


},"one"
)


tl.to("#leaf3",{
    filter:" drop-shadow(10px 5px 4px #4A1F1D)",
    rotate:"120deg",
    top:"120%",
   left:"80%"


},"one"
)




var tl2= gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
   end:"20% 50%",
   scrub:true,
//    markers:true,
}
})

     
tl2.from(".back1",{
    rotate:"-90deg",
    // left:"-50%",
    top:"110%"
},"two"
)

     
tl2.from(".back2",{
    rotate:"-90deg",
    // right:"-50%",
    top:"120%"
},"two"
)

tl2.from("#pepsi",{
    left:0,
    rotate:"-90deg",

},"two")

tl2.from("#cola",{
     right:0,
     rotate:"-90deg",
},"two")


tl2.from("#back2",{
    right:0,
    rotate:"30deg",
},"two")




tl2.to("#orange",{
    top:"208%",
    left:"38%",
    width:"22vw"
   
},"two")


tl2.to("#fanta",{
    top:"217%",
    left:"30%",

},"two")



















