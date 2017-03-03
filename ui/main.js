console.log('Loaded!');
var counter = document.getElementById("clicker");
var count = document.getElementById("count");

var upCount = function(){
    count.textContent = parseInt(count.textContent) + 1;
};

counter.addEventListener("click", upCount);

console.log('Loaded!2');

var image = document.getElementById("pic");


var marginLeft = 0;
function moveRight(){
    //marginLeft = image.style.marginLeft;
    console.log(marginLeft);
    image.style.marginLeft = marginLeft + 10 + "px";
}

image.onclick = function(){
console.log('Loaded 3!');
  var interval = setInterval(moveRight, 100);  
};

