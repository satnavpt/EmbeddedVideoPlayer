var counter = 1

var url = "https://obb.rp.bt.com/test-content-4e02de5d/01_BroadcastMix/manifest.mpd";
var player = dashjs.MediaPlayer().create();
player.initialize(document.querySelector("#videoPlayer"), url, true);

function toggleVid() {
    counter += 1;
    counter = (counter == 4) ? 1 : counter;
    var url = (counter == 1) ?  "https://obb.rp.bt.com/test-content-4e02de5d/01_BroadcastMix/manifest.mpd" : 
              ((counter == 2) ? "https://obb.rp.bt.com/test-content-4e02de5d/04_Chelsea_ConteCam/manifest.mpd" :
                                "https://obb.rp.bt.com/test-content-4e02de5d/05_ManUtd_MourhinoCam/manifest.mpd");
    var time = player.time();
    player.destroy()
    player = dashjs.MediaPlayer().create();
    player.initialize(document.querySelector("#videoPlayer"), url, true);
    console.log(player.isSeeking())
    setTimeout(function() {seeker(time)}, 50);
}

function seeker(delta) {
    console.log(player.isSeeking())
    var seekTo = player.time() + delta;
    console.log(seekTo);
    player.seek(seekTo);
}