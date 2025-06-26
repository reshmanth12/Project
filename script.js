const video = document.getElementById('scroll-video');

// Wait for the video metadata so we know its duration
video.addEventListener('loadedmetadata', () => {
  const duration = video.duration;

  window.addEventListener('scroll', () => {
    const scrollMax = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = window.scrollY / scrollMax;
    video.currentTime = scrollFraction * duration;
  });
});
