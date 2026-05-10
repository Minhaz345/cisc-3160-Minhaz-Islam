// Get canvas and context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


// background, a plain light blue color
ctx.fillStyle = "lightblue"; // sky color
ctx.fillRect(0, 0, 600, 400);


// floor, just plain green 
ctx.fillStyle = "green";
ctx.fillRect(0, 300, 600, 100);


//yellow sun 
ctx.beginPath();
ctx.arc(500, 80, 40, 0, Math.PI * 2); // circle
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();


// part of the house
ctx.fillStyle = "brown";
ctx.fillRect(200, 200, 200, 100);


// roof
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(300, 140);
ctx.lineTo(400, 200);
ctx.closePath();
ctx.fillStyle = "darkred";
ctx.fill();
ctx.stroke();


// door, a black rectangle shaspe
ctx.fillStyle = "black";
ctx.fillRect(280, 240, 40, 60);


// windows
ctx.fillStyle = "lightyellow";
ctx.fillRect(220, 220, 40, 40);
ctx.fillRect(340, 220, 40, 40);


// text
ctx.font = "15px Arial";
ctx.fillStyle = "black";
ctx.fillText("My House ☀️", 200, 30);


// grass and for loop
ctx.save(); // save original position

for (let i = 0; i < 20; i++) {
    ctx.beginPath();

    // move drawing position each time
    ctx.translate(30, 0);

    ctx.moveTo(0, 300);
    ctx.lineTo(5, 280);
    ctx.lineTo(10, 300);

    ctx.strokeStyle = "darkgreen";
    ctx.stroke();
}

ctx.restore(); // return to original position
