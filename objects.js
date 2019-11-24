var playlist = {
  skapara: "Suikinkutsu",
  gramophoneAllStar: "I Don't Know",
  slipknot: "A Liar's Funeral"
}


function updatePlaylist(playlist, artistName, songTitle) {
  var stageName = artistName;
  playlist[stageName] = songTitle;
}


function removeFromPlaylist() {
  var stageName = artistName;
  delete playlist[stageName];
}
