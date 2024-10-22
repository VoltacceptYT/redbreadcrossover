// ==UserScript==
// @name         Red Bread Crossover Userscript
// @namespace    https://github.com/VoltacceptYT/redbreadcrossover
// @version      v0.3.5
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
				// Get all canvas elements with the class 'rowCanvas'
				var canvases = document.querySelectorAll('.rowCanvas');
				canvases.forEach(function (canvas) {
					// Create a new canvas element with the same attributes but a taller height
					var newCanvas = document.createElement('canvas');
					newCanvas.className = canvas.className;
					newCanvas.id = canvas.id;
					newCanvas.width = canvas.width;
					newCanvas.height = canvas.height + 40; // Increase height by 20px

					// Replace the old canvas with the new one
					canvas.replaceWith(newCanvas);
				});
				console.log('All building row canvases have been replaced with taller canvases.');
			} else {
				// Retry after a short delay if the game is not ready
				setTimeout(checkGameLoaded, 100);
			}
		}

		// Start checking if the game has loaded
		checkGameLoaded();
})();
