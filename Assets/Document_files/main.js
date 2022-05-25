// window.addEventListener("DOMContentLoaded", function (e){
//     const runGame = setInterval(gameLoop, 120)


// });
// console.log("hello");

const map = document.querySelector('canvas');
const ctx = map.getContext("2d");
console.log(map)

map.setAttribute('width', '800');
map.setAttribute('height', '1120');

ctx.width = map.width;
ctx.height = map.height;

// const image = new Image()
// image.src = './shreks-castle.bmp'


// image.onload = () => {
//     ctx.drawImage(image,0,0)
// };

const gravity = 0.9;
   
    
   


class Crawler {
    constructor(x, y, color, width, height){
        this.x = x;
        this.y = y;
        this.color = color;
        this.height = height;
        this.width = width; 
        this.alive = true;
        this.jumping = false;
        this.velocity = {
            x: 0,
            y: 0,
        }
    }

    render() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
      
        
    }
    
    update() {
        
        this.render()
        this.y += this.velocity.y;
        this.x += this.velocity.x
        if(this.y + this.height + this.velocity.y <= map.height)
        this.velocity.y += gravity;
        else this.velocity.y = 0

        
    }



    
}
    class Barrel {
        constructor(x, y,){
            this.x = x;
            this.y = y;
            this.color = "yellow";
            this.height = 32;
            this.width = 32; 
            this.alive = true;
            this.velocity = {
                x: 0,
                y: 0,
            }
        }
    
       
        update() {

            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height)
            
            this.y += this.velocity.y;
            this.x += this.velocity.x
            if(this.y + this.height + this.velocity.y <= map.height)
            this.velocity.y += gravity;
            else this.velocity.y = 0
    
            
        }
    

}
class Platform {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.color = "rgba(0, 0, 255, 0.5)" ;
        this.width = width;
        this.height = height;
        
    }
    draw() {
    
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height,);
     
    }
    updatePlatformForPlayer(){
        if (lord.y + lord.height <= this.y && lord.y + lord.height + lord.velocity.y >= this.y && lord.x + lord.width >= this.x && lord.x <= this.x + this.width){
            lord.velocity.y = 0
        }
    }
    // updatePlatformForBarrel(){
    //     if (lordFart.y + lordFart.height <= this.y && lordFart.y + lordFart.height + lordFart.velocity.y >= this.y && lordFart.x + lordFart.width >= this.x && lordFart.x <= this.x + this.width){
    //         lordFart.velocity.y = 0
    //     }
    // }
    // updatePlatformForBarrel2(){
    //     if (barrel2.y + barrel2.height <= this.y && barrel2.y + barrel2.height + barrel2.velocity.y >= this.y && barrel2.x + barrel2.width >= this.x && barrel2.x <= this.x + this.width){
    //         barrel2.velocity.y = 0
    //     }
    // }
    updatePlatformForBarrel3(){
        if (barrel3.y + barrel3.height <= this.y && barrel3.y + barrel3.height + barrel3.velocity.y >= this.y && barrel3.x + barrel3.width >= this.x && barrel3.x <= this.x + this.width){
            barrel3.velocity.y = 0
        }
    }
    updatePlatformForBarrel4(){
        if (barrel4.y + barrel4.height <= this.y && barrel4.y + barrel4.height + barrel4.velocity.y >= this.y && barrel4.x + barrel4.width >= this.x && barrel4.x <= this.x + this.width){
            barrel4.velocity.y = 0
        }
    }
    updatePlatformForBarrel5(){
        if (barrel5.y + barrel5.height <= this.y && barrel5.y + barrel5.height + barrel5.velocity.y >= this.y && barrel5.x + barrel5.width >= this.x && barrel5.x <= this.x + this.width){
            barrel5.velocity.y = 0
        }
    }
    updatePlatformForBarrel6(){
        if (barrel6.y + barrel6.height <= this.y && barrel6.y + barrel6.height + barrel6.velocity.y >= this.y && barrel6.x + barrel6.width >= this.x && barrel6.x <= this.x + this.width){
            barrel6.velocity.y = 0
        }
    }

}


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
       ctx.fillStyle = this.color;
       ctx.fillRect(this.x, this.y, this.width, this.height,)
    }
    
}

let wallLeft = new Object(0, 0, "green", 20 ,1120)
let wallRight = new Object(798, 0, "green", 20, 960)



let platform_1 = new Platform(224, 1024, 576, 96);
let platform_2 = new Platform(96, 992, 160, 128 );
let platform_3 = new Platform(0, 960, 128, 192);
let platform_4 = new Platform(128, 832, 672, 32);
let platform_5 = new Platform(0, 704, 576, 32);
let platform_6 = new Platform(0, 576, 160, 32);
let platform_7 = new Platform(224, 448, 96, 32);
let platform_8 = new Platform(352, 416, 96, 32);
let platform_9 = new Platform(480, 384, 96, 32);
let platform_10 = new Platform(640, 352, 160, 32);
let platform_11 = new Platform(0, 256, 544, 32);
let platform_12 = new Platform(224, 128, 160, 32);
let platform_13 = new Platform(384, 96, 448, 32);
let platform_14 = new Platform(640, 544, 160, 32);


