let testimonialsData = [];

function addTestimonial(name, description, testimonial) {
    testimonialsData.push({
        name: name,
        description: description,
        testimonial: testimonial
    });
}




document.querySelector('.landscape').addEventListener('mouseover', () => {
    document.querySelector('.category-image').setAttribute('src', image1)
});
document.querySelector('.model').addEventListener('mouseover', () => {
    document.querySelector('.category-image').setAttribute('src', image2)
});
document.querySelector('.product').addEventListener('mouseover', () => {
    document.querySelector('.category-image').setAttribute('src', image3)
});
document.querySelector('.fashion').addEventListener('mouseover', () => {
    document.querySelector('.category-image').setAttribute('src', image4)
});
document.querySelector('.corporate').addEventListener('mouseover', () => {
    document.querySelector('.category-image').setAttribute('src', image5)
});
document.querySelector('.architecture').addEventListener('mouseover', () => {
    document.querySelector('.category-image').setAttribute('src', image6)
});
document.querySelector('.wedding').addEventListener('mouseover', () => {
    document.querySelector('.category-image').setAttribute('src', image7)
});






var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  function change(element, value) {
    document.querySelector(`.${element}`).innerHTML = value;
  }