"use client"

import { useState } from "react"
import { Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [activeTab, setActiveTab] = useState("My collections")

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side navigation tabs in dark pill container */}
        <div className="bg-black/60 rounded-full px-3 py-2 flex items-center space-x-1">
          {["My collections", "Films", "Series", "Sport", "Media", "Blogs"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-white/20 text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right side - Search and Create collection */}
        <div className="flex items-center space-x-3">
          {/* Search bar in dark pill */}
          <div className="bg-black/60 rounded-full px-4 py-2 flex items-center min-w-[200px]">
            <Search className="w-4 h-4 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search films, series"
              className="bg-transparent text-white placeholder-gray-400 outline-none flex-1 text-sm"
            />
          </div>

          {/* Create collection button */}
          <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-4 py-2 text-sm font-medium flex items-center space-x-2 shadow-lg">
            <Plus className="w-4 h-4" />
            <span>Create collection</span>
          </Button>
        </div>
      </div>
    </header>
  )
}