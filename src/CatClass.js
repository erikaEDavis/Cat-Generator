class Cat {
  constructor(name, x, y, furColour, eyeColour) {
    this.headWidth = 150;
    this.headHeight = 150;
    this.bodyWidth = 250;
    this.bodyHeight = 150;
    this.name = name;
    this.x = x;
    this.y = y;
    this.targetX=x;
    this.targetY=y;
    this.furColour = furColour;
    this.eyeColour = eyeColour;

    if (furColour === undefined) {
      this.furColour = "grey";
    } else {
      this.furColour = furColour;
    }

    if (eyeColour === undefined) {
      this.eyeColour = "black";
    } else {
      this.eyeColour = eyeColour;
    }

  let canvas = document.getElementById('myCanvas') 
  this.ctx = canvas.getContext('2d')

  }
  showInConsole() {
    console.log(
      "my name is ",
      this.name,
      "x is ",
      this.x,
      "y is ",
      this.y,
      "my fur Colour is ",
      this.furColour,
      "my eye colour is ",
      this.eyeColour
    );
  }

  drawBody() {
    this.ctx.fillStyle = this.furColour;
    this.ctx.fillRect(this.x + 75, this.y + 75, this.bodyWidth, this.bodyHeight);
  }

  drawLegs() {
    let legWidth = 50;
    let legHeight = 70;
    this.ctx.fillStyle = this.furColour;

    //Front Legs
    this.ctx.fillRect(
      this.x + 75,
      this.y + this.bodyHeight + this.bodyHeight / 2,
      legWidth,
      legHeight
    );

    //Back Legs
    this.ctx.fillRect(
      this.x + this.bodyWidth + 25,
      this.y + this.bodyHeight + this.bodyHeight / 2,
      legWidth,
      legHeight
    );
  }

  drawTail(){
    let tailWidth = 40;
    let tailHeight = 150;
    this.ctx.fillStyle = this.furColour;
    this.ctx.fillRect(
      this.x + this.bodyWidth + 35,
      this.y - this.bodyHeight/2,
      tailWidth,
      tailHeight
    );
  }
  
  drawHead() {
//    console.log(this.x, this.y, this.headWidth, this.headHeight);
   this.ctx.fillStyle = this.furColour;
   this.ctx.fillRect(this.x + 0, this.y + 0, this.headWidth, this.headHeight);
  }

  drawEyes() {
    let eyeSize = 20;
    //Right Eye
    this.ctx.fillStyle = this.eyeColour;
    this.ctx.fillRect(this.x + 30, this.y + 50, eyeSize, eyeSize);

    //Left Eye
    this.ctx.fillStyle = this.eyeColour;
    this.ctx.fillRect(this.x + 100, this.y + 50, eyeSize, eyeSize);
  }

  drawNose() {
    let noseSize = 20;
    this.ctx.fillStyle = "pink";
    this.ctx.fillRect(
      this.x + this.headWidth / 2 - noseSize / 2,
      this.y + this.headHeight / 2 - noseSize / 2,
      noseSize,
      noseSize
    );
  }

  drawEars() {
    //Right Ear
    this.ctx.fillStyle = this.furColour;
    this.ctx.fillRect(this.x, this.y - 30, 40, 30);
    this.ctx.fillRect(this.x, this.y - 40, 20, 20);

    //Left Ear
    this.ctx.fillStyle = this.furColour;
    this.ctx.fillRect(this.x + 110, this.y - 30, 40, 30);
    this.ctx.fillRect(this.x + 130, this.y - 40, 20, 20);
  }

  drawMouth() {
    this.ctx.font = "40px Calibri";
    this.ctx.fillStyle = "black";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "w",
      this.x + this.headWidth / 2,
      this.y + this.headHeight * 0.75
    );
  }

  drawCatName() {
    let namePadding = 50;
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      this.name,
      this.x + this.headWidth / 2,
      this.y + this.headHeight + namePadding
    );
  }

  drawCat() {

    this.moveCatInternal();

    this.drawBody();
    this.drawLegs();
    this.drawTail();
    this.drawHead();
    this.drawEyes();
    this.drawNose();
    this.drawEars();
    this.drawMouth();
    this.drawCatName();

    
  }

 	
	moveCat(distanceX, distanceY){
			this.targetX = this.x + distanceX
			this.targetY = this.y + distanceY
		}
    

   moveCatInternal()
    {
      /*
      	So the concept here is we have a real position, and a target position...
      	the draw cat will be called many times a second... 
        each draw will erase the canvas - and redraw all the cats
        
        so we want to slowly move the cat from where it is to its target
        
        we could do this WAY better / more smoothly with more maths,  but you get the idea
      */
    
     	if (this.x<this.targetX)
    	  this.x++;
      if (this.x>this.targetX)
    	  this.x--;
        
      if (this.y<this.targetY)
    	  this.y++;
      if (this.y>this.targetY)
    	  this.y--;
     }
}
