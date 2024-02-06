x = 0
y = 0
let squareSize = 100;
let dir = 1;

function setup() {


    // set canvas size
    const canvasSize = 700;
    // const middle = 50;



    createCanvas(700, 700);
    let rotationAngles = [];



    background(220);
    for (let i = 0; i < width; i += 100) {
        for (let j = 0; j < height; j += 100) {
            rect(i, j, 100, 100); //main grid square
            push();


            let newi = i + 5;
            let newj = j + 5;
            rect(newi, newj, 90, 90,);
            
            let newi1 = i + 10;
            let newj1 = j + 10;
            rect(newi1, newj1, 80, 80);

            let newi2 = i + 15;
            let newj2 = j +15;
            rect(newi2, newj2, 70, 70);

            let newi3 = i + 20;
            let newj3 = j + 20;
            rect(newi3, newj3, 60, 60);

            let newi4 = i + 25;
            let newj4 = j + 25;
            rect(newi4, newj4, 50, 50);

            


        };







    }

    let d = 100; // initial line is 100px



}




function draw() {




}