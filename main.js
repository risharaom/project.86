var canvas = new fabric.Canvas('myCanvas');
block_y=1;
block_x=1;

block_image_width = 235;
block_image_height = 235;

var block_image_object= "";

function new_image(get_image)
{
   fabric.Image.fromURL(get_image, function(Img) {
   block_image_object = Img;
       
   block_image_object.scaleToWidth(block_image_width);
   block_image_object.scaleToHeight(block_image_height);
   block_image_object.set({
   top:block_y,
   left:block_x
   });
   canvas.add(block_image_object);

   });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
var test = document.getElementById("LOL");
document.getElementById("hidden").style.display="inline-block";

   if(keyPressed == '82')
   {
       
       new_image('useThisRed.jpeg'); 
       console.log("r");
       window.alert("You pressed r. So you will now see a Red Rose");
      test.innerHTML="RED."+ " My LeftOffset is "+ test.offsetLeft
   }
   if(keyPressed == '80')
   {
       block_x = 200;
       new_image('pink.jpeg'); 
       console.log("p");
       window.alert("You pressed p. So you will now see a Pink Rose");
       test.innerHTML="PINK."+ " My LeftOffset is "+ test.offsetLeft
   }
   
   if(keyPressed == '89')
   {
       block_x =400;
       new_image('yellow.jpeg'); 
       console.log("y");
       window.alert("You pressed y. So you will now see a Yellow Rose");
       test.innerHTML="YELLOW."+ " My LeftOffset is "+ test.offsetLeft
   }
   if(keyPressed == '66')
   {
       block_x = 800;
       new_image('blue.jpeg'); 
       console.log("b");
       window.alert("You pressed b. So you will now see a Blue Rose");
       test.innerHTML="BLUE."+ " My LeftOffset is "+ test.offsetLeft
   }
   if(keyPressed == '71')
   {
       block_x = 600;
       new_image('green.jpeg'); 
       console.log("g");
       window.alert("You pressed g. So you will now see a Green Rose");
       test.innerHTML="GREEN."+ " My LeftOffset is "+ test.offsetLeft
   }
   
}

