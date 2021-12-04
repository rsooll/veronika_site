// бургер меню

(function () {
    const burger = document.querySelector('.header_burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
    });
}());

// СМЕШАТЬ ВНИЗУ СТАТЬИ//ДУБЛИРОВАТЬ В js-pages.js и  blog-js.js js-articles.js    let allImg =
function helpArticles() {
    //ДУБЛИРОВАТЬ В js-pages.js и  blog-js.js и  js-articles.js
    let allImg = [
        '<a href="../articles/ДОПОЛНИТЕЛЬНЫЕ РАСХОДЫ НА СОДЕРЖАНИЕ РЕБЕНКА.html"  alt="ArticleIMG"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/art1.webp"></img> <p class="lawArticleName">  Дополнительные расходы на содержание ребенка</p> </div></a>',
        '<a href="../articles/Приобретение права собственности на безнадзорных животных.html"  alt="ArticleIMG"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/art2.webp"></img> <p class="lawArticleName">  Приобретение права собственности на безнадзорных животных</p> </div></a>',
        '<a href="../articles/3-Право собственности на доходы, полученные после расторжения брака.html"  alt="ArticleIMG"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/3-blog.webp"></img> <p class="lawArticleName">  Право собственности на доходы, полученные после расторжения брака от использования имущества</p> </div></a>',
        '<a href="../articles/4-Лишение родительских прав.html"  alt="ArticleIMG"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/4-blog.webp"></img> <p class="lawArticleName">  Лишение родительских прав</p> </div></a>',
        '<a href="../articles/5-Порядок взыскания алиментов в пользу нетрудоспособного родителя.html"  alt="ArticleIMG"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/5-blog.webp"></img> <p class="lawArticleName"> Порядок взыскания алиментов в пользу нетрудоспособного родителя</p> </div></a>',
        '<a href="../articles/6-Порядок расторжения брака.html"  alt="ArticleIMG"><div class="lawArticle"> <img class="ArticleIMG" src="../assets/img/articles/6-blog.webp"></img> <p class="lawArticleName"> Порядок расторжения брака</p> </div></a>'
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


// дата публикации
document.querySelectorAll('.date').innerHTML = document.lastModified;