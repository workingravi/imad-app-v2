console.log('Loaded!');


var commentObj = document.getElementById("comment");
var subComment = document.getElementById("submit_comment");

subComment.onclick = function(){
  
  //1. Create request
  var req = new XMLHttpReques();
  
  
  //2. Deal with response
    req.onreadystatechange = function(){
        if(req.readyState === XMLHttpRequest.DONE){
            if(req.status === 200){
                var comments = JSON.parse(req.responseText);
                var i, n = 0;
                
                var clist='';
                for(i = 0, n = comments.length; i<n; i++){
                    clist += "<li>" + comments[i] + "</li>";
                }
                
                var numComments = document.getElementById("num_cs");
                numComments.textContent = n;
                cl.innerHTML = clist;
            }
        }
    };
  
  //3. Make request
    var comment = commentObj.value;
    req.open("GET", "http://workingravi.imad.hasura-app.io/comments?comment="+comment, true);
    req.send(null);
};

