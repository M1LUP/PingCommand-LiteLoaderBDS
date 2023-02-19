mc.regPlayerCmd(`ping`, `Ping check.`, function(player) {
    player.tell(`Your ping: ${player.getDevice().avgPing}`)
});
