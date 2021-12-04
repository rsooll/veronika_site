// бургер меню

(function () {
    const burger = document.querySelector('.header_burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
    });
}());

// СМЕШАТЬ ВНИЗУ СТАТЬИ
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