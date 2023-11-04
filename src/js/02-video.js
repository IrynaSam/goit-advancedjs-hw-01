import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const playTime = localStorage.getItem('videoplayer-current-time') ?? 0;

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

player.setCurrentTime(playTime);
