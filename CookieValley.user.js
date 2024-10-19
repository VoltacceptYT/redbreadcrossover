// ==UserScript==
// @name         Cookie Valley Userscript
// @namespace    https://github.com/VoltacceptYT/cookievalley
// @version      v0.2.3
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
			if (!document.getElementById('cookie_valley_enabler')) {
				const originalUpdateMenu = Game.UpdateMenu;
				Game.UpdateMenu = function () {
					originalUpdateMenu();
					if (Game.onMenu === 'prefs') {
						const menu = document.getElementById('menu');
						let section = Array.from(menu.getElementsByClassName('subsection')).find(subsection => subsection.innerText.includes('Cookie Valley Web'));
						if (!section) {
							section = document.createElement('div');
							section.className = 'subsection';
							section.innerHTML = '<div class="title">Cookie Valley Web</h2>';
							const lastSubsection = menu.querySelector('.subsection:last-of-type');
							lastSubsection.insertAdjacentElement('afterend', section);
						}
						if (!document.getElementById('cookie_valley_enabler')) {
							const str = '<div id="cookie_valley_enabler" class="listing"><a class="smallFancyButton prefButton option off" onclick="Game.mods[\'CookieValley Web Enabler\'].toggle()">Toggle Cookie Valley Mod</a></div>';
							section.insertAdjacentHTML('beforeend', str);
						}
					}
				};

				this.CookieClickerHTML = document.body.getHTML();
				Game.prefs.hasCV = false;
			}
		},
		toggle: function () {
			Game.prefs.hasCV = !Game.prefs.hasCV;

			if (Game.prefs.hasCV) {
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
					Game.toSave = true;
					setTimeout(function () {
						document.body.removeChild(script);
						document.body.innerHTML = this.CookieClickerHTML
					}, 500);
				}
			}
		}
	});
})();
