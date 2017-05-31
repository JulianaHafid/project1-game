var Target = function(settings)
{
    // Settings
    var targetElement = null;
    var maxTarget = parseInt(settings.maxTarget);
    var targetId = parseInt(settings.targetId);


    function create(targetId)
    {       // Create the targets
        var interval = setInterval(function()
        {
          var targetPos = g.getTargetInfo();
          var topMin = Math.ceil(50);
          var topMax = Math.floor(targetPos.height - 70); //70 = give buffer to be in the height container
          var leftMin = Math.ceil(10);
          var leftMax = Math.floor(targetPos.width - 50);  //50 = give buffer to be in the width of container
          var randomPosTop = Math.floor(Math.random() * (topMax - topMin + 1)) + topMin;
          var randomPosLeft = Math.floor(Math.random() * (leftMax - leftMin + 1)) + leftMin;
          //console.log("topMax: " + topMax + " -> randomTop: "+randomPosTop + " : " +randomPosLeft);
          targetElement= document.createElement('span');
          targetElement.className = targetId;
          targetElement.style.height = '50px';
          targetElement.style.width = '50px';
          targetElement.style.position = "absolute";
          targetElement.style.top = randomPosTop +'px';
          targetElement.style.left = randomPosLeft +'px';
          targetElement.style.borderRadius="50%";
          targetElement.style.margin='15px';
          targetElement.style.backgroundColor="rgb(253, 13, 255)";
          document.getElementById('target').appendChild(targetElement);
          clearInterval(interval);
        }, 1000); //interval 1 sec (1000ms)

    }

    function init(){
      // create();
    }

    this.render = function(interactions)
    {

      if(maxTarget!=0) //need to check also collision , if collide create new ball if not ball overla
      {
        create(targetId);
        maxTarget--;
        targetId++;
        //console.log("MaxTarget: " + maxTarget);
      }
    }

    init();
}
