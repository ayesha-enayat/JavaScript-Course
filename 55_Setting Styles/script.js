function makeBig(){
    let big = document.getElementById("big").style.fontSize="2em";
}
function textBig(){
    let big=document.getElementById("text").style.visibility="hidden";
}


// it'll tell you only the margins specified inline, if any. If margins are specified in css, you
// won't get them. The following statement gives you all the style properties, specified in both css
// and inline

// var m = document.getComputedStyle("mainPic").margin;