function preload(){

}
function setup(){
canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}
function draw(){
    image(video,125,125,300,300);
fill(255,192,203);
stroke(0,0,0);
circle(30,30,50,);
fill(159,226,191);
stroke(0,0,0);
rect(20,50,20,400);
fill(255,192,203);
stroke(0,0,0);
circle(470,470,50,);
fill(159,226,191);
stroke(0,0,0);
rect(460,50,20,400);
fill(255,192,203);
stroke(0,0,0);
circle(30,470,50,);
fill(159,226,191);
stroke(0,0,0);
rect(50,460,400,20);
fill(255,192,203);
stroke(0,0,0);
circle(470,30,50,);
fill(159,226,191);
stroke(0,0,0);
rect(50,20,400,20);


}
function take_snapshot(){
    save('Janya.png');
}