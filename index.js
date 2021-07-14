var conte = false;
var mourhino = false;

var url = "https://obb.rp.bt.com/test-content-4e02de5d/01_BroadcastMix/manifest.mpd";
var player = dashjs.MediaPlayer().create();
player.initialize(document.querySelector("#videoPlayer"), url, true);

var url2 = "https://obb.rp.bt.com/test-content-4e02de5d/05_ManUtd_MourhinoCam/manifest.mpd";
var player2 = dashjs.MediaPlayer().create();
player2.initialize(document.querySelector("#videoPlayer2"), url2, true);

var url3 = "https://obb.rp.bt.com/test-content-4e02de5d/04_Chelsea_ConteCam/manifest.mpd";
var player3 = dashjs.MediaPlayer().create();
player3.initialize(document.querySelector("#videoPlayer3"), url3, true);

player.on(dashjs.MediaPlayer.events["PLAYBACK_PLAYING"], playMinis);
player.on(dashjs.MediaPlayer.events["PLAYBACK_PAUSED"], pauseMinis);
player.on(dashjs.MediaPlayer.events["PLAYBACK_SEEKING"], seekMinis);

function playMinis(e) {
    player2.play();
    player3.play();
}

function pauseMinis(e) {
    player2.pause();
    player3.pause();
}

function seekMinis(e) {
    var t = e["seekTime"];
    player2.seek(t);
    player3.seek(t);
}

function maxChelsea() {
    var time = player.time();
    player.destroy();
    player2.destroy();
    player3.destroy();

    if (conte) {
        url = "https://obb.rp.bt.com/test-content-4e02de5d/01_BroadcastMix/manifest.mpd";
        player = dashjs.MediaPlayer().create();
        player.initialize(document.querySelector("#videoPlayer"), url, true);

        url2 = "https://obb.rp.bt.com/test-content-4e02de5d/05_ManUtd_MourhinoCam/manifest.mpd";
        player2 = dashjs.MediaPlayer().create();
        player2.initialize(document.querySelector("#videoPlayer2"), url2, true);

        url3 = "https://obb.rp.bt.com/test-content-4e02de5d/04_Chelsea_ConteCam/manifest.mpd";
        player3 = dashjs.MediaPlayer().create();
        player3.initialize(document.querySelector("#videoPlayer3"), url3, true);

        player.on(dashjs.MediaPlayer.events["PLAYBACK_PLAYING"], playMinis);
        player.on(dashjs.MediaPlayer.events["PLAYBACK_PAUSED"], pauseMinis);
        player.on(dashjs.MediaPlayer.events["PLAYBACK_SEEKING"], seekMinis);

        setTimeout(function() {seeker(time)}, 50);

        conte = false;

        document.getElementById("conteButton").innerHTML = "Maximise Conte Cam";
        document.getElementById("mourhinoButton").style.visibility = "visible";

        
    } else {
        url = "https://obb.rp.bt.com/test-content-4e02de5d/04_Chelsea_ConteCam/manifest.mpd";
        player = dashjs.MediaPlayer().create();
        player.initialize(document.querySelector("#videoPlayer"), url, true);
        
        url2 = "https://obb.rp.bt.com/test-content-4e02de5d/05_ManUtd_MourhinoCam/manifest.mpd";
        player2 = dashjs.MediaPlayer().create();
        player2.initialize(document.querySelector("#videoPlayer2"), url2, true);
        
        url3 = "https://obb.rp.bt.com/test-content-4e02de5d/01_BroadcastMix/manifest.mpd";
        player3 = dashjs.MediaPlayer().create();
        player3.initialize(document.querySelector("#videoPlayer3"), url3, true);

        player.on(dashjs.MediaPlayer.events["PLAYBACK_PLAYING"], playMinis);
        player.on(dashjs.MediaPlayer.events["PLAYBACK_PAUSED"], pauseMinis);
        player.on(dashjs.MediaPlayer.events["PLAYBACK_SEEKING"], seekMinis);

        setTimeout(function() {seeker(time)}, 50);

        conte = true

        document.getElementById("conteButton").innerHTML = "Minimise Conte Cam";
        document.getElementById("mourhinoButton").style.visibility = "hidden";
    }
}

