import { useEffect } from 'react';
import { WaveFile } from 'wavefile';
import woosh from '../assets/sound/woosh.wav';
import xylo from '../assets/sound/xylo.wav';

function useSound({ soundName }) {
  useEffect(() => {
    const wav = new WaveFile();

    if (soundName === 'xylo') {
      wav.fromDataURI(xylo);
    } else if (soundName === 'woosh') {
      wav.fromDataURI(woosh);
    }
  });
}

export default useSound;
