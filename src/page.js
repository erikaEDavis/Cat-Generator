createCatButton.addEventListener("click", createRandomCat);
createUserCatButton.addEventListener("click", createUserCat);

let catArray = []; // a place to store / reference all our cats
                   //note [] is just a new empty array and same as saying "new Array()" 

let chiko = new Cat("Chiko", 70, 50, "orange", "gold");
catArray.push(chiko);

let fluffy = new Cat("Fluffy", 400, 25, "#614543", "gold")
catArray.push(fluffy);

window.setInterval(drawAllCats,10);         // draw all our cats from our array every 10 milliseconds
window.setInterval(randomlyMoveCats,500);   // randomly move cats around sometimes

function drawAllCats()
{
    // clear the canvas
    let canvas = document.getElementById('myCanvas') 
    let ctx = canvas.getContext('2d')
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    //call drawCat on all our cats
    for (var i=0; i<catArray.length; i++) // this just loops through our cats in the array
    {
    	catArray[i].drawCat();
    }

    // if we were doing more complex animation we'd likely use an animation library or soemthing which would do this drawing stuff for us. 
}

function randomlyMoveCats()
{
    for (var catArrayIndexCounter=0; catArrayIndexCounter<catArray.length; catArrayIndexCounter++)
    {
      let moveThisCat = Math.random() < .2;

      if (moveThisCat)
      {
        let xMove = Math.floor((Math.random() * 200)-100);
        let yMove = Math.floor((Math.random() * 100)-50);
        catArray[catArrayIndexCounter].moveCat(xMove, yMove);
      }
    }
}

function createRandomCat(){
  let xPos = (Math.random() * 800);
  let yPos = (Math.random() * 600);
  var randomColour1 = "#" + Math.floor(Math.random()*16777215).toString(16);
  var randomColour2 = "#" + Math.floor(Math.random()*16777215).toString(16);
  let chiko = new Cat("", xPos, yPos, randomColour1, randomColour2);
  catArray.push(chiko);
}

function createUserCat(){
  let xPos = (Math.random() * 800);
  let yPos = (Math.random() * 600);
  var catName = typeCatName.value;
  var randomColour1 = html5colorpickerfur.value;
  var randomColour2 = html5colorpickereyes.value;
  let chiko = new Cat(catName, xPos, yPos, randomColour1, randomColour2);
  catArray.push(chiko);
}
