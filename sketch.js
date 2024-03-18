x = 0
y = 0
// set x and y to 0
let squareSize = 100;
//sets the base gride square size
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
            rect(i, j, 100, 100); 
            
            //main grid square 'for' loop
            push();


            let newi = i + random(5) + 5;
            let newj = j + random(5) + 5;
            rect(newi, newj, random(5) + 90, random(5) + 90,);

            let newi1 = i + random(10) + 5;
            let newj1 = j + random(10) + 5;
            rect(newi1, newj1, random(5) + 80, random(5) + 80);

            let newi2 = i + random(15) + 5;
            let newj2 = j + random(15) + 5;
            rect(newi2, newj2, random(5) + 70, random(5) + 70);

            let newi3 = i + random(20) + 5;
            let newj3 = j + random(20) + 5;
            rect(newi3, newj3, random(5) + 60, random(5) + 60);

            let newi4 = i + random(25) + 5;
            let newj4 = j + random(25) + 5;
            rect(newi4, newj4, random(5) + 50, random(5) + 50);

            //inner squares redefine 'i' and 'j' positioning. Random allows for different positioning everytime.

        };

    }

}




function draw() {




}