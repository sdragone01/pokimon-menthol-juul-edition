let inside = document.querySelector("#inside");
let inside1C = inside.getContext('2d');


//#region MUSIC CONTROLLS 

// document.querySelector('#mainM').play();
// function startScreen() {
//     document.querySelector('#mainM').pause();
//     let hidStart = document.querySelector('.startScreen');
//     hidStart.setAttribute('id', 'startScreenHide');
//     document.querySelector('#mainGame').play();

// }
//#endregion

//#region PLAYER ANIMATION  

const dude2 = new Image();

dude2.src = './Assets/again3.png';
dude2.onload = loadImages;
let cols = 4;
let rows = 4;
let spriteWidth = dude2.width / cols;
let spriteHeight = dude2.height / rows;
let totalFrames = 4;
let currentFrame = 0;
let srcX = 0;
let srcY = 0;
let framesDrawn = 0;
let dudeHor = 430;
let dudeVert = 200;



function animate() {
    inside1C.clearRect(0, 0, inside.width, inside.height);
    requestAnimationFrame(animate);
    currentFrame = currentFrame % totalFrames;
    srcX = currentFrame * spriteWidth;

    inside1C.drawImage(dude2, srcX, srcY, spriteWidth, spriteHeight, dudeHor, dudeVert, spriteWidth, spriteHeight);
    inside1C.restore();

}
animate();

let numOfImages = 4;
function loadImages() {
    if (--numOfImages > 0) return;
    animate();
}

//#endregion

//#region DOOR VARIABLES

class Object {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        this.alive = true;

    }
    render() {
        inside1C.fillStyle = this.color;
        inside1C.fillRect(this.x, this.y, this.width, this.height,)
    }

}

//FIRST ROOM//
let dude1;
let door1;


//SECOND ROOM//
let door2;
let door3;

//OUTSIDE//
let grass;
let door4;
let cave;
let pokeCenter;

//CAVE//
let cave2;
let cave3;
let caveFight;

//OUTSIDE 2//

let cave4;
let gym;


//GYM//

let gym2;
let gymFight;

//#endregion

//#region BOUNDARY ARRAYS

//boundaries//

const room1Arr = [

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const room2Arr = [

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]
];


const outside1Arr = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]

];

const caveArr = [

    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]

];

const outside2Arr = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

];





//boundary class for creating x and y coordinate based on true or false value of array//

class Boundary {
    static width = 32
    static height = 32
    constructor({ position }) { //position function to be called later//
        this.position = position;
        this.width = 32;
        this.height = 32;
    }
    draw() {
        inside1C.fillStyle = 'red';
        inside1C.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}



//room one//
const inside1B = [] //new array

room1Arr.forEach((row, i) => { //iterate and define row index//
    row.forEach((symbol, j) => { // iterate and define index within current row//
        if (symbol === 1)  // if row index contains 1 //
            inside1B.push(new Boundary({ //create object from boundary class//
                position: { // create coordinates from multiplying block width and height by its index location//
                    x: j * 32,
                    y: i * 32,
                }
            }))
    })
});


//room two//
const inside2B = []

room2Arr.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1)
            inside2B.push(new Boundary({
                position: {
                    x: j * 32,
                    y: i * 32,
                }
            }))
    })
});


//outside 1//
const outside1B = []

outside1Arr.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1)
            outside1B.push(new Boundary({
                position: {
                    x: j * 32,
                    y: i * 32,
                }
            }))
    })
});


//cave//
const caveB = []

caveArr.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1)
            caveB.push(new Boundary({
                position: {
                    x: j * 32,
                    y: i * 32,
                }
            }))
    })
});


//outside 2//
const outside2B = []

outside2Arr.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1)
            outside2B.push(new Boundary({
                position: {
                    x: j * 32,
                    y: i * 32,
                }
            }))
    })
});




//#endregion

//#region ROOM OBJECTS DEFINED

//FIRST ROOM//
dude1 = new Object(430, 200, "red", 32, 32);
door1 = new Object(0, 320, "transparent", 30, 20);

//SECOND ROOM//
door2 = new Object(170, 620, "transparent", 40, 20);
door3 = new Object(360, 260, "transparent", 40, 20);

//OUTSIDE//
door4 = new Object(130, 220, "transparent", 40, 20);
cave = new Object(450, 90, "transparent", 30, 20);
grass = new Object(330, 260, "transparent", 180, 20);
pokeCenter = new Object(320, 480, "transparent", 30, 20);

//CAVE//
cave2 = new Object(430, 0, "transparent", 80, 20);
cave3 = new Object(140, 400, "transparent", 80, 20);
caveFight = new Object(10, 250, "transparent", 610, 20)

