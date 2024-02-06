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


            rect(i, j, 100, 100); //main grid square

            let newi = i + 5
            let newj = j + 5

            rect(newi, newj, 90, 90,)

            let newi1 = i + 10
            let newj1 = j + 10
            rect(newi1, newj1, 80, 80)

            let newi2 = i + 15
            let newj2 = j +15
            rect(newi2, newj2, 70, 70)

            let newi3 = i + 20
            let newj3 = j + 20
            rect(newi3, newj3, 60, 60)

            let newi4 = i + 25
            let newj4 = j + 25
            rect(newi4, newj4, 50, 50)

            


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