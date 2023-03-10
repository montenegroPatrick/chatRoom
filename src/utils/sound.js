import { useEffect } from 'react';

function playSound(soundName) {
  const woosh = 'https://lasonotheque.org/UPLOAD/wav/1795';
  const xylo = 'https://lasonotheque.org/UPLOAD/wav/1111';
  if (soundName === 'xylo') {
    new Audio(xylo).play();
  }
  if (soundName === 'woosh') {
    new Audio(woosh).play();
  }
}

export default playSound;
