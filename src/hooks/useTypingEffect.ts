import { useEffect, useState } from "react";

interface Options {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export function useTypingEffect(words: string[], options: Options = {}) {
  const { typingSpeed = 80, deletingSpeed = 40, pauseTime = 1600 } = options;
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text.length < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && text.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}
