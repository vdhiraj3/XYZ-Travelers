// Navbar Background on Scroll

window.addEventListener("scroll", function(){

const nav = document.querySelector(".custom-nav");

if(window.scrollY > 100){
nav.style.background = "#0F172A";
}
else{
nav.style.background = "rgba(10,15,35,0.95)";
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
