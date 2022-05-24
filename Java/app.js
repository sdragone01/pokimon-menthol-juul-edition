let inside = document.querySelector("#inside");
let inside1C = inside.getContext('2d');

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

//CAVE//
let cave2;
let cave3;

//OUTSIDE 2//

let cave4;
let gym;

//GYM//

let gym2;
let gym3;




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

window.addEventListener("DOMContentLoaded", function (e) {
    //FIRST ROOM//
    dude1 = new Object(430, 200, "black", 20, 20);
    door1 = new Object(0, 320, "transparent", 30, 20);

    //SECOND ROOM//
    door2 = new Object(170, 620, "transparent", 40, 20);
    door3 = new Object(360, 260, "transparent", 40, 20);

    //OUTSIDE//
    door4 = new Object(130, 220, "transparent", 40, 20);
    cave = new Object(450, 90, "transparent", 30, 20);
    grass = new Object(330,260 ,"red",180,20 );

    //CAVE//
    cave2 = new Object(430, 0, "transparent", 80, 20);
    cave3 = new Object(140, 400, "transparent", 80, 20);

    //OUTSIDE2//
    cave4 = new Object(450, 90, "transparent", 30, 20);
    gym = new Object(130, 320, "transparent", 30, 20);

    //GYM//
    gym2 = new Object(220,630,"transparent",160,20);
    gym3 = new Object(220,630,"transparent",160,20);


    const runGame = setInterval(gameLoop, 120);

})



function movementHandler(e) {


    switch (e.key) {
        case "w":
            dude1.y -= 20;
            break


        case "s":
            dude1.y += 20;
            break

        case "a":
            dude1.x -= 20;
            break


        case "d":
            dude1.x += 20;
            break

    }
    console.log(dude1);


}

document.addEventListener("keydown", movementHandler)


function gameLoop() {
    inside1C.clearRect(0, 0, inside.width, inside.height);


    if (door1.alive) {
        door1.render();
        let hit = nextRoom(dude1, door1);




    } if (door1.alive === false && door2.alive) {
        door2.render();
        let hit = goOutside(dude1, door2);
        door3.render();
        let hit2 = previousRoom(dude1, door3);

    } if (door2.alive === false && door4.alive && cave.alive) {
        door4.render();
        cave.render();
        
        let hit = previousRoom2(dude1, door4);
        let hit2 = enterCave(dude1, cave);
        
    } if (door2.alive===false && grass.alive){
        grass.render();
        let hit3 = grassFight(dude1,grass);
    } if (cave.alive === false && cave2.alive && cave3.alive) {
        cave2.render();
        cave3.render();
        let hit = previousRoom3(dude1, cave2);
        let hit2 = leaveCave(dude1, cave3);

    } if (cave3.alive === false && cave4.alive && gym.alive) {
        cave4.render();
        gym.render();
        let hit = previousRoom4(dude1, cave4);
        let hit2 = enterGym(dude1,gym);
    
    }if (gym.alive === false && gym2.alive && gym3.alive) {
        gym2.render();
        gym3.render();
        let hit = previousRoom5(dude1,gym2);


    }



    dude1.render();


}

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
    let roomTrans = document.querySelector('#inside');
    roomTrans.setAttribute("id", "inside2");
    dude1.x = 370;
    dude1.y = 320;



}

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
    door2.alive = false;
    door3.alive = false;
    door4.alive = true;
    cave.alive = true;

    let roomTrans = document.querySelector('#inside2');
    roomTrans.setAttribute("id", "outside");
    dude1.x = 130;
    dude1.y = 260;



}

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
    door3.alive = false;
    door2.alive = false;
    door1.alive = true;
    door4.alive = false;
    cave.alive = false;
    cave2.alive = false;
    let roomTrans = document.querySelector('#inside2');
    roomTrans.setAttribute("id", "inside");
    dude1.x = 0;
    dude1.y = 380;



}

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
    door4.alive = false;
    door2.alive = true;
    door3.alive = true;
    cave.alive = false;
    cave2.alive = false;

    let roomTrans2 = document.querySelector('#outside');
    roomTrans2.setAttribute('id', "inside2");

    dude1.x = 170;
    dude1.y = 580;


}

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
    cave.alive = false;
    door3.alive = false;
    cave2.alive = true;
    cave3.alive = true;
    
   
    let caveTrans = document.querySelector('#outside');
    caveTrans.setAttribute("id", "cave");
    dude1.x = 460;
    dude1.y = 50;




}

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
    cave2.alive = false;
    cave3.alive = false;
    cave.alive = true;
    door4.alive = true;

    let roomTrans3 = document.querySelector('#cave');
    roomTrans3.setAttribute("id", "outside");
    dude1.x = 450;
    dude1.y = 130;

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

