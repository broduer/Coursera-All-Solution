(function (window) {
    var speakWorld = "Hello";

    var helloSpeaker = function (names) {
            console.log(speakWorld + "" + names);
    }
    
    window.helloSpeaker = helloSpeaker;

})(window);

  