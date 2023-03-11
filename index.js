function shout(string) {
    // todo
    return string.toUpperCase();
  }


  function whisper(string) {
    // todo
    return string.toLowerCase();
  }
  

  function logShout(string) {
    console.log(string.toUpperCase());
  }

  function logWhisper(string) {
    console.log(string.toLowerCase());
  }


  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
        } else if (string.toUpperCase() === string) {
          return "YES INDEED!";
        } else if (string === "Let's have dinner together!") {
          return "I would love to!";
        } else {
          return "What do you want?";
        }
      }