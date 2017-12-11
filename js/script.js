//grab all slides 
const slides = document.querySelectorAll('.slideshow__slide');
const slideArray = Array.from(slides);

//grab buttons
const btns = document.querySelectorAll('.incre-decre-btns__btn');

//counter for index
let idx = 0;

//functionality

function moveSlide(){
    //remove class of current from image being shown
    slideArray[idx].classList.remove('slideshow__slide--current');
    
    if(this.classList.contains('incre-decre-btns__btn--decrement')){
        idx--
        if(idx < 0){
            idx = slideArray.length - 1;
        }
        slideArray[idx].classList.add('slideshow__slide--current');
    } 
    
    if(this.classList.contains('incre-decre-btns__btn--increment')){
        idx++
        if(idx > slideArray.length - 1){
            idx = 0;
        }
        slideArray[idx].classList.add('slideshow__slide--current');
    }
}

//listeners
btns.forEach(btn => btn.addEventListener('click', moveSlide));
