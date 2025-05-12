"use client";

import { useEffect, useState } from "react";

export function FadeText() {
  const texts = ["Projects & Certifications", "Projetos & Certificações"];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
      setVisible(false);

      // troca o texto após o fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setVisible(true); // fade in
      }, 500); // tempo da animação
    }, 2000); // alternância a cada 3s

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <p
      className={`text-[10px] transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {texts[index]}
    </p>
  );
}
