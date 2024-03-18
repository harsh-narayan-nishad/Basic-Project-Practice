// Get the rotating disk element
const rotatingDisk = document.getElementById('rotatingDisk');

// Add event listeners for mouseenter and mouseleave
rotatingDisk.addEventListener('mouseenter', () => {
  rotatingDisk.style.animationPlayState = 'paused';
});

rotatingDisk.addEventListener('mouseleave', () => {
  rotatingDisk.style.animationPlayState = 'running';
});