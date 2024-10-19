// ==UserScript==
// @name         Cookie Valley Userscript
// @namespace    https://github.com/VoltacceptYT/cookievalley
// @version      v0.3
// @description  Install the Cookie Valley Mod on the Cookie Clicker Web!
// @author       Void Drifter, Samantha Stahlke
// @icon         https://raw.githubusercontent.com/VoltacceptYT/cookievalley/refs/heads/main/img/modicon.png
// @match        *://orteil.dashnet.org/cookieclicker/*
// @match        *://om3ga6400.github.io/CookieClicker/*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	Game.registerMod('CookieValley Web Enabler', {
		init: function () {
			Game.UpdateMenu = function () {
				if (Game.onMenu === 'prefs') {
					let str = '<div class="listing"><a class="option" onclick="Game.mods[\'CookieValley Web\'].toggle()">Toggle Cookie Valley Mod</a></div>';
					l('menu').innerHTML += str;
				}
			};

			this.enabled = false;
		},
		toggle: function () {
			this.enabled = !this.enabled;

			if (this.enabled) {
				if (!document.getElementById('cookie_valley')) {
					fetch('https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/main.js')
						.then(response => response.text())
						.then(data => {
							const script = document.createElement('script');
							script.textContent = data;
							script.id = 'cookie_valley';
							document.body.appendChild(script);
						})
						.catch(error => console.error('Error Fetching Mod:', error));
				}
			} else {
				const script = document.getElementById('cookie_valley');
				if (script) {
					document.body.removeChild(script);
				}
			}
		}
	});

	Game.LoadMod('CookieValley Web Enabler');
})();
