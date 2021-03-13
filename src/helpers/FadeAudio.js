export default function fadeAudio(sound) {
  let fade = setInterval(function () {
    if (sound.volume >= 0.1) {
      sound.volume -= 0.1;
    }
    if (sound.volume >= 0.0 && sound.volume < 0.1) {
      sound.pause();
      clearInterval(fade);
    }
  }, 200);
}
