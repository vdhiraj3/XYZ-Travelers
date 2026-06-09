// Navbar Background on Scroll

window.addEventListener("scroll", function(){

const nav = document.querySelector(".custom-nav");

if(window.scrollY > 100){
nav.style.background = "#ffffff";
nav.style.boxShadow = "0 4px 20px rgba(0,0,0,.08)";
}
else{
nav.style.background = "#ffffff";
nav.style.boxShadow = "0 4px 20px rgba(0,0,0,.08)";
}

});
// Smooth Animation

AOS.init({
duration:1000,
once:true
});

// Inquiry Button

const buttons = document.querySelectorAll(".btn-warning");

buttons.forEach(btn => {

btn.addEventListener("click", function(){

alert("Thank You! Our Travel Expert Will Contact You Soon.");

});

});
