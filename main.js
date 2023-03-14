video = '';
status = '';

function preload(){
   video = createVideo('video.mp4');
   video.hide();
}


function setup(){
   canvas =  createCanvas(360,360);
   canvas.center();


}

function draw(){
   image(video,0,0, 360,360);

 
}

function start(){
   coco =   ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('Status').innerHTML = 'Status: detecting objects';
}


function modelLoaded(){
   console.log('Model has ben loaded')
   status =  true;
   video.loop();
   video.speed(1);
   video.volume(1);
}