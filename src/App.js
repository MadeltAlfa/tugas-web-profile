 /** creating button click show hide navbar **/
 let togglebtn = document.querySelector(".togglebtn");
 let nav = document.querySelector(".navlinks");
 let links = document.querySelector(".navlinks li");
 const downloadBtn = document.querySelector(".btn.active");
 const cvURL = "./src/certificate.pdf";

 togglebtn.addEventListener("click", function(){
     this.classList.toggle("click");
     nav.classList.toggle("open");
 })

 let typed = new Typed(".input",{
     strings:["Undergraduate","Student","Wahid Hasyim University"],
     typedSpeed:70,
     backSpeed:55,
     loop:true
 })

 downloadBtn.addEventListener("click", () => {
    window.open(cvURL, "_blank");
});