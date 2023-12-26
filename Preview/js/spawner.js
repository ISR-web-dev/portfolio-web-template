

for(let i = 0; i < testimonialsData.length; i++) {
    document.querySelector('.swiper-wrapper'). innerHTML += `<div class="swiper-slide">
    <p>${testimonialsData[i].testimonial}</p>
    <h1>${testimonialsData[i].name}</h1>
    <h2>${testimonialsData[i].description}</h2>
  </div>`
}

document.querySelector('.work-img-1').setAttribute('src', workImg1);
document.querySelector('.work-img-2').setAttribute('src', workImg2);
document.querySelector('.work-img-3').setAttribute('src', workImg3);
document.querySelector('.work-img-4').setAttribute('src', workImg4);

