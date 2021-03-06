// бургер для видов помощи (на главное переделан более просто)

(function () {
  const burger = document.querySelector(".header_burger");
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger_active");
  });
})();

// СЛАЙДЕР

// пременные и константы 

const previousSlide = document.querySelector('.previousSlide');
const nextSlider = document.querySelector('.nextSlide');
const sliderBlock = document.querySelectorAll('.sliderBlock');
const slideDot = document.querySelectorAll('.slideDot');

let index = 0;

// клики по кнопкам

const activeSlide = i => {
  for (slide of sliderBlock) {
    slide.classList.remove('sliderBlockVisible');
  }
  sliderBlock[i].classList.add('sliderBlockVisible');
};


const nextSlide = () => {
  if (index == sliderBlock.length - 1) {
    index = 0;
    activeSlide(index);
    activeDotes(index);
    // ClearDots(index);
  } else {
    index++;
    activeSlide(index);
    activeDotes(index);
    // ClearDots(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = sliderBlock.length - 1;
    activeSlide(index);
    activeDotes(index);
    // ClearDots(index);
  } else {
    index--;
    activeSlide(index);
    activeDotes(index);
    // ClearDots(index);
  }
};

// const ClearDots = ind => {
// activeSlide(ind);
//   activeDotes(ind); 
// };

nextSlider.addEventListener('click', nextSlide);
previousSlide.addEventListener('click', prevSlide);


// точки внизу изменение

const activeDotes = n => {
  for (dote of slideDot) {
    dote.classList.remove('slideDotActive');
  }
  slideDot[n].classList.add('slideDotActive');
};



//клики по точкам

slideDot.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    activeSlide(index);
    activeDotes(index);
    // или ClearDots(index);
  })
});

// автоматические переходы слайда

setInterval(nextSlide, 11000);


//слады при перетягивании мышью 



// перемешать блоки со статьями в 'Полезная информация'



//МАССИВ С ФОТО
// let allImg = ['img44', 'img55', 'img33'];

// function HelpUseful(arr, elem) { 
//   let out = '';
//   for (let i = 0; i < arr.length; i++) {
//     out += `<div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/familyImg/${arr[i]}.jpeg"></img> <p class="lawArticleName"><a> Блог и статьи</a></p> </div>`
//   }
//   document.querySelector(elem).innerHTML = out;
// }

//МАССИВ С ФОТО И ССЫЛКАМИ И Т.Д. можно добавлять еще, все доабвится на все страницы help

function helpArticles() {
  //ДУБЛИРОВАТЬ В js-pages.js и  blog-js.js и  js-articles.js
  let allImg = [
    '<a href="../articles/ДОПОЛНИТЕЛЬНЫЕ РАСХОДЫ НА СОДЕРЖАНИЕ РЕБЕНКА.html"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/art1.webp" alt="рисунок, сайт адвоката Гродно"></img> <p class="lawArticleName">  Дополнительные расходы на содержание ребенка</p> </div></a>',
    '<a href="../articles/Приобретение права собственности на безнадзорных животных.html"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/art2.webp" alt="рисунок, сайт адвоката Гродно"></img> <p class="lawArticleName">  Приобретение права собственности на безнадзорных животных</p> </div></a>',
    '<a href="../articles/3-Право собственности на доходы, полученные после расторжения брака.html"  alt="ArticleIMG"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/3-blog.webp" alt="рисунок, сайт адвоката Гродно"></img> <p class="lawArticleName">  Право собственности на доходы, полученные после расторжения брака от использования имущества</p> </div></a>',
    '<a href="../articles/4-Лишение родительских прав.html"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/4-blog.webp" alt="рисунок, сайт адвоката Гродно"></img> <p class="lawArticleName">  Лишение родительских прав</p> </div></a>',
    '<a href="../articles/5-Порядок взыскания алиментов в пользу нетрудоспособного родителя.html"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/5-blog.webp" alt="рисунок, сайт адвоката Гродно"></img> <p class="lawArticleName"> Порядок взыскания алиментов в пользу нетрудоспособного родителя</p> </div></a>',
    '<a href="../articles/6-Порядок расторжения брака.html"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/6-blog.webp" alt="рисунок, сайт адвоката Гродно"></img> <p class="lawArticleName"> Порядок расторжения брака</p> </div></a>',
    '<a href="../articles/7-Своевременное обращение за оказанием юридической помощи.html"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/7-blog.webp" alt="рисунок, сайт адвоката Гродно"></img> <p class="lawArticleName">Своевременное обращение за оказанием юридической помощи</p> </div></a>',
    '<a href="../articles/8-Определение места жительства несовершеннолетнего ребенка.html"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/8-blog.webp" alt="рисунок, сайт адвоката Гродно"></img> <p class="lawArticleName">Определение места жительства несовершеннолетнего ребенка</p> </div></a>',
    '<a href="../articles/9-Порядок раздела имущества, совместно нажитого супругами в период брака.html"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/9-blog.webp" alt="рисунок, сайт адвоката Гродно"></img> <p class="lawArticleName">Порядок раздела имущества, совместно нажитого супругами в период брака</p> </div></a>',
    '<a href="../articles/10-Рекомендации по заключению договора займа.html"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/10-blog.webp" alt="рисунок, сайт адвоката Гродно"></img> <p class="lawArticleName">Рекомендации по заключению договора займа</p> </div></a>'
];

  //смешать массив, что бы выводить разные фото
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(allImg);

  function HelpUseful(arr, elem) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
      out += allImg[i];
    }
    document.querySelector(elem).innerHTML = out;
  }
  HelpUseful(allImg, '.Articles');

};

helpArticles();




// ! В РАЗРАБОТКЕ
// (function () {
//   const test = document.querySelector('.usefull');
//   test.addEventListener('click', () => {
//     alert('В разработке');
//   });
// })();