//OUTSIDE2//
cave4 = new Object(450, 90, "transparent", 30, 20);
gym = new Object(130, 320, "transparent", 30, 20);


//GYM//
gym2 = new Object(220, 630, "transparent", 160, 20);
gymFight = new Object(310, 100, "transparent", 20, 20);




setInterval(gameLoop, 80);

//#endregion

//#region MOVEMENT HANDLER

const keys = {
    w: {
        pressed:false
    },
    s: {
        pressed:false
    },
    a: {
        pressed:false
    },
    d: {
        pressed:false
    },
}


function movementHandler(e) {
    let lastKey= '';
    let colliding = false;
    let colliding2=false;
    let colliding3=false;
    let colliding4=false;
    let colliding5=false;

    for (i =0; i< inside1B.length; i++){
 

        if  (dude1.x + dude1.width > inside1B[i].position.x &&
            dude1.x < inside1B[i].position.x + 32 &&
            dude1.y + dude1.height > inside1B[i].position.y &&
            dude1.y < inside1B[i].position.y +32){
        
            colliding = true;
        } 
    }
    for (i =0; i< inside2B.length; i++){
 

        if  (dude1.x + dude1.width > inside2B[i].position.x &&
            dude1.x < inside2B[i].position.x + 32 &&
            dude1.y + dude1.height > inside2B[i].position.y &&
            dude1.y < inside2B[i].position.y +32){
        
            colliding2 = true;
        } 
    }
    for (i =0; i< outside1B.length; i++){
 

        if  (dude1.x + dude1.width > outside1B[i].position.x &&
            dude1.x < outside1B[i].position.x + 32 &&
            dude1.y + dude1.height > outside1B[i].position.y &&
            dude1.y < outside1B[i].position.y +32){
        
            colliding3 = true;
        } 
    }
    for (i =0; i< caveB.length; i++){
 

        if  (dude1.x + dude1.width > caveB[i].position.x &&
            dude1.x < caveB[i].position.x + 32 &&
            dude1.y + dude1.height > caveB[i].position.y &&
            dude1.y < caveB[i].position.y +32){
        
            colliding4 = true;
        } 
    }
    for (i =0; i< outside2B.length; i++){
 

        if  (dude1.x + dude1.width > outside2B[i].position.x &&
            dude1.x < outside2B[i].position.x + 32 &&
            dude1.y + dude1.height > outside2B[i].position.y &&
            dude1.y < outside2B[i].position.y +32){
        
            colliding5 = true;
        } 
    }

    switch (e.key) {
        case "w":
            keys.w.pressed = true
            lastKey = 'w'

            break


        case "s":
            keys.s.pressed = true
            lastKey = 's'
     
            break

        case "a":
            keys.a.pressed = true
            lastKey = 'a'
      
            break


        case "d":
            keys.d.pressed = true
            lastKey = 'd'

            break
    }
    //#region Door alive movement conditions

if (door1.alive){
    move1()
}
if (door2.alive){
    move2()
}
if (door4.alive){
    move3()
}
if (cave3.alive){
    move4()
}
if (gym.alive){
    move5()
}
//#endregion

//#region inside 1 move controll
    

function move1 () {
    if (keys.w.pressed && lastKey === 'w' && colliding === false){
        
        dude1.y -= 10;
        dudeVert -= 10;
        srcY = 0 * spriteHeight;
        srcX = framesDrawn++;
        if (framesDrawn >= 0) {
            currentFrame++;
            framesDrawn = 0;
        } 
        
    }
    else if (keys.s.pressed &&  lastKey === 's' && colliding === false){
        dude1.y += 10;
        dudeVert += 10;
        srcY = 3 * spriteHeight;
        srcX = framesDrawn++;
        if (framesDrawn >= 0) {
            currentFrame++;
            framesDrawn = 0;
        }

    }

   else if (keys.a.pressed && lastKey === 'a' && colliding === false) {
        dude1.x -= 10;
        dudeHor -= 10;
        srcY = 2 * spriteHeight;
        srcX = framesDrawn++;
        if (framesDrawn >= 0) {
            currentFrame++;
            framesDrawn = 0;
        }
    }

   else if (keys.d.pressed && lastKey === 'd' && colliding === false){
        dude1.x += 10;
        dudeHor += 10;
        srcY = 1 * spriteHeight;
        srcX = framesDrawn++;
        if (framesDrawn >= 0) {
            currentFrame++;
            framesDrawn = 0;
        }

    }

    else if (colliding=true && keys.w.pressed ){
        colliding = false;
        dude1.y += 10;
        dudeVert += 10;
        
    }
    else if (colliding=true && keys.s.pressed){
        
        dude1.y -= 10;
        dudeVert -= 10;
        colliding = false;
    }
    else if (colliding=true && keys.a.pressed){
        
        dude1.x += 10;
        dudeHor += 10;
        colliding = false;
    }
    else if (colliding=true && keys.d.pressed){
        
        dude1.x -= 10;
        dudeHor -= 10;
        colliding = false;
    }

    }
//#endregion

   //#region inside 2 move controlls 
function move2 () {
    if (keys.w.pressed && lastKey === 'w' && colliding2 === false){
        
        dude1.y -= 10;
        dudeVert -= 10;
        srcY = 0 * spriteHeight;
        srcX = framesDrawn++;
        if (framesDrawn >= 0) {
            currentFrame++;
            framesDrawn = 0;
        } 
        
    }
    else if (keys.s.pressed &&  lastKey === 's' && colliding2 === false){
        dude1.y += 10;
        dudeVert += 10;
        srcY = 3 * spriteHeight;
        srcX = framesDrawn++;
        if (framesDrawn >= 0) {
            currentFrame++;
            framesDrawn = 0;
        }

    }

   else if (keys.a.pressed && lastKey === 'a' && colliding2 === false) {
        dude1.x -= 10;
        dudeHor -= 10;
        srcY = 2 * spriteHeight;
        srcX = framesDrawn++;
        if (framesDrawn >= 0) {
            currentFrame++;
            framesDrawn = 0;
        }
    }

   else if (keys.d.pressed && lastKey === 'd' && colliding2 === false){
        dude1.x += 10;
        dudeHor += 10;
        srcY = 1 * spriteHeight;
        srcX = framesDrawn++;
        if (framesDrawn >= 0) {
            currentFrame++;
            framesDrawn = 0;
        }

    }

    else if (colliding2=true && keys.w.pressed ){
        colliding2 = false;
        dude1.y += 10;
        dudeVert += 10;
        
    }
    else if (colliding2=true && keys.s.pressed){
        
        dude1.y -= 10;
        dudeVert -= 10;
        colliding2 = false;
    }
    else if (colliding2=true && keys.a.pressed){
        
        dude1.x += 10;
        dudeHor += 10;
        colliding2 = false;
    }
    else if (colliding2=true && keys.d.pressed){
        
        dude1.x -= 10;
        dudeHor -= 10;
        colliding2 = false;
    }

    }
    //#endregion

   //#region  
function move3 () {
    if (keys.w.pressed && lastKey === 'w' && colliding3 === false){
        
        dude1.y -= 10;
        dudeVert -= 10;
        srcY = 0 * spriteHeight;
        srcX = framesDrawn++;
        if (framesDrawn >= 0) {
            currentFrame++;
            framesDrawn = 0;
        } 
        
    }
    else if (keys.s.pressed &&  lastKey === 's' && colliding3 === false){
        dude1.y += 10;
        dudeVert += 10;
        srcY = 3 * spriteHeight;
        srcX = framesDrawn++;
        if (framesDrawn >= 0) {
            currentFrame++;
            framesDrawn = 0;
        }

    }

   else if (keys.a.pressed && lastKey === 'a' && colliding3 === false) {
        dude1.x -= 10;
        dudeHor -= 10;
        srcY = 2 * spriteHeight;
        srcX = framesDrawn++;
        if (framesDrawn >= 0) {
            currentFrame++;
            framesDrawn = 0;
        }
    }

   else if (keys.d.pressed && lastKey === 'd' && colliding3 === false){
        dude1.x += 10;
        dudeHor += 10;
        srcY = 1 * spriteHeight;
        srcX = framesDrawn++;
        if (framesDrawn >= 0) {
            currentFrame++;
            framesDrawn = 0;
        }

    }

    else if (colliding3=true && keys.w.pressed ){
        colliding3 = false;
        dude1.y += 10;
        dudeVert += 10;
        
    }
    else if (colliding3=true && keys.s.pressed){
        
        dude1.y -= 10;
        dudeVert -= 10;
        colliding3 = false;
    }
    else if (colliding3=true && keys.a.pressed){
        
        dude1.x += 10;
        dudeHor += 10;
        colliding3 = false;
    }
    else if (colliding3=true && keys.d.pressed){
        
        dude1.x -= 10;
        dudeHor -= 10;
        colliding3 = false;
    }

    }
    //#endregion
   //#region  
function move4 () {
    if (keys.w.pressed && lastKey === 'w' && colliding4 === false){
        
        dude1.y -= 10;
        dudeVert -= 10;
        srcY = 0 * spriteHeight;
        srcX = framesDrawn++;
        if (framesDrawn >= 0) {
            currentFrame++;
            framesDrawn = 0;
        } 
        
    }
    else if (keys.s.pressed &&  lastKey === 's' && colliding4 === false){
        dude1.y += 10;
        dudeVert += 10;
        srcY = 3 * spriteHeight;
        srcX = framesDrawn++;
        if (framesDrawn >= 0) {
            currentFrame++;
            framesDrawn = 0;
        }

    }

   else if (keys.a.pressed && lastKey === 'a' && colliding4 === false) {
        dude1.x -= 10;
        dudeHor -= 10;
        srcY = 2 * spriteHeight;
        srcX = framesDrawn++;
        if (framesDrawn >= 0) {
            currentFrame++;
            framesDrawn = 0;
        }
    }

   else if (keys.d.pressed && lastKey === 'd' && colliding4 === false){
        dude1.x += 10;
        dudeHor += 10;
        srcY = 1 * spriteHeight;
        srcX = framesDrawn++;
        if (framesDrawn >= 0) {
            currentFrame++;
            framesDrawn = 0;
        }

    }

    else if (colliding4=true && keys.w.pressed ){
        colliding4 = false;
        dude1.y += 10;
        dudeVert += 10;
        
    }
    else if (colliding4=true && keys.s.pressed){
        
        dude1.y -= 10;
        dudeVert -= 10;
        colliding4 = false;
    }
    else if (colliding4=true && keys.a.pressed){
        
        dude1.x += 10;
        dudeHor += 10;
        colliding4 = false;
    }
    else if (colliding4=true && keys.d.pressed){
        
        dude1.x -= 10;
        dudeHor -= 10;
        colliding4 = false;
    }

    }
    //#endregion
    
}

