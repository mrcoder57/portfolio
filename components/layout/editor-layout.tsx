import type { ReactNode } from "react"
import FileExplorer from "@/components/file-explorer"
import { Code, TerminalIcon, Github, Linkedin, Mail, Twitter } from "lucide-react"
import type { JSX } from "react/jsx-runtime"

interface EditorLayoutProps {
  children: ReactNode
  output: JSX.Element[]
  onCommandExecute: (command: string) => void
}

export default function EditorLayout({ children, output, onCommandExecute }: EditorLayoutProps) {
  return (
    <div className="flex flex-col h-screen bg-zinc-900 text-white font-mono">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-2 bg-zinc-800 border-b border-zinc-700">
        <div className="flex items-center">
          <Code className="h-5 w-5 mr-2 text-purple-400" />
          <span className="text-sm">Aman Tiwari Portfolio</span>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/mrcoder57"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/aman-tiwari-526047237"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:tiwariji2300@gmail.com" className="text-gray-400 hover:text-white">
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com/AmanTiwari57"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* File Explorer */}
        <FileExplorer onCommandExecute={onCommandExecute} />

        {/* Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Tab Bar */}
          <div className="flex items-center bg-zinc-800 border-b border-zinc-700">
            <div className="px-4 py-2 bg-zinc-900 border-r border-zinc-700 flex items-center">
              <TerminalIcon className="h-4 w-4 mr-2 text-green-400" />
              <span className="text-sm">terminal.js</span>
            </div>
          </div>

          {/* Editor Content */}
          <div className="flex-1 overflow-auto p-4 bg-zinc-900">
            {output}
            {children}
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between p-1 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 animate-gradient text-white text-xs">
        <div className="flex items-center space-x-4">
          <span>main</span>
          <span>UTF-8</span>
          <span>JavaScript</span>
        </div>
        <div>Portfolio v1.0.0</div>
      </div>
    </div>
  )
}

