var iframeElement = document.querySelector('iframe');
// var iframeElementID = iframeElement.id;
var widget1 = SC.Widget(iframeElement);
// var widget2         = SC.Widget(iframeElementID);
var currentSong;
var playlist;
// var updateConsole = function(val) {
//   console.log(val);
// };
var nowPlaying = document.getElementById("now-playing");

// EVENT HANDLERS
var setCurrentSong = function(song) {
  currentSong = song;
  nowPlaying.innerHTML = song.title;
};

var setPlaylist = function(songs) {
  playlist = songs;
  console.log(playlist);
};


var checkCurrentSong = function() {
  widget1.getCurrentSound(setCurrentSong);
};

var onPlay = SC.Widget.Events.PLAY;
var onPlayHandler = function(eventData) {
  currentSong = checkCurrentSong();

};
var onPause = SC.Widget.Events.PAUSE;
var onPauseHandler = function(eventData) {
  console.log("Pause!");
  console.log(eventData);
};

var onFinish = SC.Widget.Events.FINISH;
var onFinishHandler = function(eventData) {
  console.log("Song finished!");
  console.log(eventData);
};
var onReady = SC.Widget.Events.READY;
var onReadyHandler = function() {
  widget1.getSounds(setPlaylist);
};



widget1.bind(onPlay, onPlayHandler);
widget1.bind(onPause, onPauseHandler);
widget1.bind(onFinish, onFinishHandler);
widget1.bind(onReady, onReadyHandler);

// var eventKey;
// for (var i=0; i < events.length; i++) {
//     widget1.bind(events[i], function(eventData) {
//       updateConsole(eventData);
//     });
// }
var callback = function(sound) {
  console.log(sound.title);
};

var button1 = document.getElementById("preset1");
button1.onclick = function() {
  widget1.play();
};

var button2 = document.getElementById("preset2");
button2.onclick = function() {
  widget1.pause();
};

var button3 = document.getElementById("preset3");
button3.onclick = function() {
  widget1.prev();
};

var button4 = document.getElementById("preset4");
button4.onclick = function() {
  widget1.next();
};

var button5 = document.getElementById("preset5");
button5.onclick = function() {
};




document.onclick = function() {
  widget1.getCurrentSound(callback);
};