document.addEventListener("keydown", movementHandler)

function movementHandler2(e) {
    switch (e.key) {
        case "w":
            keys.w.pressed = false
            console.log('nay')
            break

        case "s":
            keys.s.pressed = false
            break

        case "a":
            keys.a.pressed = false
            break


        case "d":
            keys.d.pressed = false
            break
    }
    }

document.addEventListener("keyup", movementHandler2)







//#endregion

//#region GAME LOOP

function gameLoop() {
    inside1C.clearRect(0, 0, inside.width, inside.height);

    dude1.render();

    if (door1.alive) {
        door1.render();
        let doors = doorAlive();
        let hit = nextRoom(dude1, door1);
        inside1B.forEach(boundary => {
            boundary.draw();
        })

       
        
        


    } if (door2.alive) {
        door2.render();
        let hit = goOutside(dude1, door2);
        inside2B.forEach(boundary => {
            boundary.draw();
        })
      

    } if (door3.alive) {
        door3.render();
        let hit = previousRoom(dude1, door3);

    } if (door4.alive) {
        door4.render();
        let hit = previousRoom2(dude1, door4);

    } if (cave.alive) {
        cave.render();
        let hit = enterCave(dude1, cave);
        outside1B.forEach(boundary => {
            boundary.draw();
        })

    } if (grass.alive) {
        grass.render();
        let hit = grassFight(dude1, grass);

    } if (pokeCenter.alive) {
        pokeCenter.render();
        let hit = healPokemon(dude1, pokeCenter);

    } if (cave2.alive) {
        cave2.render();
        let hit = previousRoom3(dude1, cave2);
        caveB.forEach(boundary => {
            boundary.draw();
        })

    } if (cave3.alive) {
        cave3.render();
        let hit = leaveCave(dude1, cave3);

    } if (caveFight.alive) {
        caveFight.render();
        let hit = cFight(dude1, caveFight);

    } if (cave4.alive) {
        cave4.render();
        let hit = previousRoom4(dude1, cave4);
        outside2B.forEach(boundary => {
            boundary.draw();
        })

    } if (gym.alive) {
        gym.render();
        let hit = enterGym(dude1, gym);

    } if (gym2.alive) {
        gym2.render();
        let hit = previousRoom5(dude1, gym2);


    } if (gymFight.alive) {
        gymFight.render();
        let hit = gFight(dude1, gymFight);


    }

}

