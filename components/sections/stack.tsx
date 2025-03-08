"use client"

import { useEffect, useState } from "react"
import TypingEffect from "@/components/typing-effect"
import { Code2, Server, Database, Cloud, Cpu, GitBranch, Terminal, Shield } from "lucide-react"

export default function StackSection() {
  const [isTyping, setIsTyping] = useState(true)
  const [content, setContent] = useState("")

  const stackCode = `// Tech Stack
const stack = {
  frontend: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Redux"],
  backend: ["Node.js", "Express", "Hono.js", "Kafka", "GraphQL"],
  database: ["MongoDB", "PostgreSQL", "Redis", "Supabase", "Firebase"],
  cloud: ["AWS", "Vercel", "Docker", "Kubernetes", "GitHub Actions"],
  blockchain: ["Solidity", "Web3.js", "Ethers.js", "Hardhat", "IPFS"],
  devops: ["CI/CD", "Terraform", "Prometheus", "Grafana", "ELK Stack"],
  tools: ["Git", "VS Code", "Postman", "Figma", "Notion"],
  security: ["OAuth", "JWT", "HTTPS", "Encryption", "Penetration Testing"]
};

console.log(stack);`

  useEffect(() => {
    if (!isTyping) {
      setContent(stackCode)
    }
  }, [isTyping])

  return (
    <div className="animate-fade-in">
      {isTyping ? (
        <TypingEffect text={stackCode} speed={10} onComplete={() => setIsTyping(false)} />
      ) : (
        <div className="code-block">
          <div className="text-purple-500">// Tech Stack</div>
          <div className="text-fuchsia-500">
            const <span className="text-yellow-500">stack</span> <span className="text-white">=</span>{" "}
            <span className="text-white">{"{"}</span>
          </div>
          <div className="ml-4">
            <span className="text-cyan-300">frontend</span>
            <span className="text-white">:</span> <span className="text-white">[</span>
            <span className="text-green-400">&quot;Next.js&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;React&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Tailwind CSS&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;TypeScript&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Redux&quot;</span>
            <span className="text-white">],</span>
          </div>
          <div className="ml-4">
            <span className="text-cyan-300">backend</span>
            <span className="text-white">:</span> <span className="text-white">[</span>
            <span className="text-green-400">&quot;Node.js&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Express&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Hono.js&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Kafka&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;GraphQL&quot;</span>
            <span className="text-white">],</span>
          </div>
          <div className="ml-4">
            <span className="text-cyan-300">database</span>
            <span className="text-white">:</span> <span className="text-white">[</span>
            <span className="text-green-400">&quot;MongoDB&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;PostgreSQL&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Redis&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Supabase&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Firebase&quot;</span>
            <span className="text-white">],</span>
          </div>
          <div className="ml-4">
            <span className="text-cyan-300">cloud</span>
            <span className="text-white">:</span> <span className="text-white">[</span>
            <span className="text-green-400">&quot;AWS&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Vercel&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Docker&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Kubernetes&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;GitHub Actions&quot;</span>
            <span className="text-white">],</span>
          </div>
          <div className="ml-4">
            <span className="text-cyan-300">blockchain</span>
            <span className="text-white">:</span> <span className="text-white">[</span>
            <span className="text-green-400">&quot;Solidity&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Web3.js&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Ethers.js&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Hardhat&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;IPFS&quot;</span>
            <span className="text-white">],</span>
          </div>
          <div className="ml-4">
            <span className="text-cyan-300">devops</span>
            <span className="text-white">:</span> <span className="text-white">[</span>
            <span className="text-green-400">&quot;CI/CD&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Terraform&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Prometheus&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Grafana&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;ELK Stack&quot;</span>
            <span className="text-white">],</span>
          </div>
          <div className="ml-4">
            <span className="text-cyan-300">tools</span>
            <span className="text-white">:</span> <span className="text-white">[</span>
            <span className="text-green-400">&quot;Git&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;VS Code&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Postman&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Figma&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Notion&quot;</span>
            <span className="text-white">],</span>
          </div>
          <div className="ml-4">
            <span className="text-cyan-300">security</span>
            <span className="text-white">:</span> <span className="text-white">[</span>
            <span className="text-green-400">&quot;OAuth&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;JWT&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;HTTPS&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Encryption&quot;</span>
            <span className="text-white">,</span>{" "}
            <span className="text-green-400">&quot;Penetration Testing&quot;</span>
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
            <span className="text-yellow-500">stack</span>
            <span className="text-white">);</span>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-zinc-800 rounded border border-zinc-700">
              <div className="flex items-center mb-2">
                <Code2 className="h-5 w-5 mr-2 text-purple-400" />
                <span className="font-bold">Frontend</span>
              </div>
              <div className="ml-7 flex flex-wrap gap-2">
                {["Next.js", "React", "Tailwind CSS", "TypeScript", "Redux"].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-zinc-700 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 bg-zinc-800 rounded border border-zinc-700">
              <div className="flex items-center mb-2">
                <Server className="h-5 w-5 mr-2 text-green-400" />
                <span className="font-bold">Backend</span>
              </div>
              <div className="ml-7 flex flex-wrap gap-2">
                {["Node.js", "Express", "Hono.js", "Kafka", "GraphQL"].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-zinc-700 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 bg-zinc-800 rounded border border-zinc-700">
              <div className="flex items-center mb-2">
                <Database className="h-5 w-5 mr-2 text-yellow-400" />
                <span className="font-bold">Database</span>
              </div>
              <div className="ml-7 flex flex-wrap gap-2">
                {["MongoDB", "PostgreSQL", "Redis", "Supabase", "Firebase"].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-zinc-700 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 bg-zinc-800 rounded border border-zinc-700">
              <div className="flex items-center mb-2">
                <Cloud className="h-5 w-5 mr-2 text-purple-400" />
                <span className="font-bold">Cloud</span>
              </div>
              <div className="ml-7 flex flex-wrap gap-2">
                {["AWS", "Vercel", "Docker", "Kubernetes", "GitHub Actions"].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-zinc-700 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 bg-zinc-800 rounded border border-zinc-700">
              <div className="flex items-center mb-2">
                <Cpu className="h-5 w-5 mr-2 text-orange-400" />
                <span className="font-bold">Blockchain</span>
              </div>
              <div className="ml-7 flex flex-wrap gap-2">
                {["Solidity", "Web3.js", "Ethers.js", "Hardhat", "IPFS"].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-zinc-700 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 bg-zinc-800 rounded border border-zinc-700">
              <div className="flex items-center mb-2">
                <GitBranch className="h-5 w-5 mr-2 text-cyan-400" />
                <span className="font-bold">DevOps</span>
              </div>
              <div className="ml-7 flex flex-wrap gap-2">
                {["CI/CD", "Terraform", "Prometheus", "Grafana", "ELK Stack"].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-zinc-700 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 bg-zinc-800 rounded border border-zinc-700">
              <div className="flex items-center mb-2">
                <Terminal className="h-5 w-5 mr-2 text-pink-400" />
                <span className="font-bold">Tools</span>
              </div>
              <div className="ml-7 flex flex-wrap gap-2">
                {["Git", "VS Code", "Postman", "Figma", "Notion"].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-zinc-700 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4 bg-zinc-800 rounded border border-zinc-700">
              <div className="flex items-center mb-2">
                <Shield className="h-5 w-5 mr-2 text-red-400" />
                <span className="font-bold">Security</span>
              </div>
              <div className="ml-7 flex flex-wrap gap-2">
                {["OAuth", "JWT", "HTTPS", "Encryption", "Penetration Testing"].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-zinc-700 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

