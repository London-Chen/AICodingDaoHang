export interface Tool {
  id: string
  name: string
  description: string
  url: string
  category: string
  tags: string[]
  pricing: 'free' | 'freemium' | 'paid'
  popular?: boolean
}

export const tools: Tool[] = [
  // AI编程工具/IDE & 产品原型
  {
    id: 'bolt',
    name: 'Bolt.new',
    description: '快速实现小型产品原型，界面制作专家，自带云端开发环境',
    url: 'https://bolt.new/',
    category: 'ai-ide',
    tags: ['原型设计', '界面制作', '云端开发'],
    pricing: 'free',
    popular: true
  },
  {
    id: 'firebase-studio',
    name: 'Firebase Studio',
    description: '谷歌发布的IDE，操作逻辑与Bolt类似，暂时免费',
    url: 'https://firebase.studio/',
    category: 'ai-ide',
    tags: ['谷歌', 'IDE', '免费'],
    pricing: 'free'
  },
  {
    id: 'v0-dev',
    name: 'V0.dev',
    description: 'Vercel出品，与NextJS完美兼容，Cursor内部支持调用',
    url: 'https://v0.dev/',
    category: 'ai-ide',
    tags: ['NextJS', 'Vercel', 'React'],
    pricing: 'freemium',
    popular: true
  },
  {
    id: 'lovable',
    name: 'Lovable',
    description: '未来可能超越Bolt的工具，专注产品原型设计',
    url: 'https://lovable.dev/',
    category: 'ai-ide',
    tags: ['潜力工具', '原型设计', '云端'],
    pricing: 'freemium'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: '专业AI编程IDE，处理复杂逻辑首选，持续打磨产品',
    url: 'https://www.cursor.com/',
    category: 'ai-ide',
    tags: ['AI编程', '复杂逻辑', '专业'],
    pricing: 'paid',
    popular: true
  },
  {
    id: 'same-new',
    name: 'Same.new',
    description: '可以复刻现有网站，基于NextJS/Shadcn/TailwindCSS框架',
    url: 'https://same.new/',
    category: 'ai-ide',
    tags: ['网站复刻', 'NextJS', 'Shadcn'],
    pricing: 'freemium'
  },

  // AI助手/大模型对话工具
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: '最强大的AI对话助手，产品需求文档和编程问答首选',
    url: 'https://openai.com/chatgpt/',
    category: 'ai-assistant',
    tags: ['对话助手', '编程问答', '需求文档'],
    pricing: 'freemium',
    popular: true
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    description: '国产AI新星，R1具备强大推理能力，模型调用首选',
    url: 'https://chat.deepseek.com/',
    category: 'ai-assistant',
    tags: ['国产AI', '推理能力', '模型调用'],
    pricing: 'freemium',
    popular: true
  },
  {
    id: 'claude',
    name: 'Claude',
    description: '图文并茂文档生成专家，与Stagewise插件配合最佳',
    url: 'https://www.anthropic.com/',
    category: 'ai-assistant',
    tags: ['文档生成', '图文并茂', '创意写作'],
    pricing: 'freemium',
    popular: true
  },
  {
    id: 'doubao',
    name: '豆包',
    description: '国内AI工具，提供视频通话功能，ChatGPT的替代选择',
    url: 'https://www.doubao.com/',
    category: 'ai-assistant',
    tags: ['国内AI', '视频通话', 'ChatGPT替代'],
    pricing: 'free'
  },
  {
    id: 'grok',
    name: 'Grok',
    description: '马斯克的xAI出品，具有独特的幽默风格和实时信息获取',
    url: 'https://grok.com/',
    category: 'ai-assistant',
    tags: ['xAI', '实时信息', '幽默风格'],
    pricing: 'paid'
  },
  {
    id: 'poe',
    name: 'Poe',
    description: 'Claude可用平台，集成多个AI模型的聚合平台',
    url: 'https://poe.com/',
    category: 'ai-assistant',
    tags: ['Claude平台', '多模型', '聚合'],
    pricing: 'freemium'
  },

  // API平台
  {
    id: 'openrouter',
    name: 'OpenRouter.ai',
    description: '语言模型API综合平台，模型选择更多、速度更快、更稳定',
    url: 'https://openrouter.ai/',
    category: 'api',
    tags: ['语言模型', '稳定', '速度快'],
    pricing: 'paid'
  },
  {
    id: 'together',
    name: 'Together.ai',
    description: '语言模型API综合平台，也提供图片和视频处理模型',
    url: 'https://www.together.ai/',
    category: 'api',
    tags: ['语言模型', '图片视频', '综合平台'],
    pricing: 'paid'
  },
  {
    id: 'fal-ai',
    name: 'Fal.ai',
    description: '专注于图片和视频类API，提供丰富的多媒体处理能力',
    url: 'https://fal.ai/',
    category: 'api',
    tags: ['图片API', '视频API', '多媒体'],
    pricing: 'paid'
  },
  {
    id: 'replicate',
    name: 'Replicate.com',
    description: '最全面的API平台，初学者推荐，但相对较贵',
    url: 'https://replicate.com/',
    category: 'api',
    tags: ['全面', '初学者', '机器学习'],
    pricing: 'paid'
  },
  {
    id: 'siliconflow',
    name: '硅基流动',
    description: '国内API平台，适合小白，API数量少而精',
    url: 'https://siliconflow.cn/zh-cn/',
    category: 'api',
    tags: ['国内', '小白友好', '少而精'],
    pricing: 'freemium'
  },

  // 部署与发布
  {
    id: 'vercel',
    name: 'Vercel',
    description: '前端应用部署平台，与NextJS完美兼容，速度极快',
    url: 'https://vercel.com/',
    category: 'deploy',
    tags: ['前端部署', 'NextJS', '速度快'],
    pricing: 'freemium',
    popular: true
  },
  {
    id: 'netlify',
    name: 'Netlify',
    description: '静态网站部署平台，CI/CD功能强大，适合中小型项目',
    url: 'https://www.netlify.com/',
    category: 'deploy',
    tags: ['静态网站', 'CI/CD', '中小型项目'],
    pricing: 'freemium'
  },
  {
    id: 'railway',
    name: 'Railway',
    description: '现代化云平台，支持多种语言和数据库，部署简单',
    url: 'https://railway.app/',
    category: 'deploy',
    tags: ['云平台', '多语言', '数据库'],
    pricing: 'freemium'
  }
]

export const categories = [
  { id: 'all', name: '全部工具', icon: 'Menu', count: tools.length },
  { id: 'ai-ide', name: 'AI编程IDE', icon: 'Code', count: tools.filter(t => t.category === 'ai-ide').length },
  { id: 'ai-assistant', name: 'AI助手', icon: 'Bot', count: tools.filter(t => t.category === 'ai-assistant').length },
  { id: 'api', name: 'API平台', icon: 'Plug', count: tools.filter(t => t.category === 'api').length },
  { id: 'deploy', name: '部署平台', icon: 'Rocket', count: tools.filter(t => t.category === 'deploy').length }
] 