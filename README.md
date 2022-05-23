                          ////                  *  *
██████╗░░█████╗░██╗░░██╗███████╗░░░░░░██████╗░██╗░░░██╗██████╗░███████╗░██████╗
██╔══██╗██╔══██╗██║░██╔╝██╔════╝░░░░░░██╔══██╗██║░░░██║██╔══██╗██╔════╝██╔════╝
██████╔╝██║░░██║█████═╝░█████╗░░█████╗██║░░██║██║░░░██║██║░░██║█████╗░░╚█████╗░
██╔═══╝░██║░░██║██╔═██╗░██╔══╝░░╚════╝██║░░██║██║░░░██║██║░░██║██╔══╝░░░╚═══██╗
██║░░░░░╚█████╔╝██║░╚██╗███████╗░░░░░░██████╔╝╚██████╔╝██████╔╝███████╗██████╔╝
╚═╝░░░░░░╚════╝░╚═╝░░╚═╝╚══════╝░░░░░░╚═════╝░░╚═════╝░╚═════╝░╚══════╝╚═════╝░

# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# Premise:
	You're a Poké-Düde trainer who is trying to go see the world! To get there you will have to complete two battles and reach the boat to leave your home island of Dude World. 


# GAMEPLAN

Triggering the fight scene
    * the fight sceen will be triggered when the character collides with the grass and the 2nd house. 
    * the hit condition will remove a "hide" sur class from the fight screen

Fight Mechanics
    * the player will have one pokemon with 1 attack with a number value. 
    * both the computer and the player will have a health of 100. 
    * when the event listner on the player attack button is triggered it will subtract its number value from computers health number
    * will set an array of 3 values representing a "normal" hit value, a "critical" hit value and a "miss" hit value, and random math will select one of the three for both the player and the computer. (so a bit of luck will be involved in winning.)

Win condition
    * if the player character collides with the "boat" object the game is won. 
    * the player will be forced to collide with 2 fight sequences to reach the boat object. 



# User Story:

* Make a cohesive rpg game. 
* pracctice screen transitions.
* class attributes


# Technologies Used:

* HTML
* CSS
* JavaScript (logic and DOM manipulation
* Canvas
* Tiled

# Wireframes:



 ____________________________________________________________________
|                                                                    |
|    /\                             /\               \               |
|   /  \                           /  \               \              |
|  /    \         `"`"`"`         /    \          _________          |
| |      |        `"`"`"`        |      |        |          \        |
| |      |  ----> `"`"`"` -----> |      | -----> |           |       |
| |______|                       |______|        |__________/        |
|  1.Home      2. grass fight     3. gym fight    4. get to boat     |
 ____________________________________________________________________




