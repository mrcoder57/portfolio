export default function HelpSection() {
  return (
    <div className="animate-fade-in">
      <div className="text-purple-500">// Available Commands</div>
      <div className="text-fuchsia-500">
        console<span className="text-white">.</span>
        <span className="text-yellow-500">log</span>
        <span className="text-white">(</span>
        <span className="text-green-400">&quot;Type any of these commands to navigate:&quot;</span>
        <span className="text-white">);</span>
      </div>

      <div className="mt-4 p-4 bg-zinc-800 rounded border border-zinc-700">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="py-2 pr-4 text-green-400 font-bold">about</td>
              <td>Display information about me</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 text-green-400 font-bold">projects</td>
              <td>View my portfolio projects</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 text-green-400 font-bold">stack</td>
              <td>See my technical skills and tools</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 text-green-400 font-bold">contact</td>
              <td>Get my contact information</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 text-green-400 font-bold">blog</td>
              <td>Read my latest insights and articles</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 text-green-400 font-bold">contracts</td>
              <td>View my blockchain smart contracts</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 text-green-400 font-bold">clear</td>
              <td>Clear the terminal screen</td>
            </tr>
            {/* <tr>
              <td className="py-2 pr-4 text-green-400 font-bold">theme</td>
              <td>Toggle between dark and light mode</td>
            </tr> */}
            <tr>
              <td className="py-2 pr-4 text-green-400 font-bold">whoami</td>
              <td>Display a random developer quote</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 text-green-400 font-bold">sudo</td>
              <td>Try it and see what happens</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-sm text-gray-400">
        <p>Type a command and press Enter to execute it.</p>
        <p>Use the up and down arrow keys to navigate through command history.</p>
      </div>
    </div>
  )
}