//#endregion

//#region POKE CENTER LOGIC

function healPokemon(p1, p2) {
    let enterRoom =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (enterRoom) {
        return pokeHealed();



    } else {
        return false;
    }

    console.log("fight started");


}

function pokeHealed() {
    let health = Number(pHealth.textContent);
    let newHealth = 100;
    pHealth.textContent = newHealth;
    alert("Your Pokemon Were Healed!");
    dude1.x = 320;
    dude1.y = 520;
    dudeHor = 320;
    dudeVert = 510;

}
function healPokemon2(p1, p2) {
    let enterRoom =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (enterRoom) {
        return pokeHealed2();



    } else {
        return false;
    }

    console.log("fight started");


}

function pokeHealed2() {
    let health = Number(pHealth.textContent);
    let newHealth = 100;
    pHealth.textContent = newHealth;
    alert("Your Pokemon Were Healed!");
    dude1.x = 380;
    dude1.y = 490;
    dudeHor = 380;
    dudeVert = 480;


}

//#endregion

//#region STARTING DOOR CONDITIONS
function doorAlive() {
    door1.alive = true;
    door2.alive = false;
    door3.alive = false;
    grass.alive = false;
    door4.alive = false;
    cave.alive = false;
    pokeCenter.alive = false;
    cave2.alive = false;
    cave3.alive = false;
    caveFight.alive = false;
    cave4.alive = false;
    gym.alive = false;
    pokeC = false;
    gym2.alive = false;
    gymFight.alive = false;


}

