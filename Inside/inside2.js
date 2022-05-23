// console.log("jamboy");
// let inside2 = document.querySelector("#inside2");
// let inside2C = inside2.getContext('2d');

// let dude2;
// let door2;
// let door3;


// class Player2 {
//     constructor(x,y,color,width,height){
//         this.x = x;
//         this.y = y;
//         this.color = color;
//         this.width = width;
//         this.height = height;
//         this.alive = true;
//     }
//     render(){
//         inside2C.fillStyle = this.color;
//         inside2C.fillRect(this.x , this.y, this.width, this.height,)
//     }
// }

// class Door2 {
//     constructor(x,y,color,width,height){
//         this.x = x;
//         this.y = y;
//         this.color = color;
//         this.width = width;
//         this.height = height;
//         this.alive = true;
//     }
//     render(){
//         inside2C.fillStyle = this.color;
//         inside2C.fillRect(this.x , this.y, this.width, this.height,)
//     }


// }

// window.addEventListener("DOMContentLoaded",function (e){
//     dude2 = new Player2(370,320, "black", 20,20);
//     door2 = new Door2(170,620,"red",40,20);
//     door3 = new Door2(360,260,"red",40,20);


//     const runGame = setInterval(gameLoop,120);
  
// })

// function movementHandler(e){
    

//     switch (e.key){
//         case "ArrowUp":
//            dude2.y -= 10;
//             break
        
        
//         case "ArrowDown":
//           dude2.y += 10;
//             break
 
//         case "ArrowLeft":
//             dude2.x -= 10;
//             break
        
        
//         case "ArrowRight":
//             dude2.x += 10;
//             break        

//     }
   
// }

// document.addEventListener("keydown", movementHandler)


// function gameLoop(){
//     inside2C.clearRect(0,0,inside.width, inside.height);
   

//     if(door2.alive){
//         door2.render();
//         let hit = goOutside(dude2,door2);
        
        
//     }

//     if (door3.alive){
//         door3.render();
//         let hit = previousRoom(dude2,door3);

//     }

   
//     dude2.render();
// }

// function previousRoom(p1,p2){

//     let goBack = 
    
//         p1.y + p1.height > p2.y &&
//         p1.y < p2.y + p2.height &&
//         p1.x + p1.width > p2.x &&
//         p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit
    
//         if(goBack){
//             return lastRoom();

        
        
//         }else{
//             return false;
//         }
    
            
    
    
        
//         }

//         function lastRoom(){
//             door3.alive = false;
//             let roomTrans = document.querySelector('#inside');
//                 roomTrans.classList.remove("insideHide");
                
                
//         }




//         function goOutside(p1,p2){

//             let goOut = 
            
//                 p1.y + p1.height > p2.y &&
//                 p1.y < p2.y + p2.height &&
//                 p1.x + p1.width > p2.x &&
//                 p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit
            
//                 if(goOut){
//                     return leaveHouse();
        
                
                
//                 }else{
//                     return false;
//                 }
            
                    
            
            
                
//                 }
        
//                 function leaveHouse(){
//                     door2.alive = false;
//                     let roomTrans = document.querySelector('#inside2');
//                         roomTrans.setAttribute("class","inside2Hide");
                        
                        
//                 }
