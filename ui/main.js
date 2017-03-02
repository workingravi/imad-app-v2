console.log('Loaded!');
var counter = document.getElementById("clicker");

var upCount = function(){
    counter.textContent = counter.textContent + 1;
};

counter.addEventListener("click", upCount);

