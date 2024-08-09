const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
   
    
    burger.addEventListener("click",()=>{
        //Toggle map
        nav.classList.toggle("nav-active");
        //Animate links
        navLinks.forEach((link,index) => {
             if(link.style.animation){
                link.style.animation = ""
             }else{
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 1}s `;
             }
               
        });
        //Burger Animation
        burger.classList.toggle("tog");


    });
    // //Animate links
    // navLinks.forEach((link,index) => {
    //     link.style.animation = `navLinksFade 0.5s ease forwards ${index / 1 + 1.5}s `;
               
    // })
}
navSlide();
