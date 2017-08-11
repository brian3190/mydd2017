$(function() {
  $('#wrapper').tubular({
    videoId: 'YRBkUbjZuoY',
    mute: true,
    width: $(window).width(),
    wrapperZIndex: 0,
    repeat: true
  });

  window.onPlayerStateChange = function(state) {
    if (YT.PlayerState.PLAYING == 1) {
      $('#tubular-container').show();
    }
  };
});
