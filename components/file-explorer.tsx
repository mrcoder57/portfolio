"use client"

import { useState } from "react"
import { Folder, FileCode, ChevronRight, ChevronDown } from "lucide-react"

interface FileExplorerProps {
  onCommandExecute: (command: string) => void
}

export default function FileExplorer({ onCommandExecute }: FileExplorerProps) {
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    src: true,
  })

  const toggleFolder = (folder: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folder]: !prev[folder],
    }))
  }

  return (
    <div className="w-56 bg-zinc-800 border-r border-zinc-700 overflow-y-auto hidden md:block">
      <div className="p-2 text-sm text-gray-400 uppercase">Explorer</div>
      <div className="px-2">
        <div className="mb-1">
          <div
            className="flex items-center py-1 px-2 hover:bg-zinc-700 rounded cursor-pointer"
            onClick={() => toggleFolder("src")}
          >
            {expandedFolders.src ? (
              <ChevronDown className="h-4 w-4 mr-1 text-gray-400" />
            ) : (
              <ChevronRight className="h-4 w-4 mr-1 text-gray-400" />
            )}
            <Folder className="h-4 w-4 mr-2 text-purple-400" />
            <span>src</span>
          </div>
          {expandedFolders.src && (
            <div className="ml-4">
              <div
                className="flex items-center py-1 px-2 hover:bg-zinc-700 rounded cursor-pointer"
                onClick={() => onCommandExecute("about")}
              >
                <FileCode className="h-4 w-4 mr-2 text-yellow-400" />
                <span>about.js</span>
              </div>
              <div
                className="flex items-center py-1 px-2 hover:bg-zinc-700 rounded cursor-pointer"
                onClick={() => onCommandExecute("projects")}
              >
                <FileCode className="h-4 w-4 mr-2 text-yellow-400" />
                <span>projects.js</span>
              </div>
              <div
                className="flex items-center py-1 px-2 hover:bg-zinc-700 rounded cursor-pointer"
                onClick={() => onCommandExecute("stack")}
              >
                <FileCode className="h-4 w-4 mr-2 text-yellow-400" />
                <span>stack.js</span>
              </div>
              <div
                className="flex items-center py-1 px-2 hover:bg-zinc-700 rounded cursor-pointer"
                onClick={() => onCommandExecute("contact")}
              >
                <FileCode className="h-4 w-4 mr-2 text-yellow-400" />
                <span>contact.js</span>
              </div>
              <div
                className="flex items-center py-1 px-2 hover:bg-zinc-700 rounded cursor-pointer"
                onClick={() => onCommandExecute("blog")}
              >
                <FileCode className="h-4 w-4 mr-2 text-yellow-400" />
                <span>blog.js</span>
              </div>
              <div
                className="flex items-center py-1 px-2 hover:bg-zinc-700 rounded cursor-pointer"
                onClick={() => onCommandExecute("contracts")}
              >
                <FileCode className="h-4 w-4 mr-2 text-yellow-400" />
                <span>contracts.js</span>
              </div>
            </div>
          )}
        </div>
        <div className="mb-1">
          <div
            className="flex items-center py-1 px-2 hover:bg-zinc-700 rounded cursor-pointer"
            onClick={() => toggleFolder("public")}
          >
            {expandedFolders.public ? (
              <ChevronDown className="h-4 w-4 mr-1 text-gray-400" />
            ) : (
              <ChevronRight className="h-4 w-4 mr-1 text-gray-400" />
            )}
            <Folder className="h-4 w-4 mr-2 text-purple-400" />
            <span>public</span>
          </div>
        </div>
        <div className="mb-1">
          <div className="flex items-center py-1 px-2 hover:bg-zinc-700 rounded cursor-pointer">
            <FileCode className="h-4 w-4 mr-2 text-purple-400" />
            <span>package.json</span>
          </div>
        </div>
        <div className="mb-1">
          <div className="flex items-center py-1 px-2 hover:bg-zinc-700 rounded cursor-pointer">
            <FileCode className="h-4 w-4 mr-2 text-purple-400" />
            <span>README.md</span>
          </div>
        </div>
      </div>
    </div>
  )
}

