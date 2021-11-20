// Открывает форму +
(function () {
    const form = document.querySelector('.contactFormButton');
    form.addEventListener('click', () => {
        form.classList.add('contactFormButtonActive');
    });
}());

// закрывает форму -
(function () {
    const formWrapper = document.querySelector('.contactFormButton');
    const closeForm = document.querySelector('.closeForm');

    closeForm.addEventListener('click', () => {
        formWrapper.classList.remove('contactFormButtonActive');
    });
}());


