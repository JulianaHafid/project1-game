var Bullet = function(settings)
{

    // Settings
    var bulletElement = null;
    var bulletId = parseInt(settings.bulletId);

    // when a space key is hit, go to this function
    function move(interactions)
    {
      if(interactions.space)
      {
        create();

        var id = setInterval(updatePos, 20);   //update position of target 3px forward at a time
        function updatePos()
        {

          var targetPos = g.getTargetInfo();   //get the #target div position
          var playerPos = g.getPlayerInfo();   //get the #player div position
          var bulletRect = bulletElement.getBoundingClientRect();
          pos = bulletRect.top;

          if (pos <targetPos.top)    //within #target div
          {
             bulletElement.style.visibility = "hidden";
             clearInterval(id);
          }
          else
          {
            pos-=3;
            bulletElement.style.top = pos +'px';
          } //closed else statement
        }//close updatePos()
     } //close if(interactions.space)
    } // function close


    //create the bullet
    function create()
    {
        console.log("create in Bullet class");
        //getPlayer height since everytime bullet create its left position should be same as player left position
        var playerPos = g.getPlayerInfo();

        //set the style for bullet
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

} //close Bullet class
