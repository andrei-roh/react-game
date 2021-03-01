import useSound from 'use-sound';
import boopSfx from './assets/tink.wav';

const PlaySound = () => {
  return useSound(boopSfx);
};

export default PlaySound;
