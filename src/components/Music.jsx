const PlayMusic = (isSoundOn) => {
  if (isSoundOn === false) return null;
  const audio = new Audio();
  audio.src = `https://zvukipro.com/uploads/files/2021-02/1613150596_meditacii-chakry-jetno-relaks.mp3`;
  audio.play();
};

export default PlayMusic;
