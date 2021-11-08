(function () {
    const burger = document.querySelector('.header_burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
    });
}());