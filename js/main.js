
document.querySelector('.landscape').addEventListener('mouseover', () => {
    document.querySelector('.category-image').setAttribute('src', 'https://www.dpreview.com/files/p/articles/7961724650/General-Mt-Donna-Buang-Myrtle-Beech-Tree-Victoria.jpeg')
});
document.querySelector('.model').addEventListener('mouseover', () => {
    document.querySelector('.category-image').setAttribute('src', 'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?w=740&t=st=1702725913~exp=1702726513~hmac=ed605aa3e86302da94ede2862ca65e9cb87da2096272342ac4fe0e654882f8f4')
});
document.querySelector('.product').addEventListener('mouseover', () => {
    document.querySelector('.category-image').setAttribute('src', 'https://expertphotography.b-cdn.net/wp-content/uploads/2018/04/product-photography-tips-2-1.jpg')
});
document.querySelector('.fashion').addEventListener('mouseover', () => {
    document.querySelector('.category-image').setAttribute('src', 'https://i.pinimg.com/564x/55/61/3e/55613ed05b45b5ad900e550ebfb87fe1.jpg')
});
document.querySelector('.corporate').addEventListener('mouseover', () => {
    document.querySelector('.category-image').setAttribute('src', 'https://i.pinimg.com/736x/f3/78/4a/f3784adc704a1bc9bcb2e494cd39caee.jpg')
});
document.querySelector('.architecture').addEventListener('mouseover', () => {
    document.querySelector('.category-image').setAttribute('src', 'https://eavf3cou74b.exactdn.com/wp-content/uploads/2021/10/04145346/architectural-photography-tutorial-2.jpg?strip=all&lossy=1&ssl=1')
});
document.querySelector('.wedding').addEventListener('mouseover', () => {
    document.querySelector('.category-image').setAttribute('src', 'https://www.brides.com/thmb/vxGFGGhcMQjg211eXLaTrXHgbhc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-ea8c12ac4c2946738c7d6c3d9c45692f.jpg')
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