console.log('Loaded!');
var counter = document.getElementById("clicker");
var count = document.getElementById("count");

var upCount = function(){
    count.textContent = parseInt(count.textContent) + 1;
};

counter.addEventListener("click", upCount);

var image = document.getElementById("pic");

//var marginLeft = 0;
moveRight = function(){
    var marginLeft = image.style.marginLeft;
    console.log('Loaded!');
    image.style.marginLeft += 10 + "px";
}

image.onClick = function(){
  var interval = setInterval(moveRight, 100);  
};

