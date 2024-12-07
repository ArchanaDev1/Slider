//Image array used to contain a images 
let arrayImage = ['https://picsum.photos/id/235/800/300',
    'https://picsum.photos/id/236/800/300',
    'https://picsum.photos/id/237/800/300',
    'https://picsum.photos/id/238/800/300',
    'https://picsum.photos/id/239/800/300']

let MainId = document.getElementById('Main')
arrayImage.map((imagePath) => {
    let image = document.createElement(`img`)
    image.src = imagePath
    image.className = 'slide'
    MainId.appendChild(image)
    return (image)

})


const slides = document.querySelectorAll(".slide");
let counter = 0;
const totalSlides = slides.length;

// Position each slide horizontally side by side
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

// Function to go to the previous slide
const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = totalSlides - 1; // Loop back to the last slide
    }

    slideImage();
};

// Function to go to the next slide
const goNext = () => {
    counter++;
    slideImage();
};

// Function to slide images continuously
const slideImage = () => {
    slides.forEach((slide) => {

        // Use modulo operator to cycle through images continuously
        slide.style.transform = `translateX(-${(counter % totalSlides) * 100}%)`;

    });
};
//This function is used to automatic slide in every 3 seconds
let autoSlideButton = document.getElementById('autoSlide')
let buttonId = null
const autoSlide = () => {
    if (autoSlideButton.innerHTML == 'AutoSlide') {
        autoSlideButton.innerHTML = 'StopAutoSlide'
    }
    else {
        autoSlideButton.innerHTML = 'AutoSlide'
    }
    if (buttonId == null) {
        buttonId = setInterval(() => {
            console.log(autoSlideButton.innerHTML)
            goNext()
        }, 6000)
    }
    else {
        clearInterval(buttonId)
        buttonId = null;
    }
}



