const PlaySound = (isSoundOn, audioSource) => {
  if (isSoundOn === false) return null;
  const audio = new Audio();
  audio.src = audioSource;
  audio.play();
};

export default PlaySound;
