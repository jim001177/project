import React, { useState, useEffect, useRef } from 'react';
import romanticConfig from '../config/romanticConfig';

const AudioManager = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const backgroundAudioRef = useRef(null);
  const soundEffectsRef = useRef({});

  const { audio } = romanticConfig;

  // Initialize audio
  useEffect(() => {
    if (audio.backgroundMusic.enabled) {
      backgroundAudioRef.current = new Audio(audio.backgroundMusic.src);
      backgroundAudioRef.current.volume = audio.backgroundMusic.volume;
      backgroundAudioRef.current.loop = audio.backgroundMusic.loop;
    }

    if (audio.soundEffects.enabled) {
      soundEffectsRef.current = {
        buttonClick: new Audio(audio.soundEffects.buttonClick),
        correctAnswer: new Audio(audio.soundEffects.correctAnswer),
        celebration: new Audio(audio.soundEffects.celebration)
      };

      // Set volume for sound effects
      Object.values(soundEffectsRef.current).forEach(audio => {
        audio.volume = 0.5;
      });
    }

    return () => {
      if (backgroundAudioRef.current) {
        backgroundAudioRef.current.pause();
        backgroundAudioRef.current = null;
      }
    };
  }, []);

  // Play background music
  const toggleBackgroundMusic = () => {
    if (!backgroundAudioRef.current) return;

    if (isPlaying) {
      backgroundAudioRef.current.pause();
      setIsPlaying(false);
    } else {
      backgroundAudioRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  };

  // Play sound effect
  const playSoundEffect = (effectName) => {
    if (!audioEnabled || !soundEffectsRef.current[effectName]) return;

    const audio = soundEffectsRef.current[effectName];
    audio.currentTime = 0;
    audio.play().catch(console.error);
  };

  // Expose sound effects globally
  useEffect(() => {
    window.playSoundEffect = playSoundEffect;
    return () => {
      delete window.playSoundEffect;
    };
  }, [audioEnabled]);

  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col gap-2">
      {/* Background Music Toggle */}
      {audio.backgroundMusic.enabled && (
        <button
          onClick={toggleBackgroundMusic}
          className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-opacity-30 transition-all duration-300"
        >
          {isPlaying ? '🔊' : '🔇'}
        </button>
      )}

      {/* Sound Effects Toggle */}
      {audio.soundEffects.enabled && (
        <button
          onClick={() => setAudioEnabled(!audioEnabled)}
          className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-opacity-30 transition-all duration-300"
        >
          {audioEnabled ? '🔊' : '🔇'}
        </button>
      )}
    </div>
  );
};

export default AudioManager;
