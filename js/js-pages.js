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

setInterval(nextSlide, 5000);

//слады при перетягивании мышью 

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchStart, false);

const logBlock = document.querySelector('log-block');

let x1 = null;
let y1 = null;

function handleTouchStart(event) {

  const firstTouch = event.touches[0];
  console.log(firstTouch);
  x1 = firstTouch.clientX;
  y1 = firstTouch.clientY;
}

function handleTouchMove(event) {
  if (!x1 || !y1) {
    return false;
  }

  let x2 = event.touches[0].clientX;
  let y2 = event.touches[0].clientY;

  let xDiff = x2 - x1;
  let yDiff = y2 - y1;

  //проверка смещения 

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      logBlock.textContent = ('right');
    } else {
      logBlock.textContent = ('left');
    }
  } else {
    if (yDiff > 0) {
      logBlock.textContent = ('down');
    } else {
      logBlock.textContent = ('top');
    }
  }


  x1 = 0;
  y1 = 0;
}