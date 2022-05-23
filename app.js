
// //MAIN MAP

// let game = document.querySelector("#game");
// let ctx = game.getContext('2d');

// let dude;
// let grass;
// let door;


// //FIGHT SCENE
// let fight = document.querySelector('#fightScene');
// let ctx2 = fight.getContext('2d');

// let poke1;
// let poke2;
// let deadPoke;
// let pHealth = document.querySelector('#pHealthNum');
// let cHealth = document.querySelector('#cHealthNum');
// let attackBtn = document.querySelector('#attackBtn');











// class Player {
//     constructor(x,y,color,width,height){
//         this.x = x;
//         this.y = y;
//         this.color = color;
//         this.width = width;
//         this.height = height;
//         this.alive = true;
//     }
//     render(){
//         ctx.fillStyle = this.color;
//         ctx.fillRect(this.x , this.y, this.width, this.height,)
//     }


// }
// class Poke {
//     constructor(x,y,color,width,height){
//         this.x = x;
//         this.y = y;
//         this.color = color;
//         this.width = width;
//         this.height = height;
//         this.alive = true;
//     }
//     render(){
//         ctx2.fillStyle = this.color;
//         ctx2.fillRect(this.x , this.y, this.width, this.height,)
//     }


// }





// window.addEventListener("DOMContentLoaded",function (e){
//     dude = new Player(430,200, "black", 20,20);
//     grass = new Player(350,260,"red",180,20);
//     door = new Player(0,350,"red",40,40)

//     poke1 = new Poke (400,300,"red", 150,200 )
//     poke2 = new Poke (1000,100,"red", 100,150 )
//     deadPoke=new Poke (900,150,"red", 150,70)


   

//     const runGame = setInterval(gameLoop,120);

//     poke1.render();
//     poke2.render();
//     // deadPoke.render();


// })

// function movementHandler(e){
    

//     switch (e.key){
//         case "ArrowUp":
//            dude.y -= 10;
//             break
        
        
//         case "ArrowDown":
//           dude.y += 10;
//             break
 
//         case "ArrowLeft":
//             dude.x -= 10;
//             break
        
        
//         case "ArrowRight":
//             dude.x += 10;
//             break        

//     }
//     console.log(dude);
    
// }

// document.addEventListener("keydown", movementHandler)



// function gameLoop(){
//     ctx.clearRect(0,0,game.width, game.height);
   

   


//     if(grass.alive){
//        grass.render();
//         let hit = grassFight(dude,grass);
        
//     }
//     if(door.alive){
//         door.render();
//         let hit2 = goOutside(dude,door);
        
//     }

   
//     dude.render();
// }

// function grassFight(p1,p2){

// let triggerFight = 

//     p1.y + p1.height > p2.y &&
//     p1.y < p2.y + p2.height &&
//     p1.x + p1.width > p2.x &&
//     p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit

//     if(triggerFight){
//         return hideCanvas();
    
    
//     }else{
//         return false;
//     }

//        console.log("fight started");     


    
//     }
//     function goOutside(p1,p2){

//         let walkOutside = 
        
//             p1.y + p1.height > p2.y &&
//             p1.y < p2.y + p2.height &&
//             p1.x + p1.width > p2.x &&
//             p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit
        
//             if(walkOutside){
//                 return hideCanvas2();

            
            
//             }else{
//                 return false;
//             }
        
//                console.log("fight started");     
        
        
            
//             }

// function hideCanvas(){
//     grass.alive = false;
//     let gameSwitch = document.querySelector('.gameOutside');
    
//         gameSwitch.classList.add("hideGame");
// }
// function hideCanvas2(){
//     door.alive = false;
//     let gameSwitch2 = document.querySelector('#game');
//         gameSwitch2.setAttribute("class","gameOutside");
//         gameSwitch2.setAttribute("id","")
//         grass.render();
// }




// function attack(){
//     let attackPoints = Number(cHealth.textContent);
//     let newHealth = attackPoints - 20;
//     cHealth.textContent = newHealth;
//     let returnMain = document.querySelector('.gameOutside');
    
//     if (newHealth === 0){
//         returnMain.classList.remove("hideGame");
//         dude.render();
//     }

// }
// function hideStart(){
//     let startScrn = document.querySelector(".startscreen")
//     startScrn.setAttribute("id","startScreenHide")
// }



// console.log("jamboy");