function maxManUtd() {
    var time = player.time();
    player.destroy();
    player2.destroy();
    player3.destroy();

    if (mourhino) {
        url = "https://obb.rp.bt.com/test-content-4e02de5d/01_BroadcastMix/manifest.mpd";
        player = dashjs.MediaPlayer().create();
        player.initialize(document.querySelector("#videoPlayer"), url, true);

        url2 = "https://obb.rp.bt.com/test-content-4e02de5d/05_ManUtd_MourhinoCam/manifest.mpd";
        player2 = dashjs.MediaPlayer().create();
        player2.initialize(document.querySelector("#videoPlayer2"), url2, true);

        url3 = "https://obb.rp.bt.com/test-content-4e02de5d/04_Chelsea_ConteCam/manifest.mpd";
        player3 = dashjs.MediaPlayer().create();
        player3.initialize(document.querySelector("#videoPlayer3"), url3, true);

        player.on(dashjs.MediaPlayer.events["PLAYBACK_PLAYING"], playMinis);
        player.on(dashjs.MediaPlayer.events["PLAYBACK_PAUSED"], pauseMinis);
        player.on(dashjs.MediaPlayer.events["PLAYBACK_SEEKING"], seekMinis);

        setTimeout(function() {seeker(time)}, 50);

        mourhino = false;

        document.getElementById("mourhinoButton").innerHTML = "Maximise Mourhino Cam";
        document.getElementById("conteButton").style.visibility = "visible";

        
    } else {
        url = "https://obb.rp.bt.com/test-content-4e02de5d/05_ManUtd_MourhinoCam/manifest.mpd";
        player = dashjs.MediaPlayer().create();
        player.initialize(document.querySelector("#videoPlayer"), url, true);
        
        url2 = "https://obb.rp.bt.com/test-content-4e02de5d/01_BroadcastMix/manifest.mpd";
        player2 = dashjs.MediaPlayer().create();
        player2.initialize(document.querySelector("#videoPlayer2"), url2, true);
        
        url3 = "https://obb.rp.bt.com/test-content-4e02de5d/04_Chelsea_ConteCam/manifest.mpd";
        player3 = dashjs.MediaPlayer().create();
        player3.initialize(document.querySelector("#videoPlayer3"), url3, true);

        player.on(dashjs.MediaPlayer.events["PLAYBACK_PLAYING"], playMinis);
        player.on(dashjs.MediaPlayer.events["PLAYBACK_PAUSED"], pauseMinis);
        player.on(dashjs.MediaPlayer.events["PLAYBACK_SEEKING"], seekMinis);

        setTimeout(function() {seeker(time)}, 50);

        mourhino = true

        document.getElementById("mourhinoButton").innerHTML = "Minimise Mourhino Cam";
        document.getElementById("conteButton").style.visibility = "hidden";
    }
}

function seeker(delta) {
    console.log(player.isSeeking())
    var seekTo = player.time() + delta;
    console.log(seekTo);
    player.seek(seekTo);
}

// function toggleVid() {
//     counter += 1;
//     counter = (counter == 4) ? 1 : counter;
//     var url = (counter == 1) ?  "https://obb.rp.bt.com/test-content-4e02de5d/01_BroadcastMix/manifest.mpd" : 
//               ((counter == 2) ? "https://obb.rp.bt.com/test-content-4e02de5d/04_Chelsea_ConteCam/manifest.mpd" :
//                                 "https://obb.rp.bt.com/test-content-4e02de5d/05_ManUtd_MourhinoCam/manifest.mpd");
//     var time = player.time();
//     player.destroy()
//     player = dashjs.MediaPlayer().create();
//     player.initialize(document.querySelector("#videoPlayer"), url, true);
//     console.log(player.isSeeking())
//     setTimeout(function() {seeker(time)}, 50);
// }