let btn = document.querySelector(".btn")
let menu = document.querySelector(".menu")
let close = document.querySelector(".close")

btn.addEventListener("click",()=>{
    gsap.to(btn, { x: '-200px', duration: 0.8 });
    gsap.to(menu, { x: '300px', duration: 0.5,delay:0.5 });
})

close.addEventListener("click",()=>{
    gsap.to(btn, { x: '0px', duration: 0.8,delay:0.5 });
    gsap.to(menu, { x: '-300px', duration: 0.8,delay:0.5 });
})