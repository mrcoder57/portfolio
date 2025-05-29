"use client"

import { useEffect, useState, useRef } from "react"
import TypingEffect from "@/components/typing-effect"
import { Link } from "lucide-react"

export default function SmartContractsSection() {
  const [isTyping, setIsTyping] = useState(true)
  const [content, setContent] = useState("")
  const sectionRef = useRef<HTMLDivElement>(null)

  const contractsCode = `// Smart Contracts Portfolio
const smartContracts = [
  {
    name: "Decentralized Exchange",
    language: "Solidity",
    description: "A secure and efficient decentralized exchange for trading cryptocurrencies.",
    github: "https://github.com/johndoe/dex"
  },
  {
    name: "NFT Marketplace",
    language: "Solidity",
    description: "A platform for creating, buying, and selling non-fungible tokens (NFTs).",
    github: "https://github.com/johndoe/nft-marketplace"
  },
  {
    name: "Supply Chain Tracker",
    language: "Solidity",
    description: "A blockchain-based system for tracking products throughout the supply chain.",
    github: "https://github.com/johndoe/supply-chain"
  }
];

console.table(smartContracts);`

  useEffect(() => {
    if (!isTyping) {
      setContent(contractsCode)
      // Scroll into view after content is set
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "end" })
      }
    }
  }, [isTyping])

  const smartContracts = [
    {
      name: "Decentralized Exchange",
      language: "Solidity",
      description: "A secure and efficient decentralized exchange for trading cryptocurrencies.",
      github: "https://github.com/johndoe/dex",
    },
    {
      name: "NFT Marketplace",
      language: "Solidity",
      description: "A platform for creating, buying, and selling non-fungible tokens (NFTs).",
      github: "https://github.com/johndoe/nft-marketplace",
    },
    {
      name: "Supply Chain Tracker",
      language: "Solidity",
      description: "A blockchain-based system for tracking products throughout the supply chain.",
      github: "https://github.com/johndoe/supply-chain",
    },
  ]

  return (
    <div className="animate-fade-in" ref={sectionRef}>
      {isTyping ? (
        <TypingEffect text={contractsCode} speed={10} onComplete={() => setIsTyping(false)} />
      ) : (
        <div className="code-block">
          <div className="text-purple-500">// Smart Contracts Portfolio</div>
          <div className="text-fuchsia-500">
            const <span className="text-yellow-500">smartContracts</span> <span className="text-white">=</span>{" "}
            <span className="text-white">[</span>
          </div>
          {smartContracts.map((contract, index) => (
            <div key={index}>
              <div className="ml-4 text-white">{"{"}</div>
              <div className="ml-8">
                <span className="text-cyan-300">name</span>
                <span className="text-white">:</span>{" "}
                <span className="text-green-400">&quot;{contract.name}&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="ml-8">
                <span className="text-cyan-300">language</span>
                <span className="text-white">:</span>{" "}
                <span className="text-green-400">&quot;{contract.language}&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="ml-8">
                <span className="text-cyan-300">description</span>
                <span className="text-white">:</span>{" "}
                <span className="text-green-400">&quot;{contract.description}&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="ml-8">
                <span className="text-cyan-300">github</span>
                <span className="text-white">:</span>{" "}
                <span className="text-green-400">&quot;{contract.github}&quot;</span>
              </div>
              <div className="ml-4 text-white">{"}"},</div>
            </div>
          ))}
          <div className="text-white">];</div>

          <div className="mt-2 text-fuchsia-500">
            console<span className="text-white">.</span>
            <span className="text-yellow-500">table</span>
            <span className="text-white">(</span>
            <span className="text-yellow-500">smartContracts</span>
            <span className="text-white">);</span>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse bg-zinc-800 rounded">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="p-2 text-left">(index)</th>
                  <th className="p-2 text-left">name</th>
                  <th className="p-2 text-left">language</th>
                  <th className="p-2 text-left">description</th>
                  <th className="p-2 text-left">github</th>
                </tr>
              </thead>
              <tbody>
                {smartContracts.map((contract, index) => (
                  <tr key={index} className="border-b border-zinc-700 hover:bg-zinc-700">
                    <td className="p-2">{index}</td>
                    <td className="p-2">{contract.name}</td>
                    <td className="p-2">{contract.language}</td>
                    <td className="p-2">{contract.description}</td>
                    <td className="p-2">
                      <a
                        href={contract.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:underline flex items-center"
                      >
                        {contract.github}
                        <Link className="h-3 w-3 ml-1" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

