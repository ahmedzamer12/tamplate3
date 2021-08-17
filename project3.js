var slide = document.querySelectorAll('.slide1');
 var n = 0;
 function slideshow() {
   for (var i = 0; i < slide.length; i++) {
     slide[i].classList.remove("display");
   }
   if (n==0) {
     if (slide[n].classList.contains("active")) {
       slide[n].classList.remove("active");
       slide[n].classList.add("display");
       slide[n+2].classList.add("display");
       slide[n+1].classList.add("active");
     }

   }
   else if (n==1) {
     slide[n].classList.remove("active");
     slide[n].classList.add("display");
     slide[0].classList.add("display");
     slide[n+1].classList.add("active");
   }
   else {
     slide[n].classList.remove("active");
     slide[n].classList.add("display");
     slide[n-1].classList.add("display");
     slide[0].classList.add("active");
   }
   n++;
   if (n==3) {
     n=0;
   }
 }
 setInterval(slideshow,2000);
////////////////////////////////////**//
var slide1 = document.querySelectorAll('.slide3');
 var n = 0;
 function slideshows() {
   for (var i = 0; i < slide1.length; i++) {
     slide1[i].classList.remove("display");
   }
   if (n==0) {
     if (slide1[n].classList.contains("active")) {
       slide1[n].classList.remove("active");
       slide1[n].classList.add("display");
       slide1[n+2].classList.add("display");
       slide1[n+1].classList.add("active");
     }

   }
   else if (n==1) {
     slide1[n].classList.remove("active");
     slide1[n].classList.add("display");
     slide1[0].classList.add("display");
     slide1[n+1].classList.add("active");
   }
   else {
     slide1[n].classList.remove("active");
     slide1[n].classList.add("display");
     slide1[n-1].classList.add("display");
     slide1[0].classList.add("active");
   }
   n++;
   if (n==3) {
     n=0;
   }
 }
 setInterval(slideshows,2000);
