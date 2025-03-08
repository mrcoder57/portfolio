"use client"

import { useEffect, useState } from "react"
import TypingEffect from "@/components/typing-effect"
import { Calendar, Tag, ArrowRight } from "lucide-react"

export default function BlogSection() {
  const [isTyping, setIsTyping] = useState(true)
  const [content, setContent] = useState("")

  const blogCode = `// Blog & Insights
const blogPosts = [
  {
    title: "Building Scalable Microservices with Node.js",
    date: "2023-12-15",
    excerpt: "Learn how to architect and deploy scalable microservices using Node.js, Docker, and Kubernetes.",
    tags: ["Node.js", "Microservices", "Docker", "Kubernetes"],
    url: "/blog/building-scalable-microservices"
  },
  {
    title: "The Future of Web3: Beyond the Hype",
    date: "2023-11-02",
    excerpt: "An analysis of where Web3 technologies are headed and which use cases will drive mainstream adoption.",
    tags: ["Web3", "Blockchain", "Future Tech"],
    url: "/blog/future-of-web3"
  },
  {
    title: "Optimizing React Performance: Advanced Techniques",
    date: "2023-09-18",
    excerpt: "Deep dive into React performance optimization with code splitting, memoization, and virtualization.",
    tags: ["React", "Performance", "JavaScript"],
    url: "/blog/react-performance-optimization"
  },
  {
    title: "AI-Driven Development: Practical Applications",
    date: "2023-08-05",
    excerpt: "How to leverage AI tools in your development workflow to increase productivity and code quality.",
    tags: ["AI", "Developer Tools", "Productivity"],
    url: "/blog/ai-driven-development"
  }
];

console.log("Latest insights and articles:");
console.table(blogPosts);`

  useEffect(() => {
    if (!isTyping) {
      setContent(blogCode)
    }
  }, [isTyping])

  const blogPosts = [
    {
      title: "Building Scalable Microservices with Node.js",
      date: "2023-12-15",
      excerpt: "Learn how to architect and deploy scalable microservices using Node.js, Docker, and Kubernetes.",
      tags: ["Node.js", "Microservices", "Docker", "Kubernetes"],
      url: "/blog/building-scalable-microservices",
    },
    {
      title: "The Future of Web3: Beyond the Hype",
      date: "2023-11-02",
      excerpt: "An analysis of where Web3 technologies are headed and which use cases will drive mainstream adoption.",
      tags: ["Web3", "Blockchain", "Future Tech"],
      url: "/blog/future-of-web3",
    },
    {
      title: "Optimizing React Performance: Advanced Techniques",
      date: "2023-09-18",
      excerpt: "Deep dive into React performance optimization with code splitting, memoization, and virtualization.",
      tags: ["React", "Performance", "JavaScript"],
      url: "/blog/react-performance-optimization",
    },
    {
      title: "AI-Driven Development: Practical Applications",
      date: "2023-08-05",
      excerpt: "How to leverage AI tools in your development workflow to increase productivity and code quality.",
      tags: ["AI", "Developer Tools", "Productivity"],
      url: "/blog/ai-driven-development",
    },
  ]

  return (
    <div className="animate-fade-in">
      {isTyping ? (
        <TypingEffect text={blogCode} speed={10} onComplete={() => setIsTyping(false)} />
      ) : (
        <div className="code-block">
          <div className="text-purple-500">// Blog & Insights</div>
          <div className="text-fuchsia-500">
            const <span className="text-yellow-500">blogPosts</span> <span className="text-white">=</span>{" "}
            <span className="text-white">[</span>
          </div>
          <div className="ml-4 text-white">{"{"} </div>
          <div className="ml-8">
            <span className="text-cyan-300">title</span>
            <span className="text-white">:</span>{" "}
            <span className="text-green-400">&quot;Building Scalable Microservices with Node.js&quot;</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-8">
            <span className="text-cyan-300">date</span>
            <span className="text-white">:</span> <span className="text-green-400">&quot;2023-12-15&quot;</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-8">
            <span className="text-cyan-300">excerpt</span>
            <span className="text-white">:</span>{" "}
            <span className="text-green-400">&quot;Learn how to architect and deploy...&quot;</span>
            <span className="text-white">,</span>
          </div>
          <div className="ml-8">
            <span className="text-cyan-300">tags</span>
            <span className="text-white">:</span> <span className="text-white">[</span>
            <span className="text-green-400">&quot;Node.js&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Microservices&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Docker&quot;</span>
            <span className="text-white">,</span> <span className="text-green-400">&quot;Kubernetes&quot;</span>
            <span className="text-white">],</span>
          </div>
          <div className="ml-8">
            <span className="text-cyan-300">url</span>
            <span className="text-white">:</span>{" "}
            <span className="text-green-400">&quot;/blog/building-scalable-microservices&quot;</span>
          </div>
          <div className="ml-4 text-white">
            {"}"}
            <span className="text-white">,</span>
          </div>
          <div className="text-white">...];</div>

          <div className="mt-6 space-y-6">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="p-4 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-purple-500 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2 text-white">{post.title}</h3>
                <div className="flex items-center text-gray-400 mb-3 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <p className="text-gray-300 mb-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <div key={tagIndex} className="flex items-center text-xs px-2 py-1 bg-zinc-700 rounded-full">
                      <Tag className="h-3 w-3 mr-1 text-purple-400" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={post.url}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>Read more</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
