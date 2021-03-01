const PlaySound = () => {
  const audio = new Audio();
  audio.src = `https://zvukipro.com/uploads/files/2019-09/1568274526_c8fd8d10309e3e0.mp3`;
  audio.play();
};

export default PlaySound;
