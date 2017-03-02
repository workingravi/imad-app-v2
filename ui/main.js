console.log('Loaded!');
var counter = document.getElementById("clicker");
var count = document.getElementById("count");

var upCount = function(){
    count.innerHTML = count.innerHTML + 1;
};

counter.addEventListener("click", upCount);

