var Bullet = function(settings)
{

    // Settings
    var bulletElement = null;
    var bulletId = parseInt(settings.bulletId);
    var maxTarget = parseInt(settings.maxTarget);
    var targetId = parseInt(settings.targetId);
    var points1 = parseInt(settings.points1);

    // when a space key is hit, go to this function
    function move(interactions)
    {
      if(interactions.space)
      {
        create();
        var id = setInterval(updatePos, 30);   //update position of target 3px forward at a time
        function updatePos()
        {

          var targetPos = g.getTargetInfo();   //get the #target div position
          var playerPos = g.getPlayerInfo();   //get the #player div position
          var audio = document.getElementById("audioTargetBurst");

          var bulletRect = bulletElement.getBoundingClientRect();
          pos = bulletRect.top;
          //console.log("Timer from gameboard: " +g.getTimer());

          if (pos <targetPos.top)    //within #target div
          {
             clearBullet();
             clearInterval(id);
          }
          else
          {
            pos-=3;
            bulletElement.style.top = pos +'px';
            //check bullet against each and every target if it intersects
            var targetObject = g.getTarget();

            var targetEl = document.getElementById("target");
            targetEl.style.backgroundImage = "url('./images/dashup.png')";

            for(var i = 0; i < targetObject.getTargetId(); i++)
              {
                //check if there is any intersection
                if(intersection(i))
                  {
                    //hide the target that == targetId remove the bullet element else it will keep moving up
                    //increment points
                    var targetElement = document.getElementById("target").getElementsByTagName('span')[i];
                    var targetPos = targetElement.getBoundingClientRect();
                    audio.play();
                    targetElement.style.display = "none";                //cannot be visibility:hidden else when bullet hit still detect intersection
                    console.log(points1 ++);
                    if (g.getTimer()>3)          //create new target if time left has at least 3 second
                    {
                      var targetObject = g.getTarget();
                      targetObject.create();
                      //target.create();
                    }
                  }
              } // close for statement

          } //closed else statement

        }//close updatePos()
     } //close if(interactions.space)
    } // function close

    function clearBullet()
    {
      var bulletContainer= document.getElementById('containerId')
      var bullet = document.getElementById("bullet");
        if(bullet)
        {
          bulletContainer.removeChild(bullet);
        }
    }

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
        bulletElement.style.position = 'absolute';
        bulletElement.style.height = '20px';
        bulletElement.style.width = '20px';
        bulletElement.style.top = (playerPos.top+50)+"px";
        bulletElement.style.left = (playerPos.left + 45)+"px";     //bullet left = player left + 45 (make it centre)
        //bulletElement.style.backgroundColor="rgb(232, 12, 234)";
        bulletElement.style.backgroundImage = "url('./images/pink-star.png')";
        document.getElementById('containerId').appendChild(bulletElement);
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
      return bx < (tx + tw) &&
             (bx + bw) > tx &&
             by < (ty + th) &&
             (by + bh) > ty;
    }

    this.getPoints = function()
    {
        return points1;
    }

    this.checkWinner = function()
    {
      if(points1!=0)
        point
    }

    this.render = function(interactions)
    {
      move(interactions);
    }

    init();

} //close Bullet class
