var Bullet = function(settings) {

    // Settings
    var bulletElement = null;
    var targetElement = null;


    function wall() {
      var bulletRect = bulletElement.getBoundingClientRect();

      //get width and height of window
      var w = parseInt(window.innerWidth);
      //get width and height of window
      var h = parseInt(window.innerHeight);
      if(bulletRect.top < 100)
      {
        bulletElement.style.display = "none";
        console.log("hide");
      }
    }

    // Move the ball around manually
    function move(interactions){

      var bulletRect = bulletElement.getBoundingClientRect();
      var pos = bulletRect.top;

      if(interactions.space){
        console.log ("Spacebar entered in bullet interation space");
        //bulletElement.style.top = parseInt(bulletRect.top)+8+"px";

        var id = setInterval(frame, 15);
        function frame() {
          if (pos <100) {
             clearInterval(id);
             bulletElement.style.display = "none";
          } else {
            pos-=2;
            bulletElement.style.top = pos +'px';
          }//else close
        }//function frame close
     }


      if(settings.wall){
        wall();
      }

    } // function close


    function create() {
        // Create the object asset
        console.log("create in Bullet class");
    }

    function init(){
      // create();
      var w = parseInt(window.innerWidth);
        //get width and height of window
      var h = parseInt(window.innerHeight);

      //create single bullet positioning
      bulletElement = document.getElementById('bullet');
      bulletElement.style.bottom = '0px';
      bulletElement.style.left = bulletElement.style.left; //50%
      bulletElement.style.height = '50px';
      bulletElement.style.width = '10px';
      bulletElement.style.display = "initial";

      //to create a target
      var i;
      var targetElement= new Array();
      var randomPosLeft = Math.floor(Math.random() * (w - 20));
      var min = Math.ceil(101);
      var max = Math.floor(h-110);
      var randomPosTop = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log("randomTop: "+randomPosTop);
      targetElement[i]= document.getElementById('target');
      targetElement[i].style.top = randomPosTop+'px';
      targetElement[i].style.left = randomPosLeft+'px';
      targetElement[i].style.height = '50px';
      targetElement[i].style.width = '50px';
      i++;
      console.log("Target Length: "+targetElement.length);
      console.log("I am in init bullet");


    }

    this.render = function(interactions){
      //create();
      move(interactions);
    }

    init();
}
