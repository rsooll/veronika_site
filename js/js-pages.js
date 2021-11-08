 
(function () {
    const burger = document.querySelector('.header_burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
    });
}());

// let arr = [2, 4, 1, 5, 33, 7, 3, 67];
// arr.sort(function (a, b) {
//     if (a === b)
//         return 0
//     if (a > b)
//         return 1
//     if (a < b)
//         return -1
// });
// console.log(arr);
// arr.toString();
// let add = 5,
//     coll = 6,
//     test = 9;

// function test4 (number) {
//     alert('coll');
// }
// console.log(coll);


// let year = new Date();
// console.log(year);