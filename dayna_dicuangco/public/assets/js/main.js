// add autoplay and pagination to Swiper slide 
const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
        pagination: {
        el: ".swiper-pagination-hero",
        clickable: true,
    },
});

// Change pagination bullet colors
const paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');

paginationBullets.forEach(function(bullet) {
    bullet.style.backgroundColor = '#FFF'; 
});

// Change active pagination bullet color
const activeBullet = document.querySelector('.swiper-pagination-bullet-active');

activeBullet.style.backgroundColor = '#FFF'; 

// Change options of lightbox
// Find all images in the container
var images = document.querySelectorAll('.sp-imgs-container a[data-lightbox]');

// Loop through each image
images.forEach(function (image, index) {
    // Set different album labels for each image
    var albumLabel;
    switch (index) {
        case 0:
            albumLabel = "$880";
            break;
        case 1:
            albumLabel = "$2100";
            break;
        case 2:
            albumLabel = "$520";
            break;
        default:
            albumLabel = "Default Label";
    }

    // Update Lightbox configuration for this image
    image.setAttribute('data-title', image.getAttribute('data-title') + '<br><span class="album-label">' + albumLabel + '</span>');
});
lightbox.init();

const myText = new SplitType('.gsap-text')

ScrollTrigger.create({
    trigger: ".gsap-text", // The element that triggers the animation
    start: "top 80%", // When to start the animation (80% from the top of the viewport)
    end: "bottom 20%", // When to end the animation (20% from the bottom of the viewport)
    animation: gsap.from(".gsap-text", { opacity: 0, y: 50, duration: 1 }), // The GSAP animation to play
    toggleActions: "play none none reverse" // How to play the animation (play once, then reverse when scrolling up)
});
