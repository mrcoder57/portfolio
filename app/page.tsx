"use client"
import { useEffect, useState } from "react"
import EditorLayout from "@/components/layout/editor-layout"
import Terminal from "@/components/terminal"
import CommandProcessor from "@/components/command-processor"
import { ThemeProvider } from "@/components/theme-provider"
import type { JSX } from "react/jsx-runtime"

export default function Home() {
  const [output, setOutput] = useState<JSX.Element[]>([])

  useEffect(() => {
    setOutput([
      <div key="welcome" className="mb-4">
        <div className="text-green-500">// Welcome to My Portfolio</div>
        <div className="text-blue-500">
          console<span className="text-white">.</span>
          <span className="text-yellow-500">log</span>
          <span className="text-white">(</span>
          <span className="text-green-400">&quot;Type &apos;help&apos; to see available commands.&quot;</span>
          <span className="text-white">);</span>
        </div>
      </div>,
    ])
  }, [])

  const handleCommand = (command: string) => {
    setOutput((prev) => [
      ...prev,
      <div key={`command-${Date.now()}`} className="mb-2">
        <span className="text-green-400">{">"}</span> <span className="text-white">{command}</span>
      </div>,
    ])

    const result = CommandProcessor({ command, theme: "dark", setTheme: () => {} })

    if (command.trim().toLowerCase() === "clear") {
      setOutput([])
      return
    }

    setOutput((prev) => [
      ...prev,
      <div key={`result-${Date.now()}`} className="mb-4">
        {result}
      </div>,
    ])
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <EditorLayout output={output} onCommandExecute={handleCommand}>
          <Terminal onCommand={handleCommand} />
        </EditorLayout>
      </div>
    </ThemeProvider>
  )
}