//#endregion

//#region ROOM TRANSITION LOGIC

//FIRST ROOM TO SECOND ROOM//
function nextRoom(p1, p2) {

    let enterRoom =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (enterRoom) {
        return hideRoom();



    } else {
        return false;
    }

    console.log("fight started");



}

function hideRoom() {
    door1.alive = false;
    door2.alive = true;
    door3.alive = true;
    grass.alive = false;
    door4.alive = false;
    cave.alive = false;
    pokeCenter.alive = false;
    cave2.alive = false;
    cave3.alive = false;
    caveFight.alive = false;
    cave4.alive = false;
    gym.alive = false;
    pokeC = false;
    gym2.alive = false;
    gymFight.alive = false;


    let roomTrans = document.querySelector('#inside');
    roomTrans.setAttribute("id", "inside2");
    dude1.x = 370;
    dude1.y = 330;
    dudeHor = 370;
    dudeVert = 320;



}
//LEAVE HOUSE//
function goOutside(p1, p2) {

    let goOut =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit



    if (goOut) {
        return leaveHouse();



    } else {
        return false;
    }





}

function leaveHouse() {
    door1.alive = false;
    door2.alive = false;
    door3.alive = false;
    grass.alive = true;
    door4.alive = true;
    cave.alive = true;
    pokeCenter.alive = true;
    cave2.alive = false;
    cave3.alive = false;
    caveFight.alive = false;
    cave4.alive = false;
    gym.alive = false;
    pokeC = false;
    gym2.alive = false;
    gymFight.alive = false;


    let roomTrans = document.querySelector('#inside2');
    roomTrans.setAttribute("id", "outside");
    dude1.x = 130;
    dude1.y = 270;
    dudeHor = 130;
    dudeVert = 260;



}
//SECOND ROOM TO FIRST ROOM//
function previousRoom(p1, p2) {

    let goBack =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (goBack) {
        return lastRoom();



    } else {
        return false;
    }





}

function lastRoom() {
    door1.alive = true;
    door2.alive = false;
    door3.alive = false;
    grass.alive = false;
    door4.alive = false;
    cave.alive = false;
    pokeCenter.alive = false;
    cave2.alive = false;
    cave3.alive = false;
    caveFight.alive = false;
    cave4.alive = false;
    gym.alive = false;
    pokeC = false;
    gym2.alive = false;
    gymFight.alive = false;



    let roomTrans = document.querySelector('#inside2');
    roomTrans.setAttribute("id", "inside");
    dude1.x = 0;
    dude1.y = 390;
    dudeHor = 0;
    dudeVert = 380;



}
//GO BACK INSIDE HOUSE FROM OUTSIDE//
function previousRoom2(p1, p2) {

    let goBack =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (goBack) {
        return lastRoom2();



    } else {
        return false;
    }





}

function lastRoom2() {
    door1.alive = false;
    door2.alive = true;
    door3.alive = true;
    grass.alive = false;
    door4.alive = false;
    cave.alive = false;
    pokeCenter.alive = false;
    cave2.alive = false;
    cave3.alive = false;
    caveFight.alive = false;
    cave4.alive = false;
    gym.alive = false;
    pokeC = false;
    gym2.alive = false;
    gymFight.alive = false;


    let roomTrans2 = document.querySelector('#outside');
    roomTrans2.setAttribute('id', "inside2");

    dude1.x = 170;
    dude1.y = 590;
    dudeHor = 170;
    dudeVert = 580;


}
//GO FROM OUTSIDE TO CAVE
function enterCave(p1, p2) {

    let goInCave =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (goInCave) {
        return insideCave();



    } else {
        return false;
    }





}

