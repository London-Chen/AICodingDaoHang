'use client'

import React, { useState, useEffect } from 'react'
import { Search, Code, Bot, Plug, Rocket, Menu, X, ExternalLink, Star, Zap, ChevronRight, Filter, Grid, List } from 'lucide-react'
import { tools, categories } from '../data/tools'

// 图标映射
const iconMap = {
  Menu,
  Code,
  Bot,
  Plug,
  Rocket
}

export default function MobileOptimizedNav() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filteredTools, setFilteredTools] = useState(tools)

  useEffect(() => {
    let filtered = tools
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(tool => tool.category === activeCategory)
    }
    
    if (searchTerm) {
      filtered = filtered.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }
    
    setFilteredTools(filtered)
  }, [searchTerm, activeCategory])

  const popularTools = tools.filter(tool => tool.popular)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* 动态背景 */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/5 to-transparent"></div>
      
      {/* 移动端优化的顶部导航 */}
      <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-xl border-b border-purple-500/20">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo - 移动端优化 */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI工具导航
              </div>
            </div>

            {/* 右侧按钮组 */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white transition-colors rounded-lg bg-white/10"
              >
                <Filter className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white transition-colors rounded-lg bg-white/10"
              >
                {viewMode === 'grid' ? <List className="w-5 h-5" /> : <Grid className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* 搜索框 - 移动端优化 */}
          <div className="mt-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索AI工具..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-md border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base"
              />
            </div>
          </div>
        </div>

        {/* 分类筛选 - 可折叠 */}
        {showFilters && (
          <div className="px-4 pb-4 border-t border-purple-500/20">
            <div className="flex overflow-x-auto space-x-3 py-3 hide-scrollbar">
              {categories.map(category => {
                const Icon = iconMap[category.icon as keyof typeof iconMap]
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id)
                      setShowFilters(false)
                    }}
                    className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-purple-500/20 border-purple-400 text-white'
                        : 'bg-white/5 border-purple-500/20 text-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{category.count}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10 pb-20">
        {/* Hero区域 - 移动端紧凑版 */}
        <section className="px-4 pt-6 pb-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-3">
              发现最佳AI编程工具
            </h1>
            <p className="text-base text-gray-300 mb-6">
              精选{tools.length}个AI编程工具，提升开发效率
            </p>
          </div>
        </section>

        {/* 热门推荐 - 移动端横向滚动 */}
        {activeCategory === 'all' && (
          <section className="px-4 pb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                热门推荐
              </h2>
            </div>
            <div className="flex overflow-x-auto space-x-4 pb-4 hide-scrollbar">
              {popularTools.map(tool => (
                <div key={tool.id} className="flex-shrink-0 w-72 bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white flex-1">{tool.name}</h3>
                    <div className={`px-2 py-1 rounded-lg text-xs font-medium ml-2 ${
                      tool.pricing === 'free' ? 'bg-green-500/20 text-green-400' :
                      tool.pricing === 'freemium' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-orange-500/20 text-orange-400'
                    }`}>
                      {tool.pricing === 'free' ? '免费' : tool.pricing === 'freemium' ? '部分免费' : '付费'}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{tool.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    立即使用
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 工具列表 */}
        <section className="px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">
              {activeCategory === 'all' ? '全部工具' : categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <div className="text-sm text-gray-400">
              {filteredTools.length}个工具
            </div>
          </div>
          
          {filteredTools.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-2">未找到相关工具</div>
              <div className="text-gray-500 text-sm">尝试调整搜索关键词或选择其他分类</div>
            </div>
          ) : (
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 sm:grid-cols-2 gap-4" 
              : "space-y-3"
            }>
              {filteredTools.map(tool => (
                <div key={tool.id} className={`group bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl transition-all duration-300 hover:border-purple-400/40 hover-scale ${
                  viewMode === 'list' ? 'p-4' : 'p-5'
                }`}>
                  {viewMode === 'grid' ? (
                    // 网格视图
                    <>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white flex items-center">
                            {tool.name}
                            {tool.popular && <Star className="w-4 h-4 text-yellow-400 ml-2" />}
                          </h3>
                        </div>
                        <div className={`px-2 py-1 rounded-lg text-xs font-medium ml-2 ${
                          tool.pricing === 'free' ? 'bg-green-500/20 text-green-400' :
                          tool.pricing === 'freemium' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-orange-500/20 text-orange-400'
                        }`}>
                          {tool.pricing === 'free' ? '免费' : tool.pricing === 'freemium' ? '部分免费' : '付费'}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{tool.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tool.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                      >
                        立即使用
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </>
                  ) : (
                    // 列表视图
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <h3 className="text-base font-semibold text-white">{tool.name}</h3>
                          {tool.popular && <Star className="w-4 h-4 text-yellow-400 ml-2" />}
                          <div className={`px-2 py-0.5 rounded text-xs font-medium ml-2 ${
                            tool.pricing === 'free' ? 'bg-green-500/20 text-green-400' :
                            tool.pricing === 'freemium' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-orange-500/20 text-orange-400'
                          }`}>
                            {tool.pricing === 'free' ? '免费' : tool.pricing === 'freemium' ? '部分免费' : '付费'}
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm line-clamp-2">{tool.description}</p>
                        <div className="flex gap-2 mt-2">
                          {tool.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* 底部安全区域 */}
      <div className="h-4"></div>
    </div>
  )
} 