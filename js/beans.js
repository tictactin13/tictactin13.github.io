/* To any beginners looking at my code and not seeing clearly how it works.
 * send me a message:justinjesalva13@gmail.com
 * I'd love to be of some help to you!
 * There's not a better feeling than learning together!
 */
/*jslint plusplus: true */ //this line is a fix for JSlint allowing it see ++ or -- as proper code when incrementing or decrementing. Fix found from stackoverflow.
var BeansAndToast = (function () {
    "use strict";
    var burgerbtn = document.getElementById("burgerIcon"),
        menuEl = document.getElementById("topMenu"),
        menuItems = document.querySelectorAll("li.menu-bold"),
        menuContainer = document.querySelector("ul.menu-list"),
        bodyEl = document.getElementsByTagName("body"),
        slideEl = document.querySelectorAll(".js-slide"),
        inputEl = document.querySelectorAll(".js-input"),
        labelEl = document.querySelectorAll(".js-label"),
        textAreaEl = document.getElementById("projectDetails");
    
    function slide() {
        if ((menuEl.classList.contains("active"))){
            setTimeout(function(){ menuEl.classList.toggle("active"); }, 100);
            setTimeout(function(){ menuEl.classList.toggle("background"); }, 600);//the value of the delay is based on the length of the slide transition.
            setTimeout(function(){ menuContainer.classList.toggle("visible"); }, 100);
        } else if (!(menuEl.classList.contains("active"))){
            setTimeout(function(){ menuEl.classList.toggle("active"); }, 300);//delays the slide so opacity can be transformed first.
            menuEl.classList.toggle("background");
            setTimeout(function(){ menuContainer.classList.toggle("visible"); }, 700);
        }
        bodyEl[0].classList.toggle("nav-active");//stop scroll on full screen menu

    }
    function btnActive() {
        burgerbtn.classList.toggle("active");
    }
    function menuActivate() {
        btnActive();
        slide();
    }
    window.onscroll = function() {
        autoslideMenu();
    };
    function autoslideMenu() {
        if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
            menuEl.classList.add("idle");
            for (var i = 0; i < slideEl.length; i++) {
                slideEl[i].className += ' idle';
            }
        }   else {
            menuEl.classList.remove("idle");
            menuEl.classList.add("menu");
            for (var i = 0; i < slideEl.length; i++) {
                slideEl[i].classList.remove("idle");
            }
        }
    }
    
    function labelSlideOut() {
        
        if (inputEl[0] === document.activeElement){
            labelEl[0].classList.add("active");
        }
        if (inputEl[1] === document.activeElement){
            labelEl[1].classList.add("active");
        }
        if (inputEl[2] === document.activeElement){
            labelEl[2].classList.add("active");
        }
        if (inputEl[3] === document.activeElement){
            labelEl[3].classList.add("active");
        }
        if (inputEl[4] === document.activeElement){
            labelEl[4].classList.add("active");
        }
    }
    function labelSlideIn() {
        
        if (inputEl[0].value == ""){
            labelEl[0].classList.remove("active");
            inputEl[0].classList.remove("hl");
        } else if(!(inputEl[0].value == "")){
            inputEl[0].classList.add("hl");
        }
        
        if (inputEl[1].value == ""){
            labelEl[1].classList.remove("active");
            inputEl[1].classList.remove("hl");
        } else if(!(inputEl[1].value == "")){
            inputEl[1].classList.add("hl");
        }
        
        if (inputEl[2].value == ""){
            labelEl[2].classList.remove("active");
            inputEl[2].classList.remove("hl");
        } else if(!(inputEl[2].value == "")){
            inputEl[2].classList.add("hl");
        }
        
        if (inputEl[3].value == ""){
            labelEl[3].classList.remove("active");
            inputEl[3].classList.remove("hl");
        } else if(!(inputEl[3].value == "")){
            inputEl[3].classList.add("hl");
        }
        
        if (inputEl[4].value == ""){
            labelEl[4].classList.remove("active");
            inputEl[4].classList.remove("active");
            inputEl[4].classList.remove("hl");
        } else if(!(inputEl[4].value == "")){
            inputEl[4].classList.add("hl");
        }
    }
               
    
    for (var i = 0; i < inputEl.length; i++){
        inputEl[i].addEventListener("focus", labelSlideOut, false);
    }
    for (var i = 0; i < inputEl.length; i++){
        inputEl[i].addEventListener("blur", labelSlideIn, false);
    }
        
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", menuActivate, false);
    }
    
    
    textAreaEl.addEventListener("blur", labelSlideIn, false);
    burgerbtn.addEventListener("click", menuActivate, false);
}());










