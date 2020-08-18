var dog,dogimg,happydog,dogstock,hunger,hung,stock,happydogimg
function preload()
{
  dogimg=loadImage("images/Dog.png")
happydogimg=loadImage("images/happydog.png")
	//load images here
}

function setup() {
  createCanvas(800, 700);
  
  database=firebase.database();
  dog=createSprite(400,350,20,20)
  dog.addImage("dig",dogimg);
  dog.addImage("den",happydogimg)
  dog.scale=0.5;
hunger=database.ref('Food')
hunger.on("value",readHunger)

}


function draw() {  
background(46,139,87)
if(keyWentUp(UP_ARROW)){
  writeFoodLeft(hung)
 dog.changeImage("den")
}
dog.changeImage("dig")
text(hung,100,100);
  drawSprites();
  //add styles here

}

function readHunger(data){
hung=data.val();
}
function writeFoodLeft(a){
 if(a<=0){
   a=0;
 }else{
   a=a-1
 } 
  database.ref("/").update({
    Food:a
  })
  
}


