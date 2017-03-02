console.log('Loaded!');
var counter = document.getElementById("clicker");

var upCount = function(){
    counter.innerHTML = counter.innerHTML + 1;
};

counter.addEventListener("click", upCount);

