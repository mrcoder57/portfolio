"use client"

import { useState, useEffect, useRef } from "react"

interface TypingEffectProps {
  text: string
  speed?: number
  onComplete?: () => void
}

export default function TypingEffect({ text, speed = 30, onComplete }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Handle scrolling during typing
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
        
        // Auto-scroll to the bottom when new text is added
        if (containerRef.current) {
          containerRef.current.scrollIntoView({ behavior: "smooth", block: "end" })
        }
      }, speed)

      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete])

  // Handle scrolling after typing completes
  useEffect(() => {
    if (currentIndex === text.length && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "end" })
    }
  }, [currentIndex, text.length])

  // Apply syntax highlighting to the displayed text
  const highlightedText = displayedText
    .replace(/(\/\/.*)/g, '<span class="text-purple-500">$1</span>')
    .replace(/(const|let|var|function|return|if|else|for|while)/g, '<span class="text-fuchsia-500">$1</span>')
    .replace(/(".*?")/g, '<span class="text-green-400">$1</span>')
    .replace(/(\{|\}|\[|\]|$$|$$|;|,|\.)/g, '<span class="text-white">$1</span>')
    .replace(/(\w+):/g, '<span class="text-cyan-300">$1</span>')
    .replace(/(console\.\w+)/g, '<span class="text-yellow-500">$1</span>')

  return (
    <div className="font-mono" ref={containerRef}>
      <div dangerouslySetInnerHTML={{ __html: highlightedText }} />
      <span className="animate-blink">|</span>
    </div>
  )
}

