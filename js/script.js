// бургер меню

(function () {
    const burger = document.querySelector('.header_burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
    });
}());

//кнопка вверх

// const buttonToTop = document.querySelector('.buttonToTop');

// function toTop() {
//     if (window.scrollY(100)) {
//         buttonToTop.classList.add('buttonToTopActive')
//     } else {
//         buttonToTop.classList.remove('buttonToTopActive')
//     }
// }





// ! В РАЗРАБОТКЕ
(function () {
    const test3 = document.querySelector('.contactFormButton');
    test3.addEventListener('click', () => {
        alert('В разработке. Воспользуйтесь другими видами связи с адвокатом');
    });
})();