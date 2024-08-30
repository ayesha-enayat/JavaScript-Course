
// var d=document.getElementById('div1');
// var par=d.getElementsByTagName("p");
// var contents=par[2].innerHTML;


/*Now I'll show you a new way to target the paragraph, by using the DOM organization
chart.*/


//The DOM Parents and children
// console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[2].innerHTML);

var para=document.getElementById("paraClass");
var p=para.getElementsByTagName("p");
console.log(p[0].innerHTML);
console.log(p[1].innerHTML);
console.log(p[2].innerHTML);

var cal=document.getElementById("cal");
var paragraphs=cal.document.getElementsByTagName("p");
var p4=paragraphs[2].innerHTML;
console.log(p4);
