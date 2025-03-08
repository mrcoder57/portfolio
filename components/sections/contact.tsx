"use client"

import { useEffect, useState } from "react"
import TypingEffect from "@/components/typing-effect"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactSection() {
  const [isTyping, setIsTyping] = useState(true)
  const [content, setContent] = useState("")

  const contactCode = `// Let's Connect
const contact = {
  email: "tiwariji2300@gmail.com",
  github: "github.com/mrcoder57",
  linkedin: "linkedin.com/in/aman-tiwari-526047237",
  twitter: "twitter.com/AmanTiwari57"
};

console.log(contact);`

  useEffect(() => {
    if (!isTyping) {
      setContent(contactCode)
    }
  }, [isTyping])

  return (
    <div className="animate-fade-in">
      {isTyping ? (
        <TypingEffect text={contactCode} speed={10} onComplete={() => setIsTyping(false)} />
      ) : (
        <div className="code-block">
          <div className="text-purple-500">// Let's Connect</div>
          <div className="text-fuchsia-500">
            const <span className="text-yellow-500">contact</span> <span className="text-white">=</span>{" "}
            <span className="text-white">{"{"}</span>
          </div>
          <div className="ml-4">
            <span className="text-cyan-300">email</span>
            <span className="text-white">:</span> <span className="text-green-400">&quot;john@example.com&quot;</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-4">
            <span className="text-cyan-300">github</span>
            <span className="text-white">:</span> <span className="text-green-400">&quot;github.com/johndoe&quot;</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-4">
            <span className="text-cyan-300">linkedin</span>
            <span className="text-white">:</span>{" "}
            <span className="text-green-400">&quot;linkedin.com/in/johndoe&quot;</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-4">
            <span className="text-cyan-300">twitter</span>
            <span className="text-white">:</span>{" "}
            <span className="text-green-400">&quot;twitter.com/johndoe&quot;</span>
          </div>
          <div className="text-white">
            {"}"}
            <span className="text-white">;</span>
          </div>
          <div className="mt-2 text-fuchsia-500">
            console<span className="text-white">.</span>
            <span className="text-yellow-500">log</span>
            <span className="text-white">(</span>
            <span className="text-yellow-500">contact</span>
            <span className="text-white">);</span>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="mailto:john@example.com"
              className="p-4 bg-zinc-800 rounded border border-zinc-700 flex items-center hover:bg-zinc-700 transition-colors"
            >
              <Mail className="h-5 w-5 mr-3 text-purple-400" />
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div>john@example.com</div>
              </div>
            </a>
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-zinc-800 rounded border border-zinc-700 flex items-center hover:bg-zinc-700 transition-colors"
            >
              <Github className="h-5 w-5 mr-3 text-purple-400" />
              <div>
                <div className="text-sm text-gray-400">GitHub</div>
                <div>github.com/johndoe</div>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-zinc-800 rounded border border-zinc-700 flex items-center hover:bg-zinc-700 transition-colors"
            >
              <Linkedin className="h-5 w-5 mr-3 text-blue-500" />
              <div>
                <div className="text-sm text-gray-400">LinkedIn</div>
                <div>linkedin.com/in/johndoe</div>
              </div>
            </a>
            <a
              href="https://twitter.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-zinc-800 rounded border border-zinc-700 flex items-center hover:bg-zinc-700 transition-colors"
            >
              <Twitter className="h-5 w-5 mr-3 text-cyan-400" />
              <div>
                <div className="text-sm text-gray-400">Twitter</div>
                <div>twitter.com/johndoe</div>
              </div>
            </a>
          </div>

          <div className="mt-6 p-4 bg-zinc-800 rounded border border-zinc-700">
            <div className="text-center mb-4">Or send me a message</div>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-2 bg-zinc-700 rounded border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="button"
                  className="w-full p-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 rounded text-white transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

