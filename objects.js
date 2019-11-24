var playlist = {
  skapara: "Suikinkutsu",
  gramophoneAllStar: "I Don't Know",
  slipknot: "A Liar's Funeral"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  if(playlist === true && artistName === true) {
    delete playlist.artistName;
    return playlist;
  }
  return playlist;
}
