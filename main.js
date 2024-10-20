changeBuildingName(0, 'Clicker');


Game.registerMod("CookieValley Web", {
  init: function () {

    Game.Loader.replaced = [];

    Game.Loader.RenameBuilding = function (buildingIndex, newName, newDesc) {
      if (Game.ObjectsById[buildingIndex]) {
        Game.ObjectsById[buildingIndex].dname = newName;
        Game.ObjectsById[buildingIndex].displayname = newName;
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
    },

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

    Game.grandmaNames = ["Abigail", "Alex", "Birdie", "Caroline", "Clint", "Demetrius", "Elliott", "Emily", "Evelyn", "George", "Gil", "Governor", "Gunther", "Gus", "Haley", "Harvey", "Jas", "Jodi", "Kent", "Krobus", "Leah", "Leo", "Lewis", "Linus", "Marlon", "Marnie", "Maru", "Mona", "Morris", "Pam", "Penny", "Pierre", "Rasmodius", "Robin", "Sam", "Sandy", "Sebastian", "Shane", "Vincent", "Willy"];

    var greetingName = Game.grandmaNames[Math.floor(Math.random() * Game.grandmaNames.length)];
    var greeting = greetingName + ' was waiting for you.';

    Game.Notify(`Welcome to Cookie Valley!`, greeting, [16, 5, 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/modicon.png']);

    Game.Loader.RenameBuilding(0, 'Junimo', "Look at them. They're just little guys.")
    Game.Loader.RenameBuilding(1, 'Villager', "A stand-up citizen to stand up and bake some cookies.")
    Game.Loader.RenameBuilding(2, 'Farmland', "The sprinklers are full of chocolate.")
    Game.Loader.RenameBuilding(3, 'Mineshaft', "We need to go deeper. And chewier. And crispier.")
    Game.Loader.RenameBuilding(4, 'Coop', "t's simple. We raise cookie chickens, hatched from chocolate eggs, to lay regular eggs, to bake cookies with!")
    Game.Loader.RenameBuilding(5, 'Barn', "The premier source of fresh milk, and the premier site of kitten raids.")
    Game.Loader.RenameBuilding(6, 'Skull Canvern', "Like the mines, but spookier, and with darker chocolate.")
    Game.Loader.RenameBuilding(7, 'Wizard Tower', "Rasmodius finally got that building permit.")
    Game.Loader.RenameBuilding(8, 'Fish Pnd', "Do these cookies feel a little...soggy...to you?")
    Game.Loader.RenameBuilding(9, 'Greenhouse', "We are free cookies, unshackled by your barbarous climate.")
    Game.Loader.RenameBuilding(10, 'Obelisk', "You could always use cookie totems for your teleportation needs, but that gets pretty expensive.")
    Game.Loader.RenameBuilding(11, 'Gold Clock', "Keeps cookies fresh indefinitely, even after consumption.")
    Game.Loader.RenameBuilding(12, 'Sewer', "Full of shadow bakeries and gooey cookies.")
    Game.Loader.RenameBuilding(13, 'Museum', "Supports cookie archaeology through the acquisition and auction of chocolate artifacts.")
    Game.Loader.RenameBuilding(14, 'Comm. Center', "Creates ingredient bundles for more efficient baking.")
    Game.Loader.RenameBuilding(15, 'Cabin', "\"Borrow\" cookies from other friends playing Cookie Valley.")
    Game.Loader.RenameBuilding(16, 'Island', "You archipela-go, girl.")
    Game.Loader.RenameBuilding(17, 'C# console', "Wait...this game isn't even written in C#.")
    Game.Loader.RenameBuilding(18, 'Crossoverer', "Hybridizes universes to produce cookies from other IPs.")

    Game.Loader.Replace('icons.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/icons.png');
    Game.Loader.Replace('cursor.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/cursor.png');

    Game.Loader.Replace('sugarLump.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/stardrop.png');
    Game.Loader.Replace('heavenlyMoney.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/golden_walnut.png');
    Game.Loader.Replace('buildings.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/buildings.png');

    Game.Loader.Replace('farm.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/farm_new.png');
    Game.Loader.Replace('farmBackground.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/bg_farm.png');
    Game.Loader.Replace('mine.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/mine_new.png');
    Game.Loader.Replace('mineBackground.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/bg_mine.png');
    Game.Loader.Replace('factory.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/coop.png');
    Game.Loader.Replace('factoryBackground.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/bg_coop.png');
    Game.Loader.Replace('bank.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/barn.png');
    Game.Loader.Replace('bankBackground.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/bg_barn.png');
    Game.Loader.Replace('temple.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/skullcavern.png');
    Game.Loader.Replace('templeBackground.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/bg_skullcavern.png');
    Game.Loader.Replace('wizardtower.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/wizardtower_new.png');
    Game.Loader.Replace('wizardtowerBackground.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/bg_wizardtower.png');
    Game.Loader.Replace('alchemylab.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/greenhouse.png');
    Game.Loader.Replace('alchemylabBackground.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/bg_greenhouse.png');
    Game.Loader.Replace('shipment.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/fishpond.png');
    Game.Loader.Replace('shipmentBackground.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/bg_fishpond.png');
    Game.Loader.Replace('portal.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/obelisk.png');
    Game.Loader.Replace('portalBackground.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/bg_obelisk.png');
    Game.Loader.Replace('timemachine.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/goldenclock.png');
    Game.Loader.Replace('timemachineBackground.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/bg_goldenclock.png');
    Game.Loader.Replace('prism.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/museum.png');
    Game.Loader.Replace('prismBackground.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/bg_museum.png');
    Game.Loader.Replace('antimattercondenser.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/sewer.png');
    Game.Loader.Replace('antimattercondenserBackground.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/bg_sewer.png');
    Game.Loader.Replace('chancemaker.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/communitycentre.png');
    Game.Loader.Replace('chancemakerBackground.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/bg_communitycentre.png');
    Game.Loader.Replace('fractalEngine.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/cabin.png');
    Game.Loader.Replace('fractalEngineBackground.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/bg_cabin.png');
    Game.Loader.Replace('javascriptconsole.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/island.png');
    Game.Loader.Replace('javascriptconsoleBackground.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/bg_island.png');
    Game.Loader.Replace('idleverse.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/csharpconsole.png');
    Game.Loader.Replace('idleverseBackground.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/bg_csharpconsole.png');
    Game.Loader.Replace('cortex.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/crossoverer.png');
    Game.Loader.Replace('cortexBackground.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/bg_crossoverer.png');
    Game.Loader.Replace('you.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/you_new.png');
    Game.Loader.Replace('youBackground.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/bg_you.png');

    Game.Loader.Replace('grandmaBackground.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/bg_villager.png');
    Game.Loader.Replace('grandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager.png');

    Game.Loader.Replace('farmerGrandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager_farm.png');
    Game.Loader.Replace('minerGrandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager_mine.png');
    Game.Loader.Replace('workerGrandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager_coop.png');
    Game.Loader.Replace('bankGrandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager_barn.png');
    Game.Loader.Replace('templeGrandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager_skullcavern.png');
    Game.Loader.Replace('witchGrandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager_wizardtower.png');
    Game.Loader.Replace('transmutedGrandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager_greenhouse.png');
    Game.Loader.Replace('cosmicGrandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager_fishpond.png');
    Game.Loader.Replace('alteredGrandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager_obelisk.png');
    Game.Loader.Replace('grandmasGrandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager_goldenclock.png');
    Game.Loader.Replace('rainbowGrandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager_museum.png');
    Game.Loader.Replace('antiGrandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager_sewer.png');
    Game.Loader.Replace('luckyGrandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager_communitycentre.png');
    Game.Loader.Replace('metaGrandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager_cabin.png');
    Game.Loader.Replace('scriptGrandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager_island.png');
    Game.Loader.Replace('alternateGrandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager_csharpconsole.png');
    Game.Loader.Replace('brainyGrandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager_crossoverer.png');
    Game.Loader.Replace('cloneGrandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager_you.png');
    Game.Loader.Replace('bunnyGrandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager_easter.png');
    Game.Loader.Replace('elfGrandma.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/villager_christmas.png');

    Game.Loader.Replace('grandmas1.jpg', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/joja1.jpg');
    Game.Loader.Replace('grandmas2.jpg', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/joja2.jpg');
    Game.Loader.Replace('grandmas3.jpg', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/joja3.jpg');

    Game.Loader.Replace('wrinkler.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/serpent.png');
    Game.Loader.Replace('wrinklerBits.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/serpent_gibs.png');
    Game.Loader.Replace('winkler.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/serpentito.png');
    Game.Loader.Replace('winterWrinkler.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/serpent_winter.png');
    Game.Loader.Replace('winterWinkler.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/serpentito_winter.png');
    Game.Loader.Replace('shinyWrinkler.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/serpent_gold.png');
    Game.Loader.Replace('shinyWrinklerBits.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/serpent_gibs_gold.png');
    Game.Loader.Replace('shinyWinkler.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/serpentito_gold.png');
    Game.Loader.Replace('wrinklerShadow.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/serpent_shadow.png');

    Game.Loader.Replace('wrinklerBlink.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/blank.png');
    Game.Loader.Replace('wrinklerGooglies.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/blank.png');
    Game.Loader.Replace('youLight.png', 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/blank.png');

    var farmObj = Game.Objects["Farm"];
    farmObj.art.rows = 2;
    farmObj.art.w = 96;
    farmObj.art.yV = 0;

    var mineObj = Game.Objects["Mine"];
    mineObj.art.rows = 1;
    mineObj.art.w = 64;
    mineObj.art.x = 8;
    mineObj.art.xV = 4;
    mineObj.art.y = 14;
    mineObj.art.yV = 12;

    var coopObj = Game.Objects["Factory"];
    coopObj.art.rows = 2;
    coopObj.art.w = 76;
    coopObj.art.x = -2;
    coopObj.art.xV = 0;
    coopObj.art.y = 24;
    coopObj.art.yV = 0;

    var barnObj = Game.Objects["Bank"];
    barnObj.art.rows = 2;
    barnObj.art.w = 80;
    barnObj.art.x = 0;
    barnObj.art.xV = 0;
    barnObj.art.y = 30;
    barnObj.art.yV = 0;

    var skullObj = Game.Objects["Temple"];
    skullObj.art.rows = 2;
    skullObj.art.w = 128;
    skullObj.art.x = 4;
    skullObj.art.y = 30;
    skullObj.art.yV = 2;

    var wizObj = Game.Objects["Wizard tower"];
    wizObj.art.rows = 2;
    wizObj.art.w = 64;
    wizObj.art.x = -4;
    wizObj.art.xV = 4;
    wizObj.art.y = 12;
    wizObj.art.yV = 0;

    var fishObj = Game.Objects["Shipment"];
    fishObj.art.w = 64;
    fishObj.art.x = 16;
    fishObj.art.xV = 0;
    fishObj.art.y = 24;
    fishObj.art.yV = 24;

    var greenObj = Game.Objects["Alchemy lab"];
    greenObj.art.rows = 2;
    greenObj.art.w = 96;
    greenObj.art.xV = 0;
    greenObj.art.y = 24;
    greenObj.art.yV = 0;

    var obeliskObj = Game.Objects["Portal"];
    obeliskObj.art.rows = 1;
    obeliskObj.art.w = 36;
    obeliskObj.art.xV = 24;
    obeliskObj.art.yV = 32;

    var clockObj = Game.Objects["Time machine"];
    clockObj.art.rows = 2;
    clockObj.art.w = 96;
    clockObj.art.xV = 24;
    clockObj.art.yV = 8;
    clockObj.art.y = 16;

    var sewerObj = Game.Objects["Antimatter condenser"];
    sewerObj.art.y = 24;
    sewerObj.art.yV = 48;

    var museumObj = Game.Objects["Prism"];
    museumObj.art.w = 48;
    museumObj.art.y = 12;

    var commObj = Game.Objects["Chancemaker"];
    commObj.art.rows = 1;
    commObj.art.w = 76;
    commObj.art.xV = 4;
    commObj.art.y = 16;
    commObj.art.yV = 4;

    var cabinObj = Game.Objects["Fractal engine"];
    cabinObj.art.w = 64;
    cabinObj.art.xV = 0;
    cabinObj.art.y = 24;
    cabinObj.art.yV = 16;

    var islandObj = Game.Objects["Javascript console"];
    islandObj.art.frames = 1;
    islandObj.art.w = 32;
    islandObj.art.x = 0;
    islandObj.art.xV = 16;
    islandObj.art.y = -24;
    islandObj.art.yV = 16;

    var consoleObj = Game.Objects["Idleverse"];
    consoleObj.art.rows = 1;
    consoleObj.art.w = 64;
    consoleObj.art.xV = 32;
    consoleObj.art.yV = 96;

    var crossObj = Game.Objects["Cortex baker"];
    crossObj.art.yV = 80;

    var youObj = Game.Objects["You"];
    youObj.art.w = 64;
    youObj.art.y = -8;

    //Gently used
    Game.Tiers[1].color = '#c27823';
    //Copper
    Game.Tiers[2].color = '#e37f54';
    //Amethyst
    Game.Tiers[3].color = '#8e47ff';
    //Steel
    Game.Tiers[4].color = '#a3bfd4';
    //Ruby
    Game.Tiers[5].color = '#e82751';
    //Slimy
    Game.Tiers[6].color = '#6aada0';
    //Gold
    Game.Tiers[7].color = '#deb028';
    //Emerald
    Game.Tiers[8].color = '#00c767';
    //Diamond
    Game.Tiers[9].color = '#bddcff';
    //Iridium
    Game.Tiers[10].color = '#47bcff';
    //Prismatic
    Game.Tiers[11].color = '#d4c2ff';
    //Galaxy
    Game.Tiers[12].color = '#c948f7';
    //Volcanic
    Game.Tiers[13].color = '#ff4714';
    //Radioactive
    Game.Tiers[14].color = '#9eff42';
    //Infinity
    Game.Tiers[15].color = '#f9a1ff';



    for (var i in Game.Upgrades) {
      var it = Game.Upgrades[i];
      it.icon = [it.icon[0], it.icon[1], 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/icons.png'];
    }

    for (var i in Game.Achievements) {
      var it = Game.Achievements[i];
      it.icon = [it.icon[0], it.icon[1], 'https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/icons.png'];
    }

    //Manually update golden cookie icon indices to reflect new tiers.
    Game.UpgradesById[83].icon[1] = 16;
    Game.AchievementsById[67].icon[1] = 16;
    Game.AchievementsById[263].icon[1] = 16;
    Game.AchievementsById[264].icon[1] = 16;

    //Deal with the ticker. In vanilla only parts are localized, so it's forced my hand.
    Game.getNewTicker = function (manual)//note : "manual" is true if the ticker was clicked, but may also be true on startup etc
    {
      var list = [];

      var NEWS = loc("News :").replace(' ', '&nbsp;') + ' ';

      var loreProgress = Math.round(Math.log(Game.cookiesEarned / 10) * Math.LOG10E + 1 | 0);

      if (Game.TickerN % 2 == 0 || loreProgress > 14) {
        var animals = ['newts', 'penguins', 'scorpions', 'axolotls', 'puffins', 'porpoises', 'blowfish', 'horses', 'crayfish', 'slugs', 'humpback whales', 'nurse sharks', 'giant squids', 'polar bears', 'fruit bats', 'frogs', 'sea squirts', 'velvet worms', 'mole rats', 'paramecia', 'nematodes', 'tardigrades', 'giraffes', 'monkfish', 'wolfmen', 'goblins', 'hippies'];

        if (Math.random() < 0.75 || Game.cookiesEarned < 10000) {
          if (Game.Objects['Grandma'].amount > 0) list.push('<q>' + choose(loc("Ticker (grandma)")) + '</q><sig>' + Game.Objects['Grandma'].single + '</sig>');

          if (!Game.prefs.notScary && Game.Objects['Grandma'].amount >= 50) list.push('<q>' + choose(loc("Ticker (threatening grandma)")) + '</q><sig>' + Game.Objects['Grandma'].single + '</sig>');

          if (EN && Game.HasAchiev('Just wrong') && Math.random() < 0.05) list.push(NEWS + 'cookie manufacturer downsizes, sells own grandmother!');
          if (!Game.prefs.notScary && Game.HasAchiev('Just wrong') && Math.random() < 0.4) list.push('<q>' + choose(loc("Ticker (angry grandma)")) + '</q><sig>' + Game.Objects['Grandma'].single + '</sig>');

          if (!Game.prefs.notScary && Game.Objects['Grandma'].amount >= 1 && Game.pledges > 0 && Game.elderWrath == 0) list.push('<q>' + choose(loc("Ticker (grandmas return)")) + '</q><sig>' + Game.Objects['Grandma'].single + '</sig>');

          if (!EN) {
            for (var i in Game.Objects) {
              if (i != 'Cursor' && i != 'Grandma' && Game.Objects[i].amount > 0) list.push(NEWS + choose(loc("Ticker (" + i + ")")));
            }

            if (Game.cookiesEarned >= 1000) {
              if (Game.season == 'halloween') list.push(NEWS + choose(loc("Ticker (Halloween)")));
              if (Game.season == 'christmas') list.push(NEWS + choose(loc("Ticker (Christmas)")));
              if (Game.season == 'valentines') list.push(NEWS + choose(loc("Ticker (Valentines)")));
              if (Game.season == 'easter') list.push(NEWS + choose(loc("Ticker (Easter)")));
            }
          }
          else {
            if (Game.Objects['Farm'].amount > 0) list.push(
              NEWS + choose(loc("Ticker (Farm)")));

            if (Game.Objects['Mine'].amount > 0) list.push(choose([
              NEWS + choose(loc("Ticker (Mine)"))
            ]));

            if (Game.Objects['Factory'].amount > 0) list.push(choose([
              NEWS + choose(loc("Ticker (Factory)"))
            ]));

            if (Game.Objects['Bank'].amount > 0) list.push(choose([
              NEWS + choose(loc("Ticker (Bank)"))
            ]));

            if (Game.Objects['Temple'].amount > 0) list.push(choose([
              NEWS + choose(loc("Ticker (Temple)"))
            ]));

            if (Game.Objects['Wizard tower'].amount > 0) list.push(choose([
              NEWS + choose(loc("Ticker (Wizard tower)"))
            ]));

            if (Game.Objects['Shipment'].amount > 0) list.push(choose([
              NEWS + choose(loc("Ticker (Shipment)"))
            ]));

            if (Game.Objects['Alchemy lab'].amount > 0) list.push(choose([
              NEWS + choose(loc("Ticker (Alchemy lab)"))
            ]));

            if (Game.Objects['Portal'].amount > 0) list.push(choose([
              NEWS + choose(loc("Ticker (Portal)"))
            ]));

            if (Game.Objects['Time machine'].amount > 0) list.push(choose([
              NEWS + choose(loc("Ticker (Time machine)"))
            ]));

            if (Game.Objects['Antimatter condenser'].amount > 0) list.push(choose([
              NEWS + choose(loc("Ticker (Antimatter condenser)"))
            ]));

            if (Game.Objects['Prism'].amount > 0) list.push(choose([
              NEWS + choose(loc("Ticker (Prism)"))
            ]));

            if (Game.Objects['Chancemaker'].amount > 0) list.push(choose([
              NEWS + choose(loc("Ticker (Chancemaker)"))
            ]));

            if (Game.Objects['Fractal engine'].amount > 0) list.push(choose([
              NEWS + choose(loc("Ticker (Fractal engine)"))
            ]));

            if (Game.Objects['Javascript console'].amount > 0) list.push(choose([
              NEWS + choose(loc("Ticker (Javascript console)"))
            ]));

            if (Game.Objects['Idleverse'].amount > 0) list.push(choose([
              NEWS + choose(loc("Ticker (Idleverse)"))
            ]));

            if (Game.Objects['Cortex baker'].amount > 0) list.push(choose([
              NEWS + choose(loc("Ticker (Cortex baker)"))
            ]));

            if (Game.Objects['You'].amount > 0) list.push(choose([
              NEWS + choose(loc("Ticker (You)"))
            ]));

            if (Game.season == 'halloween' && Game.cookiesEarned >= 1000) list.push(choose([
              'News : strange twisting creatures amass around cookie factories, nibble at assembly lines.',
              'News : ominous wrinkly monsters take massive bites out of cookie production; "this can\'t be hygienic", worries worker.',
              'News : pagan rituals on the rise as children around the world dress up in strange costumes and blackmail homeowners for candy.',
              'News : new-age terrorism strikes suburbs as houses find themselves covered in eggs and toilet paper.',
              'News : children around the world "lost and confused" as any and all Halloween treats have been replaced by cookies.'
            ]));

            if (Game.season == 'christmas' && Game.cookiesEarned >= 1000) list.push(choose([
              'News : bearded maniac spotted speeding on flying sleigh! Investigation pending.',
              'News : Santa Claus announces new brand of breakfast treats to compete with cookie-flavored cereals! "They\'re ho-ho-horrible!" says Santa.',
              'News : "You mean he just gives stuff away for free?!", concerned moms ask. "Personally, I don\'t trust his beard."',
              'News : obese jolly lunatic still on the loose, warn officials. "Keep your kids safe and board up your chimneys. We mean it."',
              'News : children shocked as they discover Santa Claus isn\'t just their dad in a costume after all!<br>"I\'m reassessing my life right now", confides Laura, aged 6.',
              'News : mysterious festive entity with quantum powers still wrecking havoc with army of reindeer, officials say.',
              'News : elves on strike at toy factory! "We will not be accepting reindeer chow as payment anymore. And stop calling us elves!"',
              'News : elves protest around the nation; wee little folks in silly little outfits spread mayhem, destruction; rabid reindeer running rampant through streets.',
              'News : scholars debate regarding the plural of reindeer(s) in the midst of elven world war.',
              'News : elves "unrelated to gnomes despite small stature and merry disposition", find scientists.',
              'News : elves sabotage radioactive frosting factory, turn hundreds blind in vicinity - "Who in their right mind would do such a thing?" laments outraged mayor.',
              'News : drama unfolds at North Pole as rumors crop up around Rudolph\'s red nose; "I may have an addiction or two", admits reindeer.'
            ]));

            if (Game.season == 'valentines' && Game.cookiesEarned >= 1000) list.push(choose([
              'News : organ-shaped confectioneries being traded in schools all over the world; gruesome practice undergoing investigation.',
              'News : heart-shaped candies overtaking sweets business, offering competition to cookie empire. "It\'s the economy, cupid!"',
              'News : love\'s in the air, according to weather specialists. Face masks now offered in every city to stunt airborne infection.',
              'News : marrying a cookie - deranged practice, or glimpse of the future?',
              'News : boyfriend dumped after offering his lover cookies for Valentine\'s Day, reports say. "They were off-brand", shrugs ex-girlfriend.'
            ]));

            if (Game.season == 'easter' && Game.cookiesEarned >= 1000) list.push(choose([
              'News : long-eared critters with fuzzy tails invade suburbs, spread terror and chocolate!',
              'News : eggs have begun to materialize in the most unexpected places; "no place is safe", warn experts.',
              'News : packs of rampaging rabbits cause billions in property damage; new strain of myxomatosis being developed.',
              'News : egg-laying rabbits "not quite from this dimension", warns biologist; advises against petting, feeding, or cooking the creatures.',
              'News : mysterious rabbits found to be egg-layers, but mammalian, hinting at possible platypus ancestry.'
            ]));
          }
        }
        if (!EN) {
          if (Game.cookiesEarned >= 10000) {
            list.push(NEWS + choose(loc("Ticker (misc)")));
            list.push(NEWS + choose(loc("Ticker (misc)")));
            list.push(NEWS + choose(loc("Ticker (misc)")));
          }
        }
        else {
          if (Math.random() < 0.05) {
            if (Game.HasAchiev('Base 10')) list.push('News : cookie manufacturer completely forgoes common sense, lets strange obsession with round numbers drive building decisions!');
            if (Game.HasAchiev('From scratch')) list.push('News : follow the tear-jerking, riches-to-rags story about a local cookie manufacturer who decided to give it all up!');
            if (Game.HasAchiev('A world filled with cookies')) list.push('News : known universe now jammed with cookies! No vacancies!');
            if (Game.HasAchiev('Last Chance to See')) list.push('News : incredibly rare albino wrinkler on the brink of extinction poached by cookie-crazed pastry magnate!');
            if (Game.Has('Serendipity')) list.push('News : local cookie manufacturer becomes luckiest being alive!');
            if (Game.Has('Season switcher')) list.push('News : seasons are all out of whack! "We need to get some whack back into them seasons", says local resident.');

            if (Game.Has('Kitten helpers')) list.push('News : faint meowing heard around local cookie facilities; suggests new ingredient being tested.');
            if (Game.Has('Kitten workers')) list.push('News : crowds of meowing kittens with little hard hats reported near local cookie facilities.');
            if (Game.Has('Kitten engineers')) list.push('News : surroundings of local cookie facilities now overrun with kittens in adorable little suits. Authorities advise to stay away from the premises.');
            if (Game.Has('Kitten overseers')) list.push('News : locals report troupe of bossy kittens meowing adorable orders at passersby.');
            if (Game.Has('Kitten managers')) list.push('News : local office cubicles invaded with armies of stern-looking kittens asking employees "what\'s happening, meow".');
            if (Game.Has('Kitten accountants')) list.push('News : tiny felines show sudden and amazing proficiency with fuzzy mathematics and pawlinomials, baffling scientists and pet store owners.');
            if (Game.Has('Kitten specialists')) list.push('News : new kitten college opening next week, offers courses on cookie-making and catnip studies.');
            if (Game.Has('Kitten experts')) list.push('News : unemployment rates soaring as woefully adorable little cats nab jobs on all levels of expertise, says study.');
            if (Game.Has('Kitten consultants')) list.push('News : "In the future, your job will most likely be done by a cat", predicts suspiciously furry futurologist.');
            if (Game.Has('Kitten assistants to the regional manager')) list.push('News : strange kittens with peculiar opinions on martial arts spotted loitering on local beet farms!');
            if (Game.Has('Kitten marketeers')) list.push('News : nonsensical kitten billboards crop up all over countryside, trying to sell people the cookies they already get for free!');
            if (Game.Has('Kitten analysts')) list.push('News : are your spending habits sensible? For a hefty fee, these kitten analysts will tell you!');
            if (Game.Has('Kitten executives')) list.push('News : kittens strutting around in hot little business suits shouting cut-throat orders at their assistants, possibly the cutest thing this reporter has ever seen!');
            if (Game.Has('Kitten admins')) list.push('News : all systems nominal, claim kitten admins obviously in way over their heads.');
            if (Game.Has('Kitten strategists')) list.push('News : overpaid kittens scratching their fuzzy little heads trying to find new ways to get cookies in your shopping cart!');
            if (Game.Has('Kitten angels')) list.push('News : "Try to ignore any ghostly felines that may be purring inside your ears," warn scientists. "They\'ll just lure you into making poor life choices."');
            if (Game.Has('Kitten wages')) list.push('News : kittens break glass ceiling! Do they have any idea how expensive those are!');
            if (Game.HasAchiev('Jellicles')) list.push('News : local kittens involved in misguided musical production, leave audience perturbed and unnerved.');
          }

          if (Game.HasAchiev('Dude, sweet') && Math.random() < 0.2) list.push(choose([
            'News : major sugar-smuggling ring dismantled by authorities; ' + Math.floor(Math.random() * 30 + 3) + ' tons of sugar lumps seized, ' + Math.floor(Math.random() * 48 + 2) + ' suspects apprehended.',
            'News : authorities warn tourists not to buy bootleg sugar lumps from street peddlers - "You think you\'re getting a sweet deal, but what you\'re being sold is really just ordinary cocaine", says agent.',
            'News : pro-diabetes movement protests against sugar-shaming. "I\'ve eaten nothing but sugar lumps for the past ' + Math.floor(Math.random() * 10 + 4) + ' years and I\'m feeling great!", says woman with friable skin.',
            'News : experts in bitter disagreement over whether sugar consumption turns children sluggish or hyperactive.',
            'News : fishermen deplore upturn in fish tooth decay as sugar lumps-hauling cargo sinks into the ocean.',
            'News : rare black sugar lump that captivated millions in unprecedented auction revealed to be common toxic fungus.',
            'News : "Back in my day, sugar lumps were these little cubes you\'d put in your tea, not those fist-sized monstrosities people eat for lunch", whines curmudgeon with failing memory.',
            'News : sugar lump-snacking fad sweeps the nation; dentists everywhere rejoice.'
          ]));

          if (Math.random() < 0.001)//apologies to Will Wright
          {
            list.push(
              'You have been chosen. They will come soon.',
              'They\'re coming soon. Maybe you should think twice about opening the door.',
              'The end is near. Make preparations.',
              'News : broccoli tops for moms, last for kids; dads indifferent.',
              'News : middle age a hoax, declares study; turns out to be bad posture after all.',
              'News : kitties want answers in possible Kitty Kibble shortage.'
            );
          }

          if (Game.cookiesEarned >= 10000) list.push(
            'News : ' + choose([
              'cookies found to ' + choose(['increase lifespan', 'sensibly increase intelligence', 'reverse aging', 'decrease hair loss', 'prevent arthritis', 'cure blindness']) + ' in ' + choose(animals) + '!',
              'cookies found to make ' + choose(animals) + ' ' + choose(['more docile', 'more handsome', 'nicer', 'less hungry', 'more pragmatic', 'tastier']) + '!',
              'cookies tested on ' + choose(animals) + ', found to have no ill effects.',
              'cookies unexpectedly popular among ' + choose(animals) + '!',
              'unsightly lumps found on ' + choose(animals) + ' near cookie facility; "they\'ve pretty much always looked like that", say biologists.',
              'new species of ' + choose(animals) + ' discovered in distant country; "yup, tastes like cookies", says biologist.',
              'cookies go well with ' + choose([choose(['roasted', 'toasted', 'boiled', 'sauteed', 'minced']) + ' ' + choose(animals), choose(['sushi', 'soup', 'carpaccio', 'steak', 'nuggets']) + ' made from ' + choose(animals)]) + ', says controversial chef.',
              '"do your cookies contain ' + choose(animals) + '?", asks PSA warning against counterfeit cookies.',
              'doctors recommend twice-daily consumption of fresh cookies.',
              'doctors warn against chocolate chip-snorting teen fad.',
              'doctors advise against new cookie-free fad diet.',
              'doctors warn mothers about the dangers of "home-made cookies".'
            ]),
            'News : "' + choose([
              'I\'m all about cookies',
              'I just can\'t stop eating cookies. I think I seriously need help',
              'I guess I have a cookie problem',
              'I\'m not addicted to cookies. That\'s just speculation by fans with too much free time',
              'my upcoming album contains 3 songs about cookies',
              'I\'ve had dreams about cookies 3 nights in a row now. I\'m a bit worried honestly',
              'accusations of cookie abuse are only vile slander',
              'cookies really helped me when I was feeling low',
              'cookies are the secret behind my perfect skin',
              'cookies helped me stay sane while filming my upcoming movie',
              'cookies helped me stay thin and healthy',
              'I\'ll say one word, just one : cookies',
              'alright, I\'ll say it - I\'ve never eaten a single cookie in my life'
            ]) + '", reveals celebrity.',
            choose([
              'News : scientist predicts imminent cookie-related "end of the world"; becomes joke among peers.',
              'News : man robs bank, buys cookies.',
              'News : scientists establish that the deal with airline food is, in fact, a critical lack of cookies.',
              'News : hundreds of tons of cookies dumped into starving country from airplanes; thousands dead, nation grateful.',
              'News : new study suggests cookies neither speed up nor slow down aging, but instead "take you in a different direction".',
              'News : overgrown cookies found in fishing nets, raise questions about hormone baking.',
              'News : "all-you-can-eat" cookie restaurant opens in big city; waiters trampled in minutes.',
              'News : man dies in cookie-eating contest; "a less-than-impressive performance", says judge.',
              'News : what makes cookies taste so right? "Probably all the [*****] they put in them", says anonymous tipper.',
              'News : man found allergic to cookies; "what a weirdo", says family.',
              'News : foreign politician involved in cookie-smuggling scandal.',
              'News : cookies now more popular than ' + choose(['cough drops', 'broccoli', 'smoked herring', 'cheese', 'video games', 'stable jobs', 'relationships', 'time travel', 'cat videos', 'tango', 'fashion', 'television', 'nuclear warfare', 'whatever it is we ate before', 'politics', 'oxygen', 'lamps']) + ', says study.',
              'News : obesity epidemic strikes nation; experts blame ' + choose(['twerking', 'that darn rap music', 'video-games', 'lack of cookies', 'mysterious ghostly entities', 'aliens', 'parents', 'schools', 'comic-books', 'cookie-snorting fad']) + '.',
              'News : cookie shortage strikes town, people forced to eat cupcakes; "just not the same", concedes mayor.',
              'News : "you gotta admit, all this cookie stuff is a bit ominous", says confused idiot.',
              //'News : scientists advise getting used to cookies suffusing every aspect of life; "this is the new normal", expert says.',
              //'News : doctors advise against wearing face masks when going outside. "You never know when you might need a cookie... a mask would just get in the way."',//these were written back when covid hadn't really done much damage yet but they just feel in poor taste now
              'News : is there life on Mars? Various chocolate bar manufacturers currently under investigation for bacterial contaminants.',
              'News : "so I guess that\'s a thing now", scientist comments on cookie particles now present in virtually all steel manufactured since cookie production ramped up worldwide.',
              'News : trace amounts of cookie particles detected in most living creatures, some of which adapting them as part of new and exotic metabolic processes.',
            ]),
            choose([
              'News : movie cancelled from lack of actors; "everybody\'s at home eating cookies", laments director.',
              'News : comedian forced to cancel cookie routine due to unrelated indigestion.',
              'News : new cookie-based religion sweeps the nation.',
              'News : fossil records show cookie-based organisms prevalent during Cambrian explosion, scientists say.',
              'News : mysterious illegal cookies seized; "tastes terrible", says police.',
              'News : man found dead after ingesting cookie; investigators favor "mafia snitch" hypothesis.',
              'News : "the universe pretty much loops on itself," suggests researcher; "it\'s cookies all the way down."',
              'News : minor cookie-related incident turns whole town to ashes; neighboring cities asked to chip in for reconstruction.',
              'News : is our media controlled by the cookie industry? This could very well be the case, says crackpot conspiracy theorist.',
              'News : ' + choose(['cookie-flavored popcorn pretty damn popular; "we kinda expected that", say scientists.', 'cookie-flavored cereals break all known cereal-related records', 'cookies popular among all age groups, including fetuses, says study.', 'cookie-flavored popcorn sales exploded during screening of Grandmothers II : The Moistening.']),
              'News : all-cookie restaurant opening downtown. Dishes such as braised cookies, cookie thermidor, and for dessert : crepes.',
              'News : "Ook", says interviewed orangutan.',
              'News : cookies could be the key to ' + choose(['eternal life', 'infinite riches', 'eternal youth', 'eternal beauty', 'curing baldness', 'world peace', 'solving world hunger', 'ending all wars world-wide', 'making contact with extraterrestrial life', 'mind-reading', 'better living', 'better eating', 'more interesting TV shows', 'faster-than-light travel', 'quantum baking', 'chocolaty goodness', 'gooder thoughtness']) + ', say scientists.',
              'News : flavor text ' + choose(['not particularly flavorful', 'kind of unsavory', '"rather bland"', 'pretty spicy lately']) + ', study finds.',
            ]),
            choose([
              'News : what do golden cookies taste like? Study reveals a flavor "somewhere between spearmint and liquorice".',
              'News : what do wrath cookies taste like? Study reveals a flavor "somewhere between blood sausage and seawater".',
              'News : ' + Game.bakeryName + '-brand cookies "' + choose(['much less soggy', 'much tastier', 'relatively less crappy', 'marginally less awful', 'less toxic', 'possibly more edible', 'more fashionable', 'slightly nicer', 'trendier', 'arguably healthier', 'objectively better choice', 'slightly less terrible', 'decidedly cookier', 'a tad cheaper']) + ' than competitors", says consumer survey.',
              'News : "' + Game.bakeryName + '" set to be this year\'s most popular baby name.',
              'News : new popularity survey says ' + Game.bakeryName + '\'s the word when it comes to cookies.',
              'News : major city being renamed ' + Game.bakeryName + 'ville after world-famous cookie manufacturer.',
              'News : ' + choose(['street', 'school', 'nursing home', 'stadium', 'new fast food chain', 'new planet', 'new disease', 'flesh-eating bacteria', 'deadly virus', 'new species of ' + choose(animals), 'new law', 'baby', 'programming language']) + ' to be named after ' + Game.bakeryName + ', the world-famous cookie manufacturer.',
              'News : don\'t miss tonight\'s biopic on ' + Game.bakeryName + '\'s irresistible rise to success!',
              'News : don\'t miss tonight\'s interview of ' + Game.bakeryName + ' by ' + choose(['Bloprah', 'Blavid Bletterman', 'Blimmy Blimmel', 'Blellen Blegeneres', 'Blimmy Blallon', 'Blonan Blo\'Brien', 'Blay Bleno', 'Blon Blewart', 'Bleven Blolbert', 'Lord Toxikhron of dimension 7-B19', Game.bakeryName + '\'s own evil clone']) + '!',
              'News : people all over the internet still scratching their heads over nonsensical reference : "Okay, but why an egg?"',
              'News : viral video "Too Many Cookies" could be "a grim commentary on the impending crisis our world is about to face", says famous economist.',
              'News : "memes from last year somehow still relevant", deplore experts.',
              'News : cookie emoji most popular among teenagers, far ahead of "judgmental OK hand sign" and "shifty-looking dark moon", says study.',
            ]),
            choose([
              'News : births of suspiciously bald babies on the rise; ancient alien cabal denies involvement.',
              'News : "at this point, cookies permeate the economy", says economist. "If we start eating anything else, we\'re all dead."',
              'News : pun in headline infuriates town, causes riot. 21 wounded, 5 dead; mayor still missing.',
              'Nws : ky btwn W and R brokn, plas snd nw typwritr ASAP.',
              'Neeeeews : "neeeew EEEEEE keeeeey working fineeeeeeeee", reeeports gleeeeeeeeful journalist.',
              'News : cookies now illegal in some backwards country nobody cares about. Political tensions rising; war soon, hopefully.',
              'News : irate radio host rambles about pixelated icons. "None of the cookies are aligned! Can\'t anyone else see it? I feel like I\'m taking crazy pills!"',
              'News : nation cheers as legislators finally outlaw ' + choose(['cookie criticism', 'playing other games than Cookie Clicker', 'pineapple on pizza', 'lack of cheerfulness', 'mosquitoes', 'broccoli', 'the human spleen', 'bad weather', 'clickbait', 'dabbing', 'the internet', 'memes', 'millennials']) + '!',
              'News : ' + choose(['local', 'area']) + ' ' + choose(['man', 'woman']) + ' goes on journey of introspection, finds cookies : "I honestly don\'t know what I was expecting."',
              'News : ' + choose(['man', 'woman']) + ' wakes up from coma, ' + choose(['tries cookie for the first time, dies.', 'regrets it instantly.', 'wonders "why everything is cookies now".', 'babbles incoherently about some supposed "non-cookie food" we used to eat.', 'cites cookies as main motivator.', 'asks for cookies.']),
              'News : pet ' + choose(animals) + ', dangerous fad or juicy new market?',
              'News : person typing these wouldn\'t mind someone else breaking the news to THEM, for a change.',
              'News : "average person bakes ' + Beautify(Math.ceil(Game.cookiesEarned / 8000000000)) + ' cookie' + (Math.ceil(Game.cookiesEarned / 8000000000) == 1 ? '' : 's') + ' a year" factoid actually just statistical error; ' + Game.bakeryName + ', who has produced ' + Beautify(Game.cookiesEarned) + ' cookies in their lifetime, is an outlier and should not have been counted.'
            ])
          );
        }
      }

      if (list.length == 0) {
        if (loreProgress <= 0) list.push(loc("You feel like making cookies. But nobody wants to eat your cookies."));
        else if (loreProgress <= 1) list.push(loc("Your first batch goes to the trash. The neighborhood raccoon barely touches it."));
        else if (loreProgress <= 2) list.push(loc("Your family accepts to try some of your cookies."));
        else if (loreProgress <= 3) list.push(loc("Your cookies are popular in the neighborhood."), loc("People are starting to talk about your cookies."));
        else if (loreProgress <= 4) list.push(loc("Your cookies are talked about for miles around."), loc("Your cookies are renowned in the whole town!"));
        else if (loreProgress <= 5) list.push(loc("Your cookies bring all the boys to the yard."), loc("Your cookies now have their own website!"));
        else if (loreProgress <= 6) list.push(loc("Your cookies are worth a lot of money."), loc("Your cookies sell very well in distant countries."));
        else if (loreProgress <= 7) list.push(loc("People come from very far away to get a taste of your cookies."), loc("Kings and queens from all over the world are enjoying your cookies."));
        else if (loreProgress <= 8) list.push(loc("There are now museums dedicated to your cookies."), loc("A national day has been created in honor of your cookies."));
        else if (loreProgress <= 9) list.push(loc("Your cookies have been named a part of the world wonders."), loc("History books now include a whole chapter about your cookies."));
        else if (loreProgress <= 10) list.push(loc("Your cookies have been placed under government surveillance."), loc("The whole planet is enjoying your cookies!"));
        else if (loreProgress <= 11) list.push(loc("Strange creatures from neighboring planets wish to try your cookies."), loc("Elder gods from the whole cosmos have awoken to taste your cookies."));
        else if (loreProgress <= 12) list.push(loc("Beings from other dimensions lapse into existence just to get a taste of your cookies."), loc("Your cookies have achieved sentience."));
        else if (loreProgress <= 13) list.push(loc("The universe has now turned into cookie dough, to the molecular level."), loc("Your cookies are rewriting the fundamental laws of the universe."));
        else if (loreProgress <= 14) list.push(loc("A local news station runs a 10-minute segment about your cookies. Success!<br><small>(you win a cookie)</small>"), loc("it's time to stop playing"));
      }

      //if (Game.elderWrath>0 && (Game.pledges==0 || Math.random()<0.2))
      if (Game.elderWrath > 0 && (((Game.pledges == 0 && Game.resets == 0) && Math.random() < 0.3) || Math.random() < 0.03)) {
        list = [];
        if (Game.elderWrath == 1) list.push((NEWS + choose(loc("Ticker (grandma invasion start)"))));
        if (Game.elderWrath == 2) list.push((NEWS + choose(loc("Ticker (grandma invasion rise)"))));
        if (Game.elderWrath == 3) list.push((NEWS + choose(loc("Ticker (grandma invasion full)"))));
      }

      if (EN && Game.season == 'fools') {
        list = [];

        if (Game.cookiesEarned >= 1000) list.push(choose([
          choose(['Your office chair is really comfortable.', 'Profit\'s in the air!', 'Business meetings are such a joy!', 'What a great view from your office!', 'Smell that? That\'s capitalism, baby!', 'You truly love answering emails.', 'Working hard, or hardly working?', 'Another day in paradise!', 'Expensive lunch time!', 'Another government bailout coming up! Splendid!', 'These profits are doing wonderful things for your skin.', 'You daydream for a moment about a world without taxes.', 'You\'ll worry about environmental damage when you\'re dead!', 'Yay, office supplies!', 'Sweet, those new staplers just came in!', 'Ohh, coffee break!']),
          choose(['You\'ve spent the whole day', 'Another great day', 'First order of business today:', 'Why, you truly enjoy', 'What next? That\'s right,', 'You check what\'s next on the agenda. Oh boy,']) + ' ' + choose(['signing contracts', 'filling out forms', 'touching base with the team', 'examining exciting new prospects', 'playing with your desk toys', 'getting new nameplates done', 'attending seminars', 'videoconferencing', 'hiring dynamic young executives', 'meeting new investors', 'updating your rolodex', 'pumping up those numbers', 'punching in some numbers', 'getting investigated for workers\' rights violations', 'reorganizing documents', 'belittling underlings', 'reviewing employee performance', 'revising company policies', 'downsizing', 'pulling yourself up by your bootstraps', 'adjusting your tie', 'performing totally normal human activities', 'recentering yourself in the scream room', 'immanentizing the eschaton', 'shredding some sensitive documents', 'comparing business cards', 'pondering the meaning of your existence', 'listening to the roaring emptiness inside your soul', 'playing minigolf in your office']) + '!',
          'The word of the day is: ' + choose(['viral', 'search engine optimization', 'blags and wobsites', 'social networks', 'webinette', 'staycation', 'user experience', 'crowdfunding', 'carbon neutral', 'big data', 'machine learning', 'disrupting', 'influencers', 'monoconsensual transactions', 'sustainable', 'freemium', 'incentives', 'grassroots', 'web 3.0'/*this was before this whole crypto mess i'm so sorry*/, 'logistics', 'leveraging', 'branding', 'proactive', 'synergizing', 'market research', 'demographics', 'pie charts', 'blogular', 'blogulacious', 'blogastic', 'authenticity', 'plastics', 'electronic mail', 'cellular phones', 'rap music', 'bulbs', 'goblinization', 'straight-to-bakery', 'microbakeries', 'chocolativity', 'flavorfulness', 'tastyfication', 'sugar offsets', 'activated wheat', 'reification', 'immanentize the eschaton', 'cookies, I guess']) + '.'
        ]));
        if (Game.cookiesEarned >= 1000 && Math.random() < 0.05) list.push(choose([
          'If you could get some more cookies baked, that\'d be great.',
          'So. About those TPS reports.',
          'Hmm, you\'ve got some video tapes to return.',
          'They\'ll pay. They\'ll all pay.',
          'You haven\'t even begun to peak.',
          'There is an idea of a ' + Game.bakeryName + '. Some kind of abstraction. But there is no real you, only an entity. Something illusory.',
          'This was a terrible idea!'
        ]));


        if (Game.TickerN % 2 == 0) {
          if (Game.Objects['Grandma'].amount > 0) list.push(choose([
            'Your rolling pins are rolling and pinning!',
            'Production is steady!'
          ]));

          if (Game.Objects['Grandma'].amount > 0) list.push(choose([
            'Your ovens are diligently baking more and more cookies.',
            'Your ovens burn a whole batch. Ah well! Still good.'
          ]));

          if (Game.Objects['Farm'].amount > 0) list.push(choose([
            'Scores of cookies come out of your kitchens.',
            'Today, new recruits are joining your kitchens!'
          ]));

          if (Game.Objects['Factory'].amount > 0) list.push(choose([
            'Your factories are producing an unending stream of baked goods.',
            'Your factory workers decide to go on strike!',
            'It\'s safety inspection day in your factories.'
          ]));

          if (Game.Objects['Mine'].amount > 0) list.push(choose([
            'Your secret recipes are kept safely inside a giant underground vault.',
            'Your chefs are working on new secret recipes!'
          ]));

          if (Game.Objects['Shipment'].amount > 0) list.push(choose([
            'Your supermarkets are bustling with happy, hungry customers.',
            'Your supermarkets are full of cookie merch!'
          ]));

          if (Game.Objects['Alchemy lab'].amount > 0) list.push(choose([
            'It\'s a new trading day at the stock exchange, and traders can\'t get enough of your shares!',
            'Your stock is doubling in value by the minute!'
          ]));

          if (Game.Objects['Portal'].amount > 0) list.push(choose([
            'You just released a new TV show episode!',
            'Your cookie-themed TV show is being adapted into a new movie!'
          ]));

          if (Game.Objects['Time machine'].amount > 0) list.push(choose([
            'Your theme parks are doing well - puddles of vomit and roller-coaster casualties are being swept under the rug!',
            'Visitors are stuffing themselves with cookies before riding your roller-coasters. You might want to hire more clean-up crews.'
          ]));

          if (Game.Objects['Antimatter condenser'].amount > 0) list.push(choose([
            'Cookiecoin is officially the most mined digital currency in the history of mankind!',
            'Cookiecoin piracy is rampant!'
          ]));

          if (Game.Objects['Prism'].amount > 0) list.push(choose([
            'Your corporate nations just gained a new parliament!',
            'You\'ve just annexed a new nation!',
            'A new nation joins the grand cookie conglomerate!'
          ]));

          if (Game.Objects['Chancemaker'].amount > 0) list.push(choose([
            'Your intergalactic federation of cookie-sponsored planets reports record-breaking profits!',
            'Billions of unwashed aliens are pleased to join your workforce as you annex their planet!',
            'New toll opened on interstellar highway, funnelling more profits into the cookie economy!'
          ]));

          if (Game.Objects['Fractal engine'].amount > 0) list.push(choose([
            'Your cookie-based political party is doing fantastic in the polls!',
            'New pro-cookie law passes without a hitch thanks to your firm grasp of the political ecosystem!',
            'Your appointed senators are overturning cookie bans left and right!'
          ]));

          if (Game.Objects['Javascript console'].amount > 0) list.push(choose([
            'Cookies are now one of the defining aspects of mankind! Congratulations!',
            'Time travelers report that this era will later come to be known, thanks to you, as the cookie millennium!',
            'Cookies now deeply rooted in human culture, likely puzzling future historians!'
          ]));

          if (Game.Objects['Idleverse'].amount > 0) list.push(choose([
            'Public aghast as all remaining aspects of their lives overtaken by universal cookie industry!',
            'Every single product currently sold in the observable universe can be traced back to your company! And that\'s a good thing.',
            'Antitrust laws let out a helpless whimper before being engulfed by your sprawling empire!'
          ]));

          if (Game.Objects['Cortex baker'].amount > 0) list.push(choose([
            'Bold new law proposal would grant default ownership of every new idea by anyone anywhere to ' + Game.bakeryName + '\'s bakery!',
            'Bakery think tanks accidentally reinvent cookies for the 57th time this week!',
            'Bakery think tanks invent entire new form of human communication to advertise and boost cookie sales!'
          ]));

          if (Game.Objects['You'].amount > 0) list.push(choose([
            '' + Game.bakeryName + ' releases new self-help book: "How I Made My ' + Beautify(Game.cookiesEarned) + ' Cookies And How You Can Too"!',
            'Don\'t miss our interview tonight with the stupefying ' + Game.bakeryName + ', who discusses where to go next once you\'re at the top!',
            'Fame, beauty, biscuits; ' + Game.bakeryName + ' has it all - but is it enough?'
          ]));
        }

        if (loreProgress <= 0) list.push('Such a grand day to begin a new business.');
        else if (loreProgress <= 1) list.push('You\'re baking up a storm!');
        else if (loreProgress <= 2) list.push('You are confident that one day, your cookie company will be the greatest on the market!');
        else if (loreProgress <= 3) list.push('Business is picking up!');
        else if (loreProgress <= 4) list.push('You\'re making sales left and right!');
        else if (loreProgress <= 5) list.push('Everyone wants to buy your cookies!');
        else if (loreProgress <= 6) list.push('You are now spending most of your day signing contracts!');
        else if (loreProgress <= 7) list.push('You\'ve been elected "business tycoon of the year"!');
        else if (loreProgress <= 8) list.push('Your cookies are a worldwide sensation! Well done, old chap!');
        else if (loreProgress <= 9) list.push('Your brand has made its way into popular culture. Children recite your slogans and adults reminisce them fondly!');
        else if (loreProgress <= 10) list.push('A business day like any other. It\'s good to be at the top!');
        else if (loreProgress <= 11) list.push('You look back on your career. It\'s been a fascinating journey, building your baking empire from the ground up.');
      }

      for (var i = 0; i < Game.modHooks['ticker'].length; i++) {
        var arr = Game.modHooks['ticker'][i]();
        if (arr) list = list.concat(arr);
      }

      Game.TickerEffect = 0;

      if (!manual && Game.T > Game.fps * 10 && Game.Has('Fortune cookies') && Math.random() < (Game.HasAchiev('O Fortuna') ? 0.04 : 0.02)) {
        var fortunes = [];
        for (var i in Game.Tiers['fortune'].upgrades) {
          var it = Game.Tiers['fortune'].upgrades[i];
          if (!Game.HasUnlocked(it.name)) fortunes.push(it);
        }

        if (!Game.fortuneGC) fortunes.push('fortuneGC');
        if (!Game.fortuneCPS) fortunes.push('fortuneCPS');

        if (fortunes.length > 0) {
          list = [];
          var me = choose(fortunes);
          Game.TickerEffect = { type: 'fortune', sub: me };

          if (me == 'fortuneGC') me = loc("Today is your lucky day!");/*<br>Click here for a golden cookie.';*/
          else if (me == 'fortuneCPS') { Math.seedrandom(Game.seed + '-fortune'); me = loc("Your lucky numbers are:") + ' ' + Math.floor(Math.random() * 100) + ' ' + Math.floor(Math.random() * 100) + ' ' + Math.floor(Math.random() * 100) + ' ' + Math.floor(Math.random() * 100)/*+'<br>Click here to gain one hour of your CpS.'*/; Math.seedrandom(); }
          else {
            if (EN) {
              me = me.dname.substring(me.name.indexOf('#')) + ' : ' + me.baseDesc.substring(me.baseDesc.indexOf('<q>') + 3);
              me = me.substring(0, me.length - 4);
            }
            else if (me.buildingTie) me = me.dname + ' : ' + loc(choose(["Never forget your %1.", "Pay close attention to the humble %1.", "You've been neglecting your %1.", "Remember to visit your %1 sometimes."]), me.buildingTie.single);
            else me = me.dname + ' : ' + loc(choose(["You don't know what you have until you've lost it.", "Remember to take breaks.", "Hey, what's up. I'm a fortune cookie.", "You think you have it bad? Look at me."]));
          }
          me = '<span class="fortune"><div class="icon" style="vertical-align:middle;display:inline-block;background-position:' + (-29 * 48) + 'px ' + (-8 * 48) + 'px;transform:scale(0.5);margin:-16px;position:relative;left:-4px;top:-2px;"></div>' + me + '</span>';
          list = [me];
        }
      }

      if (Game.windowW < Game.tickerTooNarrow) list = ['<div style="transform:scale(0.8,1.2);">' + NEWS + (EN ? 'help!' : loc("help me!")) + '</div>'];

      Game.TickerAge = Game.fps * 10;
      Game.Ticker = choose(list);
      Game.AddToLog(Game.Ticker);
      Game.TickerN++;
      Game.TickerDraw();
    }

    var css_prompt = document.createElement('style');
    css_prompt.innerHTML = `#promptContentSpendLump .icon {background-image:url('https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/icons.png')!important;}`;
    document.head.appendChild(css_prompt);

    var css_new = document.createElement('style');
    css_new.innerText = `body .icon,body .crate,body .usesIcon{background-image:url('https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/icons.png');}.product .icon,.product .icon.off,.tinyProductIcon{background-image:url('https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/buildings.png');}`;
    document.head.appendChild(css_new);

    var css_currency = document.createElement('style');
    css_currency.innerHTML = `.heavenly.price:before{background:url('https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/golden_walnut.png');}` + `.lump.price:before{background:url('https://raw.githubusercontent.com/voltacceptyt/cookievalley/refs/heads/main/img/stardrop.png');}`;
    document.body.appendChild(css_currency);

    Game.registerHook('create', function () {
      //Never forgetti, code injetti.
      //console.dir(Game.Loader.assets['icons.png']);

      //Strips out quotes from upgrades...but only if we're in English.
      //...it's a long story.
      if (EN) {
        const regexQuote = /<q>.*?<\/q>/
        const regexOpen = new RegExp(/<q>/g);

        for (var i in Game.UpgradesById) {
          var it = Game.UpgradesById[i];

          if (it.ddesc != null && (it.ddesc.match(regexOpen) || []).length > 1)
            it.ddesc = it.ddesc.replace(regexQuote, '');
        }

        for (var i in Game.AchievementsById) {
          var it = Game.AchievementsById[i];

          if (it.ddesc != null && (it.ddesc.match(regexOpen) || []).length > 1)
            it.ddesc = it.ddesc.replace(regexQuote, '');
        }

      }

      //Manually update the things that have "description functions" we wish to override.
      Game.UpgradesById[534].descFunc = null;
      Game.UpgradesById[531].descFunc = null;
      Game.UpgradesById[606].descFunc = null;

      //Edit buff names.
      Game.goldenCookieBuildingBuffs = {
        //Junimos
        'Cursor': ['High spirits', 'Forest fire'],
        //Villagers
        'Grandma': ['Pot luck', 'Civil unrest'],
        //Farmland
        'Farm': ['Fertile ground', 'Salted earth'],
        //Mines
        'Mine': ['Coal train', 'Infested floors'],
        //Coops
        'Factory': ['Eggcellence', 'Cooptastrophe'],
        //Barns
        'Bank': ['Milk madness', 'Cowlamity'],
        //Skull caverns
        'Temple': ['Qi\'s delight', 'Sandstorm'],
        //Wizard towers
        'Wizard tower': ['Cookie clairvoyance', 'Sleighted hand'],
        //Fish ponds
        'Shipment': ['Going swimmingly', 'Drought'],
        //Greenhouses
        'Alchemy lab': ['Growing somewhere', 'Shattered'],
        //Obelisks
        'Portal': ['Extradimensional baking', 'Interdimensional traffic jam'],
        //Gold clocks
        'Time machine': ['Seize the moment', 'Daylight savings disaster'],
        //Sewers
        'Antimatter condenser': ['Underground block party', 'Unprecedented flooding'],
        //Museums
        'Prism': ['Free admission', 'Gift shop closure'],
        //Community centres
        'Chancemaker': ['Municipal budget surplus', 'Public funding failure'],
        //Cabins
        'Fractal engine': ['Warm hearts', 'Cold shoulders'],
        //Islands
        'Javascript console': ['Sun-kissed', 'Trouble in paradise'],
        //Consoles
        'Idleverse': ['Meal-time rendering', 'Segfaults (how?!)'],
        //Crossoverers
        'Cortex baker': ['Epic crossover event', 'Worlds collide'],
        //You
        'You': ['Self-confidence', 'Identity crisis'],
      };

      //Edit buff titles.
      //REMOVED for unfortunate bug with how the Eldeer (Cariboom) achievement is popped.
      /*Game.buffTypesByName["blood frenzy"].func = function(time,pow)
      {
        return {
          name:'Cash grab',
          desc:loc("Cookie production x%1 for %2!",[pow,Game.sayTime(time*Game.fps,-1)]),
          icon:[29,6],
          time:time*Game.fps,
          add:true,
          multCpS:pow,
          aura:1
        };
      };*/

      //Edit buff icons.
      Game.buffTypesByName["frenzy"].func = function (time, pow) {
        return {
          name: 'Frenzy',
          desc: loc("Cookie production x%1 for %2!", [pow, Game.sayTime(time * Game.fps, -1)]),
          icon: [10, 16],
          time: time * Game.fps,
          add: true,
          multCpS: pow,
          aura: 1
        };
      };

      Game.buffTypesByName["click frenzy"].func = function (time, pow) {
        return {
          name: 'Click frenzy',
          desc: loc("Clicking power x%1 for %2!", [pow, Game.sayTime(time * Game.fps, -1)]),
          icon: [0, 16],
          time: time * Game.fps,
          add: true,
          multClick: pow,
          aura: 1
        };
      };

      Game.buffTypesByName["building buff"].func = function (time, pow, building) {
        var obj = Game.ObjectsById[building];
        return {
          name: Game.goldenCookieBuildingBuffs[obj.name][0],
          dname: EN ? Game.goldenCookieBuildingBuffs[obj.name][0] : loc("%1 Power!", obj.dname),
          desc: loc("Your %1 are boosting your CpS!", loc("%1 " + obj.bsingle, LBeautify(obj.amount))) + '<br>' + loc("Cookie production +%1% for %2!", [Beautify(Math.ceil(pow * 100 - 100)), Game.sayTime(time * Game.fps, -1)]),
          icon: [obj.iconColumn, 16],
          time: time * Game.fps,
          add: true,
          multCpS: pow,
          aura: 1
        };
      };
    });

    Game.registerHook('check', function () {

    });

    Game.registerHook('draw', function () {

    });

  },
  save: function () {
  },
  load: function (str) {
  },
});

ModLanguage('EN', {

  "REPLACE ALL": {
    "cursor": "junimo",
    "grandmatriarch": "oligarch",
    "elder": "investor",
    "grandmother": "citizen",
    "wrinkler": "serpent",
    "grandmapocalypse": "jojapocalypse",
    "bingo center/research facility": "Joja R&D office",
    "grandma": "villager",
    "appeased": "regulated",
    "awoken": "emboldened",
    "displeased": "hungry",
    "angered": "tyrannical",
    ", age": ", lvl",

    "farm": "farmland",
    "farmlander villager": "farmhand",

    "mine": "mineshaft",
    "mineshaftr villager": "miner",

    "worker villager": "ornithologist",
    "factory": "coop",
    "factories": "coops",

    "banker villager": "rancher",
    "bank": "barn",
    "of barn": "of bank",
    "in barn": "in bank",

    "priestess villager": "adventurer",
    "temple": "skull cavern",

    "witch villager": "apprentice",
    //Wizard tower unchanged

    "cosmic villagers": "merpeople",
    "cosmic villager": "merperson",
    "shipment": "fish pond",

    "transmuted villager": "botanist",
    "alchemy lab": "greenhouse",

    "altered villager": "visiting villager",
    "portal": "obelisk",

    "villagers' villagers": "dwarves",
    "villagers' villager": "dwarf",
    "time machine": "gold clock",

    "antivillagers": "shadow people",
    "antivillager": "shadow person",
    "antimatter condenser": "sewer",

    "rainbow villager": "archaeologist",
    "prism": "museum",

    "lucky villager": "volunteer",
    "chancemaker": "community centre",

    "metavillager": "non-non-player character",
    "fractal engine": "cabin",

    "javascript console": "island",
    "binary villager": "vacationer",

    "idleverse": "C# console",
    "alternate villager": "hacker",

    "cortex baker": "crossoverer",
    "brainy villager": "cosplayer",

    "clone villager": "oddly familiar villager",

    "heavenly chip": "golden walnut",
    "sugar lump": "stardrop",
    "worship swap": "inventory swap",
    "stock market": "livestock market",
    "Clone": "Player",
  },

  "[Tier]Plain": "Gently Used",
  "[Tier]Berrylium": "Copper",
  "[Tier]Blueberrylium": "Amethyst",
  "[Tier]Chalcedhoney": "Steel",
  "[Tier]Buttergold": "Ruby",
  "[Tier]Sugarmuck": "Slimy",
  "[Tier]Jetmint": "Gold",
  "[Tier]Cherrysilver": "Emerald",
  "[Tier]Hazelrald": "Diamond",
  "[Tier]Mooncandy": "Iridium",
  "[Tier]Astrofudge": "Prismatic",
  "[Tier]Alabascream": "Galaxy",
  "[Tier]Iridyum": "Volcanic",
  "[Tier]Glucosmium": "Radioactive",
  "[Tier]Glimmeringue": "Infinity",

  "[Upgrade name 787]Unshackled flavor": "Unshackled tools",
  "[Upgrade quote 787]Unshackled flavor": "According to recent advances in anthropology, the first tool developed by humans was the wooden spoon, followed by the rolling pin and, curiously, the television remote. The television, of course, would not be developed for a further twenty thousand years.",
  "[Upgrade name 788]Unshackled berrylium": "Unshackled copper",
  "[Upgrade quote 788]Unshackled berrylium": "Once abundant, copper has been rendered scarce in recent years by an increasingly rabid crowd of pastry chefs looking to expand their crepe pan collections.",
  "[Upgrade name 789]Unshackled blueberrylium": "Unshackled amethyst",
  "[Upgrade quote 789]Unshackled blueberrylium": "I like purple.",
  "[Upgrade name 790]Unshackled chalcedhoney": "Unshackled steel",
  "[Upgrade quote 790]Unshackled chalcedhoney": "An alloy of iron, and carbon extracted from purified, overbaked cookies.",
  "[Upgrade name 791]Unshackled buttergold": "Unshackled ruby",
  "[Upgrade quote 791]Unshackled buttergold": "The shade of cherries, of strawberries, raspberries, and...tomatoes? These Italian cookies are something else, man.",
  "[Upgrade name 792]Unshackled sugarmuck": "Unshackled slime",
  "[Upgrade quote 792]Unshackled sugarmuck": "Glimmering globs of honey and chocolate, lumbering off into the sunset...it's just so beautiful.",
  "[Upgrade name 793]Unshackled jetmint": "Unshackled gold",
  "[Upgrade quote 793]Unshackled jetmint": "Upon the discovery of gold, the latin language dubbed it \"aurum,\" deriving from the extant phrase \"aurum crumbum,\" which referred to the colour of a perfectly baked cookie.",
  "[Upgrade name 794]Unshackled cherrysilver": "Unshackled emerald",
  "[Upgrade quote 794]Unshackled cherrysilver": "Despite what big geology would have you believe, emeralds are just really old mint candies.",
  "[Upgrade name 795]Unshackled hazelrald": "Unshackled diamond",
  "[Upgrade quote 795]Unshackled hazelrald": "While valued primarily for their sparkliness, diamond-tipped drills present the ultimate application for the substance, as the premier choice in remdiating cookie-related dental incidents.",
  "[Upgrade name 796]Unshackled mooncandy": "Unshackled iridium",
  "[Upgrade quote 796]Unshackled mooncandy": "The second-densest metal to occur naturally on earth; one does wonder why osmium doesn't get as much love.",
  "[Upgrade name 797]Unshackled astrofudge": "Unshackled spectra",
  "[Upgrade quote 797]Unshackled astrofudge": "At either ends of the unshackled rainbow, one can observe a chocolatey flavour at lower freqencies, and an extremely unsettling buzzing sensation at the higher.",
  "[Upgrade name 798]Unshackled alabascream": "Unshackled nebulae",
  "[Upgrade quote 798]Unshackled alabascream": "To bake a cookie truly from scratch, you must first invent the universe. Then quarks, then protons, then a bunch of other stuff, and then you've got to make a really milky way (for dunking).",
  "[Upgrade name 799]Unshackled iridyum": "Unshackled lava",
  "[Upgrade quote 799]Unshackled iridyum": "There's nothing quite like the taste of a cookie baked on fresh magma, preferably enjoyed at a relatively safe distance from said magma.",
  "[Upgrade name 800]Unshackled glucosmium": "Unshackled radiation",
  "[Upgrade quote 800]Unshackled glucosmium": "Probably a bit unwise...but how else can we expect to jumpstart the next generation of cookie evolution?",
  "[Upgrade name 863]Unshackled glimmeringue": "Unshackled soul",
  "[Upgrade quote 863]Unshackled glimmeringue": "The possibilities are infinite. Or, at the very least, NaN.",

  "Cursor (short)": "Junimo",
  "[Cursor quote]Autoclicks once every 10 seconds.": "Look at them. They're just little guys.",

  "Grandma (short)": "Villager",
  "[Grandma quote]A nice grandma to bake more cookies.": "A stand-up citizen to stand up and bake some cookies.",

  "Farm (short)": "Farmland",
  "[Farm quote]Grows cookie plants from cookie seeds.": "The sprinklers are full of chocolate.",

  "Mine (short)": "Mineshaft",
  "[Mine quote]Mines out cookie dough and chocolate chips.": "We need to go deeper. And chewier. And crispier.",

  "Factory (short)": "Coop",
  "[Factory quote]Produces large quantities of cookies.": "It's simple. We raise cookie chickens, hatched from chocolate eggs, to lay regular eggs, to bake cookies with!",

  "Bank (short)": "Barn",
  "[Bank quote]Generates cookies from interest.": "The premier source of fresh milk, and the premier site of kitten raids.",

  "Temple (short)": "Skull cavern",
  "[Temple quote]Full of precious, ancient chocolate.": "Like the mines, but spookier, and with darker chocolate.",

  //Wizard tower
  "[Wizard tower quote]Summons cookies with magic spells.": "Rasmodius finally got that building permit.",

  "Shipment (short)": "Fish pond",
  "[Shipment quote]Brings in fresh cookies from the cookie planet.": "Do these cookies feel a little...soggy...to you?",

  "Alchemy lab (short)": "Greenhouse",
  "[Alchemy lab quote]Turns gold into cookies!": "We are free cookies, unshackled by your barbarous climate.",

  "Portal (short)": "Obelisk",
  "[Portal quote]Opens a door to the Cookieverse.": "You could always use cookie totems for your teleportation needs, but that gets pretty expensive.",

  "Time machine (short)": "Gold clock",
  "[Time machine quote]Brings cookies from the past, before they were even eaten.": "Keeps cookies fresh indefinitely, even after consumption.",

  "Antimatter condenser (short)": "Sewer",
  "[Antimatter condenser quote]Condenses the antimatter in the universe into cookies.": "Full of shadow bakeries and gooey cookies.",

  "Prism (short)": "Museum",
  "[Prism quote]Converts light itself into cookies.": "Supports cookie archaeology through the acquisition and auction of chocolate artifacts.",

  "Chancemaker (short)": "Comm. Centre",
  "[Chancemaker quote]Generates cookies out of thin air through sheer luck.": "Creates ingredient bundles for more efficient baking.",

  "Fractal engine (short)": "Cabin",
  "[Fractal engine quote]Turns cookies into even more cookies.": "\"Borrow\" cookies from other friends playing Cookie Valley.",

  "Javascript console (short)": "Island",
  "[Javascript console quote]Creates cookies from the very code this game was written in.": "You archipela-go, girl.",

  "Idleverse (short)": "C# console",
  "[Idleverse quote]There's been countless other idle universes running alongside our own. You've finally found a way to hijack their production and convert whatever they've been making into cookies!": "Wait...this game isn't even written in C#.",

  "Cortex baker (short)": "Crossoverer",
  "[Cortex baker quote]These artificial brains the size of planets are capable of simply dreaming up cookies into existence. Time and space are inconsequential. Reality is arbitrary.": "Hybridizes universes to produce cookies from other IPs.",

  // ------------- UPGRADES ------------- //

  //Miscellaneous
  "[Upgrade name 162]Naughty list": "Nice list",
  "[Upgrade quote 162]Naughty list": "It's a list from Evelyn full of everyone's favourite cookie recipes. How wholesome! There is one that calls for eight entire rabbits' feet, the soul of an unforgiven man, and something called \"sturgeon mayonnaise\"...but let's just ignore that.",

  //Jojapocalypse
  "[Upgrade name 64]Bingo center/Research facility": "Jojamart corporate R&D facility",
  "[Upgrade quote 64]Bingo center/Research facility": "I mean, it's one membership card, Morris. What could it cost? Ten cookies?",
  "[Upgrade name 65]Specialized chocolate chips": "Optimized chocolate chips",
  "[Upgrade quote 65]Specialized chocolate chips": "It's something about the fructose ratio. You wouldn't understand.",
  "[Upgrade name 66]Designer cocoa beans": "Genetically modified cocoa beans",
  "[Upgrade quote 66]Designer cocoa beans": "Oh, we didn't actually change anything. We just wanted to patent the trees.",
  "[Upgrade name 67]Ritual rolling pins": "Rolling conveyors",
  "[Upgrade name 68]Underworld ovens": "Industrial ovens",
  "[Upgrade name 69]One mind": "Company culture",
  "[Upgrade quote 69]One mind": "Join us. Thrive.",
  "[Upgrade name 70]Exotic nuts": "Imported pistachios",
  "[Upgrade quote 70]Exotic nuts": "After we brokered that trade deal, the Gotoro Empire agreed this whole war was just nuts.",
  "[Upgrade name 71]Communal brainsweep": "Corporate retreat",
  "[Upgrade name 72]Arcane sugar": "High-fructose thumbcorn syrup",
  "[Upgrade name 73]Elder Pact": "Prospectus",
  "[Upgrade quote 73]Elder Pact": "Money, money, money, must be funny, in a cookie's world.",
  "[Upgrade name 74]Elder Pledge": "Earnings report",
  "[Upgrade quote 74]Elder Pledge": "When the chips are down, you better hope the crumbs are up.",
  "[Upgrade name 84]Elder Covenant": "IPO reversal",
  "[Upgrade quote 84]Elder Covenant": "One quick call to the SEC and this can all be over.",
  "[Upgrade name 85]Revoke Elder Covenant": "Initial pastry offering",
  "[Upgrade quote 85]Revoke Elder Covenant": "growth\nis\ninevitable",
  "[Upgrade name 87]Sacrificial rolling pins": "Company swag",
  "[Upgrade quote 87]Sacrificial rolling pins": "You love working here! Look, you love it so much we got you a mug with the company logo on it, so you can think about work when you have your Saturday morning coffee!",

  //Extras
  //Farmhands
  "[Upgrade quote 57]Farmer grandmas": "Quit eating the chocolate chips before you plant 'em, sprinkler boy.",
  //Miners
  "[Upgrade quote 58]Miner grandmas": "Diggy, diggy hole.",
  //Ornithologists
  "[Upgrade quote 59]Worker grandmas": "They're experts in bird law.",
  //Ranchers
  "[Upgrade quote 250]Banker grandmas": "This is my third rodeo, actually.",
  //Adventurers
  "[Upgrade quote 251]Priestess grandmas": "Cookies just taste better after you've been chased by ",
  //Apprentices
  "[Upgrade quote 252]Witch grandmas": "Just don't turn yourself into a frog.",
  //Merpeople
  "[Upgrade quote 60]Cosmic grandmas": "We put the \"culture\" in aquaculture.",
  //Botanists
  "[Upgrade quote 61]Transmuted grandmas": "So many seeds, so little time.",
  //Visitors
  "[Upgrade quote 62]Altered grandmas": "Come on, stay awhile and bake with us.",
  //Dwarves
  "[Upgrade quote 63]Grandmas' grandmas": "Hi ho, hi ho, it's off to bake we go.",
  //Shadow people
  "[Upgrade quote 103]Antigrandmas": "These void cookies have a surprising depth of flavour.",
  //Archaeologists
  "[Upgrade quote 180]Rainbow grandmas": "What mysterious recipes shall we unearth?",
  //Volunteers
  "[Upgrade quote 415]Lucky grandmas": "Free labour, the best kind.",
  //Non-non-player characters
  "[Upgrade quote 521]Metagrandmas": "1v1 me, bro.",
  //Vacationers
  "[Upgrade quote 593]Binary grandmas": "A nice holiday away from everything (except baking).",
  //Hackers
  "[Upgrade quote 683]Alternate grandmas": "You take the chocolate pill, and you find out just how hot this oven gets.",
  //Cosplayers
  "[Upgrade quote 729]Brainy grandmas": "Legal said it was probably fine.",
  //Oddly familiar villagers
  "[Upgrade quote 825]Clone grandmas": "Hey, do I know you?",

  //Mouse
  //Tier: Gently Used
  "[Upgrade name 75]Plastic mouse": "Secondhand mouse",
  "[Upgrade quote 75]Plastic mouse": "That's \"second hand\" mouse, actually.",
  //Tier: Copper
  "[Upgrade name 76]Iron mouse": "Bronze mouse",
  "[Upgrade quote 76]Iron mouse": "The Click Age is real.",
  //Tier: Amethyst
  "[Upgrade name 77]Titanium mouse": "Oddquartz mouse",
  "[Upgrade quote 77]Titanium mouse": "Shiny, hard, and hypoallergenic to boot!",
  //Tier: Steel
  "[Upgrade name 78]Adamantium mouse": "Stainless mouse",
  "[Upgrade quote 78]Adamantium mouse": "The chocolate rolls right off it.",
  //Tier: Ruby
  "[Upgrade name 119]Unobtainium mouse": "Corundum mouse",
  "[Upgrade quote 119]Unobtainium mouse": "You're a hard one, but I know that you've got your reasons.",
  //Tier: Slimy
  "[Upgrade name 190]Eludium mouse": "Gelatinous mouse",
  "[Upgrade quote 190]Eludium mouse": "Slimy, yet satisfying.",
  //Tier: Gold
  "[Upgrade name 191]Wishalloy mouse": "Gilded mouse",
  "[Upgrade quote 191]Wishalloy mouse": "The gold leaf makes it tastier. The massive jump in price is merely a convenient coincidence.",
  //Tier: Emerald
  "[Upgrade name 366]Fantasteel mouse": "Beryl mouse",
  "[Upgrade quote 366]Fantasteel mouse": "Couldn't quite get all the vanadium out.",
  //Tier: Diamond
  "[Upgrade name 367]Nevercrack mouse": "Refractive mouse",
  "[Upgrade quote 367]Nevercrack mouse": "The cookies look a little funny through this one.",
  //Tier: Iridium
  "[Upgrade name 427]Armythril mouse": "Violetshine mouse",
  "[Upgrade quote 427]Armythril mouse": "Is this a reference to something?",
  //Tier: Prismatic
  "[Upgrade name 460]Technobsidian mouse": "Spectral mouse",
  "[Upgrade quote 460]Technobsidian mouse": "Produces cookies in a wide variety of colours.",
  //Tier: Galaxy
  "[Upgrade name 461]Plasmarble mouse": "Nebula mouse",
  "[Upgrade quote 461]Plasmarble mouse": "Sparkly.",
  //Tier: Volcanic
  "[Upgrade name 661]Miraculite mouse": "Cinder mouse",
  "[Upgrade quote 661]Miraculite mouse": "So hot you could bake some cookies on it while you click.",
  //Tier: Radioactive
  "[Upgrade name 765]Aetherice mouse": "Autunite mouse",
  "[Upgrade quote 765]Aetherice mouse": "You might want to wear lead gloves using this one.",
  //Tier: Infinity
  "[Upgrade name 874]Omniplast mouse": "Soulforged mouse",
  "[Upgrade quote 874]Omniplast mouse": "Still has a little lava around the edges.",

  //Junimos
  //Tier: Gently Used
  "[Upgrade name 0]Reinforced index finger": "Fairy dust",
  "[Upgrade quote 0]Reinforced index finger": "we make!",
  //Tier: Copper
  "[Upgrade name 1]Carpal tunnel prevention cream": "Ancient scrolls",
  "[Upgrade quote 1]Carpal tunnel prevention cream": "we make the cookies!",
  //Tier: Amethyst
  "[Upgrade name 2]Ambidextrous": "Tiny little huts",
  "[Upgrade quote 2]Ambidextrous": "we make the warm...chocolatey cookies...",
  //Tier: Steel
  "[Upgrade name 3]Thousand fingers": "Thousand spirits",
  "[Upgrade quote 3]Thousand fingers": "hee hee",
  //Tier: Ruby
  "[Upgrade name 4]Million fingers": "Million spirits",
  "[Upgrade quote 4]Million fingers": "hee hee hee",
  //Tier: Slimy       
  "[Upgrade name 5]Billion fingers": "Billion spirits",
  "[Upgrade quote 5]Billion fingers": "heeee hoo hoo hoo",
  //Tier: Gold        
  "[Upgrade name 6]Trillion fingers": "Trillion spirits",
  "[Upgrade quote 6]Trillion fingers": "la la la la la laaaa",
  //Tier: Emerald     
  "[Upgrade name 43]Quadrillion fingers": "Quadrillion spirits",
  "[Upgrade quote 43]Quadrillion fingers": "eeee hee hee hee hee hee wheeeeee!",
  //Tier: Diamond     
  "[Upgrade name 82]Quintillion fingers": "Quintillion spirits",
  "[Upgrade quote 82]Quintillion fingers": "i bake cookies with my friends!",
  //Tier: Iridium     
  "[Upgrade name 109]Sextillion fingers": "Sextillion spirits",
  "[Upgrade quote 109]Sextillion fingers": "there's flour everywhere!",
  //Tier: Prismatic       
  "[Upgrade name 188]Septillion fingers": "Septillion spirits",
  "[Upgrade quote 188]Septillion fingers": "is it ok if the cookies are really small???",
  //Tier: Galaxy      
  "[Upgrade name 189]Octillion fingers": "Octillion spirits",
  "[Upgrade quote 189]Octillion fingers": "look at all these tiny cookies we made!",
  //Tier: Volcanic        
  "[Upgrade name 660]Nonillion fingers": "Nonillion spirits",
  "[Upgrade quote 660]Nonillion fingers": "oops i ate some of the chocolate oh noooo",
  //Tier: Radioactive     
  "[Upgrade name 764]Decillion fingers": "Decillion spirits",
  "[Upgrade quote 764]Decillion fingers": "do you ever think about...what if we took two cookies...and put them on top of each other!!",
  //Tier: Infinity        
  "[Upgrade name 873]Undecillion fingers": "Undecillion spirits",
  "[Upgrade quote 873]Undecillion fingers": "there's so many of us!",

  //Villagers
  //Tier: Gently Used
  "[Upgrade name 7]Forwards from grandma": "Little talks",
  "[Upgrade quote 7]Forwards from grandma": "Whether monsters or men, everyone appreciates stopping for a quick chat.",
  //Tier: Copper
  "[Upgrade name 8]Steel-plated rolling pins": "Dialogue dialogs",
  "[Upgrade quote 8]Steel-plated rolling pins": "So should I tell him about the zucchini cookies, or what?",
  //Tier: Amethyst
  "[Upgrade name 9]Lubricated dentures": "Getting to know you",
  "[Upgrade quote 9]Lubricated dentures": "They like me...they really like me!",
  //Tier: Steel
  "[Upgrade name 44]Prune juice": "Fetch quests",
  "[Upgrade quote 44]Prune juice": "You scratch my bake, and I'll scratch yours.",
  //Tier: Ruby
  "[Upgrade name 110]Double-thick glasses": "Gainful employment",
  "[Upgrade quote 110]Double-thick glasses": "We've converted the clinic into a bakery, you see.",
  //Tier: Slimy
  "[Upgrade name 192]Aging agents": "Cutscene diplomacy",
  "[Upgrade quote 192]Aging agents": "The governor does love his cookies.",
  //Tier: Gold
  "[Upgrade name 294]Xtreme walkers": "A little something from Pierre's",
  "[Upgrade name 294]Xtreme walkers": "So THAT'S what's in his secret stash.",
  //Tier: Emerald
  "[Upgrade name 307]The Unbridling": "Saloon siestas",
  "[Upgrade quote 307]The Unbridling": "Gus calls it a \"cookie coma\".",
  //Tier: Diamond
  "[Upgrade name 428]Reverse dementia": "Birthday gifts",
  "[Upgrade quote 428]Reverse dementia": "Awww, you shouldn't have. Then again, you definitely should.",
  //Tier: Iridium
  "[Upgrade name 480]Timeproof hair dyes": "6-heart events",
  "[Upgrade quote 480]Timeproof hair dyes": "It's amazing how someone can be such a tragic figure, and yet have such a great relationship with chickens.",
  //Tier: Prismatic
  "[Upgrade name 506]Good manners": "Universal loves",
  "[Upgrade quote 506]Good manners": "The rabbits aren't going to be pleased with this arrangement. Not at all.",
  //Tier: Galaxy
  "[Upgrade name 662]Generation degeneration": "Wiki whisperers",
  "[Upgrade quote 662]Generation degeneration": "Well, it's not like I can ask them what they want!",
  //Tier: Volcanic
  "[Upgrade name 700]Visits": "Bouquets",
  "[Upgrade quote 700]Visits": "Look at you, pastry chef at Casa Nova.",
  //Tier: Radioactive
  "[Upgrade name 743]Kitchen cabinets": "Be still my baking heart",
  "[Upgrade quote 743]Kitchen cabinets": "Spread the love evenly in a single layer on a rimmed baking sheet.",
  //Tier: Infinity
  "[Upgrade name 840]Foam-tipped canes": "Seashell pendants",
  "[Upgrade quote 840]Foam-tipped canes": "Quite the little harem you've built for yourself.",

  //Farms
  //Tier: Gently Used
  "[Upgrade name 10]Cheap hoes": "Free parsnip seeds",
  "[Upgrade quote 10]Cheap hoes": "You're gonna go far with these, kid.",
  //Tier: Copper
  "[Upgrade name 11]Fertilizer": "Copper watering cans",
  "[Upgrade quote 11]Fertilizer": "Waters three cookie plants at once!",
  //Tier: Amethyst
  "[Upgrade name 12]Cookie trees": "Deluxe speed-gro",
  "[Upgrade quote 12]Cookie trees": "Parbaked, for faster cooking.",
  //Tier: Steel
  "[Upgrade name 45]Genetically-modified cookies": "Quality sprinklers",
  "[Upgrade quote 45]Genetically-modified cookies": "Absolutely coats the ground in chocolate.",
  //Tier: Ruby
  "[Upgrade name 111]Gingerbread scarecrows": "Seedmakers",
  "[Upgrade quote 111]Gingerbread scarecrows": "This bad boy can fit so many cocoa beans in it.",
  //Tier: Slimy
  "[Upgrade name 193]Pulsar sprinklers": "Golden hoes",
  "[Upgrade quote 193]Pulsar sprinklers": "Now, I'm not saying you're a gold digger.",
  //Tier: Gold
  "[Upgrade name 295]Fudge fungus": "Preserves jars",
  "[Upgrade quote 295]Fudge fungus": "I'm calling it \"cookie butter\".",
  //Tier: Emerald
  "[Upgrade name 308]Wheat triffids": "Rarecrows",
  "[Upgrade quote 308]Wheat triffids": "If you're so rare, how come there's so many of ya?",
  //Tier: Diamond
  "[Upgrade name 429]Humane pesticides": "Rain totems",
  "[Upgrade quote 429]Humane pesticides": "Smells like petrichor.",
  //Tier: Iridium
  "[Upgrade name 481]Barnstars": "All-season saplings",
  "[Upgrade quote 481]Barnstars": "Cherry cookies in the spring, chocolate cookies in the summer, pumpkin cookies in the fall, and ice cream sandwiches in winter!",
  //Tier: Prismatic
  "[Upgrade name 507]Lindworms": "Crow treaties",
  "[Upgrade quote 507]Lindworms": "Ratified personally by the night man himself.",
  //Tier: Galaxy
  "[Upgrade name 663]Global seed vault": "Pressure nozzles",
  "[Upgrade quote 663]Global seed vault": "Shoots up to 95 kilograms of syrup a distance of 300 metres.",
  //Tier: Volcanic
  "[Upgrade name 701]Reverse-veganism": "Fruit bats",
  "[Upgrade quote 701]Reverse-veganism": "Not very fond of mushrooms.",
  //Tier: Radioactive
  "[Upgrade name 744]Cookie mulch": "Giant crops",
  "[Upgrade quote 744]Cookie mulch": "Now that's a cookie.",
  //Tier: Infinity
  "[Upgrade name 841]Self-driving tractors": "Grandpa's blessing",
  "[Upgrade quote 841]Self-driving tractors": "If you're reading this, you must be in dire need of a cookie.",

  //Mines
  //Tier: Gently Used
  "[Upgrade name 16]Sugar gas": "Half-price furnaces",
  "[Upgrade quote 16]Sugar gas": "Only 10 copper ore? A bargain!",
  //Tier: Copper
  "[Upgrade name 17]Megadrill": "Reinforced ladders",
  "[Upgrade quote 17]Megadrill": "Made out of solid jade.",
  //Tier: Amethyst
  "[Upgrade name 18]Ultradrill": "Cherry bombs",
  "[Upgrade quote 18]Ultradrill": "Quite cordial, if you ask me.",
  //Tier: Steel
  "[Upgrade name 47]Ultimadrill": "Steel pickaxes",
  "[Upgrade quote 47]Ultimadrill": "A bit overkill for boulders made of chocolate, frankly.",
  //Tier: Ruby
  "[Upgrade name 113]H-bomb mining": "Chocoalate",
  "[Upgrade quote 113]H-bomb mining": "Only the darkest.",
  //Tier: Slimy
  "[Upgrade name 195]Coreforge": "Butter slimes",
  "[Upgrade quote 195]Coreforge": "These would do so well on ChipChoc.",
  //Tier: Gold
  "[Upgrade name 296]Planetsplitters": "Barrels down below",
  "[Upgrade quote 296]Planetsplitters": "There's gotta be something good in here.",
  //Tier: Emerald
  "[Upgrade name 309]Canola oil wells": "High-speed elevators",
  "[Upgrade quote 309]Canola oil wells": "Accelerates cookies to the surface at breakneck speed.",
  //Tier: Diamond
  "[Upgrade name 430]Mole people": "Pokey purple pebbles",
  "[Upgrade quote 430]Mole people": "Since when do boulders have little green legs?",
  //Tier: Iridium
  "[Upgrade name 482]Mine canaries": "Crystalariums",
  "[Upgrade quote 482]Mine canaries": "Diamonds? Star shards? Nah. Sucrose.",
  //Tier: Prismatic
  "[Upgrade name 508]Bore again": "Dwarvish tomes",
  "[Upgrade quote 508]Bore again": "E tainp tnetm taameus onn pool nal.",
  //Tier: Galaxy
  "[Upgrade name 664]Air mining": "Bottomless pits",
  "[Upgrade quote 664]Air mining": "It's just cookies all the way down.",
  //Tier: Volcanic
  "[Upgrade name 702]Caramel alloys": "Firewalker boots",
  "[Upgrade name 702]Caramel alloys": "Perfect for the walk-in oven.",
  //Tier: Radioactive
  "[Upgrade name 745]Delicious mineralogy": "Gifts for Maru",
  "[Upgrade quote 745]Delicious mineralogy": "...that blue flash is normal, right?",
  //Tier: Infinity
  "[Upgrade name 842]Mineshaft supports": "Shrine of challenge",
  "[Upgrade quote 842]Mineshaft supports": "We bake these things not because they are easy, but because they are delicious.",

  //Coops
  //Tier: Gently Used
  "[Upgrade name 13]Sturdier conveyor belts": "Softer nests",
  "[Upgrade quote 13]Sturdier conveyor belts": "Warm laundry, the ideal roosting environment.",
  //Tier: Copper
  "[Upgrade name 14]Child labor": "Egg polishing",
  "[Upgrade quote 14]Child labor": "Ooh, shiny.",
  //Tier: Amethyst
  "[Upgrade name 15]Sweatshop": "Fluffier scrambles",
  "[Upgrade quote 15]Sweatshop": "The secret is to add a little splash of water.",
  //Tier: Steel
  "[Upgrade name 46]Radium reactors": "100% Crumb-fed chicks",
  "[Upgrade quote 46]Radium reactors": "They're eating the profits!",
  //Tier: Ruby
  "[Upgrade name 112]Recombobulators": "Microwave poaching",
  "[Upgrade quote 112]Recombobulators": "Don't try this at home.",
  //Tier: Slimy
  "[Upgrade name 194]Deep-bake process": "Albumin stabilizers",
  "[Upgrade quote 194]Deep-bake process": "You've never seen such perfect macarons in your life.",
  //Tier: Gold
  "[Upgrade name 297]Cyborg workforce": "Golden eggs",
  "[Upgrade quote 297]Cyborg workforce": "You've got to crack a few teeth to eat an omelet.",
  //Tier: Emerald
  "[Upgrade name 310]78-hour days": "Uglier ducklings",
  "[Upgrade quote 310]78-hour days": "Well that's a little harsh.",
  //Tier: Diamond
  "[Upgrade name 431]Machine learning": "Down-filled oven mitts",
  "[Upgrade quote 431]Machine learning": "A little too flammable, but otherwise effective.",
  //Tier: Iridium
  "[Upgrade name 483]Brownie point system": "Bun buns",
  "[Upgrade quote 483]Brownie point system": "Sweet rolls with tiny little ears. Just look at those teeny, tiny little ears.",
  //Tier: Prismatic
  "[Upgrade name 509]\"Volunteer\" interns": "Dinosaur meringues",
  "[Upgrade quote 509]\"Volunteer\" interns": "Tastes like fossils.",
  //Tier: Galaxy
  "[Upgrade name 665]Behavioral reframing": "Blue chickens",
  "[Upgrade quote 665]Behavioral reframing": "It'd be a real Shane if these guys weren't around.",
  //Tier: Volcanic
  "[Upgrade name 703]The infinity engine": "Unflightlessness",
  "[Upgrade quote 703]The infinity engine": "I bet this'll really take off.",
  //Tier: Radioactive
  "[Upgrade name 746]N-dimensional assembly lines": "Green eggs",
  "[Upgrade quote 746]N-dimensional assembly lines": "(hold the ham)",
  //Tier: Infinity
  "[Upgrade name 843]Universal automation": "Hatch theory",
  "[Upgrade quote 843]Universal automation": "So which DID come first?",

  //Barns
  //Tier: Gently Used
  "[Upgrade name 232]Taller tellers": "Tastier hay",
  "[Upgrade quote 232]Taller tellers": "If cookies didn't exist, I'd eat this stuff for every meal.",
  //Tier: Copper
  "[Upgrade name 233]Scissor-resistant credit cards": "Bigger milking buckets",
  "[Upgrade quote 233]Scissor-resistant credit cards": "Perfect for dunking really big cookies.",
  //Tier: Amethyst
  "[Upgrade name 234]Acid-proof vaults": "Space heaters",
  "[Upgrade quote 234]Acid-proof vaults": "Nice and toasty.",
  //Tier: Steel
  "[Upgrade name 235]Chocolate coins": "Shear sharpening",
  "[Upgrade quote 235]Chocolate coins": "More like cookie snipper, am I right?",
  //Tier: Ruby
  "[Upgrade name 236]Exponential interest rates": "Chocolate milk",
  "[Upgrade quote 236]Exponential interest rates": "How now, brown cow?",
  //Tier: Slimy
  "[Upgrade name 237]Financial zen": "Full fat cream",
  "[Upgrade quote 237]Financial zen": "Really sticks to your arteries.",
  //Tier: Gold
  "[Upgrade name 298]Way of the wallet": "Truffle butter",
  "[Upgrade quote 298]Way of the wallet": "Possesses a certain je ne sais quoi.",
  //Tier: Emerald
  "[Upgrade name 311]The stuff rationale": "Goat cheese icing",
  "[Upgrade quote 311]The stuff rationale": "The perfect complement to red velvet cookies.",
  //Tier: Diamond
  "[Upgrade name 432]Edible money": "Wool aprons",
  "[Upgrade quote 432]Edible money": "Bake up, sheeple.",
  //Tier: Iridium
  "[Upgrade name 484]Grand supercycles": "Three-milk problem",
  "[Upgrade quote 484]Grand supercycles": "They said it couldn't be done.",
  //Tier: Prismatic
  "[Upgrade name 510]Rules of acquisition": "Autopetters",
  "[Upgrade quote 510]Rules of acquisition": "Domo arigadough, farmer roboto.",
  //Tier: Galaxy
  "[Upgrade name 666]Altruistic loop": "Ostrich yolk emulsions",
  "[Upgrade quote 666]Altruistic loop": "You can taste the cholesterol.",
  //Tier: Volcanic
  "[Upgrade name 704]Diminishing tax returns": "The reddest barn doors",
  "[Upgrade quote 704]Diminishing tax returns": "And it only took sixteen coats of paint.",
  //Tier: Radioactive
  "[Upgrade name 747]Cookie Points": "Softly glowing goats",
  "[Upgrade quote 747]Cookie Points": "And you thought regular goat milk tasted funny.",
  //Tier: Infinity
  "[Upgrade name 844]The big shortcake": "Milk...and cookies",
  "[Upgrade quote 844]The big shortcake": "Name a more iconic duo. I'll wait.",

  //Skull Caverns
  //Tier: Gently Used
  "[Upgrade name 238]Golden idols": "Skeleton keys",
  "[Upgrade quote 238]Golden idols": "It can open any oven door in the world.",
  //Tier: Copper
  "[Upgrade name 239]Sacrifices": "Better bug armour",
  "[Upgrade quote 239]Sacrifices": "The finest grainmail.",
  //Tier: Amethyst
  "[Upgrade name 240]Delicious blessing": "Carbonized ghosts",
  "[Upgrade quote 240]Delicious blessing": "A little overbaked.",
  //Tier: Steel
  "[Upgrade name 241]Sun festival": "Mummy explosives",
  "[Upgrade quote 241]Sun festival": "It'll blow you away.",
  //Tier: Ruby
  "[Upgrade name 242]Enlarged pantheon": "Dowsing rods",
  "[Upgrade quote 242]Enlarged pantheon": "Essential for finding milk in desert biomes.",
  //Tier: Slimy
  "[Upgrade name 243]Great Baker in the sky": "Exotic slimes",
  "[Upgrade quote 243]Great Baker in the sky": "What intricate and gelatinous mysteries they hold.",
  //Tier: Gold
  "[Upgrade name 299]Creation myth": "Spicy eel bento boxes",
  "[Upgrade quote 299]Creation myth": "Delicious, but frankly lacking in cookies.",
  //Tier: Emerald
  "[Upgrade name 312]Theocracy": "Pepper rex bait",
  "[Upgrade quote 312]Theocracy": "Biscuits with fiddleheads baked right in!",
  //Tier: Diamond
  "[Upgrade name 433]Sick rap prayers": "Staircase exploits",
  "[Upgrade quote 433]Sick rap prayers": "It's a staircase...made of cheese?",
  //Tier: Iridium
  "[Upgrade name 485]Psalm-reading": "Little purple legged boulders",
  "[Upgrade quote 485]Psalm-reading": "That rock is giving me the creeps.",
  //Tier: Prismatic
  "[Upgrade name 511]War of the gods": "Extra-colourful rocks",
  "[Upgrade quote 511]War of the gods": "I've been waiting ages to get one of these.",
  //Tier: Galaxy
  "[Upgrade name 667]A novel idea": "Qi seasoning",
  "[Upgrade quote 667]A novel idea": "Tastes like cookies.",
  //Tier: Volcanic
  "[Upgrade name 705]Apparitions": "Lava katanas",
  "[Upgrade quote 705]Apparitions": "Like a hot knife through butter.",
  //Tier: Radioactive
  "[Upgrade name 748]Negatheism": "Bottomless holes",
  "[Upgrade quote 748]Negatheism": "Oof, ouchie, and ow.",
  //Tier: Infinity
  "[Upgrade name 845]Temple traps": "Overpowered weapons",
  "[Upgrade quote 845]Temple traps": "Overpowered? Nonsense. This is just an ancient white chocolate lightningbringer iridium alloy battleaxe imbued with the power to summon a tidal wave of melted butter.",

  //Wizard Towers
  //Tier: Gently Used
  "[Upgrade name 244]Pointier hats": "Fairy wheat",
  "[Upgrade quote 244]Pointier hats": "Wings make the resulting flour self-rising.",
  //Tier: Copper
  "[Upgrade name 245]Beardlier beards": "Enchanted cocoa",
  "[Upgrade quote 245]Beardlier beards": "And then he disappeared, in a puff of chocolate.",
  //Tier: Amethyst
  "[Upgrade name 246]Ancient grimoires": "Caster's sugar",
  "[Upgrade quote 246]Ancient grimoires": "A fine sweetener, indeed.",
  //Tier: Steel
  "[Upgrade name 247]Kitchen curses": "Spellbutter",
  "[Upgrade quote 247]Kitchen curses": "Now with 50% more runes!",
  //Tier: Ruby
  "[Upgrade name 248]School of sorcery": "Occult cinnamon",
  "[Upgrade quote 248]School of sorcery": "Puts the \"sin\" in \"cinnamon\".",
  //Tier: Slimy
  "[Upgrade name 249]Dark formulas": "Manifested molasses",
  "[Upgrade quote 249]Dark formulas": "Golly, this stuff is thick.",
  //Tier: Gold
  "[Upgrade name 300]Cookiemancy": "Recipe scrolls",
  "[Upgrade quote 300]Cookiemancy": "The first three feet of paper is just talking about the author's recent trip to Portugal...",
  //Tier: Emerald
  "[Upgrade name 313]Rabbit trick": "Greener teas",
  "[Upgrade name 313]Rabbit trick": "It makes you hallucinate two things at once!",
  //Tier: Diamond
  "[Upgrade name 434]Deluxe tailored wands": "Sorcerer's stone-ground flour",
  "[Upgrade quote 434]Deluxe tailored wands": "Similar to regular flour, but with a menacing red glow.",
  //Tier: Iridium
  "[Upgrade name 486]Immobile spellcasting": "Biscuit sigils",
  "[Upgrade quote 486]Immobile spellcasting": "Impractically large, and carved from solid cocoa butter.",
  //Tier: Prismatic
  "[Upgrade name 512]Electricity": "Magic rock candy",
  "[Upgrade quote 512]Electricity": "Look at all the pretty colours!",
  //Tier: Galaxy
  "[Upgrade name 668]Spelling bees": "Goblin solutions",
  "[Upgrade quote 668]Spelling bees": "Goblin problems require goblin solutions.",
  //Tier: Volcanic
  "[Upgrade name 706]Wizard basements": "Seals of convection",
  "[Upgrade quote 706]Wizard basements": "Etch into oven glass for best results.",
  //Tier: Radioactive
  "[Upgrade name 749]Magical realism": "Inverse kilograms",
  "[Upgrade quote 749]Magical realism": "What are you trying to summon? A measurement error?",
  //Tier: Infinity
  "[Upgrade name 846]Polymorphism": "Pulling cookies out of hats",
  "[Upgrade quote 846]Polymorphism": "I had to give that mouse a LOT of coins for this one.",

  //Fish Ponds
  //Tier: Gently Used
  "[Upgrade name 19]Vanilla nebulae": "Gummy worms",
  "[Upgrade quote 19]Vanilla nebulae": "Sweet catch, bro.",
  //Tier: Copper
  "[Upgrade name 20]Wormholes": "Waterproof flour",
  "[Upgrade quote 20]Wormholes": "A little tricky to mix, but worth it in the end.",
  //Tier: Amethyst
  "[Upgrade name 21]Frequent flyer": "Wild bait",
  "[Upgrade quote 21]Frequent flyer": "Wow, that's wild.",
  //Tier: Steel
  "[Upgrade name 48]Warp drive": "Fiberglass rods",
  "[Upgrade quote 48]Warp drive": "Ooh, flexy.",
  //Tier: Ruby
  "[Upgrade name 114]Chocolate monoliths": "Convection currents",
  "[Upgrade quote 114]Chocolate monoliths": "Ensures uniform dunking through the steady flow of heated milk.",
  //Tier: Slimy
  "[Upgrade name 196]Generation ship": "Blobfish",
  "[Upgrade quote 196]Generation ship": "Beware of the blob that swims, and whims, and glides and slides across the sea.",
  //Tier: Gold
  "[Upgrade name 301]Dyson sphere": "Pufferfish eggs",
  "[Upgrade quote 301]Dyson sphere": "Fatal in cookie dough if prepared improperly.",
  //Tier: Emerald
  "[Upgrade name 314]The final frontier": "Seaweed hydroponics",
  "[Upgrade quote 314]The final frontier": "Now that's what I call vertical farming.",
  //Tier: Diamond
  "[Upgrade name 435]Autopilot": "White chocolate algae",
  "[Upgrade quote 435]Autopilot": "Mmm, goopy.",
  //Tier: Iridium
  "[Upgrade name 487]Restaurants at the end of the universe": "Coral gardens",
  "[Upgrade quote 487]Restaurants at the end of the universe": "An extravagant place to sit and enjoy some cookies, provided you can hold your breath for long enough.",
  //Tier: Prismatic
  "[Upgrade name 513]Universal alphabet": "Curiosity lures",
  "[Upgrade quote 513]Universal alphabet": "Curiosity killed the catfish.",
  //Tier: Galaxy
  "[Upgrade name 669]Toroid universe": "Tiger butter trout",
  "[Upgrade quote 669]Toroid universe": "A sterile hybrid of white and dark chocolate trout.",
  //Tier: Volcanic
  "[Upgrade name 707]Prime directive": "Lava eels",
  "[Upgrade quote 707]Prime directive": "Abundant in the waters surrounding mineral-rich lactothermal vents.",
  //Tier: Radioactive
  "[Upgrade name 750]Cosmic foreground radiation": "Nuclear fishin'",
  "[Upgrade quote 750]Cosmic foreground radiation": "Some awfully weird-lookin' fish down here, man.",
  //Tier: Infinity
  "[Upgrade name 847]At your doorstep in 30 minutes or your money back": "Caviar",
  "[Upgrade quote 847]At your doorstep in 30 minutes or your money back": "I'm all for salted caramel, but this is a bit much.",

  //Greenhouses
  //Tier: Gently Used
  "[Upgrade name 22]Antimony": "Terra cotta planters",
  "[Upgrade quote 22]Antimony": "The colour of ruby cocoa.",
  //Tier: Copper
  "[Upgrade name 23]Essence of dough": "Window washers",
  "[Upgrade quote 23]Essence of dough": "Let me make this clear.",
  //Tier: Amethyst
  "[Upgrade name 24]True chocolate": "Ceiling sprinklers",
  "[Upgrade quote 24]True chocolate": "A great use of space, and doubles as a convenient shower.",
  //Tier: Steel
  "[Upgrade name 49]Ambrosia": "Hotter heat lamps",
  "[Upgrade quote 49]Ambrosia": "It's like an oven in here.",
  //Tier: Ruby
  "[Upgrade name 115]Aqua crustulae": "Paper-trained pollinators",
  "[Upgrade quote 115]Aqua crustulae": "Oh come on, there's honey all over the carpet.",
  //Tier: Slimy
  "[Upgrade name 197]Origin crucible": "Plot optimization",
  "[Upgrade quote 197]Origin crucible": "Juicy queenwhat?",
  //Tier: Gold
  "[Upgrade name 302]Theory of atomic fluidity": "Artificial sunlight",
  "[Upgrade quote 302]Theory of atomic fluidity": "Pretty and somewhat dangerous, just like the real thing.",
  //Tier: Emerald
  "[Upgrade name 315]Beige goo": "Even greener houses",
  "[Upgrade quote 315]Beige goo": "Painted with a new technique we're calling \"greenwashing\".",
  //Tier: Diamond
  "[Upgrade name 436]The advent of chemistry": "Glass clippings",
  "[Upgrade quote 436]The advent of chemistry": "A bit hard to swallow.",
  //Tier: Iridium
  "[Upgrade name 488]On second thought": "Discounted cocoa saplings",
  "[Upgrade quote 488]On second thought": "Another fantastic Wednesday deal at Pierre's.",
  //Tier: Prismatic
  "[Upgrade name 514]Public betterment": "Broad-spectrum UV amplification",
  "[Upgrade quote 514]Public betterment": "Like a Maillard reaction for your skin!",
  //Tier: Galaxy
  "[Upgrade name 670]Hermetic reconciliation": "Deluxe retaining soil",
  "[Upgrade quote 670]Hermetic reconciliation": "The things you can do with a handful of pebbles.",
  //Tier: Volcanic
  "[Upgrade name 708]Chromatic cycling": "Painstakingly maintained seed vaults",
  "[Upgrade quote 708]Chromatic cycling": "Ever tried to alphabetize eighteen thousand wheat hull specimens?",
  //Tier: Radioactive
  "[Upgrade name 751]Arcanized glassware": "Nuclear bioreactors",
  "[Upgrade quote 751]Arcanized glassware": "Believe it or not, the most common fuel source is elephants' feet.",
  //Tier: Infinity
  "[Upgrade name 848]The dose makes the poison": "Indoor cloudbusters",
  "[Upgrade quote 848]The dose makes the poison": "Bustin' makes me feel good.",

  //Obelisks
  //Tier: Gently Used
  "[Upgrade name 25]Ancient tablet": "Fast travel",
  "[Upgrade quote 25]Ancient tablet": "You might have more fun if you don't buy this.",
  //Tier: Copper
  "[Upgrade name 26]Insane oatling workers": "Totem recipes",
  "[Upgrade quote 26]Insane oatling workers": "That sounds like a lot of hardwood.",
  //Tier: Amethyst
  "[Upgrade name 27]Soul bond": "Faster-than-heat travel",
  "[Upgrade quote 27]Soul bond": "Not quite as fast as you might think.",
  //Tier: Steel
  "[Upgrade name 50]Sanity dance": "MMM-Dimensional space",
  "[Upgrade quote 50]Sanity dance": "Think of the universe as a cookie. Normally, a point at one end of the cookie is far from a point at the other end. But if you put the whole thing in your mouth and chew it, distance becomes meaningless.",
  //Tier: Ruby
  "[Upgrade name 116]Brane transplant": "Warmholes",
  "[Upgrade quote 116]Brane transplant": "Like falling through a bubble bath made of space itself.",
  //Tier: Slimy
  "[Upgrade name 198]Deity-sized portals": "A curious substance",
  "[Upgrade quote 198]Deity-sized portals": "...this ectoplasm stuff is sticky.",
  //Tier: Gold
  "[Upgrade name 303]End of times back-up plan": "Teleportasting",
  "[Upgrade quote 303]End of times back-up plan": "Snacks for the road.",
  //Tier: Emerald
  "[Upgrade name 316]Maddening chants": "Quantum entanglemint",
  "[Upgrade quote 316]Maddening chants": "An herb that is delicious only in theory.",
  //Tier: Diamond
  "[Upgrade name 437]The real world": "Heisenbake uncertainty principle",
  "[Upgrade quote 437]The real world": "It is a simple fact of our universe that we cannot simultaneously know both the temperature and tastiness of a cookie with perfect accuracy.",
  //Tier: Iridium
  "[Upgrade name 489]Dimensional garbage gulper": "Heatwavefunction collapse",
  "[Upgrade quote 489]Dimensional garbage gulper": "Irreversible, but tasty.",
  //Tier: Prismatic
  "[Upgrade name 515]Embedded microportals": "Chocodynamics",
  "[Upgrade quote 515]Embedded microportals": "In an isolated system, chocolate cannot be created or destroyed.",
  //Tier: Galaxy
  "[Upgrade name 671]His advent": "Ganache vortices",
  "[Upgrade quote 671]His advent": "The stuff treats are made of.",
  //Tier: Volcanic
  "[Upgrade name 709]Domestic rifts": "Spacetime continuyum",
  "[Upgrade quote 709]Domestic rifts": "In the right place, at the right time.",
  //Tier: Radioactive
  "[Upgrade name 752]Portal guns": "Atomic chip-hoppers",
  "[Upgrade quote 752]Portal guns": "Chains together multiple jumps across tiny gaps to transport cookies instantaneously across long distances.",
  //Tier: Infinity
  "[Upgrade name 849]A way home": "Across the cookieverse",
  "[Upgrade quote 849]A way home": "Crumbs are flowing out like endless milk into a paper cup...",

  //Gold Clocks
  //Tier: Gently Used
  "[Upgrade name 28]Flux capacitors": "Stolen moments",
  "[Upgrade quote 28]Flux capacitors": "Stop! Thief!",
  //Tier: Copper
  "[Upgrade name 29]Time paradox resolver": "Reduced clock speeds",
  "[Upgrade quote 29]Time paradox resolver": "Lag is but a s m al L pr   ice t o  p     ay.",
  //Tier: Amethyst
  "[Upgrade name 30]Quantum conundrum": "Sapphire watchglasses",
  "[Upgrade quote 30]Quantum conundrum": "Resistant to scratches from even the sharpest cookies.",
  //Tier: Steel
  "[Upgrade name 51]Causality enforcer": "Frozen dough",
  "[Upgrade quote 51]Causality enforcer": "I think you're supposed to get the dough hot, not cold.",
  //Tier: Ruby
  "[Upgrade name 117]Yestermorrow comparators": "Antistaleification",
  "[Upgrade quote 117]Yestermorrow comparators": "We're really on to something with this whole preservatives thing.",
  //Tier: Slimy
  "[Upgrade name 199]Far future enactment": "Slower molasses",
  "[Upgrade quote 199]Far future enactment": "Mixing this batch is going to take forever.",
  //Tier: Gold
  "[Upgrade name 304]Great loop hypothesis": "Gold-star quality quartz",
  "[Upgrade quote 304]Great loop hypothesis": "The finest timekeeping crystal in all the world.",
  //Tier: Emerald
  "[Upgrade name 317]Cookietopian moments of maybe": "Crunch retention",
  "[Upgrade quote 317]Cookietopian moments of maybe": "A special form of vacuum storage that creates a negative-humidity environment.",
  //Tier: Diamond
  "[Upgrade name 438]Second seconds": "Sucrase inhibitors",
  "[Upgrade quote 438]Second seconds": "Allows cookies to survive the eating process virtually unscathed.",
  //Tier: Iridium
  "[Upgrade name 490]Additional clock hands": "Yumtosecond precision",
  "[Upgrade quote 490]Additional clock hands": "Allows for the synchronization of time-reversal devices throughout cross-continental production lines.",
  //Tier: Prismatic
  "[Upgrade name 516]Nostalgia": "Perpetually melting chocolate",
  "[Upgrade quote 516]Nostalgia": "It's in a permanent state of gooeyness.",
  //Tier: Galaxy
  "[Upgrade name 672]Split seconds": "Crumb reconstitutors",
  "[Upgrade quote 672]Split seconds": "Enables the development of post-consumer cookie recycling technology.",
  //Tier: Volcanic
  "[Upgrade name 710]Patience abolished": "Thermostatics",
  "[Upgrade quote 710]Patience abolished": "Entropy? Never heard of her.",
  //Tier: Radioactive
  "[Upgrade name 753]Timeproof upholstery": "Atomic oven timers",
  "[Upgrade quote 753]Timeproof upholstery": "What do you mean, overkill? Precision is important!",
  //Tier: Infinity
  "[Upgrade name 850]Rectifying a mistake": "Everlasting freshness",
  "[Upgrade quote 850]Rectifying a mistake": "Who knew, the fountain of youth was full of milk the whole time.",

  //Sewers
  //Tier: Gently Used
  "[Upgrade name 99]Sugar bosons": "Rusty keys",
  "[Upgrade quote 99]Sugar bosons": "I'm a little out of practise.",
  //Tier: Copper
  "[Upgrade name 100]String theory": "Grater grates",
  "[Upgrade quote 100]String theory": "Marvelous.",
  //Tier: Amethyst
  "[Upgrade name 101]Large macaron collider": "Sweetened sludge",
  "[Upgrade quote 101]Large macaron collider": "Focus groups suggest it's 30% tastier than unsweetened sludge.",
  //Tier: Steel
  "[Upgrade name 102]Big bang bake": "Improved milk drainage",
  "[Upgrade quote 102]Big bang bake": "An essential component of the water cycle.",
  //Tier: Ruby
  "[Upgrade name 118]Reverse cyclotrons": "Wafer pipes",
  "[Upgrade quote 118]Reverse cyclotrons": "Not sure this is the most structurally sound decision.",
  //Tier: Slimy
  "[Upgrade name 200]Nanocosmics": "Pure slime",
  "[Upgrade quote 200]Nanocosmics": "No fuss, no filler, just slime.",
  //Tier: Gold
  "[Upgrade name 305]The Pulse": "Subterranean logistics",
  "[Upgrade quote 305]The Pulse": "Do you have any idea how many apps it takes to get a cookie from the goop vat up to the surface?",
  //Tier: Emerald
  "[Upgrade name 318]Some other super-tiny fundamental particle? Probably?": "Increased goo luminance",
  "[Upgrade quote 318]Some other super-tiny fundamental particle? Probably?": "Blinded by the light, wrapped up like the dough, another cookie in the night.",
  //Tier: Diamond
  "[Upgrade name 439]Quantum comb": "Tastewater treatment facilities",
  "[Upgrade quote 439]Quantum comb": "Removes crumbs, and adds sugar. It's really that simple.",
  //Tier: Iridium
  "[Upgrade name 491]Baking Nobel prize": "Friends of Krobus",
  "[Upgrade quote 491]Baking Nobel prize": "Who isn't?",
  //Tier: Prismatic
  "[Upgrade name 517]The definite molecule": "Slick oils",
  "[Upgrade quote 517]The definite molecule": "For that perfect greasy mouthfeel.",
  //Tier: Galaxy
  "[Upgrade name 673]Flavor itself": "Dwarf diplomacy",
  "[Upgrade quote 673]Flavor itself": "Made possible through chocolate bargaining chips.",
  //Tier: Volcanic
  "[Upgrade name 711]Delicious pull": "Dark talismans",
  "[Upgrade quote 711]Delicious pull": "Mysterious, twisted carvings that tell of darker chocolates to come.",
  //Tier: Radioactive
  "[Upgrade name 754]Employee minification": "Mutant carps",
  "[Upgrade quote 754]Employee minification": "Look at this guy...look at his face!",
  //Tier: Infinity
  "[Upgrade name 851]Candied atoms": "Shadow bakeries",
  "[Upgrade quote 851]Candied atoms": "Not to be confused with ghost kitchens.",

  //Museums
  //Tier: Gently Used
  "[Upgrade name 175]Gem polish": "Chewy chewing stick",
  "[Upgrade quote 175]Gem polish": "A fairly nice display piece, if you can get past the slobber.",
  //Tier: Copper
  "[Upgrade name 176]9th color": "Rusty rolling pin",
  "[Upgrade quote 176]9th color": "Kinda creaky.",
  //Tier: Amethyst
  "[Upgrade name 177]Chocolate light": "Flourappetite",
  "[Upgrade quote 177]Chocolate light": "One of the most abundant minerals on the planet, if a little bland and dusty.",
  //Tier: Steel
  "[Upgrade name 178]Grainbow": "Chocolate chipped amphora",
  "[Upgrade quote 178]Grainbow": "Cocoa-based pottery. Truly a lost art.",
  //Tier: Ruby
  "[Upgrade name 179]Pure cosmic light": "Raspberry jamborite",
  "[Upgrade quote 179]Pure cosmic light": "Relatively high hardness, pink streak, excellent clarity, and eminant lickability.",
  //Tier: Slimy
  "[Upgrade name 201]Glow-in-the-dark": "Petrified butter",
  "[Upgrade quote 201]Glow-in-the-dark": "What are you so afraid of?",
  //Tier: Gold
  "[Upgrade name 306]Lux sanctorum": "Lemonlimestone",
  "[Upgrade quote 306]Lux sanctorum": "A close chemical cousin of citrine.",
  //Tier: Emerald
  "[Upgrade name 319]Reverse shadows": "Dwarf recipe card IV",
  "[Upgrade quote 319]Reverse shadows": "What in tarnation is a \"dtay dinnut\"?",
  //Tier: Diamond
  "[Upgrade name 440]Crystal mirrors": "Prehistoric cookiebone",
  "[Upgrade quote 440]Crystal mirrors": "A relic of the prehistoric skeletal system regrettably lost in modern biology.",
  //Tier: Iridium
  "[Upgrade name 492]Reverse theory of light": "Thunder egg whites",
  "[Upgrade quote 492]Reverse theory of light": "The flavour is electric.",
  //Tier: Prismatic
  "[Upgrade name 518]Light capture measures": "Prismatic chips",
  "[Upgrade quote 518]Light capture measures": "How many chips in a shard?",
  //Tier: Galaxy
  "[Upgrade name 674]Light speed limit": "Ancient sesame seed",
  "[Upgrade quote 674]Light speed limit": "I keep losing track of this tiny thing.",
  //Tier: Volcanic
  "[Upgrade name 712]Occam's laser": "Cocoamite",
  "[Upgrade quote 712]Occam's laser": "The flavour is explosive.",
  //Tier: Radioactive
  "[Upgrade name 755]Hyperblack paint": "Palm oil fossil",
  "[Upgrade quote 755]Hyperblack paint": "I'm quite frond of this one.",
  //Tier: Infinity
  "[Upgrade name 852]Lab goggles but like cool shades": "The first cookie",
  "[Upgrade quote 852]Lab goggles but like cool shades": "Clicked at the beginning of this very save file.",

  //Community Centres
  //Tier: Gently Used
  "[Upgrade name 416]Your lucky cookie": "Reckless unabandon",
  "[Upgrade quote 416]Your lucky cookie": "Still crazy after all these years.",
  //Tier: Copper
  "[Upgrade name 417]\"All Bets Are Off\" magic coin": "Simmering boilers",
  "[Upgrade quote 417]\"All Bets Are Off\" magic coin": "Keeps the butter nice and warm.",
  //Tier: Amethyst
  "[Upgrade name 418]Winning lottery ticket": "Shiny new minecarts",
  "[Upgrade quote 418]Winning lottery ticket": "Ferry cookies all over town!",
  //Tier: Steel
  "[Upgrade name 419]Four-leaf clover field": "Gold storage",
  "[Upgrade quote 419]Four-leaf clover field": "Somewhere to keep all those chocolate coins.",
  //Tier: Ruby
  "[Upgrade name 420]A recipe book about books": "Public transit",
  "[Upgrade quote 420]A recipe book about books": "It's called induced demand, look it up.",
  //Tier: Slimy
  "[Upgrade name 421]Leprechaun village": "Sew, a needle pulling thread",
  "[Upgrade quote 421]Leprechaun village": "These potholders are just beautiful.",
  //Tier: Gold
  "[Upgrade name 422]Improbability drive": "A bridge to tar",
  "[Upgrade quote 422]Improbability drive": "You're gonna go far, kid.",
  //Tier: Emerald
  "[Upgrade name 423]Antisuperstistronics": "Aquarium patchwork",
  "[Upgrade quote 423]Antisuperstistronics": "Prevents chocolate leakage.",
  //Tier: Diamond
  "[Upgrade name 441]Bunnypedes": "Bolder boulders",
  "[Upgrade quote 441]Bunnypedes": "Who do these guys think they are?",
  //Tier: Iridium
  "[Upgrade name 493]Revised probabilistics": "A plumper pantry",
  "[Upgrade quote 493]Revised probabilistics": "Stuffed to the gunnels with cookies.",
  //Tier: Prismatic
  "[Upgrade name 519]0-sided dice": "Subsidized greenhouses",
  "[Upgrade quote 519]0-sided dice": "Well, this would have been helpful about five buildings ago.",
  //Tier: Galaxy
  "[Upgrade name 675]A touch of determinism": "Unusual requests",
  "[Upgrade quote 675]A touch of determinism": "You want me to put *what* in the box behind Clint's?",
  //Tier: Volcanic
  "[Upgrade name 713]On a streak": "Lost and found",
  "[Upgrade quote 713]On a streak": "We've already returned 5.4 trillion cookies to their forever homes.",
  //Tier: Radioactive
  "[Upgrade name 756]Silver lining maximization": "A night at the movies",
  "[Upgrade quote 756]Silver lining maximization": "I hear they're playing Twelve Hungry Men tonight.",
  //Tier: Infinity
  "[Upgrade name 853]Gambler's fallacy fallacy": "Dunbles",
  "[Upgrade quote 853]Gambler's fallacy fallacy": "I don't think that's what they meant by \"remixed\".",

  //Cabins
  //Tier: Gently Used
  "[Upgrade name 522]Metabakeries": "Friend requests",
  "[Upgrade quote 522]Metabakeries": "How did you get this number?",
  //Tier: Copper
  "[Upgrade name 523]Mandelbrown sugar": "Couch co-op",
  "[Upgrade quote 523]Mandelbrown sugar": "This sofa isn't cooperating at all!",
  //Tier: Amethyst
  "[Upgrade name 524]Fractoids": "Baker's assistants",
  "[Upgrade quote 524]Fractoids": "Someone to polish the chocolate chips.",
  //Tier: Steel
  "[Upgrade name 525]Nested universe theory": "BOH crew",
  "[Upgrade quote 525]Nested universe theory": "Running like a well-oiled stand mixer.",
  //Tier: Ruby
  "[Upgrade name 526]Menger sponge cake": "Sous chefs",
  "[Upgrade quote 526]Menger sponge cake": "It's clicking raw!",
  //Tier: Slimy
  "[Upgrade name 527]One particularly good-humored cow": "F.R.I.E.N.D.S. like these",
  "[Upgrade quote 527]One particularly good-humored cow": "I bet no one told you it was gonna be this way.",
  //Tier: Gold
  "[Upgrade name 528]Chocolate ouroboros": "Pastry pals",
  "[Upgrade quote 528]Chocolate ouroboros": "We're true chew, you and me.",
  //Tier: Emerald
  "[Upgrade name 529]Nested": "Biscuit buddies",
  "[Upgrade quote 529]Nested": "You're flaky, but I love you.",
  //Tier: Diamond
  "[Upgrade name 530]Space-filling fibers": "Cookie club card",
  "[Upgrade quote 530]Space-filling fibers": "It says here if we buy nine thousand nine hundred and ninety nine cookies, we get the ten thousandth free!",
  //Tier: Iridium
  "[Upgrade name 531]Endless book of prose": "Squad goals",
  "[Upgrade quote 531]Endless book of prose": "We've got matching chef outfits and everything.",
  //Tier: Prismatic
  "[Upgrade name 532]The set of all sets": "BFFs",
  "[Upgrade quote 532]The set of all sets": "Best fudge forever, you say?",
  //Tier: Galaxy
  "[Upgrade name 676]This upgrade": "Family bonding time",
  "[Upgrade quote 676]This upgrade": "There's nothing like optimizing clicks per minute to bring loved ones closer together.",
  //Tier: Volcanic
  "[Upgrade name 714]A box": "Heated discussions",
  "[Upgrade quote 714]A box": "The best talks take place at three hundred and seventy-five degrees.",
  //Tier: Radioactive
  "[Upgrade name 757]Multiscale profiling": "Putting our heads together",
  "[Upgrade quote 757]Multiscale profiling": "Sounds complicated.",
  //Tier: Infinity
  "[Upgrade name 854]The more they stay the same": "Max hearts",
  "[Upgrade name 854]The more they stay the same": "Thank you for being a friend.",

  //Islands
  //Tier: Gently Used
  "[Upgrade name 594]The JavaScript console for dummies": "Peninsulas",
  "[Upgrade quote 594]The JavaScript console for dummies": "Not an island...but close enough.",
  //Tier: Copper
  "[Upgrade name 595]64bit arrays": "Isthmuses",
  "[Upgrade quote 595]64bit arrays": "Still no!",
  //Tier: Amethyst
  "[Upgrade name 596]Stack overflow": "Fjords",
  "[Upgrade quote 596]Stack overflow": "Oh come on, are you even trying?",
  //Tier: Steel
  "[Upgrade name 597]Enterprise compiler": "Undersea volcanoes",
  "[Upgrade quote 597]Enterprise compiler": "Can't wait to see what you make of this.",
  //Tier: Ruby
  "[Upgrade name 598]Syntactic sugar": "A whole new world",
  "[Upgrade quote 598]Syntactic sugar": "Sugary, shimmering, stardew.",
  //Tier: Slimy
  "[Upgrade name 599]A nice cup of coffee": "Happy little landforms",
  "[Upgrade quote 599]A nice cup of coffee": "And we'll just make some tasty little cookies over here...",
  //Tier: Gold
  "[Upgrade name 600]Just-in-time baking": "It takes atoll on you",
  "[Upgrade quote 600]Just-in-time baking": "This subduction thing is harder than it looks.",
  //Tier: Emerald
  "[Upgrade name 601]cookies++": "Breaking ground",
  "[Upgrade quote 601]cookies++": "Hey, be careful with that! We just made that ground.",
  //Tier: Diamond
  "[Upgrade name 602]Software updates": "Prime real estate",
  "[Upgrade quote 602]Software updates": "Huts? In this economy?",
  //Tier: Iridium
  "[Upgrade name 603]Game.Loop": "The first resort",
  "[Upgrade quote 603]Game.Loop": "Not to be confused with the last one.",
  //Tier: Prismatic
  "[Upgrade name 604]eval()": "Overdevelopment",
  "[Upgrade quote 604]eval()": "Well that was fast.",
  //Tier: Galaxy
  "[Upgrade name 677]Your biggest fans": "Reclamation",
  "[Upgrade quote 677]Your biggest fans": "Let's just give this place back to the cookie trees.",
  //Tier: Volcanic
  "[Upgrade name 715]Hacker shades": "Seismic shifts",
  "[Upgrade quote 715]Hacker shades": "This is why we require all cookies to withstand at least a 7 on the Chipter scale.",
  //Tier: Radioactive
  "[Upgrade name 758]PHP containment vats": "Geological accelerant",
  "[Upgrade quote 758]PHP containment vats": "You're going to have to be patient with this one.",
  //Tier: Infinity
  "[Upgrade name 855]Simulation failsafes": "Continental drift",
  "[Upgrade quote 855]Simulation failsafes": "Now it's one doughnut. One big damn doughnut.",

  //Consoles
  //Tier: Gently Used
  "[Upgrade name 684]Manifest destiny": "XNA tutorials",
  "[Upgrade quote 684]Manifest destiny": "Oh boy, another framework with an unpronounceable three-letter name.",
  //Tier: Copper
  "[Upgrade name 685]The multiverse in a nutshell": "Wiki talk pages",
  "[Upgrade quote 685]The multiverse in a nutshell": "I shouldn't have read the comments.",
  //Tier: Amethyst
  "[Upgrade name 686]All-conversion": "Open-source text editors",
  "[Upgrade quote 686]All-conversion": "I've been doing all my programming in Vim since the nineties.",
  //Tier: Steel
  "[Upgrade name 687]Multiverse agents": "Application-pastry interfaces",
  "[Upgrade quote 687]Multiverse agents": "There's butter in the keyboard again.",
  //Tier: Ruby
  "[Upgrade name 688]Escape plan": "Ruby off rails",
  "[Upgrade quote 688]Escape plan": "We unleashed a power beyond our comprehension.",
  //Tier: Slimy
  "[Upgrade name 689]Game design": "Decompilers",
  "[Upgrade quote 689]Game design": "Aw come on, spaghetti code for dinner again?",
  //Tier: Gold
  "[Upgrade name 690]Sandbox universes": "Recipe object models",
  "[Upgrade quote 690]Sandbox universes": "Who is this Jason guy, anyway?",
  //Tier: Emerald
  "[Upgrade name 691]Multiverse wars": "Questionably effective and suspiciously intricate print-based debugging methods",
  "[Upgrade quote 691]Multiverse wars": "Debug.Log(\"Extra flavourful text\");",
  //Tier: Diamond
  "[Upgrade name 692]Mobile ports": "Enterprise development \"solutions\"",
  "[Upgrade quote 692]Mobile ports": "The insurance company refers to it as \"perforce majeure\".",
  //Tier: Iridium
  "[Upgrade name 693]Encapsulated realities": "Code injection",
  "[Upgrade quote 693]Encapsulated realities": "Straight to the source.",
  //Tier: Prismatic
  "[Upgrade name 694]Extrinsic clicking": "SMAPI documenation",
  "[Upgrade quote 694]Extrinsic clicking": "Remember kids, always comment your recipes.",
  //Tier: Galaxy
  "[Upgrade name 695]Universal idling": "Rapid chocotyping",
  "[Upgrade quote 695]Universal idling": "It's imperative that we complete each baking cycle before the last batch goes stale.",
  //Tier: Volcanic
  "[Upgrade name 716]Break the fifth wall": "Merge conflicts",
  "[Upgrade quote 716]Break the fifth wall": "Revert. Revert. REVERT!!!",
  //Tier: Radioactive
  "[Upgrade name 759]Opposite universe": "Open-source smart ovens",
  "[Upgrade quote 759]Opposite universe": "I'm afraid I can't cook that, Dave.",
  //Tier: Infinity
  "[Upgrade name 856]The other routes to Rome": "Third-party cookies",
  "[Upgrade quote 856]The other routes to Rome": "A gross violation of privacy, and a delicious violation of nutrition guidelines.",

  //Crossoverers
  //Tier: Gently Used
  "[Upgrade name 730]Principled neural shackles": "Frivolous lawsuits",
  "[Upgrade quote 730]Principled neural shackles": "Actions, meet consequences.",
  //Tier: Copper
  "[Upgrade name 731]Obey": "Intellectual property lawyers",
  "[Upgrade quote 731]Obey": "I didn't know vultures could go to law school!",
  //Tier: Amethyst
  "[Upgrade name 732]A sprinkle of irrationality": "Multiverse cosplay",
  "[Upgrade quote 732]A sprinkle of irrationality": "Why is that detective guy wearing angel wings and a fez, anyway?",
  //Tier: Steel
  "[Upgrade name 733]Front and back hemispheres": "Guest stars",
  "[Upgrade quote 733]Front and back hemispheres": "I didn't know J.K. Simmons was in this.",
  //Tier: Ruby
  "[Upgrade name 734]Neural networking": "AU character designs",
  "[Upgrade quote 734]Neural networking": "And everybody's clothes are made out of cookie dough!",
  //Tier: Slimy
  "[Upgrade name 735]Cosmic brainstorms": "Self-insert fanfiction",
  "[Upgrade quote 735]Cosmic brainstorms": "And he was the nicest, smartest, funniest, least murdery baker anyone had ever seen, ever.",
  //Tier: Gold
  "[Upgrade name 736]Megatherapy": "Copywrong",
  "[Upgrade quote 736]Megatherapy": "A revolutionary new law which makes the absence of fanart illegal.",
  //Tier: Emerald
  "[Upgrade name 737]Synaptic lubricant": "Unregistered trademarks",
  "[Upgrade quote 737]Synaptic lubricant": "Can't steal it if I don't own it, suckers.",
  //Tier: Diamond
  "[Upgrade name 738]Psychokinesis": "Cease to desist",
  "[Upgrade quote 738]Psychokinesis": "They'll never take me alive!",
  //Tier: Iridium
  "[Upgrade name 739]Spines": "Fair use",
  "[Upgrade quote 739]Spines": "It's transformative, I swear.",
  //Tier: Prismatic
  "[Upgrade name 740]Neuraforming": "Ovendoor pilot episodes",
  "[Upgrade quote 740]Neuraforming": "Have I told you about my new Cookie Valley spinoff game, Undersea Chocolate Gardener?",
  //Tier: Galaxy
  "[Upgrade name 741]Epistemological trickery": "Digital Millennium Cookie Act",
  "[Upgrade quote 741]Epistemological trickery": "[flavour text removed in response to a complaint filed with the Better Baking Bureau]",
  //Tier: Volcanic
  "[Upgrade name 742]Every possible idea": "Essence of originality",
  "[Upgrade quote 742]Every possible idea": "A little spritz of this and even the most derivative ideas will seem creative.",
  //Tier: Radioactive
  "[Upgrade name 760]The land of dreams": "Games upon games upon movies upon stories upon paintings",
  "[Upgrade quote 760]The land of dreams": "It's called inspiration, look it up.",
  //Tier: Infinity
  "[Upgrade name 857]Intellectual property theft": "Cookie Clicker-themed mods for Stardew Valley",
  "[Upgrade quote 857]Intellectual property theft": "Woah, dude, you're like, totally blowing my mind.",

  //Yous
  //Tier: Gently Used
  "[Upgrade name 826]Cloning vats": "Character creation",
  "[Upgrade quote 826]Cloning vats": "It looks just like you!",
  //Tier: Copper
  "[Upgrade name 827]Energized nutrients": "Animation cancelling",
  "[Upgrade quote 827]Energized nutrients": "A little tricky to play when you keep getting interrup-",
  //Tier: Amethyst
  "[Upgrade name 828]Stunt doubles": "Cookies for breakfast",
  "[Upgrade quote 828]Stunt doubles": "The most important meal of the day.",
  //Tier: Steel
  "[Upgrade name 829]Clone recycling plant": "Grandpa's recipe box",
  "[Upgrade quote 829]Clone recycling plant": "Apparently in the 20s asbestos cookies were all the rage.",
  //Tier: Ruby
  "[Upgrade name 830]Free-range clones": "Ergonomic controller grips",
  "[Upgrade quote 830]Free-range clones": "Your carpals will thank you.",
  //Tier: Slimy
  "[Upgrade name 831]Genetic tailoring": "Cooking classes",
  "[Upgrade quote 831]Genetic tailoring": "Turns out salt and sugar are two different things, who knew?",
  //Tier: Gold
  "[Upgrade name 832]Power in diversity": "Palate cleansers",
  "[Upgrade quote 832]Power in diversity": "A fine milk to sip between cookies.",
  //Tier: Emerald
  "[Upgrade name 833]Self-betterment": "Saloon training",
  "[Upgrade quote 833]Self-betterment": "Why not learn from the best?",
  //Tier: Diamond
  "[Upgrade name 834]Source control": "Autoclickers",
  "[Upgrade quote 834]Source control": "Wait, isn't that just what the junimos do?",
  //Tier: Iridium
  "[Upgrade name 835]United workforce": "Le cookie bleu culinary school",
  "[Upgrade quote 835]United workforce": "Bon. Bon. Bon-bon.",
  //Tier: Prismatic
  "[Upgrade name 836]Safety patrols": "Speedrunning certification",
  "[Upgrade quote 836]Safety patrols": "I am speed.",
  //Tier: Galaxy
  "[Upgrade name 837]Clone rights": "Farmhouse kitchen makeover",
  "[Upgrade quote 837]Clone rights": "Marble countertops. Nice.",
  //Tier: Volcanic
  "[Upgrade name 838]One big family": "Getting good",
  "[Upgrade quote 838]One big family": "I finally took the internet's advice.",
  //Tier: Radioactive
  "[Upgrade name 839]Fine-tuned body plans": "Personal growth",
  "[Upgrade quote 839]Fine-tuned body plans": "Growing my baking stats, am I right?",
  //Tier: Infinity
  "[Upgrade name 858]Reading your clones bedtime stories": "Self-actualization",
  "[Upgrade quote 858]Reading your clones bedtime stories": "Remember who you are.",

  // ------------- SYNERGIES ------------- //

  //Farms & gold clocks
  "[Upgrade name 369]Future almanacs": "A land before time",
  "[Upgrade quote 369]Future almanacs": "I can't believe I paid ten million for this thing.",
  //Farms & skull caverns
  "[Upgrade name 370]Rain prayer": "Cactus garden",
  "[Upgrade quote 370]Rain prayer": "Prickly, pointy, pokey cookies.",
  //Mines & wizard towers
  "[Upgrade name 371]Seismic magic": "Woo-woo crystal stuff",
  "[Upgrade quote 371]Seismic magic": "Topaz has important healing properties, and more importantly, Abigail assures us it's delicious.",
  //Mines & fish ponds
  "[Upgrade name 372]Asteroid mining": "Bottomless pools",
  "[Upgrade quote 372]Asteroid mining": "How's the thalassophobia treating you?",
  //Coops & sewers
  "[Upgrade name 373]Quantum electronics": "Void chickens",
  "[Upgrade quote 373]Quantum electronics": "Their souls are as black as their beady little eyes.",
  //Coops & gold clocks
  "[Upgrade name 374]Temporal overclocking": "Cuckoo clocks",
  "[Upgrade quote 374]Temporal overclocking": "The early bird catches the cookie.",
  //Barns & obelisks
  "[Upgrade name 375]Contracts from beyond": "Farm totems",
  "[Upgrade quote 375]Contracts from beyond": "You think if we tape a baguette to this thing we can warp to the saloon?",
  //Barns & coops
  "[Upgrade name 376]Printing presses": "Animal husbandry",
  "[Upgrade quote 376]Printing presses": "I now pronounce you goat and chicken.",
  //Skull caverns & obelisks
  "[Upgrade name 377]Paganism": "Desert totems",
  "[Upgrade quote 377]Paganism": "Unfortunately, sand did not ultimately prove a viable flour substitute.",
  //Skull caverns & sewers
  "[Upgrade name 378]God particle": "Mysterious doors",
  "[Upgrade quote 378]God particle": "Remember kids, never pick a lock that doesn't belong to you.",
  //Wizard towers & greenhouses
  "[Upgrade name 379]Arcane knowledge": "Trellis talismans",
  "[Upgrade quote 379]Arcane knowledge": "We should've started putting valerian in cookies years ago.",
  //Wizard towers & farms
  "[Upgrade name 380]Magical botany": "Irrigation incantation",
  "[Upgrade quote 380]Magical botany": "Heeee, haaaa, hoooow about some rain, sky gods?",
  //Mines & fish ponds
  "[Upgrade name 381]Fossil fuels": "Stonefish",
  "[Upgrade quote 381]Fossil fuels": "Shoot, these guys are heavy.",
  //Coops & fish ponds
  "[Upgrade name 382]Shipyards": "Chickens of the sea",
  "[Upgrade quote 382]Shipyards": "Look, they're in little scuba outfits!",
  //Mines & greenhouses
  "[Upgrade name 383]Primordial ores": "Crystal seeding",
  "[Upgrade quote 383]Primordial ores": "Growing sugarcane is for suckers.",
  //Barns & greenhouses
  "[Upgrade name 384]Gold fund": "Biospheres",
  "[Upgrade quote 384]Gold fund": "The ideal environment for a self-sustaining cookie-driven ecosystem.",
  //Farms & obelisks
  "[Upgrade name 385]Infernal crops": "Return scepters",
  "[Upgrade quote 385]Infernal crops": "Are we there yet?",
  //Museums & obelisks
  "[Upgrade name 386]Abysmal glimmer": "That one minecart next to Clint's",
  "[Upgrade quote 386]Abysmal glimmer": "It's almost as fast as a teleporter, though it's definitely creakier.",
  //Fish ponds & gold clocks
  "[Upgrade name 387]Relativistic parsec-skipping": "Laminar flow",
  "[Upgrade quote 387]Relativistic parsec-skipping": "What a crazy drip, man.",
  //Museums & gold clocks
  "[Upgrade name 388]Primeval glow": "The persistence of memory",
  "[Upgrade quote 388]Primeval glow": "Cookies you'll never forget.",
  //Barns & sewers
  "[Upgrade name 389]Extra physics funding": "Slime hutches",
  "[Upgrade quote 389]Extra physics funding": "Care for a jelly baby?",
  //Greenhouses & sewers
  "[Upgrade name 390]Chemical proficiency": "Flotsam fertilizer",
  "[Upgrade quote 390]Chemical proficiency": "This has got to be a health code violation.",
  //Wizard towers & museums
  "[Upgrade name 391]Light magic": "Extra-secret notes",
  "[Upgrade quote 391]Light magic": "They put WHAT in the triple-chocolate ones?",
  //Skull caverns & museums
  "[Upgrade name 392]Mystical energies": "Archaeological expeditions",
  "[Upgrade quote 392]Mystical energies": "A perilous quest to uncover the truth about artificial vanilla extract.",
  //Mines & community centres
  "[Upgrade name 424]Gemmed talismans": "Quarry query",
  "[Upgrade quote 424]Gemmed talismans": "Bigger and boulder than ever before.",
  //Sewers & community centres
  "[Upgrade name 443]Charm quarks": "Pipe dreams",
  "[Upgrade quote 443]Charm quarks": "Do plumbers dream of soggy sheep?",
  //Museums & cabins
  "[Upgrade name 533]Recursive mirrors": "Field trips",
  "[Upgrade quote 533]Recursive mirrors": "This permission slip is covered in chocolate.",
  //Junimos & cabins
  "[Upgrade name 534]Mice clicking mice": "Friend of a friend",
  "[Upgrade quote 534]Mice clicking mice": "He's my roommate's cousin's cat's groomer's wife's friend's favourite baker.",
  //Villagers & islands
  "[Upgrade name 605]Script grannies": "Getaway packages",
  "[Upgrade quote 605]Script grannies": "All-inclusive...you even get a free cookie!",
  //Community centres & islands
  "[Upgrade name 606]Tombola computing": "Resorts",
  "[Upgrade quote 606]Tombola computing": "Just think about it...warm milky oceans, white floury beaches...",
  //Obelisks & consoles
  "[Upgrade name 696]Perforated mille-feuille cosmos": "Noclip mode",
  "[Upgrade quote 696]Perforated mille-feuille cosmos": "And that's how I found the Bakerooms.",
  //Cabins & consoles
  "[Upgrade name 697]Infraverses and superverses": "Multiplayer modding",
  "[Upgrade quote 697]Infraverses and superverses": "Now you AND your friends can enjoy a broken load order and corrupted saves!",
  //Skull caverns & crossoverers
  "[Upgrade name 761]Thoughts & prayers": "Iridium Jas and the Temple of Dough",
  "[Upgrade quote 761]Thoughts & prayers": "Can we get sued for this?",
  //Farms & crossoverers
  "[Upgrade name 762]Fertile minds": "Farming Simulator 3077",
  "[Upgrade quote 762]Fertile minds": "...we're definitely getting sued for this one.",
  //Gold clocks & yous
  "[Upgrade name 859]Accelerated development": "Time to stop",
  "[Upgrade quote 859]Accelerated development": "Don't tell me what to do.",
  //Islands & yous
  "[Upgrade name 860]Peer review": "Sugaritaville",
  "[Upgrade quote 860]Peer review": "They've got an all-you-can-eat Buffett.",

  // ------------- ACHIEVEMENTS ------------- //

  //Junimos
  //Tier: Gently Used
  "[Achievement name 34]Click": "A new friend",
  //Tier: Copper
  "[Achievement name 35]Double-click": "Best buds",
  //Tier: Amethyst
  "[Achievement name 36]Mouse wheel": "Fairy ring",
  //Tier: Steel
  "[Achievement name 37]Of Mice and Men": "Friend of the forest",
  //Tier: Ruby
  "[Achievement name 38]The Digital": "Forest scholar",
  //Tier: Slimy
  "[Achievement name 147]Extreme polydactyly": "Bundles of joy",
  //Tier: Gold
  "[Achievement name 148]Dr. T": "Hut architect",
  //Tier: Emerald
  "[Achievement name 246]Thumbs, phalanges, metacarpals": "Secret woods",
  "[Achievement quote 246]Thumbs, phalanges, metacarpals": "Chanterelles? In MY cookies? It's more likely than you think.",
  //Tier: Diamond
  "[Achievement name 398]With her finger and her thumb": "Extreme horticulture",
  //Tier: Iridium
  "[Achievement name 474]Gotta hand it to you": "Spirit spectrum",
  //Tier: Prismatic
  "[Achievement name 493]The devil's workshop": "Magical minions",
  //Tier: Galaxy
  "[Achievement name 641]All on deck": "Sprite overload",
  //Tier: Volcanic
  "[Achievement name 642]A round of applause": "One with nature",
  "[Achievement quote 642]A round of applause": "Turns out cookies DO grow on trees.",
  //Statue 1
  "[Achievement name 134]Click delegator": "Into the wild",
  //Statue 2
  "[Achievement name 189]Finger clickin' good": "Paths less travlled",
  //Statue 3
  "[Achievement name 293]Click (starring Adam Sandler)": "Trees falling in silent forests",
  //Leveling Achievement
  "[Achievement name 307]Freaky jazz hands": "Wills of the Wisps",

  //Villagers
  //Tier: Gently Used
  "[Achievement name 40]Grandma's cookies": "Not quite a stranger",
  //Tier: Copper
  "[Achievement name 41]Sloppy kisses": "New kid in town",
  //Tier: Amethyst
  "[Achievement name 42]Retirement home": "Assistant to the assistant",
  //Tier: Steel
  "[Achievement name 101]Friend of the ancients": "Gopher lackey",
  //Tier: Ruby
  "[Achievement name 102]Ruler of the ancients": "Networker",
  //Tier: Slimy
  "[Achievement name 149]The old never bothered me anyway": "Saloon regular",
  //Tier: Gold
  "[Achievement name 208]The agemaster": "Confidant",
  //Tier: Emerald
  "[Achievement name 209]To oldly go": "Farmowners' association member",
  //Tier: Diamond
  "[Achievement name 338]Aged well": "Neighbourhood watch captain",
  //Tier: Iridium
  "[Achievement name 339]101st birthday": "Schoolboard trustee",
  //Tier: Prismatic
  "[Achievement name 340]But wait 'til you get older": "He's just a poor boy, from a poor family",
  //Tier: Galaxy
  "[Achievement name 399]Defense of the ancients": "City councillor",
  //Tier: Volcanic
  "[Achievement name 475]Okay boomer": "Ombudsman",
  //Tier: Radioactive
  "[Achievement name 556]They moistly come at night": "Comptroller",
  //Tier: Infinity
  "[Achievement name 618]And now you're even older": "Deputy mayor",
  //Statue 1
  "[Achievement name 135]Gushing grannies": "Social capital",
  //Statue 2
  "[Achievement name 190]Panic at the bingo": "Madeleine mafia",
  //Statue 3
  "[Achievement name 294]Frantiquities": "Dessert dynasty",
  //Leveling Achievement
  "[Achievement name 308]Methuselah": "Won friends, influenced people",

  //Farms
  //Tier: Gently Used
  "[Achievement name 43]Bought the farm": "Greenhorn",
  //Tier: Copper
  "[Achievement name 44]Reap what you sow": "An honest day's baking",
  //Tier: Amethyst
  "[Achievement name 45]Farm ill": "Harvested interest",
  //Tier: Steel
  "[Achievement name 115]Perfected agriculture": "Cowpoke",
  //Tier: Ruby
  "[Achievement name 150]Homegrown": "Farm to table",
  //Tier: Slimy
  "[Achievement name 210]Gardener extraordinaire": "Wheelbarrows full of chocolate",
  //Tier: Gold
  "[Achievement name 250]Seedy business": "Homesteader",
  //Tier: Emerald
  "[Achievement name 281]You and the beanstalk": "Full chipment",
  //Tier: Diamond
  "[Achievement name 341]Harvest moon": "Bakerage",
  //Tier: Iridium
  "[Achievement name 354]Make like a tree": "Living large",
  //Tier: Prismatic
  "[Achievement name 400]Sharpest tool in the shed": "Goodbye, everybody, I've got to grow",
  //Tier: Galaxy
  "[Achievement name 476]Overripe": "Overcropulation",
  //Tier: Volcanic
  "[Achievement name 494]In the green": "It's miller time",
  "[Achievement quote 494]In the green": "Look at all this flour.",
  //Tier: Radioactive
  "[Achievement name 557]It's grown on you": "As the crow flees",
  //Tier: Infinity
  "[Achievement name 619]Au naturel": "Robin's worst nightmare",
  "[Achievement quote 619]Au naturel": "There's not enough hardwood in the universe.",
  //Statue 1
  "[Achievement name 136]I hate manure": "Livin' off the land",
  //Statue 2
  "[Achievement name 191]Rake in the dough": "If watering can, so can you",
  //Statue 3
  "[Achievement name 295]Overgrowth": "Land of plenty",
  //Leveling Achievement
  "[Achievement name 309]Huge tracts of land": "This land is your land",

  //Mines
  //Tier: Gently Used
  "[Achievement name 49]You know the drill": "Take your pick",
  //Tier: Copper
  "[Achievement name 50]Excavation site": "Panning for chocolate",
  //Tier: Amethyst
  "[Achievement name 51]Hollow the planet": "Chipping away",
  //Tier: Steel
  "[Achievement name 117]Can you dig it": "Recipe no. 4 in A Miner",
  //Tier: Ruby
  "[Achievement name 152]The center of the Earth": "Back to the salted caramel mines",
  //Tier: Slimy
  "[Achievement name 211]Tectonic ambassador": "Pillsburied",
  //Tier: Gold
  "[Achievement name 251]Freak fracking": "Baking in a gold mine",
  //Tier: Emerald
  "[Achievement name 282]Romancing the stone": "Cooksbad caverns",
  //Tier: Diamond
  "[Achievement name 342]Mine?": "Clan of the cave bake",
  //Tier: Iridium
  "[Achievement name 355]Cave story": "Stone cold Seb Astian",
  //Tier: Prismatic
  "[Achievement name 401]Hey now, you're a rock": "So you think you can stone me",
  //Tier: Galaxy
  "[Achievement name 477]Rock on": "Rock star",
  //Tier: Volcanic
  "[Achievement name 495]Mountain out of a molehill, but like in a good way": "Hot commodity",
  //Tier: Radioactive
  "[Achievement name 558]Don't let the walls cave in on you": "Between a rock and a tasty place",
  //Tier: Infinity
  "[Achievement name 620]Dirt-rich": "Ore else",
  //Statue 1
  "[Achievement name 137]Never dig down": "Underground baking scene",
  //Statue 2
  "[Achievement name 192]Quarry on": "A miner victory",
  //Statue 3
  "[Achievement name 296]Sedimentalism": "Danger in the deep",
  //Leveling Achievement
  "[Achievement name 310]D-d-d-d-deeper": "The bottom",

  //Coops
  //Tier: Gently Used
  "[Achievement name 46]Production chain": "Which came first?",
  //Tier: Copper
  "[Achievement name 47]Industrial revolution": "Birdly baking",
  //Tier: Amethyst
  "[Achievement name 48]Global warming": "Chocolate chirp cookies",
  //Tier: Steel
  "[Achievement name 116]Ultimate automation": "Eggheads",
  //Tier: Ruby
  "[Achievement name 151]Technocracy": "Rooster roster",
  //Tier: Slimy
  "[Achievement name 212]Rise of the machines": "Under the yolk",
  //Tier: Gold
  "[Achievement name 252]Modern times": "Running on eggshells",
  //Tier: Emerald
  "[Achievement name 283]Ex machina": "Duck season",
  //Tier: Diamond
  "[Achievement name 343]In full gear": "Rabbit season",
  //Tier: Iridium
  "[Achievement name 356]In-cog-neato": "Mary Shelly",
  //Tier: Prismatic
  "[Achievement name 402]Break the mold": "Didn't mean to make you cluck",
  //Tier: Galaxy
  "[Achievement name 478]Self-manmade man": "Count your chickens",
  //Tier: Volcanic
  "[Achievement name 496]The wheels of progress": "Your basket runneth over",
  "[Achievement quote 496]The wheels of progress": "Shouldn't you have two baskets at the very least?",
  //Tier: Radioactive
  "[Achievement name 559]Replaced by robots": "All bumin all the time",
  //Tier: Infinity
  "[Achievement name 621]Bots build bots": "Every day is easter",
  //Statue 1
  "[Achievement name 138]The incredible machine": "You can't make cookies without breaking a few eggs",
  "[Achievement quote 138]The incredible machine": "Unless you're vegan, that is.",
  //Statue 2
  "[Achievement name 193]Yes I love technology": "When your cookies come home to roost",
  //Statue 3
  "[Achievement name 297]Labor of love": "Flew the coop",
  //Leveling Achievement
  "[Achievement name 311]Patently genius": "Cookies most fowl",

  //Barns
  //Tier: Gently Used
  "[Achievement name 171]Pretty penny": "Hay there",
  //Tier: Copper
  "[Achievement name 172]Fit the bill": "Barn-raising",
  "[Achievement quote 172]Fit the bill": "That's a lot of yeast.",
  //Tier: Amethyst
  "[Achievement name 173]A loan in the dark": "Mooving on up",
  //Tier: Steel
  "[Achievement name 174]Need for greed": "Stable employment",
  //Tier: Ruby
  "[Achievement name 175]It's the economy, stupid": "Baaakery",
  //Tier: Slimy
  "[Achievement name 213]Acquire currency": "Slime rancher",
  "[Achievement quote 213]Acquire currency": "Can we make that joke?",
  //Tier: Gold
  "[Achievement name 253]The nerve of war": "Cookie shepherd",
  //Tier: Emerald
  "[Achievement name 284]And I need it now": "Won't get foaled again",
  //Tier: Diamond
  "[Achievement name 344]Treacle tart economics": "The GOAT",
  //Tier: Iridium
  "[Achievement name 357]Save your breath because that's all you've got left": "Cocoa fodder",
  //Tier: Prismatic
  "[Achievement name 403]Get the show on, get paid": "Little neigh, little low",
  //Tier: Galaxy
  "[Achievement name 479]Checks out": "Pig-tested, Marnie-approved",
  //Tier: Volcanic
  "[Achievement name 497]That's rich": "Bullish on baking",
  //Tier: Radioactive
  "[Achievement name 560]Financial prodigy": "Have a cow (and a goat, and a sheep, and a pig, and an ostrich)",
  "[Achievement quote 560]Financial prodigy": "An ostrich???",
  //Tier: Infinity
  "[Achievement name 622]Getting that bag": "How dairy you",
  //Statue 1
  "[Achievement name 186]Vested interest": "Teamwork makes the cream work",
  //Statue 2
  "[Achievement name 194]Paid in full": "Like a lamb to the bakery",
  //Statue 3
  "[Achievement name 298]Reverse funnel system": "Milked for all it's worth",
  //Leveling Achievement
  "[Achievement name 312]A capital idea": "Born in a barn",

  //Skull Caverns
  //Tier: Gently Used
  "[Achievement name 176]Your time to shrine": "Dessertification",
  //Tier: Copper
  "[Achievement name 177]Shady sect": "A lovely bunch of cocoa nuts",
  //Tier: Amethyst
  "[Achievement name 178]New-age cult": "Nobody bats a thousand",
  "[Achievement quote 178]New-age cult": "There are a thousand bats in here, though.",
  //Tier: Steel
  "[Achievement name 179]Organized religion": "Geode hoarder",
  //Tier: Ruby
  "[Achievement name 180]Fanaticism": "Silica desiccant, \"do not eat\"",
  "[Achievement quote 180]Fanaticism": "Forbidden sugar. (Seriously, don't, though.)",
  //Tier: Slimy 
  "[Achievement name 214]Zealotry": "Are you my mummy?",
  //Tier: Gold
  "[Achievement name 254]Wololo": "Where the cookie dragon rests his weary bones",
  "[Achievement quote 254]Wololo": "Have I ever told you about the three pillars?",
  //Tier: Emerald
  "[Achievement name 285]Pray on the weak": "Oases of milk and honey",
  //Tier: Diamond
  "[Achievement name 345]Holy cookies, grandma!": "I don't like crumbs",
  "[Achievement quote 345]Holy cookies, grandma!": "They're course and rough and irritating and they get everywhere. Not like here. Here everything is chewy and warm.",
  //Tier: Iridium
  "[Achievement name 358]Vengeful and almighty": "Rock crab rave",
  //Tier: Prismatic
  "[Achievement name 404]My world's on fire, how about yours": "Spare him his life from this monstrosity",
  //Tier: Galaxy
  "[Achievement name 480]Living on a prayer": "The Mummy (1999)",
  //Tier: Volcanic
  "[Achievement name 498]Preaches and cream": "Desperado",
  "[Achievement quote 498]Preaches and cream": "Your pain and your hunger, they're driving you to the bakery.",
  //Tier: Radioactive
  "[Achievement name 561]And I will pray to a big god": "Peppered with rexes",
  //Tier: Infinity
  "[Achievement name 623]The leader is good, the leader is great": "Iridium snake milk",
  "[Achievement quote 623]The leader is good, the leader is great": "That's an...interesting...flavour.",
  //Statue 1
  "[Achievement name 187]New world order": "Hot as an oven out here",
  //Statue 2
  "[Achievement name 195]Church of Cookiology": "Baking in the sun",
  //Statue 3
  "[Achievement name 299]Thus spoke you": "Qi's challenge",
  //Leveling Achievement
  "[Achievement name 313]It belongs in a bakery": "Protector of the valley",

  //Wizard Towers
  //Tier: Gently Used
  "[Achievement name 181]Bewitched": "The witchin' kitchen",
  //Tier: Copper
  "[Achievement name 182]The sorcerer's apprentice": "Pulling cookies out of hats",
  //Tier: Amethyst
  "[Achievement name 183]Charms and enchantments": "Syrup summoner",
  //Tier: Steel
  "[Achievement name 184]Curses and maledictions": "Presto choco",
  //Tier: Ruby
  "[Achievement name 185]Magic kingdom": "Spellbound",
  //Tier: Slimy
  "[Achievement name 215]The wizarding world": "The lion, the witch, and the pantry",
  //Tier: Gold
  "[Achievement name 255]And now for my next trick, I'll need a volunteer from the audience": "Wicked witch of the feast",
  //Tier: Emerald
  "[Achievement name 286]It's a kind of magic": "Sawing cookies in half",
  //Tier: Diamond
  "[Achievement name 346]The Prestige": "Extra-sugary perception",
  "[Achievement quote 346]The Prestige": "Turn around. How many cookies am I holding up?",
  //Tier: Iridium
  "[Achievement name 359]Spell it out for you": "And for my next trick",
  "[Achievement quote 359]Spell it out for you": "I shall make this cookie disappear! In my mouth.",
  //Tier: Prismatic
  "[Achievement name 405]The meteor men beg to differ": "Galileo, Figaro, Magnificocoa",
  //Tier: Galaxy
  "[Achievement name 481]Higitus figitus migitus mum": "The M. in M. Rasmodius",
  "[Achievement quote 481]Higitus figitus migitus mum": "It stands for \"Makin' Cookies\".",
  //Tier: Volcanic
  "[Achievement name 499]Magic thinking": "Double, double broil and tumble, oven burn and cookie crumble",
  //Tier: Radioactive
  "[Achievement name 562]Shosple Colupis": "Poof, there it is",
  //Tier: Infinity
  "[Achievement name 624]You don't think they could've used... it couldn't have been ma-": "Fus Ro Dough",
  //Statue 1
  "[Achievement name 188]Hocus pocus": "Abracabiscuits",
  //Statue 2
  "[Achievement name 196]Too many rabbits, not enough hats": "Chocus-pocus",
  //Statue 3
  "[Achievement name 300]Manafest destiny": "Prestichipitation",
  //Leveling Achievement
  "[Achievement name 314]Motormouth": "You're a baker, Harry",

  //Fish Ponds
  //Tier: Gently Used
  "[Achievement name 52]Expedition": "Fisherman",
  //Tier: Copper
  "[Achievement name 53]Galactic highway": "Bake and tackle",
  //Tier: Amethyst
  "[Achievement name 54]Far far away": "Ocean currants",
  //Tier: Steel
  "[Achievement name 118]Type II civilization": "Baking waves",
  //Tier: Ruby
  "[Achievement name 153]We come in peace": "Mullets and snappers",
  //Tier: Slimy
  "[Achievement name 216]Parsec-masher": "Waterlogged",
  "[Achievement quote 216]Parsec-masher": "We really gotta get a dry storage locker or something.",
  //Tier: Gold
  "[Achievement name 256]It's not delivery": "The hunt for golden brown October",
  //Tier: Emerald
  "[Achievement name 287]Make it so": "Ol' Mariner",
  //Tier: Diamond
  "[Achievement name 347]That's just peanuts to space": "Make him bake with the fishes",
  //Tier: Iridium
  "[Achievement name 360]Space space space space space": "Mother catch",
  "[Achievement quote 360]Space space space space space": "Hey Ma, look! No tackle!",
  //Tier: Prismatic
  "[Achievement name 406]Only shooting stars": "Look up to the skies and sea",
  //Tier: Galaxy
  "[Achievement name 482]The incredible journey": "Just keep swimming",
  //Tier: Volcanic
  "[Achievement name 500]Is there life on Mars?": "Something fishy this way comes",
  "[Achievement quote 500]Is there life on Mars?": "You're gonna need a bigger oven.",
  //Tier: Radioactive
  "[Achievement name 563]False vacuum": "Moby Chip",
  //Tier: Infinity
  "[Achievement name 625]Signed, sealed, delivered": "Twenty thousand cookies under the sea",
  //Statue 1
  "[Achievement name 139]And beyond": "Roe your boat gently down the stream",
  //Statue 2
  "[Achievement name 197]The most precious cargo": "Merrily herringly",
  //Statue 3
  "[Achievement name 301]Neither snow nor rain nor heat nor gloom of night": "Life is but a bream",
  //Leveling Achievement
  "[Achievement name 315]Been there done that": "Master angler",

  //Greenhouses
  //Tier: Gently Used
  "[Achievement name 55]Transmutation": "No pane, no gain",
  //Tier: Copper
  "[Achievement name 56]Transmogrification": "A transparent plot",
  //Tier: Amethyst
  "[Achievement name 57]Gold member": "An oven in a hothouse",
  //Tier: Steel
  "[Achievement name 119]Gild wars": "Souped-up display cases",
  //Tier: Ruby
  "[Achievement name 154]The secrets of the universe": "Planting evidence",
  //Tier: Slimy
  "[Achievement name 217]The work of a lifetime": "A cookie by any other name",
  //Tier: Gold
  "[Achievement name 257]Gold, Jerry! Gold!": "Inside job",
  //Tier: Emerald
  "[Achievement name 288]All that glitters is gold": "Stone-throwing ban",
  "[Achievement quote 288]All that glitters is gold": "Those who bake in glass houses...",
  //Tier: Diamond
  "[Achievement name 348]Worth its weight in lead": "Index of refraction",
  //Tier: Iridium
  "[Achievement name 361]Don't get used to yourself, you're gonna have to change": "Your mass is glass",
  "[Achievement quote 361]Don't get used to yourself, you're gonna have to change": "And I'm a...cookie...mower?",
  //Tier: Prismatic
  "[Achievement name 407]We could all use a little change": "Easy come, easy grow",
  //Tier: Galaxy
  "[Achievement name 483]Just a phase": "Garden of eatin'",
  //Tier: Volcanic
  "[Achievement name 501]Bad chemistry": "Just between you and Caroline",
  //Tier: Radioactive
  "[Achievement name 564]Metallic taste": "Hanging gardens of Bakealong",
  //Tier: Infinity
  "[Achievement name 626]Sugar, spice, and everything nice": "Ancient grow-op",
  "[Achievement quote 626]Sugar, spice, and everything nice": "Simply the most efficient way to go.",
  //Statue 1
  "[Achievement name 140]Magnum Opus": "Nip it in the bun",
  //Statue 2
  "[Achievement name 198]The Aureate": "April rookies bring May cookies",
  //Statue 3
  "[Achievement name 302]I've got the Midas touch": "How do your cookies grow?",
  //Leveling Achievement
  "[Achievement name 316]Phlogisticated substances": "How do you like them apples?",

  //Obelisks
  //Tier: Gently Used
  "[Achievement name 58]A whole new world": "How'd you get here so fast?",
  //Tier: Copper
  "[Achievement name 59]Now you're thinking": "A series of tubes",
  "[Achievement quote 59]Now you're thinking": "How pneumatic of you.",
  //Tier: Amethyst
  "[Achievement name 60]Dimensional shift": "Zippy chippy",
  //Tier: Steel
  "[Achievement name 120]Brain-split": "Bake in a flash",
  //Tier: Ruby
  "[Achievement name 155]Realm of the Mad God": "Mountain mover",
  //Tier: Slimy
  "[Achievement name 218]A place lost in time": "Itchy feet",
  //Tier: Gold
  "[Achievement name 258]Forbidden zone": "Beachcomber",
  //Tier: Emerald
  "[Achievement name 289]Here he comes": "Alice and Bob's Quantum Bakery of Maybe",
  //Tier: Diamond
  "[Achievement name 349]What happens in the vortex stays in the vortex": "Do the space warp",
  //Tier: Iridium
  "[Achievement name 362]Objects in the mirror dimension are closer than they appear": "Deserter",
  //Tier: Prismatic
  "[Achievement name 408]Your brain gets smart but your head gets dumb": "Just gotta get right outta here",
  //Tier: Galaxy
  "[Achievement name 484]Don't let me leave, Murph": "Bell inequalitea and biscuits",
  //Tier: Volcanic
  "[Achievement name 502]Reduced to gibbering heaps": "Island hopper",
  //Tier: Radioactive
  "[Achievement name 565]Swiss cheese": "Schr\u00F6dinger's cookie",
  //Tier: Infinity
  "[Achievement name 627]Not even remotely close to Kansas anymore": "Time And Recipe Dimension In Sweets",
  //Statue 1
  "[Achievement name 141]With strange eons": "Wanderlust",
  //Statue 2
  "[Achievement name 199]Ever more hideous": "Going somewhere?",
  //Statue 3
  "[Achievement name 303]Which eternal lie": "Here and now",
  //Leveling Achievement
  "[Achievement name 317]Bizarro world": "No place like home",
  "[Achievement quote 317]Bizarro world": "All those cookies...and all it took was three clicks.",

  //Gold Clocks
  //Tier: Gently Used
  "[Achievement name 61]Time warp": "Stop watch",
  //Tier: Copper
  "[Achievement name 62]Alternate timeline": "Daylight savings time",
  //Tier: Amethyst
  "[Achievement name 63]Rewriting history": "Synchronicity",
  //Tier: Steel
  "[Achievement name 121]Time duke": "No time to fry",
  //Tier: Ruby
  "[Achievement name 156]Forever and ever": "Dine of the times",
  //Tier: Slimy
  "[Achievement name 219]Heat death": "No time like the present",
  //Tier: Gold
  "[Achievement name 259]cookie clicker forever and forever a hundred years cookie clicker, all day long forever, forever a hundred times, over and over cookie clicker adventures dot com": "Choc o'clock",
  //Tier: Emerald
  "[Achievement name 290]Way back then": "Suspended animation",
  //Tier: Diamond
  "[Achievement name 350]Invited to yesterday's party": "Bake to the future",
  //Tier: Iridium
  "[Achievement name 363]Groundhog day": "Like crumbs through the hourglass",
  //Tier: Prismatic
  "[Achievement name 409]The years start coming": "Too late, my time has come",
  //Tier: Galaxy
  "[Achievement name 485]Caveman to cosmos": "Baking on borrowed time",
  //Tier: Volcanic
  "[Achievement name 503]Back already?": "Cookie diem",
  //Tier: Radioactive
  "[Achievement name 566]But the future refused to change": "Eat the clock",
  "[Achievement quote 566]But the future refused to change": "Don't actually, though.",
  //Tier: Infinity
  "[Achievement name 628]I only meant to stay a while": "Immortality itself",
  "[Achievement quote 628]I only meant to stay a while": "Ain't never gonna grow old, ain't never gonna die.",
  //Statue 1
  "[Achievement name 142]Spacetime jigamaroo": "Better bake than never",
  //Statue 2
  "[Achievement name 200]Be kind, rewind": "Time is on my side",
  //Statue 3
  "[Achievement name 304]D&eacute;j&agrave; vu": "Just don't call me late for dinner",
  //Leveling Achievement
  "[Achievement name 318]The long now": "Tick tock shock",

  //Sewers
  //Tier: Gently Used
  "[Achievement name 87]Antibatter": "One man's trash",
  //Tier: Copper
  "[Achievement name 88]Quirky quarks": "The plumber's apprentice",
  //Tier: Amethyst
  "[Achievement name 89]It does matter!": "Coming down the pipe",
  "[Achievement quote 89]It does matter!": "It's \"pike\", actually, which means this should really be a fish pond achievement.",
  //Tier: Steel
  "[Achievement name 122]Molecular maestro": "It was a dark and stormy drain",
  //Tier: Ruby
  "[Achievement name 157]Walk the planck": "A grate guy",
  //Tier: Slimy
  "[Achievement name 220]Microcosm": "Adequate grainage",
  //Tier: Gold
  "[Achievement name 260]Scientists baffled everywhere": "Underground rivers of chocolate",
  //Tier: Emerald
  "[Achievement name 291]Exotic matter": "Depollution",
  //Tier: Diamond
  "[Achievement name 351]Downsizing": "Sign of the cooking vessel",
  //Tier: Iridium
  "[Achievement name 364]A matter of perspective": "Department of sanitation and snacking",
  //Tier: Prismatic
  "[Achievement name 410]What a concept": "But now I've gone and thrown it all away",
  //Tier: Galaxy
  "[Achievement name 486]Particular tastes": "Oh cookie boy, the pipes are calling",
  //Tier: Volcanic
  "[Achievement name 504]Nuclear throne": "Goodness gracious, great balls of goo",
  //Tier: Radioactive
  "[Achievement name 567]What's the dark matter with you": "Teenage mutant ninja bakers",
  //Tier: Infinity
  "[Achievement name 629]Not 20 years away forever": "What we bake in the shadows",
  //Statue 1
  "[Achievement name 143]Supermassive": "Drippy wafers",
  //Statue 2
  "[Achievement name 201]Infinitesimal": "High-humidity subterranean food chemistry",
  //Statue 3
  "[Achievement name 305]Powers of Ten": "We all bake down here",
  //Leveling Achievement
  "[Achievement name 319]Chubby hadrons": "As above, so below",

  //Museums
  //Tier: Gently Used
  "[Achievement name 123]Lone photon": "Look (but don't taste)",
  "[Achievement quote 123]Lone photon": "Well where's the fun in that?",
  //Tier: Copper
  "[Achievement name 124]Dazzling glimmer": "The galley gallery",
  //Tier: Amethyst
  "[Achievement name 125]Blinding flash": "Untold yummies of days past",
  //Tier: Steel
  "[Achievement name 126]Unending glow": "The chocolatiest cookie ever discovered",
  //Tier: Ruby
  "[Achievement name 158]Rise and shine": "Terracocoa army",
  //Tier: Slimy
  "[Achievement name 221]Bright future": "Guernicookies",
  //Tier: Gold
  "[Achievement name 261]Harmony of the spheres": "Extra special exhibition",
  //Tier: Emerald
  "[Achievement name 292]At the end of the tunnel": "Final writings of Chocrates",
  //Tier: Diamond
  "[Achievement name 352]My eyes": "Treasure trove",
  //Tier: Iridium
  "[Achievement name 365]Optical illusion": "An overwhelming surplus of old pottery baking vessels",
  //Tier: Prismatic
  "[Achievement name 411]You'll never shine if you don't glow": "MOMA mia, let me go",
  //Tier: Galaxy
  "[Achievement name 487]A light snack": "In louvre with baking",
  //Tier: Volcanic
  "[Achievement name 505]Making light of the situation": "Dead Sea recipe scrolls",
  //Tier: Radioactive
  "[Achievement name 568]Enlightenment": "Sarcophagus of Tutankookies",
  //Tier: Infinity
  "[Achievement name 630]Bright side of the Moon": "Snacksonian",
  //Statue 1
  "[Achievement name 144]Praise the sun": "Cookies are for educating, not for eating",
  //Statue 2
  "[Achievement name 202]A still more glorious dawn": "Archival oven capacity",
  //Statue 3
  "[Achievement name 306]Now the dark days are gone": "As empires crumble",
  //Leveling Achievement
  "[Achievement name 320]Palettable": "A complete collection",

  //Community Centres
  //Tier: Gently Used
  "[Achievement name 325]Lucked out": "Sit bake and relax",
  //Tier: Copper
  "[Achievement name 326]What are the odds": "Communal cookies",
  //Tier: Amethyst
  "[Achievement name 327]Grandma needs a new pair of shoes": "Chipping in",
  //Tier: Steel
  "[Achievement name 328]Million to one shot, doc": "Team building",
  //Tier: Ruby
  "[Achievement name 329]As luck would have it": "There's no \"I\" in \"cookie\"",
  "[Achievement quote 329]As luck would have it": "Wait a minute.",
  //Tier: Slimy
  "[Achievement name 330]Ever in your favor": "By our flours combined",
  //Tier: Gold
  "[Achievement name 331]Be a lady": "Young Men's Cookie Association",
  "[Achievement quote 331]Be a lady": "Young man, there's no need to feel down. I said, young man, that cookie's golden brown.",
  //Tier: Emerald
  "[Achievement name 332]Dicey business": "Snacks for Linus",
  "[Achievement quote 332]Dicey business": "Someone get this man a cookie.",
  //Tier: Diamond
  "[Achievement name 353]Maybe a chance in hell, actually": "Feeling guildy",
  //Tier: Iridium
  "[Achievement name 366]Jackpot": "Honour among scones",
  //Tier: Prismatic
  "[Achievement name 412]You'll never know if you don't go": "Pulled my trigger, now he's bread",
  //Tier: Galaxy
  "[Achievement name 488]Tempting fate": "Your tax dollars at work",
  //Tier: Volcanic
  "[Achievement name 506]Flip a cookie. Chips, I win. Crust, you lose.": "Chocolatocracy",
  //Tier: Radioactive
  "[Achievement name 569]Never tell me the odds": "Marx never said anything about cookies",
  //Tier: Infinity
  "[Achievement name 631]Riding the Mersenne twister": "It bakes a village",
  //Statue 1
  "[Achievement name 333]Fingers crossed": "Together we can bake so much",
  //Statue 2
  "[Achievement name 334]Just a statistic": "Public pastry fund",
  //Statue 3
  "[Achievement name 335]Murphy's wild guess": "There's always cookies in the banana stand",
  //Leveling Achievement
  "[Achievement name 336]Let's leaf it at that": "Local legend",

  //Cabins
  //Tier: Gently Used
  "[Achievement name 413]Self-contained": "Sharing is caring",
  //Tier: Copper
  "[Achievement name 414]Threw you for a loop": "Now it's a party",
  //Tier: Amethyst
  "[Achievement name 415]The sum of its parts": "Cookie cliquer",
  //Tier: Steel
  "[Achievement name 416]Bears repeating": "Cracking open a cold milk with the boys",
  //Tier: Ruby
  "[Achievement name 417]More of the same": "The family that bakes together",
  "[Achievement quote 417]More of the same": "Shakes together? ...aches together? Cakes together??",
  //Tier: Slimy
  "[Achievement name 418]Last recurse": "...who needs enemies?",
  //Tier: Gold
  "[Achievement name 419]Out of one, many": "The gang bakes cookies",
  "[Achievement quote 419]Out of one, many": "It's always sunny in Pelican Town.",
  //Tier: Emerald
  "[Achievement name 420]An example of recursion": "The one where everyone makes cookies",
  //Tier: Diamond
  "[Achievement name 421]For more information on this achievement, please refer to its title": "A girl's best friend",
  "[Achievement quote 421]For more information on this achievement, please refer to its title": "The girl in question, of course, is Haley.",
  //Tier: Iridium
  "[Achievement name 422]I'm so meta, even this achievement": "You're my best friend",
  //Tier: Prismatic
  "[Achievement name 423]Never get bored": "I see a little silhouetto of a man",
  //Tier: Galaxy
  "[Achievement name 489]Tautological": "Where everybody knows your name",
  //Tier: Volcanic
  "[Achievement name 507]In and of itself": "You like me...you really like me!",
  "[Achievement quote 507]In and of itself": "You know, Mrs. Field never actually said that.",
  //Tier: Radioactive
  "[Achievement name 570]Blowing an Apollonian gasket": "'Til bread do us part",
  //Tier: Infinity
  "[Achievement name 632]Divide and conquer": "Friendship is magic",
  //Statue 1
  "[Achievement name 424]The needs of the many": "You've got a friend in me",
  //Statue 2
  "[Achievement name 425]Eating its own": "I would bake anything for you",
  "[Achievement quote 425]Eating its own": "But I won't bake that.",
  //Statue 3
  "[Achievement name 426]We must go deeper": "Thank you for being a friend",
  //Leveling Achievement
  "[Achievement name 427]Sierpinski rhomboids": "The beloved farmer",

  //Islands
  //Tier: Gently Used
  "[Achievement name 433]F12": "Castaway",
  //Tier: Copper
  "[Achievement name 434]Variable success": "Desserted islands",
  //Tier: Amethyst
  "[Achievement name 435]No comments": "It's free real estate",
  //Tier: Steel
  "[Achievement name 436]Up to code": "The cookie coast",
  //Tier: Ruby
  "[Achievement name 437]Works on my machine": "Lord of the pies",
  //Tier: Slimy
  "[Achievement name 438]Technical debt": "Captain Cook",
  //Tier: Gold
  "[Achievement name 439]Mind your language": "Here on Michelin's Isle",
  "[Achievement quote 439]Mind your language": "Why is a tire company handing out baking awards, anyway?",
  //Tier: Emerald
  "[Achievement name 440]Inconsolable": "Robert \"Lewis\" Stevenson",
  //Tier: Diamond
  "[Achievement name 441]Closure": "An exclusive weeklong music and baking festival on a private island once owned by Orteil",
  //Tier: Iridium
  "[Achievement name 442]Dude what if we're all living in a simulation like what if we're all just code on a computer somewhere": "If you like baking love at midnight",
  //Tier: Prismatic
  "[Achievement name 443]Taking the back streets": "Caught in a landslide",
  //Tier: Galaxy
  "[Achievement name 490]Curly braces": "I am a rock, I am an island",
  "[Achievement quote 490]Curly braces": "And a rock feels no hunger. And an island never eats.",
  //Tier: Volcanic
  "[Achievement name 508]Duck typing": "Ginger(snap) Island",
  "[Achievement quote 508]Duck typing": "Pairs well with walnuts of the gilded variety.",
  //Tier: Radioactive
  "[Achievement name 571]Get with the program": "Tropic of Cookiecrumb",
  //Tier: Infinity
  "[Achievement name 633]Pebcakes": "Cookienesia",
  "[Achievement quote 633]Pebcakes": "Not to be confused with the baking-related memory disorder of the same name.",
  //Statue 1
  "[Achievement name 444]Inherited prototype": "Biscuits adrift",
  //Statue 2
  "[Achievement name 445]A model of document object": "The bakery of Dr. Moreau",
  //Statue 3
  "[Achievement name 446]First-class citizen": "Just a really huge pile of cookies in the ocean",
  //Leveling Achievement
  "[Achievement name 447]Alexandria": "The Ferngill Republic",

  //Consoles
  //Tier: Gently Used
  "[Achievement name 509]They'll never know what hit 'em": "public class Achievement{}",
  "[Achievement quote 509]They'll never know what hit 'em": "I feel like I'm forgetting something...",
  //Tier: Copper
  "[Achievement name 510]Well-versed": "This one's for loops",
  //Tier: Amethyst
  "[Achievement name 511]Ripe for the picking": "Source control freal",
  "[Achievement quote 511]Ripe for the picking": "Git your act together.",
  //Tier: Steel
  "[Achievement name 512]Unreal": "Warmings as errors",
  //Tier: Ruby
  "[Achievement name 513]Once you've seen one": "Chocolatey code smells",
  //Tier: Slimy
  "[Achievement name 514]Spoils and plunder": "OOPs",
  "[Achievement quote 514]Spoils and plunder": "When you're holding a hammer, everything looks like an encapsulated data structure.",
  //Tier: Gold
  "[Achievement name 515]Nobody exists on purpose, nobody belongs anywhere": "Hackerman",
  "[Achievement quote 515]Nobody exists on purpose, nobody belongs anywhere": "I thought Sebastian told us to stop calling him that.",
  //Tier: Emerald
  "[Achievement name 516]Hyperspace expressway": "Asynchronous eating",
  //Tier: Diamond
  "[Achievement name 517]Versatile": "Computer chips",
  "[Achievement quote 517]Versatile": "There's not enough cocoa butter in these.",
  //Tier: Iridium
  "[Achievement name 518]You are inevitable": "Entity-cookie systems",
  //Tier: Prismatic
  "[Achievement name 519]Away from this place": "We will not let you code",
  //Tier: Galaxy
  "[Achievement name 520]Everywhere at once": "Heap corruption",
  "[Achievement quote 520]Everywhere at once": "Oh no0x00000000.",
  //Tier: Volcanic
  "[Achievement name 521]Reject reality, substitute your own": "Statically typed sugars",
  //Tier: Radioactive
  "[Achievement name 572]Lost your cosmic marbles": "Dereferencing a null cookie",
  //Tier: Infinity
  "[Achievement name 634]Greener on the other sides": "Memory pool's closed",
  "[Achievement quote 634]Greener on the other sides": "Pagefile closed due to RAID5.",
  //Statue 1
  "[Achievement name 522]Fringe": "Bake semantics",
  "[Achievement quote 522]Fringe": "But C# doesn't have move semanti-",
  //Statue 2
  "[Achievement name 523]Coherence": "Gigabite caching",
  //Statue 3
  "[Achievement name 524]Earth-616": "These cheated cookies taste pretty good, actually",
  //Leveling Achievement
  "[Achievement name 525]Strange topologies": "MilkOverflow",

  //Crossoverers
  //Tier: Gently Used
  "[Achievement name 539]It's big brain time": "Nintendough",
  //Tier: Copper
  "[Achievement name 540]Just my imagination": "Electronic Culinary Arts",
  //Tier: Amethyst
  "[Achievement name 541]Now there's an idea": "Candy Namco",
  //Tier: Steel
  "[Achievement name 542]The organ that named itself": "Lemon Square Enix",
  //Tier: Ruby
  "[Achievement name 543]Gyrification": "Mortal Kookie",
  //Tier: Slimy
  "[Achievement name 544]A trademarked portmanteau of \"imagination\" and \"engineering\"": "Dark Chocolate Souls",
  //Tier: Gold
  "[Achievement name 545]Mindfulness": "Pok\u00E9munch",
  //Tier: Emerald
  "[Achievement name 546]The 10% myth": "Take-One",
  "[Achievement quote 546]The 10% myth": "Pass it on.",
  //Tier: Diamond
  "[Achievement name 547]Don't think about it too hard": "Tony Hawk's Pro Baker",
  "[Achievement quote 547]Don't think about it too hard": "He's a nice guy. He probably won't sue.",
  //Tier: Iridium
  "[Achievement name 548]Though fools seldom differ": "Super Snack Bros.",
  //Tier: Prismatic
  "[Achievement name 549]Looking kind of dumb": "Doughemian Rhapsody",
  //Tier: Galaxy
  "[Achievement name 550]A beautiful mind": "Cookievania",
  //Tier: Volcanic
  "[Achievement name 551]Cardinal synapses": "Red Bread Redemption",
  //Tier: Radioactive
  "[Achievement name 573]By will alone I set my mind in motion": "Lizard Entertainment",
  "[Achievement quote 573]By will alone I set my mind in motion": "The hell does this have to do with cookies?",
  //Tier: Infinity
  "[Achievement name 635]Where is my mind": "WorriedMonkey",
  //Statue 1
  "[Achievement name 552]Positive thinking": "Irate emails",
  //Statue 2
  "[Achievement name 553]The thought that counts": "Legal action",
  "[Achievement quote 553]The thought that counts": "Torte law is extremely complicated.",
  //Statue 3
  "[Achievement name 554]Unthinkable": "Fines",
  "[Achievement quote 554]Unthinkable": "Pay the court a fine, or serve your pastries.",
  //Leveling Achievement
  "[Achievement name 555]Gifted": "Jail",
  "[Achievement quote 555]Gifted": "YoU wOuLdn'T dOwNloAd a mOd.",

  //Yous
  //Tier: Gently Used
  "[Achievement name 600]My own clone": "This game ain't big enough for the two of us",
  //Tier: Copper
  "[Achievement name 601]Multiplicity": "Suitable for 1-50 players",
  //Tier: Amethyst
  "[Achievement name 602]Born for this job": "Battle royale",
  //Tier: Steel
  "[Achievement name 603]Episode II": "Like looking in a mirror",
  //Tier: Ruby
  "[Achievement name 604]Copy that": "More of you to love",
  //Tier: Slimy
  "[Achievement name 605]Life finds a way": "Self-serving",
  //Tier: Gold
  "[Achievement name 606]Overcrowding": "Be the butter person",
  //Tier: Emerald
  "[Achievement name 607]Strength in numbers": "Intrinsically motivated",
  //Tier: Diamond
  "[Achievement name 608]Army of me": "Smart cookie",
  //Tier: Iridium
  "[Achievement name 609]Know thyself": "You are what you bake",
  "[Achievement quote 609]Know thyself": "I guess that makes me flaky and crispy with a delicious cream filling.",
  //Tier: Prismatic
  "[Achievement name 610]Didn't make sense not to live": "Nothing really matters to me",
  //Tier: Galaxy
  "[Achievement name 611]Genetic bottleneck": "Too many cooks",
  //Tier: Volcanic
  "[Achievement name 612]Despite everything, it's still you": "It's getting hot in here",
  //Tier: Radioactive
  "[Achievement name 613]Everyone everywhere all at once": "Identity crisis",
  //Tier: Infinity
  "[Achievement name 636]Introspection": "Narcissism",
  //Statue 1
  "[Achievement name 614]Self-made": "Elbow grease",
  "[Achievement quote 614]Self-made": "I can believe this isn't butter, actually.",
  //Statue 2
  "[Achievement name 615]Reproducible results": "Really put your bake into it",
  //Statue 3
  "[Achievement name 616]That's all you": "Made with love",
  //Leveling Achievement 
  "[Achievement name 617]Self-improvement": "The Queen of Sauce",

  //Stardrop achievements
  "[Achievement name 266]Dude, sweet": "Pick-me-up",
  "[Achievement name 267]Sugar rush": "Harvest moon",
  "[Achievement name 268]Year's worth of cavities": "Purple perennial",
  "[Achievement quote 268]Year's worth of cavities": "Just a drop in the bucket.",
  //Birfurcated
  "[Achievement name 270]Sugar sugar": "Ten-pointed star",
  //Golden
  "[Achievement name 271]All-natural cane sugar": "You get a gold star",
  //Meaty
  "[Achievement name 272]Sweetmeats": "Carnivorous plants",
  "[Achievement quote 272]Sweetmeats": "That's not vegan.",
  //Caramelized
  "[Achievement name 396]Maillard reaction": "Toffee tree trimmer",

  //Sell a villager
  "[Achievement name 39]Just wrong": "Fear of abandonment",
  "[Achievement quote 39]Just wrong": "Oh...that's...fine, I guess. I'll be at Pierre's.",
  //Have 7 villager types
  "[Achievement name 81]Elder": "Townies",
  //Have 14 villager types
  "[Achievement name 431]Veteran": "City folk",
  //Combine villagers and junimos
  "[Achievement name 248]The elder scrolls": "Ensemble cast",
  "[Achievement quote 248]The elder scrolls": "Five hundred twenty-five thousand, six hundred cookies.",

  //Click a christmas villager
  "[Achievement name 580]Baby it's old outside": "Dough holy night",
  //Elder frenzy click
  "[Achievement name 265]Eldeer": "Cariboom",
  //Wrinklers
  "[Upgrade name 142]Wrinkler doormat": "Serpent doormat",
  "[Upgrade name 224]Wrinklerspawn": "Serpentclutch",
  "[Upgrade name 495]Eye of the wrinkler": "Eye of the serpent",
  "[Upgrade quote 495]Eye of the wrinkler": "Aaaallllways watching.",
  "[Achievement name 105]Itchscratcher": "Why did it have to be snakes?",
  "[Achievement name 106]Wrinklesquisher": "Serpent charmer",
  "[Achievement name 107]Moistburster": "Dragonslayer",
  "[Achievement name 598]Wrinkler poker": "Tickler of wyrms",
  "[Achievement quote 598]Wrinkler poker": "I poked it. I poked it with a big stick.",

  //Fortunes
  "[Upgrade quote 621]Fortune #001": "The spirit of the forest lives within you.",
  "[Upgrade quote 622]Fortune #002": "Pay a special kindness to your neighbour today.",
  "[Upgrade quote 623]Fortune #003": "Cultivate a garden within yourself, and you will never go hungry.",
  "[Upgrade quote 624]Fortune #004": "If ever you feel something missing, do not hesitate to dig deeper.",
  "[Upgrade quote 625]Fortune #005": "In action, our dreams take flight.",
  "[Upgrade quote 626]Fortune #006": "Just because a cookie is baked in a barn, does not make it a cow.",
  "[Upgrade quote 627]Fortune #007": "Secrets can be more precious than you realize.",
  "[Upgrade quote 628]Fortune #008": "Sometimes in trickery we find the greatest truths.",
  "[Upgrade quote 629]Fortune #009": "Do not fish for answers if you are not prepared to keep what you catch.",
  "[Upgrade quote 630]Fortune #010": "The fragility of life does not diminish its beauty.",
  "[Upgrade quote 631]Fortune #011": "Appreciate the here, for one day it becomes the there.",
  "[Upgrade quote 632]Fortune #012": "Appreciate the now, for one day it becomes the then.",
  "[Upgrade quote 633]Fortune #013": "In the darkest of places, you may find the brightest of goops.",
  "[Upgrade quote 634]Fortune #014": "Those who forget the past are doomed to eat it.",
  "[Upgrade quote 635]Fortune #015": "Be someone who can be relied upon, and you will always be able to rely on others.",
  "[Upgrade quote 636]Fortune #016": "Keep your friends close, and keep your enemies the hell away from you.",
  "[Upgrade quote 637]Fortune #017": "Even the most solitary island keeps a thousand wild companions.",
  "[Upgrade quote 698]Fortune #018": "If ever you feel small, remember the power even a single semicolon can wield.",
  "[Upgrade quote 763]Fortune #019": "Ideas, like people, are stronger when brought together.",
  "[Upgrade quote 861]Fortune #020": "If you are only willing to believe in one thing, make that yourself.",

  //News ticker
  //Villagers
  "Ticker (grandma)": [
    "I'm pro opera, and I vote.",
    "Gotta do what I gotta do.",
    "My birthday's coming up...",
    "Hey, these cookies are pretty good!",
    "Has anyone seen my shorts?",
    "I wish someone would get ME a bouquet.",
    "Who is this Barone guy, anyway?"
  ],
  //Threatening villagers
  "Ticker (threatening grandma)": [
    "Oh look. It's you.",
    "Money, money, money.",
    "I'm itching to exploit someone.",
    "I like Jojamart...",
    "That community centre takes up an awful lot of space.",
    "These little junimo guys are getting on my nerves.",
    "And so it begins.",
    "We like the stock.",
    "Join us. Thrive."
  ],
  //Villagers sold
  "Ticker (angry grandma)": [
    "You're ridiculous.",
    "Morris was right.",
    "You're worse than Pierre.",
    "Maybe these cookies aren't so great."
  ],
  //Returned villagers
  "Ticker (grandmas return)": [
    "consume",
    "expand",
    "acquire",
    "You can't stop progress.",
    "The SEC can't hold me!",
    "We want more.",
    "Rejoin us. Thrive.",
    "We'll be back."
  ],
  //Joja takeover start
  "Ticker (grandma invasion start)": [
    "blue boxes full of cookies appear on doorsteps across Pelican Town!",
    "villagers report strange buns now filled with Jojamart coupons!",
    "Joja Corporation buys up acres of land throughout Ferngill Republic."
  ],
  //Oligarchy expansion
  "Ticker (grandma invasion rise)": [
    "Zuzu City disappears under avalanche of cash and Joja soda cans!",
    "striking Jojamart workers disappear as mysterious worker-shaped piles of coins and cookies arrive at union headquarters!",
    "\"zombie-like\" villagers' eyes glaze over, crawl toward Jojamart scraping ground for gold coins!",
    "arts and culture reduced to ash and cinders as Jojamart annexes historic sites for new multi-level-baking division!",
    "drowning in money now second-leading cause of premature death behind malnutrition: \"Exactly as it should be,\" says Jojamart CFO."
  ],
  //Full-blown hypercapitalism
  "Ticker (grandma invasion full)": [
    "poverty criminalized as oligarchs legislate new trillion cookie per-household minimum.",
    "smoldering technocapitalist dystopia a \"necessary restructuring effort\", claims Jojamart spokesperson.",
    "society burning as rich jerks crack their teeth eating golden cookies!"
  ],
  //Farms
  "Ticker (Farm)": [
    "chocolate fertilizer runoff making local water delicious, says environmental scientist.",
    "farming lobby claims cookie golf courses wasting millions of gallons of milk per year.",
    "local farmers implement crop rotation strategy, planting triple-chocolate macaroons after sugar cookie harvest."
  ],
  //Mines
  "Ticker (Mine)": [
    "local meerkat expresses enthusiasm for new mining job: \"dig a tunnel, dig dig a tunnel.\"",
    "bakeries downplay role of radioactive chocolate ore in surge of mutant cookie recalls.",
    "tragedy strikes as chocolate-clogged mine elevator causes 4-hour delay in cinnamon ore production!"
  ],
  //Coops
  "Ticker (Factory)": [
    "baker emerges with egg on their face following embarrassing incident at local chicken coop.",
    "cookies baked with rabbits' feet no luckier than non-foot-containing cookies, says fortune teller.",
    "wild pepper rexes smell pet dinosaur, rip hole in coop wall to come in and play!",
    "duck!"
  ],
  //Barns
  "Ticker (Bank)": [
    "veterinarians debate healthfulness of all-cookie diet for livestock.",
    "animal welfare expert draws criticism over claim that ostriches should not live with goats: \"just shut up, man.\"",
    "cow issues groundbreaking statement on bakery barns: \"moo.\""
  ],
  //Skull caverns
  "Ticker (Temple)": [
    "bottomless pits not actually bottomless, claims adventurer waving tibia X-ray.",
    "cave shaped like menacing skull \"only slightly menacing\" in person, says explorer.",
    "desert cookies receive devastating 3-star rating from gourmet chef: \"a little dry.\""
  ],
  //Wizard towers
  "Ticker (Wizard tower)": [
    "local wizard responds to concerns of \"vanilla-scented explosions\": \"Nothing to smell here,\" says M. Rasmodius.",
    "woman sues wizard after falling down stairs following consumption of levitating cookies.",
    "cookies sweetened by magic have substantially lower effect on blood glucose levels, study claims."
  ],
  //Fish ponds
  "Ticker (Shipment)": [
    "soaking wet cookies optimal for on-the-go hydration, says nutritionist.",
    "cookies obtained via fishing found to contain high levels of mercury!",
    "centuries-old shipwreck discovered full of perfectly good deep-sea cookies!"
  ],
  //Greenhouses
  "Ticker (Alchemy lab)": [
    "new triple-coat greenhouse glass found to speed cacao tree growth by up to 15%.",
    "greenhouse explodes in tragic preheating disaster: \"I knew that glass wasn't oven-safe,\" boasts smug bystander.",
    "greenhouse manufacturer denies existence of rumoured extra-chocolatey \"brownhouse\"."
  ],
  //Obelisks
  "Ticker (Portal)": [
    "cookies \"coming out of nowhere\" actually coming from somewhere, says scientist.",
    "mysterious man-cookie hybrid secures book deal following horrifically delicious teleportation mishap.",
    "demand for cookie totems at all-time high following discovery of bakery dimension."
  ],
  //Gold clocks
  "Ticker (Time machine)": [
    "time screeches to a halt as golden cookie clocks erected around the globe!",
    "golden clock manufacturers argue no need for regular clocks: \"What do you need a clock for? It's cookie time.\"",
    "gold reserves running dangerously low as chocolate coins and golden clocks skyrocket in popularity!"
  ],
  //Sewers
  "Ticker (Antimatter condenser)": [
    "head of sanitation department addresses health concerns: green goo on sewer cookies \"essential source of B12\".",
    "cookies surpass pizza as #1 food consumed in sewers!",
    "shadow people report housing crisis as demand for bakery space in sewers hits all-time high!"
  ],
  //Museums
  "Ticker (Prism)": [
    "world's tastiest cookie disappears without a trace from Zuzu City museum!",
    "new radiographic chocolate dating evidence reveals million-year-old cookie actually only a few hours old.",
    "local museum extends revolutionary exhibit on the history of cookie clicking by popular demand."
  ],
  //Community centres
  "Ticker (Chancemaker)": [
    "local theatre re-opens, starts playing 24/7 feed of baking timelapse videos.",
    "troubled teens flock to local community centre, instantly turn lives around via youth baking program.",
    "bingo night at local community centre \"not a threat in this version of the universe,\" says power-hungry mod developer."
  ],
  //Cabins
  "Ticker (Fractal engine)": [
    "decoration-related disagreements responsibe for 80% of co-op gamer rage, reveals study.",
    "cookies up to twice as tasty when baked with the power of friendship, says food scientist.",
    "new economic study reveals cooperative baking triples per-person culinary output!"
  ],
  //Islands
  "Ticker (Javascript console)": [
    "supreme court rules single chocolate chip floating in Gem Sea not technically an island.",
    "cookies baked in popular island bakery chain contain \"non-lethal\" amount of coconut shell fragments, says PR firm.",
    "SOS message discovered written in frosting on cookie-in-a-bottle washed ashore at Pelical Town beach!"
  ],
  //C# consoles
  "Ticker (Idleverse)": [
    "\"There's no pointers, it's not even a real programming language!\" proclaims disgruntled engineer in response to .NET framework update.",
    "fossil record reveals indisputable evidence that C# is a distant ancestor of Javascript!",
    "polymorphism a \"total scam\" according to Pastry Institute professor: \"you only need one class to define a cookie.\""
  ],
  //Crossoverers
  "Ticker (Cortex baker)": [
    "Nintendough lawyer hits back at mod developer protesting infringement lawsuit: \"You should have given me that cookie, Stahlke.\"",
    "cookie-themed AU fanfiction now comprises 50% of all internet content!",
    "cinematic universe leak continues to spill hundreds of fictional cookies per minute into the real world!"
  ],
  //Yous
  "Ticker (You)": [
    "news ticker sweepstakes reveals winner of bragging rights contest - it's you!",
    "player representation in online cookie game bears striking resemblance to the person reading this sentence, claims random weirdo.",
    "\"It is my opinion that you make really good cookies,\" says news ticker anchor."
  ]
});
