// var canvas = document.getElementById("lightboard");
// var ctx = canvas.getContext("2d");
// var colors = {
//   pink :"#ff00ff",
//   lightBlue :"#00ffff",
//   green :"#00ff00",
//   yellow :"#ffff00",
//   red :"#ff0000",
//   darkBlue :"#0000ff",
//   purple :"#7920FF",
//   magentaPink : "#FD0987",
//   orange :"#FF3300"
// };


// var small = {
//   rows: 32,
//   columns: 12,
//   side: 50
// };

// var medium = {
//   rows: 16,
//   columns: 6,
//   side: 100
// };

// var large = {
//   rows: 8,
//   columns: 3,
//   side: 200
// };

// var image = new Image();
// image.src = "../../../Downloads/dot-mask-80.png";

// var lightsOn = function(color, size) {
//   var pattern = ctx.createPattern(image, 'repeat');
//   ctx.clearRect(0,0,250,600);
//   for (var i=0; i < size.rows; i++) {
//     for (var col=0; col < size.columns; col++) {
//       var x = i * size.side;
//       var y = col * size.side;

//       if ((i+col)%2 !== 0) {


//         // ctx.fillStyle = "black";
//         ctx.shadowBlur = 20;
//         ctx.shadowColor = color;
//         ctx.strokeWidth = 3;
//         ctx.strokeStyle = 'white';
//         ctx.rect(x, y, size.side, size.side);
//         ctx.strokeRect(x, y, size.side, size.side);
//         ctx.fillStyle = pattern;

//       }
//       else {
//         // ctx.fillStyle = "black";
//       }

//     }
//   }
//   ctx.fill();
// };


// var button1 = document.getElementById("preset1");
// button1.onclick = function() {
//   lightsOn('cyan', small);
// }

// var button2 = document.getElementById("preset2");
// button2.onclick = function() {
//   lightsOn(colors.pink, medium);
// }

// var button3 = document.getElementById("preset3");
// button3.onclick = function() {
//   lightsOn(colors.green, medium);
// }

// var button4 = document.getElementById("preset4");
// button4.onclick = function() {
//   lightsOn(colors.yellow, small);
// }

// var button5 = document.getElementById("preset5");
// button5.onclick = function() {
//   lightsOn(colors.red, large);
// }

// var changeColors = function() {
//   var r = 0;
//   var g = 0;
//   var b = 0;
//   var up = true;
//   setInterval( function() {
//     if (up) {
//       r += 5;
//       g += 15;
//       b += 105;
//       up = b > 250 ? false : true;
//     }
//     else {
//       r -= 5;
//       g -= 15;
//       b -= 105;
//       up = b < 250 ? true : false;
//     }

//     ctx.shadowColor = "rgb(" + r + "," + g + "," + b + ")";
//     ctx.fill();
//   }, 100);
// };

// var button6 = document.getElementById("preset6");
// button6.onclick = function() {
//   changeColors();
// }


