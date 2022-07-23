let videoSource = new Array();
videoSource[0] = '22.mp4';
videoSource[1] = '23';
let i =0; 
const videoCount = videoSource.length;
const element = document.getElementById("videoPlayer");

function videoPlay(videoNum) {
    element.setAttribute("src", videoSource[videoNum]);
    element.autoplay = true;
    element.load();
}
document.getElementById('videoPlayer').addEventListener('ended', myHandler, false);

videoPlay(0); 
ensureVideoPlays();

function myHandler() {
    i++;
    if (i == videoCount) {
        i = 0;
        videoPlay(i);
    } else {
        videoPlay(i);
    }
}
function ensureVideoPlays() {
    const video = document.getElementById('videoPlayer');

    if(!video) return;
    
    const promise = video.play();
    if(promise !== undefined){
        promise.then(() => {
            // Autoplay started
        }).catch(error => {
            video.muted = true;
            video.play();
        });
    }
}