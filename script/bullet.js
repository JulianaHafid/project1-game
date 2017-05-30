var Bullet = function(settings) {

    // Settings
    var bulletElement = null;
    var bulletId = parseInt(settings.bulletId);


    function wall() {

    }

    // Move the ball around manually
    function move(interactions){


      if(interactions.space){

        create();

        //update position of target 3px forward at a time
        //bulletElement.style.visibility = "hidden";
        var id = setInterval(frame, 20);
        function frame() {

          var targetPos = g.getTargetInfo();   //get the #target div position
          var playerPos = g.getPlayerInfo();   //get the #player div position
          var bulletRect = bulletElement.getBoundingClientRect();
          pos = bulletRect.top;

          if (pos <targetPos.top) {  //within targetPos.top

             bulletElement.style.visibility = "hidden";
             clearInterval(id);
             //bulletElement.style.bottom = playerPos.bottom;

          } else {
            pos-=3;
            //bulletElement.style.visibility = "visible";
            bulletElement.style.top = pos +'px';
          }//else close
        }//function frame close
     }

    } // function close


    function create() {

        console.log("create in Bullet class");
        //getPlayer height since everytime bullet create its left position should be same as player left position
        var playerPos = g.getPlayerInfo();

        //create bullet

        bulletElement = document.createElement('span');
        bulletElement.id = ("bullet");
        bulletElement.className = ""+bulletId;
        bulletElement.style.position = 'absolute';
        bulletElement.style.height = '50px';
        bulletElement.style.width = '10px';
        //bulletElement.style.bottom = '0px';
        bulletElement.style.top = playerPos.top+"px";
        bulletElement.style.left = (playerPos.left + 45)+"px";     //bullet left = player left + 45 (make it centre)
        bulletElement.style.backgroundColor="rgb(255, 105, 13)";
        //bulletElement.style.visibility = "hidden";
        document.getElementById('containerId').appendChild(bulletElement);

        bulletId++;

    }



    function init(){

    }

    this.render = function(interactions){
      move(interactions);
    }

    init();


}
