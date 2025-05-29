"use client"

import { useEffect, useState, useRef } from "react"
import TypingEffect from "@/components/typing-effect"
import { ExternalLink } from "lucide-react"

export default function ProjectsSection() {
  const [isTyping, setIsTyping] = useState(true)
  const [content, setContent] = useState("")
  const sectionRef = useRef<HTMLDivElement>(null)

  const projectsCode = `// My Projects
const projects = [
  { 
    name: "GigKraft", 
    tech: ["Next.js", "Web3", "Solidity"], 
    description: "Decentralized marketplace for freelancers",
    link: "https://gigkraft.com" 
  },
  { 
    name: "AI Interview Prep", 
    tech: ["Next.js", "OpenAI", "MongoDB"], 
    description: "AI-powered interview preparation platform",
    link: "https://aiprep.com" 
  },
  { 
    name: "CloudScale", 
    tech: ["AWS", "Terraform", "Go"], 
    description: "Auto-scaling infrastructure management tool",
    link: "https://cloudscale.dev" 
  },
  { 
    name: "CryptoTracker", 
    tech: ["React", "Node.js", "Web3.js"], 
    description: "Real-time cryptocurrency portfolio tracker",
    link: "https://cryptotracker.io" 
  }
];

console.table(projects);`

  useEffect(() => {
    if (!isTyping) {
      setContent(projectsCode)
      // Scroll into view after content is set
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "end" })
      }
    }
  }, [isTyping])

  return (
    <div className="animate-fade-in" ref={sectionRef}>
      {isTyping ? (
        <TypingEffect text={projectsCode} speed={10} onComplete={() => setIsTyping(false)} />
      ) : (
        <div className="code-block">
          <div className="text-purple-500">// My Projects</div>
          <div className="text-fuchsia-500">
            const <span className="text-yellow-500">projects</span> <span className="text-white">=</span>{" "}
            <span className="text-white">[</span>
          </div>
          <div className="ml-4 text-white">{"{"} </div>
          <div className="ml-8">
            <span className="text-cyan-300">name</span>
            <span className="text-white">:</span> <span className="text-green-400">&quot;GigKraft&quot;</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-8">
            <span className="text-cyan-300">tech</span>
            <span className="text-white">:</span> <span className="text-white">[</span>
            <span className="text-green-400">&quot;Next.js&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Web3&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Solidity&quot;</span>
            <span className="text-white">],</span>
          </div>
          <div className="ml-8">
            <span className="text-cyan-300">description</span>
            <span className="text-white">:</span>{" "}
            <span className="text-green-400">&quot;Decentralized marketplace for freelancers&quot;</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-8">
            <span className="text-cyan-300">link</span>
            <span className="text-white">:</span>{" "}
            <span className="text-green-400">&quot;https://gigkraft.com&quot;</span>
          </div>
          <div className="ml-4 text-white">
            {"}"}
            <span className="text-white">,</span>
          </div>
          <div className="ml-4 text-white">{"{"} </div>
          <div className="ml-8">
            <span className="text-cyan-300">name</span>
            <span className="text-white">:</span> <span className="text-green-400">&quot;AI Interview Prep&quot;</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-8">
            <span className="text-cyan-300">tech</span>
            <span className="text-white">:</span> <span className="text-white">[</span>
            <span className="text-green-400">&quot;Next.js&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;OpenAI&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;MongoDB&quot;</span>
            <span className="text-white">],</span>
          </div>
          <div className="ml-8">
            <span className="text-cyan-300">description</span>
            <span className="text-white">:</span>{" "}
            <span className="text-green-400">&quot;AI-powered interview preparation platform&quot;</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-8">
            <span className="text-cyan-300">link</span>
            <span className="text-white">:</span> <span className="text-green-400">&quot;https://aiprep.com&quot;</span>
          </div>
          <div className="ml-4 text-white">
            {"}"}
            <span className="text-white">,</span>
          </div>
          <div className="text-white">...];</div>
          <div className="mt-2 text-fuchsia-500">
            console<span className="text-white">.</span>
            <span className="text-yellow-500">table</span>
            <span className="text-white">(</span>
            <span className="text-yellow-500">projects</span>
            <span className="text-white">);</span>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse bg-zinc-800 rounded">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="p-2 text-left">(index)</th>
                  <th className="p-2 text-left">name</th>
                  <th className="p-2 text-left">tech</th>
                  <th className="p-2 text-left">description</th>
                  <th className="p-2 text-left">link</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-700 hover:bg-zinc-700">
                  <td className="p-2">0</td>
                  <td className="p-2">GigKraft</td>
                  <td className="p-2">["Next.js", "Web3", "Solidity"]</td>
                  <td className="p-2">Decentralized marketplace for freelancers</td>
                  <td className="p-2">
                    <a
                      href="https://gigkraft.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:underline flex items-center"
                    >
                      gigkraft.com <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-zinc-700 hover:bg-zinc-700">
                  <td className="p-2">1</td>
                  <td className="p-2">AI Interview Prep</td>
                  <td className="p-2">["Next.js", "OpenAI", "MongoDB"]</td>
                  <td className="p-2">AI-powered interview preparation platform</td>
                  <td className="p-2">
                    <a
                      href="https://aiprep.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:underline flex items-center"
                    >
                      aiprep.com <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-zinc-700 hover:bg-zinc-700">
                  <td className="p-2">2</td>
                  <td className="p-2">CloudScale</td>
                  <td className="p-2">["AWS", "Terraform", "Go"]</td>
                  <td className="p-2">Auto-scaling infrastructure management tool</td>
                  <td className="p-2">
                    <a
                      href="https://cloudscale.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:underline flex items-center"
                    >
                      cloudscale.dev <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-zinc-700">
                  <td className="p-2">3</td>
                  <td className="p-2">CryptoTracker</td>
                  <td className="p-2">["React", "Node.js", "Web3.js"]</td>
                  <td className="p-2">Real-time cryptocurrency portfolio tracker</td>
                  <td className="p-2">
                    <a
                      href="https://cryptotracker.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:underline flex items-center"
                    >
                      cryptotracker.io <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

