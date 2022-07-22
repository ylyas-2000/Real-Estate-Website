/* date input section starts */
let optionUl = document.querySelectorAll('.date .tabs .tabs-input div ul');
let optionDiv = document.querySelectorAll('.date .tabs .tabs-input div div');

optionDiv[0].onclick = () =>{
    optionUl[0].classList.toggle('active');
}
optionDiv[1].onclick = () =>{
    optionUl[1].classList.toggle('active');
}

var header = document.querySelector(".date .tabs .tabs-ul");
var btns = header.querySelectorAll(".date .tabs .tabs-ul li");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
/* date input section ends */

/* swiper section starts */
var swiper = new Swiper(".swiper-slide", {
    slidesPerView: 3.5,
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  });
/* swiper section ends */