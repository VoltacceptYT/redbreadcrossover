//DEBUG CMDS

//addCookies(Amount): adds X Trillion Amount of Cookies to Character
function addCookies(Amount) {
  let Convert2Tri = Math.pow(10, 18) * Amount;
  Game.Cookies += Convert2Tri;
}

