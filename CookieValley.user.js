// ==UserScript==
// @name         Cookie Valley Userscript
// @namespace    https://github.com/VoltacceptYT/cookievalley/
// @version      v0.1
// @description  Install the Cookie Valley Mod on the Cookie Clicker Web!
// @author       Void Drifter, Samantha Stahlke
// @match        *://orteil.dashnet.org/cookieclicker/*
// @match        *://om3ga6400.github.io/CookieClicker/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    fetch('https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/main.js')
        .then(response => response.text())
        .then(data => {
            var script = document.createElement('script');
            script.textContent = data;
            document.body.appendChild(script);
        })
        .catch(error => console.error('Error fetching the script:', error));
})();