//Create my players and barrels

let lord = new Crawler(596, 922, "red", 32, 32);
// let lordFart = new Crawler(764, 64, "yellow", 32, 32);
// let barrel2 = new Crawler(732, 512, "green", 32, 32 );
let barrel3 = new Barrel(764, 64);
let barrel4 = new Barrel(764, 64);
let barrel5 = new Barrel(764, 64);
let barrel6 = new Barrel(764, 64);


// const myBarrels =[lordFart, barrel2, barrel3, barrel4, barrel5, barrel6];

// function gameLoop() {
//     ctx.clearRect(0, 0, map.width, map. height)
   
// }

function mainLoop() {
    requestAnimationFrame(mainLoop)
    ctx.clearRect(0, 0, map.width, map. height)
    lord.update();
    // lordFart.update();
    // barrel2.update();
    // barrel3.update();
    // barrel4.update();
    // barrel5.update();
    // barrel6.update();
    platform_1.updatePlatformForPlayer();
    platform_2.updatePlatformForPlayer();
    platform_3.updatePlatformForPlayer();
    platform_4.updatePlatformForPlayer();
    platform_5.updatePlatformForPlayer();
    platform_6.updatePlatformForPlayer();
    platform_7.updatePlatformForPlayer();
    platform_8.updatePlatformForPlayer();
    platform_9.updatePlatformForPlayer();
    platform_10.updatePlatformForPlayer();
    platform_11.updatePlatformForPlayer();
    platform_12.updatePlatformForPlayer();
    platform_13.updatePlatformForPlayer();
    platform_14.updatePlatformForPlayer();
    //barrel 1 platform hit detection
    // platform_1.updatePlatformForBarrel();
    // platform_2.updatePlatformForBarrel();
    // platform_3.updatePlatformForBarrel();
    // platform_4.updatePlatformForBarrel();
    // platform_5.updatePlatformForBarrel();
    // platform_6.updatePlatformForBarrel();
    // platform_7.updatePlatformForBarrel();
    // platform_8.updatePlatformForBarrel();
    // platform_9.updatePlatformForBarrel();
    // platform_10.updatePlatformForBarrel();
    // platform_11.updatePlatformForBarrel();
    // platform_12.updatePlatformForBarrel();
    // platform_13.updatePlatformForBarrel();
    // platform_14.updatePlatformForBarrel();
    // ////barrel 2 platform hit detection
    // platform_1.updatePlatformForBarrel2();
    // platform_2.updatePlatformForBarrel2();
    // platform_3.updatePlatformForBarrel2();
    // platform_4.updatePlatformForBarrel2();
    // platform_5.updatePlatformForBarrel2();
    // platform_6.updatePlatformForBarrel2();
    // platform_7.updatePlatformForBarrel2();
    // platform_8.updatePlatformForBarrel2();
    // platform_9.updatePlatformForBarrel2();
    // platform_10.updatePlatformForBarrel2();
    // platform_11.updatePlatformForBarrel2();
    // platform_12.updatePlatformForBarrel2();
    // platform_13.updatePlatformForBarrel2();
    // platform_14.updatePlatformForBarrel2();
    ////barrel 3 platform hit detection
    platform_1.updatePlatformForBarrel3();
    platform_2.updatePlatformForBarrel3();
    platform_3.updatePlatformForBarrel3();
    platform_4.updatePlatformForBarrel3()
    platform_5.updatePlatformForBarrel3();
    platform_6.updatePlatformForBarrel3();
    platform_7.updatePlatformForBarrel3();
    platform_8.updatePlatformForBarrel3();
    platform_9.updatePlatformForBarrel3();
    platform_10.updatePlatformForBarrel3();
    platform_11.updatePlatformForBarrel3();
    platform_12.updatePlatformForBarrel3();
    platform_13.updatePlatformForBarrel3();
    platform_14.updatePlatformForBarrel3();
    ////barrel 4 platform hit detection
    platform_1.updatePlatformForBarrel4();
    platform_2.updatePlatformForBarrel4();
    platform_3.updatePlatformForBarrel4();
    platform_4.updatePlatformForBarrel4()
    platform_5.updatePlatformForBarrel4();
    platform_6.updatePlatformForBarrel4();
    platform_7.updatePlatformForBarrel4();
    platform_8.updatePlatformForBarrel4();
    platform_9.updatePlatformForBarrel4();
    platform_10.updatePlatformForBarrel4();
    platform_11.updatePlatformForBarrel4();
    platform_12.updatePlatformForBarrel4();
    platform_13.updatePlatformForBarrel4();
    platform_14.updatePlatformForBarrel4();
    ////barrel 5 platform hit detection
    platform_1.updatePlatformForBarrel5();
    platform_2.updatePlatformForBarrel5();
    platform_3.updatePlatformForBarrel5();
    platform_4.updatePlatformForBarrel5()
    platform_5.updatePlatformForBarrel5();
    platform_6.updatePlatformForBarrel5();
    platform_7.updatePlatformForBarrel5();
    platform_8.updatePlatformForBarrel5();
    platform_9.updatePlatformForBarrel5();
    platform_10.updatePlatformForBarrel5();
    platform_11.updatePlatformForBarrel5();
    platform_12.updatePlatformForBarrel5();
    platform_13.updatePlatformForBarrel5();
    platform_14.updatePlatformForBarrel5();
    ////barrel 6 platform hit detection
    platform_1.updatePlatformForBarrel6();
    platform_2.updatePlatformForBarrel6();
    platform_3.updatePlatformForBarrel6();
    platform_4.updatePlatformForBarrel6()
    platform_5.updatePlatformForBarrel6();
    platform_6.updatePlatformForBarrel6();
    platform_7.updatePlatformForBarrel6();
    platform_8.updatePlatformForBarrel6();
    platform_9.updatePlatformForBarrel6();
    platform_10.updatePlatformForBarrel6();
    platform_11.updatePlatformForBarrel6();
    platform_12.updatePlatformForBarrel6();
    platform_13.updatePlatformForBarrel6();
    platform_14.updatePlatformForBarrel6();


    

    platform_1.draw();
    platform_2.draw();
    platform_3.draw();
    platform_4.draw();
    platform_5.draw();
    platform_6.draw();
    platform_7.draw();
    platform_8.draw();
    platform_9.draw();
    platform_10.draw();
    platform_11.draw();
    platform_12.draw();
    platform_13.draw();
    platform_14.draw();
    

}
   function newLoop(){
    // barrelLoop2();

    
    // if(lordFart.alive){
    //     let hit = hitWallLeft(lordFart, wallLeft);

    // };

    // if(lordFart.alive){
    //     let hit = hitWallRight(lordFart, wallRight);

    // };
  

    if (barrel3.alive){
        barrel3.update;
        let startLife = startingAlive();
        let hit = hitWallLeft(barrel3,wallLeft);
    }
    if (barrel4.alive){
        barrel4.update;
        
        let hit = hitWallLeft2(barrel3,wallLeft);
    }
    if (barrel5.alive){
        barrel5.update;
        
        let hit = hitWallLeft3(barrel3,wallLeft);
    }
    if (barrel6.alive){
        barrel6.update;
        
        let hit = hitWallLeft4(barrel3,wallLeft);
    }
    
    
  

}
mainLoop();
// Barrel 1 boolean detection 

