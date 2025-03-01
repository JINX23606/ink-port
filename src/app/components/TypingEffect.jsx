'use client'
import { useState, useEffect } from "react";

const words = ["Web Developer", "Economics Student", "Tech enthusiasts","Data Analyst"];

export default function TypingEffect() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150); // ช้าเพื่อลดความเร็วให้พิมพ์ชัดเจน

  useEffect(() => {
    const currentWord = words[wordIndex];

    const handleTypingEffect = () => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1)); // ลบตัวอักษร
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1)); // เพิ่มตัวอักษร
      }
    };

    const typingInterval = setInterval(handleTypingEffect, speed);

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), 1000); // รอ 1 วินาทีเมื่อพิมพ์ครบ
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length); // เปลี่ยนคำ
    }

    return () => clearInterval(typingInterval); // ลบการใช้งาน interval เมื่อไม่ใช้งาน
  }, [text, isDeleting, wordIndex, speed]);

  return (
    <span className="relative text-3xl font-bold text-blue-300 font-custom">
      {text}
      <span className="cursor-blink absolute ml-2"></span>
    </span>
  );
}
