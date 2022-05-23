// let outside = document.querySelector("#outside");
// let outsideC = outside.getContext('2d');

// let dude3;
// let grass;
// let cave;
// let door4;

// class Player3 {
//     constructor(x,y,color,width,height){
//         this.x = x;
//         this.y = y;
//         this.color = color;
//         this.width = width;
//         this.height = height;
//         this.alive = true;
//     }
//     render(){
//         outsideC.fillStyle = this.color;
//         outsideC.fillRect(this.x , this.y, this.width, this.height,)
//     }


// }

// class Cave {
//     constructor(x,y,color,width,height){
//         this.x = x;
//         this.y = y;
//         this.color = color;
//         this.width = width;
//         this.height = height;
//         this.alive = true;
//     }
//     render(){
//         outsideC.fillStyle = this.color;
//         outsideC.fillRect(this.x , this.y, this.width, this.height,)
//     }


// }

// class Grass {
//     constructor(x,y,color,width,height){
//         this.x = x;
//         this.y = y;
//         this.color = color;
//         this.width = width;
//         this.height = height;
//         this.alive = true;
//     }
//     render(){
//         outsideC.fillStyle = this.color;
//         outsideC.fillRect(this.x , this.y, this.width, this.height,)
//     }


// }
// class Door3 {
//     constructor(x,y,color,width,height){
//         this.x = x;
//         this.y = y;
//         this.color = color;
//         this.width = width;
//         this.height = height;
//         this.alive = true;
//     }
//     render(){
//         outsideC.fillStyle = this.color;
//         outsideC.fillRect(this.x , this.y, this.width, this.height,)
//     }


// }


// window.addEventListener("DOMContentLoaded",function (e){
//     //FIRST ROOM//
//     dude3 = new Player3(130,260, "black", 20,20);
//     grass = new Grass(340,230,"red",170,20);
//     door4 = new Door3(130,220,"red", 40,20);
//     cave = new Cave(450,90,"red",30,20);
    


//     const runGame = setInterval(gameLoop,120);
  
// })

// function movementHandler(e){
    

//     switch (e.key){
//         case "ArrowUp":
//            dude3.y -= 10;
//             break
        
        
//         case "ArrowDown":
//           dude3.y += 10;
//             break
 
//         case "ArrowLeft":
//             dude3.x -= 10;
//             break
        
        
//         case "ArrowRight":
//             dude3.x += 10;
//             break        

//     }
    
    
// }

// document.addEventListener("keydown", movementHandler)


// function gameLoop(){
//     outsideC.clearRect(0,0,outside.width, outside.height);

//     if(door4.alive){
//         door4.render();
//         let hit = previousRoom2(dude3,door4);
        
        
//     }
//     // if(grass.alive){
//     //     grass.render();
//     //     let hit = fightStart(dude3,grass);
        
        
//     // }

//     if(cave.alive){
//         cave.render();
//         let hit = enterCave(dude3,cave);
        
        
//     }

   

  
//     dude3.render();
// }

// function previousRoom2(p1,p2){

//     let goBack = 
    
//         p1.y + p1.height > p2.y &&
//         p1.y < p2.y + p2.height &&
//         p1.x + p1.width > p2.x &&
//         p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit
    
//         if(goBack){
//             return lastRoom2();

        
        
//         }else{
//             return false;
//         }
    
            
    
    
        
//         }

//         function lastRoom2(){
//             door4.alive = false;
//             let roomTrans2 = document.querySelector('#inside2');
//                 roomTrans2.classList.remove("inside2Hide");
                
                
//         }

//         function enterCave(p1,p2){

//             let goInCave = 
            
//                 p1.y + p1.height > p2.y &&
//                 p1.y < p2.y + p2.height &&
//                 p1.x + p1.width > p2.x &&
//                 p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit
            
//                 if(goInCave){
//                     return insideCave();
        
                
                
//                 }else{
//                     return false;
//                 }
            
                    
            
            
                
//                 }
        
//                 function insideCave(){
//                     cave.alive = false;
//                     let caveTrans = document.querySelector('#outside');
//                         caveTrans.setAttribute("class","outsideHide");
                        
                        
//                 }