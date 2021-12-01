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
  let allImg = [
    '<a href="#"  alt="ArticleIMG"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/img11.jpeg"></img> <p class="lawArticleName">  Блог и статьи</p> </div></a>',
    '<a href="#"  alt="ArticleIMG"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/img22.jpeg"></img> <p class="lawArticleName">  Блог и статьи</p> </div></a>',
    '<a href="#"  alt="ArticleIMG"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/img33.jpeg"></img> <p class="lawArticleName">  Блог и статьи</p> </div></a>',
    '<a href="#"  alt="ArticleIMG"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/img44.jpeg"></img> <p class="lawArticleName">  Блог и статьи</p> </div></a>',
    '<a href="#"  alt="ArticleIMG"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/img55.jpeg"></img> <p class="lawArticleName">  Блог и статьи</p> </div></a>'
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
(function () {
  const test = document.querySelector('.usefull');
  test.addEventListener('click', () => {
    alert('В разработке');
  });
})();