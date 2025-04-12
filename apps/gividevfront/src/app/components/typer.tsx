"use client";

import { useState, useEffect } from "react";

export default function TypingEffect() {
  const titles = [
    "Software Engineer",
    "Engenheiro de Software",
    "ソフトウェア開発者",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseBeforeDelete = 2000;
  const pauseBeforeType = 500;

  // Efeito do cursor piscando
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Efeito de digitação
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    if (!isDeleting) {
      // Modo de digitação
      if (displayText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Quando termina de digitar, espera antes de apagar
        setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
      }
    } else {
      // Modo de apagar
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Quando termina de apagar, muda o índice ANTES de recomeçar
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setTimeout(() => {}, pauseBeforeType); // Apenas pausa antes de começar a nova palavra
      }
    }
  }, [displayText, isDeleting, currentTitleIndex]);

  return (
    <p className="font-mono text-lg md:text-xl inline-flex">
      <span>{displayText}</span>
      <span
        className={`${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity ml-0.5 font-bold text-(--font-red)`}
      >
        |
      </span>
    </p>
  );
}
