// ==UserScript==
// @name         Red Bread Crossover Userscript
// @namespace    https://github.com/VoltacceptYT/redbreadcrossover
// @version      v0.3.6
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
		if (typeof Game !== 'undefined' && Game.ready) {
			var canvases = document.querySelectorAll('.rowCanvas');
			canvases.forEach(function (canvas) {
				var newCanvas = document.createElement('canvas');
				newCanvas.className = canvas.className;
				newCanvas.id = canvas.id;
				newCanvas.width = canvas.width;
				newCanvas.height = canvas.height + 40;

				var context = newCanvas.getContext('2d');
				context.drawImage(canvas, 0, 0);

				canvas.replaceWith(newCanvas);
			});
			console.log('All building row canvases have been replaced with taller canvases and redrawn.');
		} else {
			setTimeout(checkGameLoaded, 100);
		}
	}

	checkGameLoaded();

})();
