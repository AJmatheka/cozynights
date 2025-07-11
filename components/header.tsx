"use client"

import { useState } from "react"
import { Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [activeTab, setActiveTab] = useState("My collections")

  return (
    <header className="fixed top-0 w-full z-50 bg-[#2a2a2a] border-b border-gray-600">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left side navigation tabs */}
        <div className="flex items-center space-x-8">
          {["My collections", "Films", "Series", "Sport", "Media", "Blogs"].map((tab) => (
            <button
              key={tab}
              className={`text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right side - Search and Create collection */}
        <div className="flex items-center space-x-4">
          {/* Search bar */}
          <div className="relative">
            <div className="flex items-center bg-[#404040] rounded-full px-4 py-2 min-w-[200px]">
              <Search className="w-4 h-4 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search films, series"
                className="bg-transparent text-white placeholder-gray-400 outline-none flex-1 text-sm"
              />
            </div>
          </div>

          {/* Create collection button */}
          <Button className="bg-[#ff4444] hover:bg-[#ff3333] text-white rounded-full px-4 py-2 text-sm font-medium flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Create collection</span>
          </Button>
        </div>
      </div>
    </header>
  )
}