// ==UserScript==
// @name         Red Bread Crossover Userscript
// @namespace    https://github.com/VoltacceptYT/redbreadcrossover
// @version      v0.3.4
// @description  Install the Cookie Valley Mod on the Cookie Clicker Web!
// @author       Void Drifter, Samantha Stahlke
// @icon         https://voltacceptyt.github.io/redbreadcrossover/img/modicon.png
// @match        *://orteil.dashnet.org/cookieclicker/*
// @match        *://om3ga6400.github.io/CookieClicker/*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';
	fetch('https://voltacceptyt.github.io/redbreadcrossover/main.js')
		.then(response => response.text())
		.then(data => {
			const script = document.createElement('script');
			script.textContent = data + `
    		document.getElementById('rowCanvas15').addEventListener('load', function () {
      		function checkGameLoaded() {
        		if (Game.ready) {
          		if (Game.customBuildingsEnabled) {
            		var canvas = document.getElementById('rowCanvas15');
            		if (canvas) {
              		canvas.height = 168;
		              console.log('The Building\'s Canvas height has been extended!');
    		        } else {
        		      console.error('The Building hasn\'t been unlocked!');
		            }
    		      } else {
        		    console.error('The use of Custom Buildings isn\'t enabled!')
		          }
    		    } else {
        		  setTimeout(checkGameLoaded, 100);
		        }
    		  }

    		  checkGameLoaded();
    		});
    `;
			document.body.appendChild(script);
		});
})();
