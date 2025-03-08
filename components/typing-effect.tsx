"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  text: string
  speed?: number
  onComplete?: () => void
}

export default function TypingEffect({ text, speed = 30, onComplete }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete])

  // Apply syntax highlighting to the displayed text
  const highlightedText = displayedText
    .replace(/(\/\/.*)/g, '<span class="text-purple-500">$1</span>')
    .replace(/(const|let|var|function|return|if|else|for|while)/g, '<span class="text-fuchsia-500">$1</span>')
    .replace(/(".*?")/g, '<span class="text-green-400">$1</span>')
    .replace(/(\{|\}|\[|\]|$$|$$|;|,|\.)/g, '<span class="text-white">$1</span>')
    .replace(/(\w+):/g, '<span class="text-cyan-300">$1</span>')
    .replace(/(console\.\w+)/g, '<span class="text-yellow-500">$1</span>')

  return (
    <div className="font-mono">
      <div dangerouslySetInnerHTML={{ __html: highlightedText }} />
      <span className="animate-blink">|</span>
    </div>
  )
}

