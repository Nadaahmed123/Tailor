
var preloader = document.getElementsByClassName("preloader")[0];

window.onload = function () {
  setTimeout(function () {
    preloader.style.opacity = 0;
    preloader.style.transition = "opacity 0.3s ease";
    setTimeout(function () {
      preloader.style.display = "none";

    }, 400)
  }, 1000)
}

// =======================================

var header = document.getElementsByTagName("header")[0];
var offers = document.getElementsByClassName("offer");

console.log(offers);


window.onscroll = function () {
  if (scrollY > 440) {
    header.classList.add("fixed-bar");
    offers[0].style.animation = "fadeInUp 1.5s forwards";
    offers[1].style.animation = "fadeInUp 1.5s 0.4s forwards";
    offers[2].style.animation = "fadeInUp 1.5s 0.8s forwards";

  }
  else {
    header.classList.remove("fixed-bar")
  }

}

document.addEventListener("DOMContentLoaded", function () {
  var testimonials = document.querySelector(".testimonials");
  var prevBtn = document.querySelector(".prev-btn");
  var nextBtn = document.querySelector(".next-btn");
  var currentPage = document.querySelector(".current-page");
  var totalPages = document.querySelector(".total-pages");
  var currentTestimonial = 1;
  var totalTestimonialPages = parseInt(totalPages.innerText);

  function revealOnScroll() {
    var sectionPos = testimonials.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (sectionPos < windowHeight - 100) {
      testimonials.style.opacity = "1";
      testimonials.style.transform = "translateX(0)";
    }
  }

  function switchTestimonial(direction) {
    testimonials.style.opacity = "0";
    testimonials.style.transform = direction === "next" ? "translateX(150px)" : "translateX(-150px)";

    setTimeout(function () {
      currentTestimonial = direction === "next" 
        ? (currentTestimonial < totalTestimonialPages ? currentTestimonial + 1 : 1)
        : (currentTestimonial > 1 ? currentTestimonial - 1 : totalTestimonialPages);

      currentPage.innerText = currentTestimonial;

      testimonials.style.opacity = "1";
      testimonials.style.transform = "translateX(0)";
    }, 1000);
  }

  nextBtn.addEventListener("click", function (e) {
    e.preventDefault();
    switchTestimonial("next");
  });

  prevBtn.addEventListener("click", function (e) {
    e.preventDefault();
    switchTestimonial("prev");
  });

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

document.addEventListener("DOMContentLoaded", () => {
  const services = document.querySelectorAll('.service-item');
  const servicesSection = document.querySelector(".services");

  const revealServices = () => {
    services.forEach((service, index) => {
      setTimeout(() => {
        service.classList.add('active');
      }, index * 200);
    });
  };

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
  };

  const handleScroll = () => {
    if (isInViewport(servicesSection)) {
      revealServices();
      window.removeEventListener("scroll", handleScroll); 
    }
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();
});