function insideCave() {
    door1.alive = false;
    door2.alive = false;
    door3.alive = false;
    grass.alive = false;
    door4.alive = false;
    cave.alive = false;
    pokeCenter.alive = false;
    cave2.alive = true;
    cave3.alive = true;
    caveFight.alive = true;
    cave4.alive = false;
    gym.alive = false;
    pokeC = false;
    gym2.alive = false;
    gymFight.alive = false;



    let caveTrans = document.querySelector('#outside');
    caveTrans.setAttribute("id", "cave");
    dude1.x = 460;
    dude1.y = 60;
    dudeHor = 460;
    dudeVert = 50;




}
//GO FROM INSIDE CAVE TO FISRT OUTSIDE//
function previousRoom3(p1, p2) {

    let goBack2 =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (goBack2) {
        return lastRoom3();



    } else {
        return false;
    }





}

function lastRoom3() {
    door1.alive = false;
    door2.alive = false;
    door3.alive = false;
    grass.alive = false;
    door4.alive = true;
    cave.alive = true;
    pokeCenter.alive = true;
    cave2.alive = false;
    cave3.alive = false;
    caveFight.alive = false;
    cave4.alive = false;
    gym.alive = false;
    pokeC = false;
    gym2.alive = false;
    gymFight.alive = false;


    let roomTrans3 = document.querySelector('#cave');
    roomTrans3.setAttribute("id", "outside");
    dude1.x = 450;
    dude1.y = 140;
    dudeHor = 450;
    dudeVert = 130;

}

function leaveCave(p1, p2) {

    let leaveCave =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (leaveCave) {
        return outsideCave();



    } else {
        return false;
    }





}
//GO FROM CAVE TO OUTSIDE 2//
function outsideCave() {
    door1.alive = false;
    door2.alive = false;
    door3.alive = false;
    grass.alive = false;
    door4.alive = false;
    cave.alive = false;
    pokeCenter.alive = false;
    cave2.alive = false;
    cave3.alive = false;
    caveFight.alive = false;
    cave4.alive = true;
    gym.alive = true;
    pokeC = true;
    gym2.alive = false;
    gymFight.alive = false;

    let roomTrans3 = document.querySelector('#cave');
    roomTrans3.setAttribute("id", "outside2");
    dude1.x = 450;
    dude1.y = 130;
    dudeHor = 450;
    dudeVert = 120;


}


//GO FROM OUTSIDE 2 BACK INTO CAVE//
function previousRoom4(p1, p2) {

    let goBack =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (goBack) {
        return lastRoom4();



    } else {
        return false;
    }





}

function lastRoom4() {
    door1.alive = false;
    door2.alive = false;
    door3.alive = false;
    grass.alive = false;
    door4.alive = false;
    cave.alive = false;
    pokeCenter.alive = false;
    cave2.alive = true;
    cave3.alive = true;
    caveFight.alive = false;
    cave4.alive = false;
    gym.alive = false;
    pokeC = false;
    gym2.alive = false;
    gymFight.alive = false;


    let roomTrans3 = document.querySelector('#outside2');
    roomTrans3.setAttribute("id", "cave");
    dude1.x = 170;
    dude1.y = 330;
    dudeHor = 170;
    dudeVert = 320;

}

//GO FROM OUTSIDE2 INTO GYM//
function enterGym(p1, p2) {

    let goBack =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (goBack) {
        return inGym();



    } else {
        return false;
    }





}

function inGym() {

    door1.alive = false;
    door2.alive = false;
    door3.alive = false;
    grass.alive = false;
    door4.alive = false;
    cave.alive = false;
    pokeCenter.alive = false;
    cave2.alive = false;
    cave3.alive = false;
    caveFight.alive = false;
    cave4.alive = false;
    gym.alive = false;
    pokeC = false;
    gym2.alive = true;
    gymFight.alive = true;


    let health = Number(pHealth.textContent);
    let newHealth = 100;
    pHealth.textContent = newHealth;
    alert("Your Pokemon Were Healed!");


    let roomTrans3 = document.querySelector('#outside2');
    roomTrans3.setAttribute("id", "gym");
    dude1.x = 300;
    dude1.y = 600;
    dudeHor = 300;
    dudeVert = 590;

}

//GO FROM INSIDE GYM TO OUTSIDE 2//
function previousRoom5(p1, p2) {

    let goBack =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (goBack) {
        return lastRoom5();



    } else {
        return false;
    }





}

