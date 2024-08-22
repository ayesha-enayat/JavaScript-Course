function makeBig(){
   var para= document.getElementsByTagName("p");
   para[1].style.color="red";

}
function makeBig(){
    var para= document.getElementsByTagName("p");
    for(counter=0;counter<para.length;counter++){
        para[counter].style.color="red";
    }
 
 }


//  var pics = document.getElementsByTagName("img");
//  var divs = document.getElementsByTagName("div");

//  var ulists = document.getElementsByTagName("ul");


function changeColor(){
    
var e=document.getElementById("div1");
var paragraphs=e.getElementsByTagName("p");
for(counter=0;counter<paragraphs.length;counter++){
    paragraphs[counter].style.color="green";
}
}

function changetablecolor(){
    var table = document.getElementById("table1");
    var cells = table.getElementsByTagName("td");
    for(counter=0;counter<cells.length;counter++){
        cells[i].style.backgroundColor="pink";
    }
   
}