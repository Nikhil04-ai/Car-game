// Create the audio element
var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop = true; // Enable looping

// Add an event listener for user interaction
document.addEventListener('click', function () {
    audio.play()
        .then(() => {
            console.log('Audio is playing!');
        })
        .catch(error => {
            console.error('Error while playing audio:', error);
        });
});