function lastRoom5() {

    door1.alive = false;
    door2.alive = false;
    door3.alive = false;
    grass.alive = false;
    door4.alive = false;
    cave.alive = false;
    pokeCenter.alive = false;
    cave2.alive = false;
    cave3.alive = false;
    caveFight.alive = false;
    cave4.alive = true;
    gym.alive = true;
    pokeC = true;
    gym2.alive = false;
    gymFight.alive = false;


    let roomTrans4 = document.querySelector('#gym');
    roomTrans4.setAttribute("id", "outside2");
    dude1.x = 130;
    dude1.y = 360;
    dudeHor = 130;
    dudeVert = 350;

}

//#endregion

//#region FIGHT SEQUENCE LOGIC


//FIGHT SEQUENCES//

let pHealth = document.querySelector('#pHealthNum');
let cHealth = document.querySelector('#cHealthNum');
let c2Health = document.querySelector('#c2HealthNum');
let c3Health = document.querySelector('#c3HealthNum');
let attackBtn = document.querySelector('#attack1');
let healBtn = document.querySelector('#heal');
let fightScreen1 = document.querySelector('.fightSequence');



// player hit values//
const arr = [50]; //player fight buttons
const arrCrit = [20, 20, 20, 0, 0]; //player fight buttons


//computer hit values//
const arr2 = [20, 10, 5, 5, 5, 0, 0]; //comp1 fight buttons
const arr3 = [20, 10, 10, 10, 5, 5, 0, 0]; //comp2 fight buttons
const arr4 = [20, 20, 10, 10, 5, 5]; //comp2 fight buttons

//grass fight//
function attack() {

    let attackPoints = Number(cHealth.textContent);
    let randomArr = arr[Math.floor(Math.random() * arr.length)];
    let newHealth = attackPoints - randomArr;
    cHealth.textContent = newHealth;

    if (randomArr === 20) {
        alert("Charmander used Flamethrower- It was very effective!");
    } else if (randomArr === 10) {
        alert("Charmander used Fireball - It was effective!");
    } else if (randomArr === 5) {
        alert("Charmander used Scratch - It wasn't very effective!");
    } else {
        alert("Charmander used Flamethrower - It was a miss!");
    }
    if (newHealth <= 0) {
        grass.alive = false;
        let fightScreen1 = document.querySelector(".fight");
        fightScreen1.setAttribute("id", "fightSequenceHide");
        cHealth.textContent = 100;
        dude1.render();
        inside1C.drawImage(dude2, srcX, srcY, spriteWidth, spriteHeight, dudeHor, dudeVert, spriteWidth, spriteHeight);
        document.querySelector('#mainGame').play();
        document.querySelector('#fightM').pause();



    }

}

// CAVE FIGHT//

function attack2() {

    let attackPoints = Number(c2Health.textContent);
    let randomArr = arr[Math.floor(Math.random() * arr.length)];
    let newHealth = attackPoints - randomArr;
    c2Health.textContent = newHealth;

    if (randomArr === 20) {
        alert("Charmander used Fireball- It was very effective!");
    } else if (randomArr === 10) {
        alert("Charmander used Fireball- It was effective!");
    } else if (randomArr === 5) {
        alert("Charmander used Fireball- It wasn't very effective!");
    } else {
        alert("Charmander used Fireball- It was a miss!");
    }
    if (newHealth <= 0) {
        caveFight.alive = false;
        let fightScreen1 = document.querySelector(".fight");
        fightScreen1.setAttribute("id", "fightSequenceHide");
        c2Health.textContent = 100;
        dude1.render();
        inside1C.drawImage(dude2, srcX, srcY, spriteWidth, spriteHeight, dudeHor, dudeVert, spriteWidth, spriteHeight);
        document.querySelector('#mainGame').play();
        document.querySelector('#fightM').pause();

    }

}

//gym Fight!//

function attack3() {

    let attackPoints = Number(c3Health.textContent);
    let randomArr = arr[Math.floor(Math.random() * arr.length)];
    let newHealth = attackPoints - randomArr;
    c3Health.textContent = newHealth;

    if (randomArr === 20) {
        alert("Charmander used Flamethrower - It was very effective!");
    } else if (randomArr === 10) {
        alert("Charmander used Fireball - It was effective!");
    } else if (randomArr === 5) {
        alert("Charmander used Scratch - It wasn't very effective!");
    } else {
        alert("Charmander used Fireball - It was a miss!");
    }
    if (newHealth <= 0) {
        gymFight.alive = false;
        let fightScreen1 = document.querySelector(".fight");
        fightScreen1.setAttribute("id", "fightSequenceHide");
        let winScreen = document.querySelector('.youwin');
        winScreen.setAttribute('id', 'youwin');
        c3Health.textContent = 100;
        fightMusic.pause();
        music.play();
        dude1.render();
        inside1C.drawImage(dude2, srcX, srcY, spriteWidth, spriteHeight, dudeHor, dudeVert, spriteWidth, spriteHeight);
        document.querySelector('#mainGame').play();
        document.querySelector('#fightM').pause();

    }

}

