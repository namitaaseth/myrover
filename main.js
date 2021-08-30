canvas = document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
rover_width = 100
rover_height = 90
rover_x = 10
rover_y = 10
array_mars =["mars.jpg","mars1.jpg","mars2.jpg","mars3.jpg"]
random=Math.random()*4;
console.log(random)
random_number=Math.floor(random)
console.log(random_number)
background_image = array_mars[random_number]
rover_image = "rover.png"
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;
}
function uploadbackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height); 
}
function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypressed=e.keyCode
    console.log(keypressed)
    if (keypressed==37){
        console.log("left")
        left();
    }
    if (keypressed==38){
        console.log("up")
        up();
    }
    if (keypressed==39){
        console.log("right")
        right();
    }
    if (keypressed==40){
        console.log("down")
        down();
    }
}
function right(){
    if (rover_x<=800){
    rover_x = rover_x+10;
    uploadbackground();
    uploadrover();
    console.log("When right arrow is preesed, x = "+rover_x+"y = "+rover_y)
    }
}
function left(){
    if (rover_x>=0){
    rover_x = rover_x-10;
    uploadbackground();
    uploadrover();
    console.log("When left arrow is preesed, x = "+rover_x+"y = "+rover_y)
    }
}
function down(){
    if (rover_y<=610){
    rover_y = rover_y+10;
    uploadbackground();
    uploadrover();
    console.log("When down arrow is preesed, x = "+rover_x+"y = "+rover_y)
    }
}
function up(){
    if (rover_y>=0){
    rover_y = rover_y-10;
    uploadbackground();
    uploadrover();
    console.log("When up arrow is preesed, x = "+rover_x+"y = "+rover_y)
    }
}