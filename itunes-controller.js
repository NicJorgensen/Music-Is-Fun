function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs); //after get music by artist returns what are you doing with the objects?
  }

  // Start coding here
  function drawSongs(songList) {
    var template = ''
    var songs = document.getElementById('songs')
    for (let i = 0; i < 30; i++) {
      var song = songList[i];
      template += `
      <div class="col-md-3 col-sm-6">
         <div class="text-center bg-1">
          <img src="${song.albumArt}" class="albumArt">
            <h3>${song.title}</h3>
            <audio controls>
            <source src="${song.preview}" type="audio/mpeg">
            </audio>
            <h6>${song.collection}</h6>
            <h5>${song.artist}</h5>
            <p>$${song.price}</p>
          </div>
      </div>
      `
      songs.innerHTML = template
    }
  }
}

