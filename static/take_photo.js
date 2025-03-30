function take_photo() {

    // Draw the current video frame onto the canvas
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the canvas to an image and display it
    const imageData = canvas.toDataURL('image/png');
    photo.src = imageData;
}



const photo = document.getElementById('photo');

const canvas = document.getElementById('canvas');

const video = document.getElementById('video');


const button = document.getElementById('snap');

// Capture photo on button click
button.addEventListener('click', take_photo);



