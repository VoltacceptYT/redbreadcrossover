// ==UserScript==
// @name         Red Bread Crossover Mod Userscript
// @namespace    https://github.com/VoltacceptYT/redbreadcrossover
// @version      v1.1.3
// @description  Install RBCM on the Cookie Clicker Web!
// @author       Void Drifter, Samantha Stahlke
// @icon         https://voltacceptyt.github.io/redbreadcrossover/img/modicon.png
// @updateURL    https://voltacceptyt.github.io/redbreadcrossover/RBCM.user.js
// @downloadURL  https://voltacceptyt.github.io/redbreadcrossover/RBCM.user.js
// @match        *://orteil.dashnet.org/cookieclicker/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  Game.registerMod("RedBreadCrossover", {
    init: function () {
      Game.Loader.replaced = []

      new Game.buffType('goldenSaddle', function () {
        return {
          name: 'Golden Saddle',
          desc: 'Ride into the sunset with a golden saddle. Doubles the cookies earned from clicking for 3.14 minutes.',
          icon: [0, 0, 'https://voltacceptyt.github.io/redbreadcrossover/img/buffIcons.png'],
          time: (3.14 * 60) * Game.fps,
          multClick: 2
        };
      });

      new Game.buffType('frontierSpirit', function () {
        return {
          name: 'Frontier Spirit',
          desc: 'Embrace the rugged determination of the frontier. All buildings produce cookies 22.5% faster for 6.25 minutes',
          icon: [0, 1, 'https://voltacceptyt.github.io/redbreadcrossover/img/buffIcons.png'],
          time: (6.25 * 60) * Game.fps,
          power: 1.225
        };
      });

      new Game.buffType('outlawsFortune', function () {
        return {
          name: 'Outlaw\'s Fortune',
          desc: 'Harness the spirit of the Wild West and watch your cookie production soar! Gain a 36.7% increase in cookie output for 4.17 minutes.',
          icon: [0, 2, 'https://voltacceptyt.github.io/redbreadcrossover/img/buffIcons.png'],
          time: (4.17 * 60) * Game.fps,
          multCpS: 1.367
        };
      });

      const container = document.getElementById('rowCanvas15');
      const scrollSpeed = 2;
      let scrollInterval = null;
      const startScrolling = (direction) => {
        if (scrollInterval) return;
        scrollInterval = setInterval(() => {
          container.scrollLeft += direction * scrollSpeed;
        }, 16);
      };

      const stopScrolling = () => {
        clearInterval(scrollInterval);
        scrollInterval = null;
      };

      container.addEventListener('mousemove', (event) => {
        const rect = container.getBoundingClientRect();
        const buffer = 50;

        if (event.clientX < rect.left + buffer) {
          startScrolling(-1);
        } else if (event.clientX > rect.right - buffer) {
          startScrolling(1);
        } else {
          stopScrolling();
        }
      });
      container.addEventListener('mouseleave', stopScrolling);


      Game.Loader.RenameBuilding = function (buildingIndex, newName, newDesc) {
        if (Game.ObjectsById[buildingIndex]) {
          Game.ObjectsById[buildingIndex].dname = newName;
          Game.ObjectsById[buildingIndex].displayName = newName;
          Game.ObjectsById[buildingIndex].bsingle = newName;
          Game.ObjectsById[buildingIndex].single = newName;
          Game.ObjectsById[buildingIndex].name = newName;
          Game.ObjectsById[buildingIndex].plural = newName + 's';
          Game.ObjectsById[buildingIndex].bplural = newName + 's';
          Game.ObjectsById[buildingIndex].desc = newDesc;
          console.log(`Building name changed to ${newName}`);
        } else {
          console.log('Invalid building index');
        }
      }

      Game.Loader.RenameAchievement = function (AchievementIndex, newName, newDesc) {
        if (Game.AchievementsById[AchievementIndex]) {
          Game.AchievementsById[AchievementIndex].dname = newName;
          Game.AchievementsById[AchievementIndex].displayName = newName;
          Game.AchievementsById[AchievementIndex].name = newName;
          Game.AchievementsById[AchievementIndex].ddesc = newDesc;
          Game.AchievementsById[AchievementIndex].desc = newDesc;
          Game.AchievementsById[AchievementIndex].baseDesc = newDesc;
          console.log(`Achievement name changed to ${newName}`);
        } else {
          console.log('Invalid Achievement index');
        }
      }

      try {
        Game.customAchievementsEnabled = JSON.parse(localStorage.getItem('RedBreadAchivements'));
        if (Game.customAchievementsEnabled) {
          Game.Loader.RenameAchievement(413, "Red Bread Revolver", "A western-themed third-person shooter game set in the 1880s. Follow bounty hunter Bread Harlow on his quest for revenge after the murder of his parents.");
          Game.Loader.RenameAchievement(414, "Red Bread Redemption", "An epic action-adventure game set in the American frontier of 1911. Follow former outlaw John Toaston as he hunts down the remnants of his old gang in a world transitioning from lawlessness to order.");
          Game.Loader.RenameAchievement(415, "Red Bread Redemption: Undead Rye-surrection", "Follow John Toaston as he battles a zombie plague that has ravaged the frontier, seeking a cure to save his family and the world from the undead.");
          Game.Loader.RenameAchievement(416, "Red Bread Redemption II", "An epic tale of life in America's unforgiving heartland in 1899. Follow outlaw Arthur Baguette and the Van der Loaf gang as they navigate the decline of the Wild West, facing federal agents, bounty hunters, and internal conflicts.");
          Game.Loader.RenameAchievement(417, "Red Bread Redemption Online", "Experience the vast, open world of the American frontier in Red Bread Redemption Online. Create your own character, form posses, and embark on thrilling adventures, from hunting and fishing to battling outlaws and uncovering hidden treasures.");
        } else {
          Game.Loader.RenameAchievement(413, "Self-contained", "Have <b>1 fractal engine</b>.");
          Game.Loader.RenameAchievement(414, "Threw you for a loop", "Have <b>50 fractal engines</b>.");
          Game.Loader.RenameAchievement(415, "The sum of its parts", "Have <b>100 fractal engines</b>.");
          Game.Loader.RenameAchievement(416, "Bears repeating", "Have <b>150 fractal engines</b>.");
          Game.Loader.RenameAchievement(417, "More of the same", "Have <b>200 fractal engines</b>.");
        }
      } catch (e) {
        Game.customAchievementsEnabled = true;
        if (Game.customAchievementsEnabled) {
          Game.Loader.RenameAchievement(413, "Red Bread Revolver", "A western-themed third-person shooter game set in the 1880s. Follow bounty hunter Bread Harlow on his quest for revenge after the murder of his parents.");
          Game.Loader.RenameAchievement(414, "Red Bread Redemption", "An epic action-adventure game set in the American frontier of 1911. Follow former outlaw John Toaston as he hunts down the remnants of his old gang in a world transitioning from lawlessness to order.");
          Game.Loader.RenameAchievement(415, "Red Bread Redemption: Undead Rye-surrection", "Follow John Toaston as he battles a zombie plague that has ravaged the frontier, seeking a cure to save his family and the world from the undead.");
          Game.Loader.RenameAchievement(416, "Red Bread Redemption II", "An epic tale of life in America's unforgiving heartland in 1899. Follow outlaw Arthur Baguette and the Van der Loaf gang as they navigate the decline of the Wild West, facing federal agents, bounty hunters, and internal conflicts.");
          Game.Loader.RenameAchievement(417, "Red Bread Redemption Online", "Experience the vast, open world of the American frontier in Red Bread Redemption Online. Create your own character, form posses, and embark on thrilling adventures, from hunting and fishing to battling outlaws and uncovering hidden treasures.");
        } else {
          Game.Loader.RenameAchievement(413, "Self-contained", "Have <b>1 fractal engine</b>.");
          Game.Loader.RenameAchievement(414, "Threw you for a loop", "Have <b>50 fractal engines</b>.");
          Game.Loader.RenameAchievement(415, "The sum of its parts", "Have <b>100 fractal engines</b>.");
          Game.Loader.RenameAchievement(416, "Bears repeating", "Have <b>150 fractal engines</b>.");
          Game.Loader.RenameAchievement(417, "More of the same", "Have <b>200 fractal engines</b>.");
        }
      }

      try {
        Game.customBuildingsEnabled = JSON.parse(localStorage.getItem('RedBreadBuildings'));
        if (Game.customBuildingsEnabled) {
          Game.Loader.Replace('fractalEngine.png', 'https://voltacceptyt.github.io/redbreadcrossover/img/wildwest.png');
          Game.Loader.Replace('fractalEngineBackground.png', 'https://voltacceptyt.github.io/redbreadcrossover/img/bg_wildwest.png');
          Game.Loader.RenameBuilding(15, 'Wild West', "Hybridizes the Red Bread Universe to more produce cookies.")
        } else {
          Game.Loader.Replace('fractalEngine.png', 'https://cdn.dashnet.org/cookieclicker/img/fractalEngine.png');
          Game.Loader.Replace('fractalEngineBackground.png', 'https://cdn.dashnet.org/cookieclicker/img/fractalEngineBackground.png');
          Game.Loader.RenameBuilding(15, "Fractal engine", "Turns cookies into even more cookies.")
        }
      } catch (e) {
        Game.customBuildingsEnabled = true;
        if (Game.customBuildingsEnabled) {
          Game.Loader.Replace('fractalEngine.png', 'https://voltacceptyt.github.io/redbreadcrossover/img/wildwest.png');
          Game.Loader.Replace('fractalEngineBackground.png', 'https://voltacceptyt.github.io/redbreadcrossover/img/bg_wildwest.png');
          Game.Loader.RenameBuilding(15, 'Wild West', "Hybridizes the Red Bread Universe to more produce cookies.")
        } else {
          Game.Loader.Replace('fractalEngine.png', 'https://cdn.dashnet.org/cookieclicker/img/fractalEngine.png');
          Game.Loader.Replace('fractalEngineBackground.png', 'https://cdn.dashnet.org/cookieclicker/img/fractalEngineBackground.png');
          Game.Loader.RenameBuilding(15, "Fractal engine", "Turns cookies into even more cookies.")
        }
      }

      Game.toggleRedBreadCrossoverAchievements = function () {
        Game.customAchievementsEnabled = !Game.customAchievementsEnabled;
        localStorage.setItem('RedBreadAchivements', JSON.stringify(Game.customAchievementsEnabled));
        if (Game.customAchievementsEnabled) {
          Game.Loader.RenameAchievement(413, "Red Bread Revolver", "A western-themed third-person shooter game set in the 1880s. Follow bounty hunter Bread Harlow on his quest for revenge after the murder of his parents.");
          Game.Loader.RenameAchievement(414, "Red Bread Redemption", "An epic action-adventure game set in the American frontier of 1911. Follow former outlaw John Toaston as he hunts down the remnants of his old gang in a world transitioning from lawlessness to order.");
          Game.Loader.RenameAchievement(415, "Red Bread Redemption: Undead Rye-surrection", "Follow John Toaston as he battles a zombie plague that has ravaged the frontier, seeking a cure to save his family and the world from the undead.");
          Game.Loader.RenameAchievement(416, "Red Bread Redemption II", "An epic tale of life in America's unforgiving heartland in 1899. Follow outlaw Arthur Baguette and the Van der Loaf gang as they navigate the decline of the Wild West, facing federal agents, bounty hunters, and internal conflicts.");
          Game.Loader.RenameAchievement(417, "Red Bread Redemption Online", "Experience the vast, open world of the American frontier in Red Bread Redemption Online. Create your own character, form posses, and embark on thrilling adventures, from hunting and fishing to battling outlaws and uncovering hidden treasures.");
        } else {
          Game.Loader.RenameAchievement(413, "Self-contained", "Have <b>1 fractal engine</b>.");
          Game.Loader.RenameAchievement(414, "Threw you for a loop", "Have <b>50 fractal engines</b>.");
          Game.Loader.RenameAchievement(415, "The sum of its parts", "Have <b>100 fractal engines</b>.");
          Game.Loader.RenameAchievement(416, "Bears repeating", "Have <b>150 fractal engines</b>.");
          Game.Loader.RenameAchievement(417, "More of the same", "Have <b>200 fractal engines</b>.");
        }
      }

      Game.toggleRedBreadCrossoverBuildings = function () {
        Game.customBuildingsEnabled = !Game.customBuildingsEnabled;
        localStorage.setItem('RedBreadBuildings', JSON.stringify(Game.customBuildingsEnabled));
        if (Game.customBuildingsEnabled) {
          Game.Loader.Replace('fractalEngine.png', 'https://voltacceptyt.github.io/redbreadcrossover/img/wildwest.png');
          Game.Loader.Replace('fractalEngineBackground.png', 'https://voltacceptyt.github.io/redbreadcrossover/img/bg_wildwest.png');
          Game.Loader.RenameBuilding(15, 'Wild West', "Hybridizes the Red Bread Universe to more produce cookies.")
        } else {
          Game.Loader.Replace('fractalEngine.png', 'https://cdn.dashnet.org/cookieclicker/img/fractalEngine.png');
          Game.Loader.Replace('fractalEngineBackground.png', 'https://cdn.dashnet.org/cookieclicker/img/fractalEngineBackground.png');
          Game.Loader.RenameBuilding(15, "Fractal engine", "Turns cookies into even more cookies.")
        }
      }

      if (!document.getElementById('RedBreadCrossoverAchivements') && !document.getElementById('RedBreadCrossoverBuildings')) {
        const originalUpdateMenu = Game.UpdateMenu;
        Game.UpdateMenu = function () {
          originalUpdateMenu();
          if (Game.onMenu === 'prefs') {
            const menu = document.getElementById('menu');
            let section = Array.from(menu.getElementsByClassName('subsection')).find(subsection => subsection.innerText.includes('Red Bread Crossover'));
            if (!section) {
              section = document.createElement('div');
              section.className = 'block';
              section.style.padding = '0px';
              section.style.margin = '8px 4px';
              section.innerHTML = `
              <div class="subsection RedBreadCrossover">
                <div class="title">Red Bread Crossover (RBCM)</div>
                <div id="RedBreadCrossoverAchivements" class="listing">` + '<a class="option ' + (Game.customAchievementsEnabled ? 'RedBreadCrossoverDisabled' : 'RedBreadCrossoverEnabled') + '" onclick="Game.toggleRedBreadCrossoverAchievements();">' +
                (Game.customAchievementsEnabled ? 'Disable' : 'Enable') + ' Red Bread Crossover Achievements</a>' + `
                </div>
<div id="RedBreadCrossoverBuildings" class="listing">` + '<a class="option ' + (Game.customBuildingsEnabled ? 'RedBreadCrossoverDisabled' : 'RedBreadCrossoverEnabled') + '" onclick="Game.toggleRedBreadCrossoverBuildings();">' +
                (Game.customBuildingsEnabled ? 'Disable' : 'Enable') + ' Red Bread Crossover Buildings</a>' + `
                </div>
              </div>`;
              const heightDiv = menu.querySelector('div[style="height:128px;"]');
              heightDiv.insertAdjacentElement('beforebegin', section);
            }
          }
        }
      }


      var style = document.createElement('style');
      style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,900;1,900&display=swap');
    
    .RedBreadCrossover {
      font-family: "Merriweather", serif;
      font-weight: 900;
    }

    .RedBreadCrossoverEnabled, a.option.RedBreadCrossoverEnabled {
      color: #0c0;
      border-color: #0c0;
    }

    a.option.RedBreadCrossoverEnabled:hover {
      border-color: #3f3;
      color: #3f3;
    }

    a.option.RedBreadCrossoverEnabled:active {
      background-color: #300;
    }

    .RedBreadCrossoverDisabled, a.option.RedBreadCrossoverDisabled {
      color: #c00;
      border-color: #c00;
    }

    a.option.RedBreadCrossoverDisabled:hover {
      border-color: #f33;
      color: #f33;
    }

    a.option.RedBreadCrossoverDisabled:active {
      background-color: #300;
    }

    .product .icon, .product .icon.off, .tinyProductIcon {
      background-image: url(https://voltacceptyt.github.io/redbreadcrossover/img/buildings.png);
    }
    `;

      document.getElementsByTagName('head')[0].appendChild(style);

      Game.Loader.RenameBuilding = function (buildingIndex, newName, newDesc) {
        if (Game.ObjectsById[buildingIndex]) {
          Game.ObjectsById[buildingIndex].dname = newName;
          Game.ObjectsById[buildingIndex].displayName = newName;
          Game.ObjectsById[buildingIndex].bsingle = newName;
          Game.ObjectsById[buildingIndex].single = newName;
          Game.ObjectsById[buildingIndex].name = newName;
          Game.ObjectsById[buildingIndex].plural = newName + 's';
          Game.ObjectsById[buildingIndex].bplural = newName + 's';
          Game.ObjectsById[buildingIndex].desc = newDesc;
        } else {
          console.log('Invalid building index');
        }
      }

      Game.Loader.RenameAchievement = function (AchievementIndex, newName, newDesc) {
        if (Game.AchievementsById[AchievementIndex]) {
          Game.AchievementsById[AchievementIndex].dname = newName;
          Game.AchievementsById[AchievementIndex].displayName = newName;
          Game.AchievementsById[AchievementIndex].name = newName;
          Game.AchievementsById[AchievementIndex].ddesc = newDesc;
          Game.AchievementsById[AchievementIndex].desc = newDesc;
          Game.AchievementsById[AchievementIndex].baseDesc = newDesc;
        } else {
          console.log('Invalid Achievement index');
        }
      }

      Game.Loader.Load = function (assets) {
        for (var i in assets) {
          this.loadingN++;
          this.assetsN++;
          if (this.assetsLoading.indexOf(assets[i]) == -1 && this.assetsLoaded.indexOf(assets[i]) == -1) {
            var imgSrc = assets[i];

            if (this.replaced[assets[i]])
              imgSrc = this.replaced[assets[i]];

            var img = new Image();
            if (!Game.local) img.crossOrigin = 'anonymous';
            img.alt = imgSrc;
            img.onload = bind(this, this.onLoad);
            this.assets[assets[i]] = img;
            this.assetsLoading.push(assets[i]);
            if (imgSrc.indexOf('/') != -1) img.src = imgSrc;
            else img.src = this.domain + imgSrc;
          }
        }
      }

      Game.Loader.Replace = function (old, newer) {
        if (!this.assets[old]) this.Load([old]);
        var img = new Image();
        if (!Game.local) img.crossOrigin = 'anonymous';
        if (newer.indexOf('/') != -1)/*newer.indexOf('http')!=-1 || newer.indexOf('https')!=-1)*/ img.src = newer;
        else img.src = this.domain + newer;
        img.alt = newer;
        img.onload = bind(this, this.onLoad);
        this.assets[old] = img;
        this.replaced[old] = newer;
      }

      Game.grandmaNames = ["John Toaston", "Arthur Baguette", "Bread  Harlow", "Dutch Van der Loaf", "Micah Stale", "Lenny Sunbaked"];

      var greetingName = Game.grandmaNames[Math.floor(Math.random() * Game.grandmaNames.length)];
      var greeting = greetingName + ' was waiting for you.';

      Game.Notify(`Welcome to Red Bread Crossover!`, greeting, [16, 5, 'https://voltacceptyt.github.io/redbreadcrossover/img/modicon.png']);
      Game.Loader.Replace('icons.png', 'https://voltacceptyt.github.io/redbreadcrossover/img/icons.png');

      Game.storeToRefresh = 1

      var wildWestObj = Game.Objects["Fractal engine"];
      wildWestObj.art.w = 64;
      wildWestObj.art.xV = 0;
      wildWestObj.art.y = 32;
      wildWestObj.art.yV = 0;

      for (var i in Game.Achievements) {
        var it = Game.Achievements[i];
        if (it.id >= 413 && it.id <= 428) {
          it.icon = [it.icon[0], it.icon[1], 'https://voltacceptyt.github.io/redbreadcrossover/img/icons.png'];
        }
      }
    },
    save: function () {
    },
    load: function (str) {
    },
  });
})();

//Your Not Supposed to be Here...
