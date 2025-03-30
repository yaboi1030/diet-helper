
//function for officially showing the cam veiw to the user
function show_the_cam(stream) {

    // Get the video element
    //assumes we have created this element on html side
    const videoElement_onuserend = document.getElementById('video');

    // Attach the camera stream to the video element
    videoElement_onuserend.srcObject = stream;
}


//function for handling errors during execution of image display
function handle_error(error) {
    //print out the error
    console.error('Error accessing the camera: ', error);
}



// Function to start the camera
function startCamera() {

    //to access the cam we have to reference an object that essentially represents the user's computer (os etc.) first

    //this is done through the NAVIGATOR object!!

    mediaDevicesObject = navigator.mediaDevices //media devices object


    there_are_media_devices = mediaDevicesObject.getUserMedia // check if there are media devices


    
    // Check if the browser supports media devices
    if (there_are_media_devices) {  
        
        device_access_request_details = { video: true }
        
        // Request the camera stream
        we_got_permission = mediaDevicesObject.getUserMedia(device_access_request_details)


        we_are_showing_the_cam = we_got_permission.then(show_the_cam)
            
        we_are_showing_the_cam.catch(handle_error);
    } 
    
    else {
        alert('Your browser does not support camera access.');
    }
}



function resizeVideo() {
    const video = document.getElementById('video');
    video.style.width = `${window.innerWidth * 0.8}px`;
    video.style.height = `${window.innerHeight * 0.6}px`;
  }
  
  window.addEventListener("resize", resizeVideo);
  resizeVideo(); // Run on load

// Start the camera when the page loads
window.onload = startCamera;

