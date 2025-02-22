document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-inner img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;

    // Function to update active image
    const updateCarousel = () => {
        images.forEach((img, index) => {
            img.classList.remove("active");
            if (index === currentIndex) {
                img.classList.add("active");
            }
        });
    };

    // Event listener for previous button
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    // Event listener for next button
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    }, 5000);

    // Initialize first image as active
    updateCarousel();
});
