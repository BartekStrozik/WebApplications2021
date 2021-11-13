const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);

const slide_width = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide, index) => {
    slide.style.left = slide_width * index + 'px';
}
slides.forEach(setSlidePosition);

const previous_button = document.querySelector(".previous-item");
const next_button = document.querySelector(".next-item");
const random_button = document.querySelector(".random-item");

const hideShowArrows = (target_index) => {
    if(target_index === 0){
        previous_button.classList.add("is-hidden");
        next_button.classList.remove("is-hidden");
    } else if (target_index === slides.length - 1){
        previous_button.classList.remove("is-hidden");
        next_button.classList.add("is-hidden");
    } else {
        previous_button.classList.remove("is-hidden");
        next_button.classList.remove("is-hidden");
    }
}

const moveToSlide = (track, current_slide, target_slide) => {
    track.style.transform = 'translateX(-' + target_slide.style.left + ')';
    current_slide.classList.remove("current-slide");
    target_slide.classList.add("current-slide");
}

previous_button.addEventListener("click", e => {
    const current_slide = document.querySelector(".current-slide");
    const previous_slide = current_slide.previousElementSibling;
    moveToSlide(track, current_slide, previous_slide);

    const next_index = slides.findIndex(slide => slide === previous_slide);
    hideShowArrows(next_index);
});

next_button.addEventListener("click", e => {
    const current_slide = document.querySelector(".current-slide");
    const next_slide = current_slide.nextElementSibling;
    moveToSlide(track, current_slide, next_slide);

    const next_index = slides.findIndex(slide => slide === next_slide);
    hideShowArrows(next_index);
});

random_button.addEventListener("click", e => {
    const current_slide = document.querySelector(".current-slide");
    var random_number = Math.floor(Math.random() * 5);
    const random_slide = slides[random_number];
    moveToSlide(track, current_slide, random_slide);

    const next_index = slides.findIndex(slide => slide === random_slide);
    hideShowArrows(next_index);
});