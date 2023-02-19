import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const STORAGE_KEY = 'videoplayer-current-time';
// колбек функція, дані в секундах. В сховище записує ключ:значення(поточний час:сек)
const currentTime = function (data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
};
// on(подія, колбек), відтворення оновлювався у сховищі 1s
player.on('timeupdate', throttle(currentTime, 1000));

// відновлення відтворення зі збереженої позиції.
player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
