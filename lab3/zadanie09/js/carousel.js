const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);

const slide_width = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide, index) => {
    slide.style.left = slide_width * index + 'px';
}
slides.forEach(setSlidePosition);

const previous_button = document.querySelector(".previous-item");
const next_button = document.querySelector(".next-item");
const random_button = document.querySelector(".random-item")

const moveToSlide = (track, current_slide, target_slide) => {
    track.style.transform = 'translateX(-' + target_slide.style.left + ')';
    current_slide.classList.remove("current-slide");
    target_slide.classList.add("current-slide");
}

next_button.addEventListener("click", e => {
    const current_slide = document.querySelector(".current-slide");
    const next_slide = current_slide.nextElementSibling;
    moveToSlide(track, current_slide, next_slide);
});

previous_button.addEventListener("click", e => {
    const current_slide = document.querySelector(".current-slide");
    const previous_slide = current_slide.previousElementSibling;
    moveToSlide(track, current_slide, previous_slide);
});

random_button.addEventListener("click", e => {
    const current_slide = document.querySelector(".current-slide");
    const random_slide = slides[0];
    moveToSlide(track, current_slide, random_slide);
})