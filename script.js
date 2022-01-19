'use strict'

var hamburger = document.getElementById("hamburger")
var nav = document.getElementById("full-nav");
var closebtn = document.getElementById("closebtn")
var avatar = document.getElementById("avatar")
var body = document.body;
e.preventDefault()


// code to open and close overlay navigation
function showNav(){
    nav.style.visibility = "visible";
}

function closeNav(){
    nav.style.visibility = "hidden";
}

hamburger.addEventListener("click", showNav);

closebtn.addEventListener("click", closeNav);
// 


// setTimeout(function() {
//     if(body.classList.contains('fade-out')){
//         console.log('navigating...');
//         if(!e.srcElement.parentElement.href){
//             window.location = e.srcElement.href;
//         }else{
//             window.location = e.srcElement.parentElement.href;
//         }
//     }else{
//         console.log('whoops', e.srcElement.parentElement.href)
//     }
// }, 500)
// body.classList.add('fade-out')



