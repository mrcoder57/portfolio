import type { ReactNode } from "react"
import AboutSection from "@/components/sections/about"
import ProjectsSection from "@/components/sections/projects"
import StackSection from "@/components/sections/stack"
import ContactSection from "@/components/sections/contact"
import HelpSection from "@/components/sections/help"
import BlogSection from "@/components/sections/blog"
import SmartContractsSection from "@/components/sections/smart-contracts"

interface CommandProcessorProps {
  command: string
  theme: "dark" | "light"
  setTheme: (theme: "dark" | "light") => void
}

export default function CommandProcessor({ command, theme, setTheme }: CommandProcessorProps): ReactNode {
  const cmd = command.trim().toLowerCase()

  // Process commands
  switch (cmd) {
    case "about":
      return <AboutSection />
    case "projects":
      return <ProjectsSection />
    case "stack":
      return <StackSection />
    case "contact":
      return <ContactSection />
    case "blog":
      return <BlogSection />
    case "contracts":
      return <SmartContractsSection />
    case "help":
      return <HelpSection />
    case "clear":
      return null
    case "theme":
      setTheme(theme === "dark" ? "light" : "dark")
      return (
        <div>
          <div className="text-purple-500">// Theme Changed</div>
          <div className="text-fuchsia-500">
            console<span className="text-white">.</span>
            <span className="text-yellow-500">log</span>
            <span className="text-white">(</span>
            <span className="text-green-400">&quot;Theme set to {theme === "dark" ? "light" : "dark"} mode&quot;</span>
            <span className="text-white">);</span>
          </div>
        </div>
      )
    case "whoami":
      return (
        <div>
          <div className="text-purple-500">// Random Developer Quote</div>
          <div className="text-fuchsia-500">
            console<span className="text-white">.</span>
            <span className="text-yellow-500">log</span>
            <span className="text-white">(</span>
            <span className="text-green-400">
              &quot;The best error message is the one that never shows up. - Thomas Fuchs&quot;
            </span>
            <span className="text-white">);</span>
          </div>
        </div>
      )
    case "sudo":
      return (
        <div>
          <div className="text-red-500">// Access Denied</div>
          <div className="text-blue-500">
            console<span className="text-white">.</span>
            <span className="text-yellow-500">error</span>
            <span className="text-white">(</span>
            <span className="text-red-400">&quot;Nice try! But you don't have sudo privileges here.&quot;</span>
            <span className="text-white">);</span>
          </div>
        </div>
      )
    default:
      return (
        <div>
          <div className="text-red-500">// Command Not Found</div>
          <div className="text-blue-500">
            console<span className="text-white">.</span>
            <span className="text-yellow-500">error</span>
            <span className="text-white">(</span>
            <span className="text-red-400">&quot;Command not found. Type 'help' to see available commands.&quot;</span>
            <span className="text-white">);</span>
          </div>
        </div>
      )
  }
}

