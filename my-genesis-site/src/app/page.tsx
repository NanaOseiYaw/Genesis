'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

const words = ['Let', 'There', 'Be', 'Light'];

export default function Home() {
  const [currentWord, setCurrentWord] = useState(0);
  const [showFlash, setShowFlash] = useState(false);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    if (currentWord < words.length) {
      const timer = setTimeout(() => {
        setCurrentWord(currentWord + 1);
      }, 800); // delay between each word
      return () => clearTimeout(timer);
    } else {
      setShowFlash(true);
      setTimeout(() => {
        setShowFlash(false);
        setShowMain(true);
      }, 1000);
    }
  }, [currentWord]);

  if (showMain) {
    return (
      <main className="relative w-screen h-screen bg-black overflow-hidden">
        <iframe
          src="https://my.spline.design/yoursceneurl"
          frameBorder="0"
          allowFullScreen
          className="absolute inset-0 w-full h-full z-0"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-8 backdrop-blur-sm bg-black/30">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide drop-shadow-[0_0_1rem_#fff]">
            Let There Be Light
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
            And God said, “Let there be light,” and there was light.
          </p>
        </div>
      </main>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white text-5xl font-bold">
      <div className="relative">
        <div className="flex gap-4">
          {words.map((word, i) => (
            <span
              key={i}
              className={clsx(
                "opacity-0 animate-glow",
                i === currentWord ? "opacity-100" : "",
                i < currentWord ? "opacity-100 text-white" : ""
              )}
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Flash effect */}
        {showFlash && (
          <div className="absolute inset-0 bg-white animate-fadeOut z-50" />
        )}
      </div>
    </div>
  );
}
