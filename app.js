// DOM

const playerName = document.querySelector('.player__name');
const playerPlatform = document.querySelector('.player__platform');
const playerLevel = document.querySelector('.player__level');
const playerAttacker = document.querySelector('.player__attacker');
const playerDefender = document.querySelector('.player__defender');
const playerWins = document.querySelector('.player__wins');
const playerWinPercentage = document.querySelector('.player__win-percentage');
const playerKills = document.querySelector('.player__kills');
const playerKD = document.querySelector('.player__kd');

// Call API using player ID
const request = new XMLHttpRequest();
request.open('GET', 'https://r6.apitab.com/player/8ca23e4f-d98b-493e-9ba7-3251b3247458');
request.send();

request.addEventListener('load', function() {
  if (this.status === 200) {
    let data = JSON.parse(request.response)
    console.log(data);

    // Update DOM
    playerName.innerHTML = data.player.p_name;
    playerPlatform.innerHTML = data.player.p_platform;
    playerLevel.innerHTML = data.stats.level;
    playerAttacker.innerHTML = data.op_main.attacker;
    playerDefender.innerHTML = data.op_main.defender;
    playerWins.innerHTML = data.stats.generalpvp_matchwon;
    playerWinPercentage.innerHTML = data.stats.generalpvp_wl;
    playerKills.innerHTML = data.stats.generalpvp_kills;
    playerKD.innerHTML = data.stats.generalpvp_kd;
  }
});



