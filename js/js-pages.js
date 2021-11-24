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
  } else {
    index++;
    activeSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = sliderBlock.length - 1;
    activeSlide(index);
  } else {
    index--;
    activeSlide(index);
  }
};
nextSlider.addEventListener('click', nextSlide);
previousSlide.addEventListener('click', prevSlide);


// точки внизу изменение

const activeDotes = i => {
  for (dote of slideDot) {
    dote.classList.remove('slideDotActive');
  }
  sliderBlock[i].classList.add('slideDotActive');
};

const ClearDots = ind => {
  activeDotes(ind);
};

//клики по точкам

slideDot.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    activeSlide(index);
  })
})

//автоматические переходы слайда

setInterval(nextSlide, 2500);