function outsideCave() {
    cave3.alive = false;
    cave2.alive = false;
    gym.alive = true;
    cave4.alive = true;
    let caveTrans2 = document.querySelector('#cave');
    caveTrans2.setAttribute("id", "outside2");
    dude1.x = 450;
    dude1.y = 130;

}
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
    cave2.alive = true;
    cave3.alive = true;
    cave4.alive = false;
   
    
    cave.alive = false;
    door4.alive = false;

    let roomTrans3 = document.querySelector('#outside2');
    roomTrans3.setAttribute("id", "cave");
    dude1.x = 170;
    dude1.y = 320;

}

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
    
    cave4.alive = false;
    cave.alive = false;
    door4.alive = false;
    gym.alive = false;
    gym2.alive = true;
    gym3.alive = true;
    

    let roomTrans3 = document.querySelector('#outside2');
    roomTrans3.setAttribute("id", "gym");
    dude1.x = 300;
    dude1.y = 590;

}

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
    gym.alive = true;
    cave4.alive = true;
    gym2.alive = false;
    gym3.alive = false;

    let roomTrans4 = document.querySelector('#gym');
    roomTrans4.setAttribute("id", "outside2");
    dude1.x = 130;
    dude1.y = 350;

}



let pHealth = document.querySelector('#pHealthNum');
let cHealth = document.querySelector('#cHealthNum');
let attackBtn = document.querySelector('#attack1');
let healBtn = document.querySelector('#heal');
let fightScreen1 = document.querySelector('.fightSequence');

const arr = [20,20,20,20];
const arr2 = [20,10,10,10,5,5,5,0,0];

function attack(){

    let attackPoints = Number(cHealth.textContent);
    let randomArr = arr[Math.floor(Math.random()*arr.length)];
    let newHealth = attackPoints - randomArr;
    cHealth.textContent = newHealth;
     
    if (randomArr === 20) {
        alert("Charmander used Fireball- It was very effective!");
    }else if (randomArr === 10) {
        alert("Charmander used Fireball- It was effective!");
    }else if (randomArr === 5) {
        alert("Charmander used Fireball- It wasn't very effective!");
    } else {
        alert("Charmander used Fireball- It was a miss!");
    }
    if (newHealth <= 0 ){
        grass.alive=false;
        let fightScreen1 = document.querySelector(".fight");
        fightScreen1.setAttribute("id","fightSequenceHide");
        dude1.render();
        
        
    }
          
    }

    function returnAttack (){
        setTimeout(function(){
            let attackPoints = Number(pHealth.textContent);
            let randomArr = arr2[Math.floor(Math.random()*arr.length)];
            let newHealth = attackPoints - randomArr;
            pHealth.textContent = newHealth;
            
            if (randomArr === 20) {
                alert("Growlthie used SCRATCH - It was very effective!");
            }else if (randomArr === 10) {
                alert("Growlthie used SCRATCH - It was effective!");
            }else if (randomArr === 5) {
                alert("Growlthie used SCRATCH - It wasn't very effective!");
            } else {
                alert("Growlthie used SCRATCH - It was a miss!");
            }
            console.log(newHealth);
        },5000);
       
    }



function heal(){




    let healPoints = Number(pHealth.textContent);
    let newHealth2 = healPoints + 20;
    pHealth.textContent = newHealth2;
   
    
    if (newHealth === 0){
        
        
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
    

    let fightBoard = document.querySelector('.fight');
    fightBoard.setAttribute("id", "fightSequence");
    

}


