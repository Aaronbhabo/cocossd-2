status ="";
img ="";
objects = [];
function setup(){
    canvas = createCanvas(600,450);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting the Objects";
    
}


function preload(){
    img = loadImage("dog_cat.jpg");
}

function modelloaded(){
    console.log("Model is Loaded");
    status=true;
    objectDetector.detect(img, gotResult);
}



function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }

    
}


function draw(){
    image(img,0,0,600,450);
    //fill("#FF0000");
    //text("Dog",160,67)
    //noFill();
    //stroke("#FF0000");
    //rect(150,70,190,350);
   //text("Cat",290,90);
    //rect(280,90,250,350);

    if(status != ""){
        for (i = 0;i < objects.length; i++){
            document.getElementById("status").innerHTML="Status : Object Detected";
            fill("blue");
            percent = floor( objects[i].confidence*100);

            text(objects[i].label + "," +percent+"%",objects[i].x,objects[i].y);

            noFill();
            stroke("green");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }


}


