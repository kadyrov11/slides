const slides = document.querySelectorAll('.slide')
const slidesContainer = document.querySelector('.container')

slidesContainer.addEventListener('click', (e) => {
    
    const {classList} = e.target;
    if (classList.contains('active')) {
        classList.remove("active");
    }
    else if (!classList.contains('container') && !classList.contains("active")) {
        clearActiveClasses()
        classList.add("active");
    }
})

function clearActiveClasses() {
    slides.forEach(slide => slide.classList.remove('active'))
}

  