// ==UserScript==
// @name         Cookie Valley Userscript
// @namespace    https://github.com/VoltacceptYT/cookievalley/
// @version      v0.2
// @description  Install the Cookie Valley Mod on the Cookie Clicker Web!
// @author       Void Drifter, Samantha Stahlke
// @icon         https://raw.githubusercontent.com/VoltacceptYT/cookievalley/refs/heads/main/img/modicon.png
// @match        *://orteil.dashnet.org/cookieclicker/*
// @match        *://om3ga6400.github.io/CookieClicker/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (CCSE && CCSE.isLoaded) {
        CCSE.customOptions.push(() => {
            CCSE.AppendCollapsibleOptionsMenu('CookieValley Web', 'Cookie Valley');
            CCSE.AppendOptionsMenu('CookieValley Web', 'Enable Cookie Valley', 'Toggle This [ON] to Enable the Cookie Valley Mod', () => {
                const mod = Game.mods['CookieValley Web'];
                mod.enabled = !mod.enabled;

                if (mod.enabled) {
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
            });
        });
    } else {
        Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
    }

})();
