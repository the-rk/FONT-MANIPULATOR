leftwristX = 0;
rightwristX =0;
difference = 0;

function setup() {

    canvas= createCanvas(550,500);
    canvas.position(560,150);

    video=createCapture(VIDEO);
    video.size(550,550);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);

    }
    function draw(){
        background("lightorange");
        textSize(difference);
        fill("blue");
        text("Rito", 20,200);
    }
    function modelLoaded(){
        console.log("Posenet is intialised");
    }
    function gotPoses(results){
            if(results.length> 0 ){
            console.log(results);
            leftwristX= results[0].pose.leftWrist.x;
            rightwristX = results[0].pose.rightWrist.x;
            difference =floor(leftwristX - rightwristX);
            console.log("leftwristx = "+ leftwristX+ " rightwristx = "+ rightwristX + " and the font size = "+difference);
            document.getElementById("value").innerHTML = "The font size is "+ difference;
            }
    }