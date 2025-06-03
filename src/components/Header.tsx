// components/Header.tsx
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {FaGithub} from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
      {/* Left: GitHub Link */}
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/Cyfrin/TSender"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
            <FaGithub size={24}/>
        </a>

        {/* Title */}
        <h1 className="text-2xl font-bold">TSender</h1>
      </div>

      {/* Right: Connect Button */}
      <ConnectButton />
    </header>
  );
}