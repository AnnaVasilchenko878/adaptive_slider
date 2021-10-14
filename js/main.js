var slide = document.querySelectorAll('.slider-line img'),
btnNext = document.querySelector('.next'),
btnPrev = document.querySelector('.prev'),
sliderLine = document.querySelector('.slider-line'),
count = 0, //активный слайд
sliderWidth;

function init() {
    console.log('resize');
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * slide.length + 'px';
    slide.forEach(item => {
        item.style.width = sliderWidth + 'px';
        item.style.height = 'auto';
    })
    console.log(sliderWidth);
    rollSlider();
};
window.addEventListener('resize', init);
init();

btnNext.addEventListener('click', function(){
    count++;
    if(count>=slide.length) {
        count = 0;
    }
    rollSlider();
});

btnPrev.addEventListener('click', function(){
    count--;
    if(count<0) {
        count = 0;
    }
    rollSlider();
});

function rollSlider(){
sliderLine.style.transform = 'translate(-'+count*sliderWidth+'px)';
};