// grass fight //
function returnAttack() {
    setTimeout(function () {
        let attackPoints = Number(pHealth.textContent);
        let randomArr = arr2[Math.floor(Math.random() * arr.length)];
        let newHealth = attackPoints - randomArr;
        pHealth.textContent = newHealth;

        if (randomArr === 20) {
            alert("Growlthie used SCRATCH - It was very effective!");
        } else if (randomArr === 10) {
            alert("Growlthie used SCRATCH - It was effective!");
        } else if (randomArr === 5) {
            alert("Growlthie used SCRATCH - It wasn't very effective!");
        } else {
            alert("Growlthie used SCRATCH - It was a miss!");
        }
        console.log(newHealth);
    }, 3000);

}

// cave fight //
function returnAttack2() {
    setTimeout(function () {
        let attackPoints = Number(pHealth.textContent);
        let randomArr = arr3[Math.floor(Math.random() * arr.length)];
        let newHealth = attackPoints - randomArr;
        pHealth.textContent = newHealth;

        if (randomArr === 20) {
            alert("Machop used Avalanche - It was very effective!");
        } else if (randomArr === 10) {
            alert("Machop used Rock Smash - It was effective!");
        } else if (randomArr === 5) {
            alert("Machop used Punch - It wasn't very effective!");
        } else {
            alert("Machop used Punch - It was a miss!");
        }
        console.log(newHealth);
    }, 3000);

}
// gym fight //
function returnAttack3() {
    setTimeout(function () {
        let attackPoints = Number(pHealth.textContent);
        let randomArr = arr4[Math.floor(Math.random() * arr.length)];
        let newHealth = attackPoints - randomArr;
        pHealth.textContent = newHealth;

        if (randomArr === 20) {
            alert("Articuno used Hyper Beam - It was very effective!");
        } else if (randomArr === 10) {
            alert("Articuno used Frost Bite - It was effective!");
        } else if (randomArr === 5) {
            alert("Articuno used Scratch - It wasn't very effective!");
        } else {
            alert("Articuno used Punch - It was a miss!");
        }
        console.log(newHealth);
    }, 3000);

}



function heal() {




    let healPoints = Number(pHealth.textContent);
    let newHealth = healPoints + 20;
    pHealth.textContent = newHealth;


    if (newHealth === 0) {


    }

}

function grassFight(p1, p2) {

    let fight =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (fight) {

        return startFight1();






    } else {
        return false;
    }





}

function startFight1() {
    document.querySelector('#mainGame').pause();
    document.querySelector('#fightM').play();


    let fightBoard = document.querySelector('.fight');
    fightBoard.setAttribute("id", "fightSequence");


}



//cave fight//
function cFight(p1, p2) {

    let fight =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (fight) {
        return startFight2();



    } else {
        return false;
    }





}

function startFight2() {

    document.querySelector('#mainGame').pause();
    document.querySelector('#fightM').play();

    let caveFightBoard = document.querySelector('.fight');
    caveFightBoard.setAttribute("id", "fightSequence");

    let pokeOpp = document.querySelector('.growlthie');
    pokeOpp.setAttribute('id', 'growlthieHide');

    let pokeOpp2 = document.querySelector('.machop');
    pokeOpp2.setAttribute('id', 'machop');





}
//gym fight//
function gFight(p1, p2) {

    let fight =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (fight) {
        return startFight3();



    } else {
        return false;
    }





}

function startFight3() {

    document.querySelector('#mainGame').pause();
    document.querySelector('#fightM').play();

    let caveFightBoard = document.querySelector('.fight');
    caveFightBoard.setAttribute("id", "fightSequence");

    let pokeOpp2 = document.querySelector('.machop');
    pokeOpp2.setAttribute('id', 'machopHide');

    let pokeOpp3 = document.querySelector('.articuno');
    pokeOpp3.setAttribute('id', 'articuno');





}

//#endregion

//#region BOUNDARY LOGIC



function insideBoundary(p1) {

let colliding = false;

for (i =0; i< inside1B.length; i++){
 

if  (p1.x + p1.width > inside1B[i].position.x &&
    p1.x < inside1B[i].position.x + 32 &&
    p1.y + p1.height > inside1B[i].position.y &&
    p1.y < inside1B[i].position.y +32){

    colliding = true;
} 


   
};

}


function boundaryCollision (){

    console.log('hit');


}

//#endregion