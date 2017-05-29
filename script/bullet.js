var Bullet = function(settings) {

    // Settings
    var bulletElement = null;
    var targetElement = null;
    var maxTarget = parseInt(settings.maxTarget);

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
            pos-=3;
            bulletElement.style.top = pos +'px';
          }//else close
        }//function frame close
     }


      if(settings.wall){
        wall();
      }

    } // function close


    function create(maxTarget) {
        //var w = parseInt(window.innerWidth);
        //get width and height of window
        var w = document.getElementById('target').clientWidth;
        var h = document.getElementById('target').clientHeight;
        var maxTarget = 20;
        //var h = parseInt(window.innerHeight);
        // Create the object asset
        console.log("create in Bullet class");
        //to create a target
        //var i = Math.floor(Math.random() * 20);

            //test : var targetElement = new Array();
            //targetElement.document.createElement('div');
            var topMin = Math.ceil(50);
            var topMax = Math.floor(h-70); //70 = give buffer to be in the height container
            var leftMin = Math.ceil(10);
            var leftMax = Math.floor(w - 50);  //50 = give buffer to be in the width of container
            var randomPosTop = Math.floor(Math.random() * (topMax - topMin + 1)) + topMin;
            var randomPosLeft = Math.floor(Math.random() * (leftMax - leftMin + 1)) + leftMin;
            console.log("randomTop: "+randomPosTop);
            targetElement= document.createElement('span');
            //targetElement.className = (target + "i");
            //targetElement.setAttribute("class",target + "i");
            targetElement.style.height = '50px';
            targetElement.style.width = '50px';
            targetElement.style.position = "absolute";
            targetElement.style.top = randomPosTop+'px';
            targetElement.style.left = randomPosLeft+'px';
            targetElement.style.borderRadius="50%";
            targetElement.style.backgroundColor="rgb(253, 13, 255)";
            document.getElementById('target').appendChild(targetElement);
            //i++;
            console.log("Target length: "+targetElement.length);
            console.log("I am in init bullet");

          //}


        //cardElement = document. createElement('img');
    		//cardElement.setAttribute('src',"images/back.png");
        //cardElement.setAttribute('data-id',i);
        //cardElement.addEventListener('click', flipcard);
        //appendChild;

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
    }

    this.render = function(interactions){
      if(maxTarget!= 0)
      {
        setInterval(create(maxTarget),2000);
        //create(maxTarget);
        maxTarget--;
        console.log("MaxTarget: " + maxTarget);
      }
      move(interactions);
    }
    init();


}
