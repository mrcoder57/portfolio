"use client"

import { useEffect, useState } from "react"
import TypingEffect from "@/components/typing-effect"

export default function AboutSection() {
  const [isTyping, setIsTyping] = useState(true)
  const [content, setContent] = useState("")

  const aboutCode = `// About Me
const about = {
  name: "Aman Tiwari",
  role: "Full Stack | DevOps | Blockchain | AI Developer",
  description: "I build scalable applications, deploy cloud solutions, and write smart contracts.",
  experience: "5+ years of professional experience",
  location: "San Francisco, CA",

  interests: ["Open Source", "AI Ethics", "Blockchain Technology", "Cloud Architecture"]
};

console.log(about);`

  useEffect(() => {
    if (!isTyping) {
      setContent(aboutCode)
    }
  }, [isTyping])

  return (
    <div className="animate-fade-in">
      {isTyping ? (
        <TypingEffect text={aboutCode} speed={10} onComplete={() => setIsTyping(false)} />
      ) : (
        <div className="code-block">
          <div className="text-purple-500">// About Me</div>
          <div className="text-fuchsia-500">
            const <span className="text-yellow-500">about</span> <span className="text-white">=</span>{" "}
            <span className="text-white">{"{"}</span>
          </div>
          <div className="ml-4">
            <span className="text-cyan-300">name</span>
            <span className="text-white">:</span> <span className="text-green-400">&quot;Aman Tiwari&quot;</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-4">
            <span className="text-cyan-300">role</span>
            <span className="text-white">:</span>{" "}
            <span className="text-green-400">&quot;Full Stack | DevOps | Blockchain | Aspiring AI Developer&quot;</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-4">
            <span className="text-cyan-300">description</span>
            <span className="text-white">:</span>{" "}
            <span className="text-green-400">
              &quot;I build scalable applications, deploy cloud solutions, and write smart contracts.&quot;
            </span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-4">
            <span className="text-cyan-300">experience</span>
            <span className="text-white">:</span>{" "}
            <span className="text-green-400">&quot;5+ years of professional experience&quot;</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-4">
            <span className="text-cyan-300">location</span>
            <span className="text-white">:</span> <span className="text-green-400">&quot;Remote, India&quot;</span>
            <span className="text-white">,</span>
          </div>
          {/* <div className="ml-4">
            <span className="text-cyan-300">education</span>
            <span className="text-white">:</span>{" "}
            <span className="text-green-400">&quot;M.S. Computer Science, Stanford University&quot;</span>
            <span className="text-white">,</span>
          </div> */}
          <div className="ml-4">
            <span className="text-cyan-300">interests</span>
            <span className="text-white">:</span> <span className="text-white">[</span>
            <span className="text-green-400">&quot;Open Source&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;AI Ethics&quot;</span>
            <span className="text-white">,</span>{" "}
            <span className="text-green-400">&quot;Blockchain Technology&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Cloud Architecture&quot;</span>
            <span className="text-white">]</span>
          </div>
          <div className="text-white">
            {"}"}
            <span className="text-white">;</span>
          </div>
          <div className="mt-2 text-fuchsia-500">
            console<span className="text-white">.</span>
            <span className="text-yellow-500">log</span>
            <span className="text-white">(</span>
            <span className="text-yellow-500">about</span>
            <span className="text-white">);</span>
          </div>

          <div className="mt-4 p-4 bg-zinc-800 rounded border border-zinc-700">
            <div className="font-bold mb-2">{"{"}</div>
            <div className="ml-4">
              <span className="text-cyan-300">name</span>: <span className="text-white">&quot;Aman Tiwari&quot;,</span>
            </div>
            <div className="ml-4">
              <span className="text-cyan-300">role</span>:{" "}
              <span className="text-white">&quot;Full Stack | DevOps | Blockchain | AI Developer&quot;,</span>
            </div>
            <div className="ml-4">
              <span className="text-cyan-300">description</span>:{" "}
              <span className="text-white">
                &quot;I build scalable applications, deploy cloud solutions, and write smart contracts.&quot;,
              </span>
            </div>
            <div className="ml-4">
              <span className="text-cyan-300">experience</span>:{" "}
              <span className="text-white">&quot;5+ years of professional experience&quot;,</span>
            </div>
            <div className="ml-4">
              <span className="text-cyan-300">location</span>:{" "}
              <span className="text-white">&quot;Remote, India and Internationally &quot;,</span>
            </div>
            {/* <div className="ml-4">
              <span className="text-cyan-300">education</span>:{" "}
              <span className="text-white">&quot;M.S. Computer Science, Stanford University&quot;,</span>
            </div> */}
            <div className="ml-4">
              <span className="text-cyan-300">interests</span>:{" "}
              <span className="text-white">
                [&quot;Open Source&quot;, &quot;AI Ethics&quot;, &quot;Blockchain Technology&quot;, &quot;Cloud
                Architecture&quot;]
              </span>
            </div>
            <div className="font-bold">{"}"}</div>
          </div>
        </div>
      )}
    </div>
  )
}

