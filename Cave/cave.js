// let caveInside = document.querySelector("#cave");
// let caveC = caveInside.getContext('2d');

// let dude4;
// let grass2;
// let caveDoor1;
// let caveDoor2;


// class Player4 {
//     constructor(x,y,color,width,height){
//         this.x = x;
//         this.y = y;
//         this.color = color;
//         this.width = width;
//         this.height = height;
//         this.alive = true;
//     }
//     render(){
//         caveC.fillStyle = this.color;
//         caveC.fillRect(this.x , this.y, this.width, this.height,)
//     }


// }



// class Grass2 {
//     constructor(x,y,color,width,height){
//         this.x = x;
//         this.y = y;
//         this.color = color;
//         this.width = width;
//         this.height = height;
//         this.alive = true;
//     }
//     render(){
//         caveC.fillStyle = this.color;
//         caveC.fillRect(this.x , this.y, this.width, this.height,)
//     }


// }
// class CaveDoor {
//     constructor(x,y,color,width,height){
//         this.x = x;
//         this.y = y;
//         this.color = color;
//         this.width = width;
//         this.height = height;
//         this.alive = true;
//     }
//     render(){
//         caveC.fillStyle = this.color;
//         caveC.fillRect(this.x , this.y, this.width, this.height,)
//     }


// }



// window.addEventListener("DOMContentLoaded",function (e){
//     //FIRST ROOM//
//     dude4 = new Player4(460,50, "black", 20,20);
//     grass2 = new Grass2(340,230,"red",170,20);
//     caveDoor1 = new CaveDoor(420,0,"red", 80,20);
//     caveDoor2 = new CaveDoor(130,400,"red",100,20);
    


//     const runGame = setInterval(gameLoop,120);
  
// })

// function movementHandler(e){
    

//     switch (e.key){
//         case "ArrowUp":
//            dude4.y -= 10;
//             break
        
        
//         case "ArrowDown":
//           dude4.y += 10;
//             break
 
//         case "ArrowLeft":
//             dude4.x -= 10;
//             break
        
        
//         case "ArrowRight":
//             dude4.x += 10;
//             break        

//     }
//     console.log(dude4);
    
// }

// document.addEventListener("keydown", movementHandler)


// function gameLoop(){
//     caveC.clearRect(0,0,caveInside.width, caveInside.height);

//     if(caveDoor1.alive){
//         caveDoor1.render();
//         let hit = previousRoom3(dude4,caveDoor1);
        
        
//     }
//     // if(grass.alive){
//     //     grass.render();
//     //     let hit = fightStart(dude3,grass);
        
        
//     // }

//     if(caveDoor2.alive){
//         caveDoor2.render();
//         let hit = leaveCave(dude4,caveDoor2);
        
        
//     }

   

  
//     dude4.render();
// }

function previousRoom3(p1,p2){

    let goBack2 = 
    
        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit
    
        if(goBack2){
            return lastRoom3();

        
        
        }else{
            return false;
        }
    
            
    
    
        
        }

        function lastRoom3(){
            caveDoor1.alive = false;
            let roomTrans3 = document.querySelector('#outside');
                roomTrans3.classList.remove("outsideHide");
                
                
        }

        function leaveCave(p1,p2){

            let leaveCave = 
            
                p1.y + p1.height > p2.y &&
                p1.y < p2.y + p2.height &&
                p1.x + p1.width > p2.x &&
                p1.x < p2.x + p2.width; // {boolean} : if all are true -> hit
            
                if(leaveCave){
                    return outsideCave();
        
                
                
                }else{
                    return false;
                }
            
                    
            
            
                
                }
        
                function outsideCave(){
                    caveDoor2.alive = false;
                    let caveTrans2 = document.querySelector('#cave');
                        caveTrans2.setAttribute("class","caveHide");
                        
                        
                }