function startingAlive(){
    barrel3.alive = true;
    barrel4.alive = false;
    barrel5.alive = false;
    barrel6.alive = false;
}


function hitWallLeft(p1,p2){
    let hitWall =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (hitWall) {
        return rollingBarrelRight(lordFart);
        
        

    } else {
        return false;
    }   
}
function hitWallRight(p1,p2){
    let hitWall =

        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

    if (hitWall) {
        return rollingBarrelLeft(lordFart);
        
        


    } else {
        return false;
    }   
}
// Barrel 2 boolean hit detection






// function barrelLoop() {
//     if (lordFart.y > 1088){
//         lordFart.y = 64;
//         lordFart.x = 596;
//     }
    

// function barrelLoop2(){
//     if (barrel2.y > 1088){
//         barrel2.y = 532;
//         barrel2.x = 800;
//     }
// }



function rollingBarrelLeft(e){
  
        
        // condition to move left to left
        if ((e.x + e.width ) > 0){
            e.velocity.x = - 5 
        }
   
}

function rollingBarrelRight(e) {
    
    // condition to move left to right
    if (e.x > 0){
        e.velocity.x = +5
    }
 
}



// rollingBarrelLeft(lordFart)
// rollingBarrelLeft(barrel2)

// setTimeout(() => {
//     rollingBarrelLeft(barrel3)
// }, 3000);
// setTimeout(() => {
//     rollingBarrelLeft(barrel4)
// }, 6000);
// setTimeout(() => {
//     rollingBarrelLeft(barrel5)
// }, 9000);
// setTimeout(() => {
//     rollingBarrelLeft(barrel6)
// }, 11000);















function movementHandler(e){
    console.log("the key that was pressed was: " + e.key);

    switch (e.key){
        case "a":
            lord.x > 32 ? lord.velocity.x =- 5 : null;
         
            break
        case "d":
            lord.x < (map.width - 62) ? lord.velocity.x = 5 : null;
          
            break  
        case "w":
            lord.velocity.y =- 15
            break
            
     

        
    }
    // console.log(lord)

}

function movementHandlerOff(e){
    console.log("the key that was pressed was: " + e.key);

    switch (e.key){
        case "d":
            lord.velocity.x = 0
         
            break
        case "a":
            lord.velocity.x = 0
          
            break  
        case "w":
            lord.velocity.y = 0
            
     

        
    }
    console.log(lord)

}













document.addEventListener("keydown", movementHandler);
document.addEventListener("keyup", movementHandlerOff)



////next steps to do ********** 
    //create function with two parameters, one being the player the other the barrels who collide with the player block, create function to detect hit boxes and end game.