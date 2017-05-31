var Game = function()
{

    // Game settings
    var settings = {};                     // Containes all game settings
    settings.playerSpeed = 8;              // The speed of the ball
    settings.walls = true;                 // The player can not go outside the screen
    settings.automatic = false;            // The player will move by itself
    settings.godmode = false;              // Debug mode
    settings.maxTarget = 20;
    settings.timer = 60; //game timer , max time given
    settings.bulletId = 1;                 //ID of bullets
    settings.targetId = 0;
    settings.points1 = 0;


    // World settings
    var assets = [];                      // All game objects
    var player = new Player(settings);      // The player
    var target = new Target(settings);
    var bullet = new Bullet(settings);

    assets[0] = player;
    assets[1] = target;
    assets[2] = bullet;

    var frame = 0;                        // Frames since the start of the game

    // Interactions
    var interactions = {};
    interactions.up = false;              // Up arrow key pressed
    interactions.down = false;            // Down arrow key pressed
    interactions.left = false;            // Left arrow key pressed
    interactions.right = false;           // Right arrow ket pressed
    interactions.space = false;           // Speace key pressed

    // Setup event listeners
    function setupEvents() {

      document.addEventListener('keyup', function(event){
        var keyName = event.key;

        switch(keyName) {
          case "ArrowRight":
              interactions.right = false;
              break;
          case "ArrowLeft":
              interactions.left = false;
              break;
          case "ArrowUp":
              interactions.up = false;
              break;
          case "ArrowDown":
              interactions.down = false;
              break;
          case " ":
              interactions.space = false;
              break;
          default:
              break;
        }
      });

      document.addEventListener('keydown', function(event){
        var keyName = event.key;

        switch(keyName) {
          case "ArrowRight":
              interactions.right = true;
              break;
          case "ArrowLeft":
              interactions.left = true;
              break;
          case "ArrowUp":
              interactions.up = true;
              break;
          case "ArrowDown":
              interactions.down = true;
              break;
          case " ":
              interactions.space = true;
              break;
          default:
              break;
        }
      });

    }

    //get Target information - height,width,position
    this.getTargetInfo = function()
    {
      var targetPos = {};
      targetElement = document.getElementById('target');
      var targetRect = targetElement.getBoundingClientRect();
      targetPos.height = targetRect.height;
      targetPos.width = targetRect.width;
      targetPos.top = targetRect.top;
      targetPos.bottom = targetRect.bottom;
      targetPos.left = targetRect.left;
      return targetPos;
    }

    this.getPlayerInfo = function()
    {
      var playerPos = {};
      playerElement = document.getElementById('player');
      var playerRect = playerElement.getBoundingClientRect();
      playerPos.height = playerRect.height;
      playerPos.width = playerRect.width;
      playerPos.top = playerRect.top;
      playerPos.bottom = playerRect.bottom;
      playerPos.left = playerRect.left;
      return playerPos;
    }


    // Startup the game
    function init()
    {
      setupEvents();
      timer();
    }

    //do the game countdown and display time on the board
    //timer
    function timer()
    {
      var timer = parseInt(settings.timer);
      var interval = setInterval(function()
      {
          points1 = bullet.getPoints();
          var timerElement = document.getElementById('info');
          timerElement.innerHTML = "00:" + timer-- + "     "+points1+" points" ;
          if(timer < 10)
          {
            timerElement.innerHTML = "00:0" + timer-- + "     "+points1+" points";
          }
          if (timer <= 0)
          {
                timerElement.innerHTML = "End Game";
                //timerElement.innerHTML = "Congratulations! You have "+ points +" points";
                clearInterval(interval);
          }
        }, 1000);
      }


    // The render function. It will be called 60/sec
    this.render = function()
    {
       for(var i=0; i < assets.length; i++)
       {
         assets[i].render(interactions);
       }

       frame++;
     }

    var self = this;
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
            })();


            (function animloop(){
              requestAnimFrame(animloop);
              self.render();
            })();

            init();
}

var g = new Game();     //initialise game
