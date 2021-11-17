(function () {
    const form = document.querySelector('.contactFormButton');
    form.addEventListener('click', () => {
        form.classList.add('contactFormButtonActive');
    });
}());



//function checkTel() {
//     const telNumber = document.querySelector('.tel');
//     if (telNumber <= 13) {
//         alert('не правильно указан номер');
//         return false;
//     }
// };

 