document.addEventListener('DOMContentLoaded', () => {
    const videoBtn = document.querySelector('.video-btn');
    const heroImage = document.querySelector('.hero-image');
    const video = document.getElementById('heroVideo');

    videoBtn.addEventListener('click', () => {
        heroImage.classList.add('is-playing');
        video.currentTime = 0;
        video.play();
    });

    video.addEventListener('ended', () => {
        heroImage.classList.remove('is-playing');
        video.currentTime = 0;
    });
});