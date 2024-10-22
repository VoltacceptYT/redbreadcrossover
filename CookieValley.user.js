// ==UserScript==
// @name         Red Bread Crossover Userscript
// @namespace    https://github.com/VoltacceptYT/redbreadcrossover
// @version      v0.3.7
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
			script.textContent = data;
			document.body.appendChild(script);
		});
    function checkGameLoaded() {
      if (typeof Game !== 'undefined' && Game.ready && Game.customBuildingsEnabled) {
          var canvases = document.querySelectorAll('.rowCanvas');
          canvases.forEach(function (canvas) {
              canvas.className = canvas.className;
              canvas.id = canvas.id;
              canvas.width = canvas.width;
              canvas.height = canvas.height  * 2;
          });
      } else {
          setTimeout(checkGameLoaded, 100);
      }
  }
  
  checkGameLoaded();
})();
