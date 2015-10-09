
// ==UserScript==
// @name        SJMBot
// @namespace   SJMBot
// @include     http://agar.io/*
// @version     0.1
// @grant       none
// @author      https://github.com/SJMakin
// ==/UserScript==

window.botList = window.botList || [];

function QuickBot() {
    this.name = "SJMBot";
    this.keyAction = function(key) {w};
    this.displayText = function() {return [s];};
    this.mainLoop = function() {
        return [screenToGameX(getMouseX()),
                screenToGameY(getMouseY())];
    };
}
window.botList.push(new QuickBot());

window.updateBotList();
