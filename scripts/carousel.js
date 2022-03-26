const slides = document.getElementsByClassName('carousel__item');
//tegime massiivi, mille sees on meie pildid(nagu listid pythonis). slides on lihtsalt 'listi' nimi

const slidesTotal = slides.length;
const nextButton = document.querySelector('#carousel__button--next');
const prevButton = document.querySelector('#carousel__button--prev');

let slidePosition = 0;
//esimene element olgu null

nextButton.addEventListener('click', () => {
    for(let slide of slides){
        slide.classList.remove('carousel__item--visible');
    }

    if(slidePosition === slidesTotal - 1) {
        //kui näidarus slaid on viimane, siis
        slidePosition = 0;
    } else {
        slidePosition++;
        //siis selle koht on +1
    }

    slides[slidePosition].classList.add('carousel__item--visible');
});

prevButton.addEventListener('click', () => {
    for(let slide of slides){
        slide.classList.remove('carousel__item--visible');
    }

    if(slidePosition === 0) {
        slidePosition = slidesTotal - 1;
    } else {
        slidePosition--;
    }

    slides[slidePosition].classList.add('carousel__item--visible');
});