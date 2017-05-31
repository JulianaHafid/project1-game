var Bullet = function(settings)
{

    // Settings
    var bulletElement = null;
    var bulletId = parseInt(settings.bulletId);
    var maxTarget = parseInt(settings.maxTarget);
    var points1 = parseInt(settings.points1);

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
            //check bullet against each and every target if it intersects
            for(var i = 0; i < maxTarget; i++)
              {
                //check if there is any intersection
                if(intersection(i))
                  {
                    //hide the target that == targetId
                    //remove the bullet element else it will keep moving up
                    //increment point variable by 50
                    var targetElement = document.getElementById("target").getElementsByTagName('span')[i];
                    var targetPos = targetElement.getBoundingClientRect();
                    targetElement.style.visibility = "hidden";
                    points1 += 50;

                    //bulletElement.classList.remove("bullet");
                  }
              }


          } //closed else statement

        }//close updatePos()
     } //close if(interactions.space)
    } // function close

    //create the bullet
    function create()
    {
        console.log("create in Bullet class");
        //getPlayer height since everytime bullet create its left position should be same as player left position
        //var playerElement = document.getElementById('player');
        //var playerRect = playerElement.getBoundingClientRect();
        var playerPos = g.getPlayerInfo();

        //set the style for bullet
        bulletElement = document.createElement('span');
        bulletElement.id = ("bullet");
        //bulletElement.className = "bullet";
        bulletElement.style.position = 'absolute';
        bulletElement.style.height = '50px';
        bulletElement.style.width = '10px';
        bulletElement.style.top = playerPos.top+"px";
        bulletElement.style.left = (playerPos.left + 45)+"px";     //bullet left = player left + 45 (make it centre)
        bulletElement.style.backgroundColor="rgb(255, 105, 13)";
        document.getElementById('containerId').appendChild(bulletElement);
        //bulletId++;
    }

    function init()
    {

    }

    //there are so many target, here is to get the
    //position of each target
    function intersection(i)
    {
      //all bullet position
      var bulletRect = bulletElement.getBoundingClientRect();     //get position both target and bullet (height(h),width(w),left(x),top(y))
      var by  = bulletRect.top;
      var bx = bulletRect.left;
      var bw = bulletRect.width;
      var bh = bulletRect.height;

      //all target position
      var targetElement = document.getElementById("target").getElementsByTagName('span')[i];
      var targetPos = targetElement.getBoundingClientRect();
      var ty = targetPos.top;
      var tx = targetPos.left;
      var tw = targetPos.width;
      var th = targetPos.height;

      //a - bullet b = target
      return bx < tx + tw && bx + bw > tx && by < ty + th && by + bh > ty;
    }



    this.render = function(interactions)
    {
      move(interactions);
    }

    init();

} //close Bullet class
