
// ==UserScript==
// @name        SJMBot
// @namespace   SJMBot
// @include     http://agar.io/*
// @version     0.1
// @grant       none
// @author      https://github.com/SJMakin
// ==/UserScript==

window.botList = window.botList || [];

function SJMBot() {
    this.name = "SJMBot";
    
    this.toggleFollow = false;
    
    this.keyAction = function(key) {
        if (81 == key.keyCode) {
            console.log("Toggle Follow Mouse!");
            this.toggleFollow = !this.toggleFollow;
        }
    };

    this.displayText = function() {return [s];};
    this.mainLoop = function() {
        if (toggleFollow) {
            return [screenToGameX(getMouseX()),
                    screenToGameY(getMouseY())];
        }                    
    };
}
window.botList.push(new SJMBot());

window.updateBotList();
