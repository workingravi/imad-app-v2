console.log('Loaded!');
var counter = document.getElementById("clicker");
var count = document.getElementById("count");

var upCount = function(){
    count.textContent = parseInt(count.textContent) + 1;
};

counter.addEventListener("click", upCount);

