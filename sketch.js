//Create variables here
var dog,happydog,database,foodS,foodStock

function preload()
{dog.loadImage("images/doglmg.png")
  //load images here
  happydog.loadImage("images/doglmg1,png")
}

function setup() {
	createCanvas(500,500);
  var dog =createSprite(200,200)
  foodStock=database.ref('food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(happydog)
}
  drawSprites();
  //add styles here

}



