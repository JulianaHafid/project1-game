var Target = function(settings)
{
    // Settings
    var targetElement = null;
    var maxTarget = parseInt(settings.maxTarget);
    var targetId = parseInt(settings.targetId);

    // Create the targets
    this.create = function()
    {
        var interval = setInterval(function()
        {

          targetId++;

          //get random position
          var targetPos = g.getTargetInfo();
          targetPos.innerWidth;
          var topMin = Math.ceil(10);
          var topMax = Math.floor(targetPos.height - 400); //200 = give buffer so that it will not be towards the bottom
          var leftMin = Math.ceil(10);
          var leftMax = Math.floor(targetPos.width - 180);  //50 = give buffer to be in the width of container

          var randomPosTop = Math.floor(Math.random() * (topMax - topMin + 1)) + topMin;
          var randomPosLeft = Math.floor(Math.random() * (leftMax - leftMin + 1)) + leftMin;

          //set all targetElement style
          targetElement= document.createElement('span');
          targetElement.className = targetId;
          targetElement.style.height = '171px';
          targetElement.style.width = '200px';
          targetElement.style.position = "absolute";
          targetElement.style.top = randomPosTop +'px';
          targetElement.style.left = randomPosLeft +'px';
          targetElement.style.borderRadius = "50%";
          targetElement.style.margin = '20px';
          //targetElement.style.backgroundColor="rgb(253, 13, 255)";
          targetElement.style.backgroundImage = "url('./images/balloonpolkapink.png')";
          targetElement.style.backgroundSize = "100% 100%";
          targetElement.style.backgroundRepeat = "no-repeat";
          document.getElementById('target').appendChild(targetElement);
          clearInterval(interval);                //stop the interval
        }, 1000); //interval 1 sec (1000ms)

    }


    this.getTargetId = function ()
    {
      return targetId;
    }

    function init(){
      // create();
    }

    this.render = function(interactions)
    {

      if(maxTarget!=0) //need to check also collision , if collide create new ball if not ball overla
      {
        this.create();
        maxTarget--;
        //console.log("MaxTarget: " + maxTarget);
      }
    }

    init();
}
