// ==UserScript==
// @name         Cookie Valley Userscript
// @namespace    https://github.com/VoltacceptYT/cookievalley
// @version      v0.3.1
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
													section.className = 'block';
													section.style.padding = '0px';
													section.style.margin = '8px 4px';
													section.innerHTML = `
															<div class="subsection">
																	<div class="title">Cookie Valley Web</div>
																	<div id="cookie_valley_enabler" class="listing">
																			<a class="smallFancyButton prefButton option off" id="CookieValleyEnabler"
																				 onclick="Game.Toggle('hasCV','CookieValleyEnabler','Cookie Valley ON','Cookie Valley OFF','0');PlaySound('snd/tick.mp3');Game.mods['CookieValley Web Enabler'].toggle()">Cookie Valley OFF</a>
																	</div>
															</div>`;
													const heightDiv = menu.querySelector('div[style="height:128px;"]');
													heightDiv.insertAdjacentElement('beforebegin', section);
											}
									}
							};
							Game.prefs.hasCV = 0;
					}
			},
			toggle: function () {
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
									document.body.removeChild(script);
									setTimeout(() => {
											location.reload(true);
									}, 250);
							}
					}
			},
	});
})();
