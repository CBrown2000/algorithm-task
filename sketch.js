x = 0
y = 0
let squareSize = 100;
let dir = 1;

function setup() {


// set canvas size
    const canvasSize = 700;
    // const middle = 50;



    createCanvas(700, 700);



    background(220);
for (let i = 0; i < width; i += 100) {
    for (let j = 0; j < height; j += 100) {
        
    
      rect(i,j, 100, 100); //main grid square
      
      let newi = i + 10
      rect(i,j,95,95,)
      
      rect(newi,j,90,90)
      rect(i,j,85,85)
      rect(i,j,80,80)
      rect(i,j,75,75)
      rect(i,j,70,70)
      rect(i,j,65,65)
      rect(i,j,60,60)
    };






    
}

    let d = 100; // initial line is 100px

    //draw new line form end point that is rotated between 90 or 91 or 92 degrees
    //new line is always alittle shorter, minus px length

    //continue till square like spiral forms


    // rect(x,y,squareSize,squareSize) //draw rectangle

    // x += dir*squareSize;
    // y += dir*squareSize;
    
    //  // Change direction every 10 frames
    //  if (frameCount % 10 == 0) {
    //     dir *= -1;
    //     squareSize -= 5; // Decrease the size of the square
    //  }
      
    //  // Stop drawing after the square gets too small
    //  if (squareSize <= 0) {
    //     noLoop();
    //  }
    

}



// draw a grid using a nested for loop
function draw() {




}