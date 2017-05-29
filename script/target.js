var Target = function(settings) {

    // Settings
    //var targetElement = null;
    var bullets = [];

    /*
    bottom:265
    height:100
    left:400
    right:500
    top:165
    width:100
*/

    function wall() {
      //to get the height width left right
      var playerRect = playerElement.getBoundingClientRect();

      //get width and height of window
      var w = parseInt(window.innerWidth);
        //get width and height of window
      var h = parseInt(window.innerHeight);

      //dont need playerRect.bottom  since player move left / right only and bullet move up only
      /*if(playerRect.bottom > h){
        // w subtract
        playerElement.style.top = (h-playerRect.height) + 'px';
      }*/

      if(playerRect.left < 0){
          playerElement.style.left = '0px';
      }

      if(playerRect.right > w){
          // w subtract
          playerElement.style.left = ( w - playerRect.width) + 'px' ;
      }

    }

    // Move the ball around manually
    function move(interactions){
      var playerRect = playerElement.getBoundingClientRect();
      //console.log("just in move interation player");
      //var playerLeftPos = playerRect.left;

      //dont need the down key and up...moving up is spacebar
      /*
      if(interactions.up){
        playerElement.style.top = parseInt(playerElement.style.top)-8+"px";
      }


      if(interactions.down){
        playerElement.style.top = parseInt(playerElement.style.top)+8+"px";
      }*/

      //get the .left position cannot get from init as its initliase to centre of the page
      if(interactions.left){
        playerElement.style.left = parseInt(playerRect.left)-8+"px";
      }

      if(interactions.right){
        playerElement.style.left = parseInt(playerRect.left)+8+"px";
      }


      if(settings.walls){
        wall();
      }
    }

    function create() {
        // Create the object asset
    }

    function init(){
      // create();
      playerElement = document.getElementById('player');
      playerElement.style.bottom = '5';
      playerElement.style.left = '50%'; //50%
      playerElement.style.height = '50px';
    }

    this.render = function(interactions){
      //console.log("player render");
      move(interactions);

    }

    init();
}
