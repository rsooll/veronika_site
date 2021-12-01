// бургер для видов помощи
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

//автоматические переходы слайда

//setInterval(nextSlide, 5000);





//слады при перетягивании мышью 



// перемешать блоки со статьями в 'Полезная информация'



// const Articles = document.querySelector('.Articles');

// let link = document.createElement('a');
// lawArticle.prepend(link);

// let ArticleIMG = document.createElement('img');
// ArticleIMG.className = 'ArticleIMG';
// ArticleIMG.alt = 'img';
// link.prepend(ArticleIMG);

// let lawArticleName = document.createElement('p');
// lawArticleName.className = 'lawArticleName';

// link.append(lawArticleName);


// let allImg = [{
//     link: link.href = '#' [{
//       ArticleIMG: ArticleIMG.src = '../assets/img/familyImg/img11.jpeg',
//       lawArticleName: lawArticleName.innerHTML = 'название статьи 1'
//     }]
//   },
//   {
//     link: link.href = '#' [{
//       ArticleIMG: ArticleIMG.src = '../assets/img/familyImg/img22.jpeg',
//       lawArticleName: lawArticleName.innerHTML = 'название статьи 2'
//     }]
//   }, {
//     link: link.href = '#' [{
//       ArticleIMG: ArticleIMG.src = '../assets/img/familyImg/img33.jpeg',
//       lawArticleName: lawArticleName.innerHTML = 'название статьи 3 '
//     }]
//   },
//   {
//     link: link.href = '#' [{
//       ArticleIMG: ArticleIMG.src = '../assets/img/familyImg/img44.jpeg',
//       lawArticleName: lawArticleName.innerHTML = 'название статьи 4'
//     }]
//   }, {
//     link: link.href = '#' [{
//       ArticleIMG: ArticleIMG.src = '../assets/img/familyImg/img55.jpeg',
//       lawArticleName: lawArticleName.innerHTML = 'название статьи 5'
//     }]
//   },
//   {
//     link: link.href = '#' [{
//       ArticleIMG: ArticleIMG.src = '../assets/img/familyImg/img44.jpeg',
//       lawArticleName: lawArticleName.innerHTML = 'название статьи 6'
//     }]
//   }
// ];


let allImg = ['img44', 'img55', 'img33'];

// function HelpUseful(arr, elem) { 
//   let out = '';
//   for (let i = 0; i < arr.length; i++) {
//     out += `<div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/familyImg/${arr[i]}.jpeg"></img> <p class="lawArticleName"><a> Блог и статьи</a></a></p> </div>`
//   }
//   document.querySelector(elem).innerHTML = out;
// }

function HelpUseful(arr, elem) {
  let out = '';
  for (let i = 0; i < arr.length; i++) {
    out += `<div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/familyImg/${arr[i]}.jpeg"></img> <p class="lawArticleName"><a> Блог и статьи</a></a></p> </div>`
  }
  document.querySelector(elem).innerHTML = out;
}
HelpUseful(allImg, '.Articles');



// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// shuffle(allImg);


// ! В РАЗРАБОТКЕ
(function () {
  const test = document.querySelector('.usefull');
  test.addEventListener('click', () => {
    alert('В разработке');
  });
})();