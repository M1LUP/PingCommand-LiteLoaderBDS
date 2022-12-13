mc.regPlayerCmd(`ping`, `Ping check`, function(pl) {
    pl.tell(`Your ping: `+ pl.getDevice().avgPing +``)
})