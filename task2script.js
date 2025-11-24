// Images ki list
let photos = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg"
];

let index = 0;

// Image tag ko pakda
let slide = document.getElementById("slide");

// Button listener
document.getElementById("next").addEventListener("click", nextPhoto);
document.getElementById("prev").addEventListener("click", prevPhoto);

// Next image function
function nextPhoto() {
    index++;
    if (index >= photos.length) index = 0;
    slide.src = photos[index];
}

// Previous image function
function prevPhoto() {
    index--;
    if (index < 0) index = photos.length - 1;
    slide.src = photos[index];
}

// Auto slide every 3 seconds
let autoPlay = setInterval(nextPhoto, 3000);

// ---- BONUS: Hover par pause ----
slide.addEventListener("mouseover", function () {
    clearInterval(autoPlay);      // Slideshow stop
});

slide.addEventListener("mouseout", function () {
    autoPlay = setInterval(nextPhoto, 3000); // Slideshow start again
});