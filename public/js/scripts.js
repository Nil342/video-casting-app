const videoPlayer = document.getElementById('videoPlayer');

videoPlayer.addEventListener('play', () => {
    console.log('Video is playing');
});

videoPlayer.addEventListener('pause', () => {
    console.log('Video is paused');
});

// Additional JS features can be added here

