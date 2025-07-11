"use client"

import { useState } from "react"
import { Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [activeTab, setActiveTab] = useState("My collections")

  return (
    <header className="fixed top-0 w-full z-50 bg-[#2a2a2a] border-b border-gray-700">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left side navigation tabs in pill container */}
        <div className="bg-[#404040] rounded-full px-2 py-1 flex items-center space-x-1">
          {["My collections", "Films", "Series", "Sport", "Media", "Blogs"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#606060] text-white"
                  : "text-gray-300 hover:text-white hover:bg-[#505050]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right side - Search and Create collection in pill containers */}
        <div className="flex items-center space-x-3">
          {/* Search bar in pill */}
          <div className="bg-[#404040] rounded-full px-4 py-2 flex items-center min-w-[200px]">
            <Search className="w-4 h-4 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search films, series"
              className="bg-transparent text-white placeholder-gray-400 outline-none flex-1 text-sm"
            />
          </div>

          {/* Create collection button in pill */}
          <Button className="bg-[#ff4444] hover:bg-[#ff3333] text-white rounded-full px-4 py-2 text-sm font-medium flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Create collection</span>
          </Button>
        </div>
      </div>
    </header>
  )
}