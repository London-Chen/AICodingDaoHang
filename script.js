// AI编程工具数据 - 完全按照 AI codeing.md 分类结构
const tools = [
    // 1. AI 编程工具/IDE & 产品原型构建平台
    {
        id: 'bolt',
        name: 'Bolt.new',
        description: '用于快速实现小型产品原型，尤其适合界面制作，自带云端开发环境',
        url: 'https://bolt.new/',
        category: 'ai-ide',
        categoryName: 'AI编程工具/IDE & 产品原型',
        tags: ['原型设计', '界面制作', '云端开发'],
        pricing: 'free'
    },
    {
        id: 'firebase-studio',
        name: 'Firebase Studio',
        description: '谷歌发布的 IDE，操作逻辑与 Bolt 类似，暂时免费',
        url: 'https://firebase.studio/',
        category: 'ai-ide',
        categoryName: 'AI编程工具/IDE & 产品原型',
        tags: ['谷歌', 'IDE', '免费'],
        pricing: 'free'
    },
    {
        id: 'v0-dev',
        name: 'V0.dev',
        description: '与 NextJS、Vercel 同属一家公司，后续兼容性好，Cursor 内部支持调用其模型',
        url: 'https://v0.dev/',
        category: 'ai-ide',
        categoryName: 'AI编程工具/IDE & 产品原型',
        tags: ['NextJS', 'Vercel', 'Cursor'],
        pricing: 'freemium'
    },
    {
        id: 'lovable',
        name: 'Lovable',
        description: '作者认为未来可能超越 Bolt 的工具',
        url: 'https://lovable.dev/',
        category: 'ai-ide',
        categoryName: 'AI编程工具/IDE & 产品原型',
        tags: ['潜力工具', '原型设计', '云端'],
        pricing: 'freemium'
    },
    {
        id: 'cursor',
        name: 'Cursor',
        description: '用于持续打磨产品、处理复杂逻辑的 AI 编程工具，需要付费',
        url: 'https://www.cursor.com/',
        category: 'ai-ide',
        categoryName: 'AI编程工具/IDE & 产品原型',
        tags: ['AI编程', '复杂逻辑', '付费'],
        pricing: 'paid'
    },
    {
        id: 'same-new',
        name: 'Same.new',
        description: '可以用于复刻现有网站，例如基于 NextJS/Shadcn/TailwindCSS 框架复刻网站',
        url: 'https://same.new/',
        category: 'ai-ide',
        categoryName: 'AI编程工具/IDE & 产品原型',
        tags: ['网站复刻', 'NextJS', 'Shadcn'],
        pricing: 'freemium'
    },

    // 2. AI 助手/大模型对话工具
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        description: '推荐用于与 AI 协作完成产品需求文档、讨论产品、问询代码问题、学习 API 文档等',
        url: 'https://openai.com/chatgpt/',
        category: 'ai-assistant',
        categoryName: 'AI助手/大模型对话工具',
        tags: ['产品需求', '代码问题', 'API文档'],
        pricing: 'freemium'
    },
    {
        id: 'deepseek',
        name: 'DeepSeek',
        description: '推荐用于与 AI 协作、模型调用，DeepSeek R1 具有推理功能',
        url: 'https://chat.deepseek.com/',
        category: 'ai-assistant',
        categoryName: 'AI助手/大模型对话工具',
        tags: ['AI协作', '模型调用', '推理功能'],
        pricing: 'freemium'
    },
    {
        id: 'claude',
        name: 'Claude',
        description: '推荐用于与 AI 协作、生成图文并茂的需求文档，与 Stagewise 插件配合最佳',
        url: 'https://www.anthropic.com/',
        category: 'ai-assistant',
        categoryName: 'AI助手/大模型对话工具',
        tags: ['图文文档', 'Stagewise', '需求文档'],
        pricing: 'freemium'
    },
    {
        id: 'doubao',
        name: '豆包',
        description: '国内 AI 工具，提供视频通话功能，可作为 ChatGPT 的替代',
        url: 'https://www.doubao.com/',
        category: 'ai-assistant',
        categoryName: 'AI助手/大模型对话工具',
        tags: ['国内AI', '视频通话', 'ChatGPT替代'],
        pricing: 'free'
    },
    {
        id: 'grok',
        name: 'Grok',
        description: '推荐的 AI 助手',
        url: 'https://grok.com/',
        category: 'ai-assistant',
        categoryName: 'AI助手/大模型对话工具',
        tags: ['AI助手', '推荐', 'xAI'],
        pricing: 'paid'
    },
    {
        id: 'poe',
        name: 'Poe',
        description: 'Claude 可用此平台',
        url: 'https://poe.com/',
        category: 'ai-assistant',
        categoryName: 'AI助手/大模型对话工具',
        tags: ['Claude平台', '多模型', '聚合'],
        pricing: 'freemium'
    },
    {
        id: '2233-claude',
        name: '2233.ai',
        description: '国内套壳版，供无法注册官方版本 Claude 的用户选择',
        url: 'https://2233.ai/i/ONEDOLLAR',
        category: 'ai-assistant',
        categoryName: 'AI助手/大模型对话工具',
        tags: ['Claude国内版', '套壳', '替代方案'],
        pricing: 'paid'
    },

    // 3. API 平台
    {
        id: 'openrouter',
        name: 'OpenRouter.ai',
        description: '语言类模型 API 的综合平台，模型选择更多、速度更快、更稳定',
        url: 'https://openrouter.ai/',
        category: 'api',
        categoryName: 'API平台',
        tags: ['语言模型', '稳定', '速度快'],
        pricing: 'paid'
    },
    {
        id: 'together',
        name: 'Together.ai',
        description: '语言类模型 API 综合平台，也提供少量图片和视频处理模型',
        url: 'https://www.together.ai/',
        category: 'api',
        categoryName: 'API平台',
        tags: ['语言模型', '图片视频', '综合平台'],
        pricing: 'paid'
    },
    {
        id: 'fal-ai',
        name: 'Fal.ai',
        description: '更专注于提供图片和视频类 API',
        url: 'https://fal.ai/',
        category: 'api',
        categoryName: 'API平台',
        tags: ['图片API', '视频API', '专注'],
        pricing: 'paid'
    },
    {
        id: 'replicate',
        name: 'Replicate.com',
        description: '最全面的 API 平台，但相对较贵，推荐初学者优先选择',
        url: 'https://replicate.com/',
        category: 'api',
        categoryName: 'API平台',
        tags: ['全面', '初学者', '较贵'],
        pricing: 'paid'
    },
    {
        id: 'siliconflow',
        name: '硅基流动',
        description: '国内 API 平台，适合小白，API 数量少而精',
        url: 'https://siliconflow.cn/zh-cn/',
        category: 'api',
        categoryName: 'API平台',
        tags: ['国内', '小白友好', '少而精'],
        pricing: 'freemium'
    },

    // 4. 产品 Idea/AI 产品信息源
    {
        id: 'scqb-idea',
        name: '生财有术-产品Idea',
        description: '如何获得产品 idea',
        url: 'https://t.zsxq.com/KAQB9',
        category: 'product-idea',
        categoryName: '产品Idea/AI产品信息源',
        tags: ['产品idea', '生财有术', '创业'],
        pricing: 'paid'
    },
    {
        id: 'scqb-product',
        name: '生财有术-产品选择',
        description: '什么产品好做？三个一',
        url: 'https://t.zsxq.com/f3nTK',
        category: 'product-idea',
        categoryName: '产品Idea/AI产品信息源',
        tags: ['产品选择', '生财有术', '创业'],
        pricing: 'paid'
    },
    {
        id: 'toolify',
        name: 'Toolify',
        description: '持续收集新 AI 产品，提供中文界面、详细产品信息和排行榜',
        url: 'https://www.toolify.ai/zh/',
        category: 'product-idea',
        categoryName: '产品Idea/AI产品信息源',
        tags: ['AI产品', '中文界面', '排行榜'],
        pricing: 'free'
    },
    {
        id: 'taaft',
        name: 'TAAFT',
        description: '全世界最大的 AI 应用导航产品，支持自然语言搜索',
        url: 'https://theresanaiforthat.com/',
        category: 'product-idea',
        categoryName: '产品Idea/AI产品信息源',
        tags: ['全球最大', '自然语言', 'AI导航'],
        pricing: 'free'
    },

    // 5. 网站发布与部署 (Vercel & GitHub)
    {
        id: 'vercel',
        name: 'Vercel',
        description: '面向开发者的云平台，让网站发布变得异常简单，与 NextJS 完美配合',
        url: 'https://vercel.com/',
        category: 'deploy',
        categoryName: '网站发布与部署',
        tags: ['云平台', 'NextJS', '简单发布'],
        pricing: 'freemium'
    },
    {
        id: 'github',
        name: 'GitHub',
        description: '全世界最大的开源社区，用于源代码管理、版本控制、多人协作和代码托管',
        url: 'https://github.com/',
        category: 'deploy',
        categoryName: '网站发布与部署',
        tags: ['开源社区', '版本控制', '代码托管'],
        pricing: 'freemium'
    },
    {
        id: 'github-desktop',
        name: 'GitHub Desktop',
        description: 'GitHub 的辅助工具，便于代码在 Cursor 与 GitHub 间的传输，适合初学者',
        url: 'https://desktop.github.com/',
        category: 'deploy',
        categoryName: '网站发布与部署',
        tags: ['GitHub辅助', 'Cursor', '初学者'],
        pricing: 'free'
    },

    // 6. 域名服务
    {
        id: 'instant-domain',
        name: 'Instant Domain Search',
        description: '域名搜索工具，即时反馈可用性、提供替代建议',
        url: 'https://instantdomains.com/',
        category: 'domain',
        categoryName: '域名服务',
        tags: ['域名搜索', '即时反馈', '替代建议'],
        pricing: 'free'
    },
    {
        id: 'namecheap',
        name: 'Namecheap',
        description: '域名注册商，价格实惠、提供免费隐私保护、操作简单',
        url: 'https://www.namecheap.com/',
        category: 'domain',
        categoryName: '域名服务',
        tags: ['域名注册', '价格实惠', '隐私保护'],
        pricing: 'paid'
    },

    // 7. 用户行为分析与统计
    {
        id: 'plausible',
        name: 'Plausible',
        description: '网站统计数据平台，可开源部署',
        url: 'https://plausible.io/',
        category: 'analytics',
        categoryName: '用户行为分析与统计',
        tags: ['网站统计', '开源部署', '隐私友好'],
        pricing: 'freemium'
    },
    {
        id: 'google-analytics',
        name: 'Google Analytics',
        description: '免费的网站数据统计平台',
        url: 'https://analytics.google.com/',
        category: 'analytics',
        categoryName: '用户行为分析与统计',
        tags: ['谷歌', '免费', '网站统计'],
        pricing: 'free'
    },
    {
        id: 'openpanel',
        name: 'OpenPanel',
        description: '网站数据统计平台，可开源部署，用户少时提供免费版本',
        url: 'https://openpanel.dev/',
        category: 'analytics',
        categoryName: '用户行为分析与统计',
        tags: ['开源部署', '免费版本', '统计平台'],
        pricing: 'freemium'
    },
    {
        id: 'clarity',
        name: 'Microsoft Clarity',
        description: '微软提供的免费用户行为分析工具，可观看用户操作录像和热力图',
        url: 'https://clarity.microsoft.com/',
        category: 'analytics',
        categoryName: '用户行为分析与统计',
        tags: ['微软', '用户行为', '热力图'],
        pricing: 'free'
    },

    // 8. 产品设计与原型美化
    {
        id: 'stitch',
        name: 'Stitch',
        description: '谷歌产品，用于生成网站设计效果图和前端代码，擅长界面布局',
        url: 'https://stitch.withgoogle.com',
        category: 'design',
        categoryName: '产品设计与原型美化',
        tags: ['谷歌', '设计效果图', '界面布局'],
        pricing: 'free'
    },
    {
        id: 'tailwind-play',
        name: 'TailwindCSS Play',
        description: '用于预览前端代码效果',
        url: 'https://play.tailwindcss.com/',
        category: 'design',
        categoryName: '产品设计与原型美化',
        tags: ['TailwindCSS', '代码预览', '前端'],
        pricing: 'free'
    },

    // 9. 网站模板与组件
    {
        id: 'tailwind-ui',
        name: 'TailwindCSS UI Blocks',
        description: '提供营销 UI 块',
        url: 'https://tailwindcss.com/plus/ui-blocks/marketing',
        category: 'templates',
        categoryName: '网站模板与组件',
        tags: ['TailwindCSS', '营销UI', 'UI块'],
        pricing: 'paid'
    },
    {
        id: 'shipixen',
        name: 'Shipixen Landing Page',
        description: '落地页组件示例',
        url: 'https://shipixen.com/demo/landing-page-component-examples',
        category: 'templates',
        categoryName: '网站模板与组件',
        tags: ['落地页', '组件示例', '模板'],
        pricing: 'freemium'
    },
    {
        id: 'launch-ui',
        name: 'Launch UI Components',
        description: '提供免费版和收费版模板',
        url: 'https://www.launchuicomponents.com/',
        category: 'templates',
        categoryName: '网站模板与组件',
        tags: ['免费版', '收费版', '模板'],
        pricing: 'freemium'
    },
    {
        id: 'shadcn-landing',
        name: 'Shadcn Landing Page',
        description: '基于 Shadcn 的落地页项目',
        url: 'https://github.com/nobruf/shadcn-landing-page',
        category: 'templates',
        categoryName: '网站模板与组件',
        tags: ['Shadcn', '落地页', 'GitHub'],
        pricing: 'free'
    },
    {
        id: 'tailus-templates',
        name: 'Tailus Templates',
        description: '提供付费模板',
        url: 'https://tailus.io/templates/',
        category: 'templates',
        categoryName: '网站模板与组件',
        tags: ['付费模板', '高质量', '模板'],
        pricing: 'paid'
    },
    {
        id: 'zippystarter',
        name: 'ZippyStarter',
        description: '用于配置 Shadcn UI 界面颜色',
        url: 'https://zippystarter.com/tools/shadcn-ui-theme-generator',
        category: 'templates',
        categoryName: '网站模板与组件',
        tags: ['Shadcn', '界面颜色', '主题生成'],
        pricing: 'free'
    },

    // 10. 开源项目查找与示例
    {
        id: 'github-trending',
        name: 'GitHub Trending',
        description: '查找 GitHub 上的热门开源项目',
        url: 'https://github.com/trending',
        category: 'opensource',
        categoryName: '开源项目查找与示例',
        tags: ['GitHub', '热门项目', '开源'],
        pricing: 'free'
    },
    {
        id: 'vercel-templates',
        name: 'Vercel Templates',
        description: '基于 Next.JS 框架的模板',
        url: 'https://vercel.com/templates?framework=next.js',
        category: 'opensource',
        categoryName: '开源项目查找与示例',
        tags: ['NextJS', '框架模板', 'Vercel'],
        pricing: 'free'
    },
    {
        id: 'nutlope-github',
        name: 'Nutlope GitHub',
        description: '包含大量优质、可一键部署的开源项目',
        url: 'https://github.com/Nutlope',
        category: 'opensource',
        categoryName: '开源项目查找与示例',
        tags: ['优质项目', '一键部署', '开源'],
        pricing: 'free'
    },
    {
        id: 'notes-gpt',
        name: 'NotesGPT',
        description: 'Nutlope 开源项目',
        url: 'https://usenotesgpt.com/',
        category: 'opensource',
        categoryName: '开源项目查找与示例',
        tags: ['Nutlope', '开源项目', 'AI笔记'],
        pricing: 'free'
    },
    {
        id: 'blinkshot',
        name: 'Blinkshot',
        description: 'Nutlope 开源项目',
        url: 'https://www.blinkshot.io/',
        category: 'opensource',
        categoryName: '开源项目查找与示例',
        tags: ['Nutlope', '开源项目', '截图美化'],
        pricing: 'free'
    },
    {
        id: 'loras-dev',
        name: 'Loras.dev',
        description: 'Nutlope 开源项目',
        url: 'https://loras.dev',
        category: 'opensource',
        categoryName: '开源项目查找与示例',
        tags: ['Nutlope', '开源项目', 'AI头像'],
        pricing: 'free'
    },
    {
        id: 'napkins',
        name: 'Napkins',
        description: 'Nutlope 开源项目',
        url: 'https://www.napkins.dev',
        category: 'opensource',
        categoryName: '开源项目查找与示例',
        tags: ['Nutlope', '开源项目', '商业想法'],
        pricing: 'free'
    },
    {
        id: 'logo-creator',
        name: 'LogoCreator',
        description: 'Nutlope 开源项目',
        url: 'https://www.logo-creator.io/',
        category: 'opensource',
        categoryName: '开源项目查找与示例',
        tags: ['Nutlope', '开源项目', 'Logo生成'],
        pricing: 'free'
    },
    {
        id: 'restore-photos',
        name: 'RestorePhotos',
        description: 'Nutlope 开源项目',
        url: 'https://www.restorephotos.io/',
        category: 'opensource',
        categoryName: '开源项目查找与示例',
        tags: ['Nutlope', '开源项目', '照片修复'],
        pricing: 'free'
    },
    {
        id: 'room-gpt',
        name: 'RoomGPT',
        description: 'Nutlope 开源项目',
        url: 'https://www.roomgpt.io/',
        category: 'opensource',
        categoryName: '开源项目查找与示例',
        tags: ['Nutlope', '开源项目', '室内设计'],
        pricing: 'free'
    },

    // 11. 冷启动与推广平台
    {
        id: 'product-hunt',
        name: 'Product Hunt',
        description: '许多成功 SaaS 产品的起点',
        url: 'https://www.producthunt.com/',
        category: 'promotion',
        categoryName: '冷启动与推广平台',
        tags: ['产品发布', 'SaaS', '起点'],
        pricing: 'free'
    },
    {
        id: 'hacker-news',
        name: 'Hacker News',
        description: '技术人员聚集地，适合面向开发者的产品',
        url: 'https://news.ycombinator.com/',
        category: 'promotion',
        categoryName: '冷启动与推广平台',
        tags: ['技术人员', '开发者', '聚集地'],
        pricing: 'free'
    },
    {
        id: 'anyvoice',
        name: 'AnyVoice',
        description: 'Hacker News 推广案例',
        url: 'https://anyvoice.net/zh',
        category: 'promotion',
        categoryName: '冷启动与推广平台',
        tags: ['Hacker News', '推广案例', '语音'],
        pricing: 'freemium'
    },
    {
        id: 'indie-hackers',
        name: 'Indie Hackers',
        description: '独立开发者社区，获取用户和同行建议',
        url: 'https://www.indiehackers.com/',
        category: 'promotion',
        categoryName: '冷启动与推广平台',
        tags: ['独立开发者', '社区', '建议'],
        pricing: 'free'
    },
    {
        id: 'betalist',
        name: 'BetaList',
        description: '用于发布测试版产品，收集早期反馈',
        url: 'https://betalist.com/',
        category: 'promotion',
        categoryName: '冷启动与推广平台',
        tags: ['测试版', '早期反馈', '产品发布'],
        pricing: 'free'
    },
    {
        id: 'reddit',
        name: 'Reddit',
        description: '拥有数千个特定领域的子版块，可精准接触目标用户',
        url: 'https://www.reddit.com/',
        category: 'promotion',
        categoryName: '冷启动与推广平台',
        tags: ['子版块', '精准用户', '目标用户'],
        pricing: 'free'
    },
    {
        id: 'aitdk',
        name: 'AITDK',
        description: '群推广冷启动案例',
        url: 'https://aitdk.com/',
        category: 'promotion',
        categoryName: '冷启动与推广平台',
        tags: ['群推广', '冷启动', '案例'],
        pricing: 'free'
    },
    {
        id: 'shipany',
        name: 'ShipAny',
        description: '群推广冷启动案例',
        url: 'https://shipany.ai/zh',
        category: 'promotion',
        categoryName: '冷启动与推广平台',
        tags: ['群推广', '冷启动', '案例'],
        pricing: 'freemium'
    },
    {
        id: 'v2ex',
        name: 'V2EX',
        description: '中文开发者和技术爱好者社区',
        url: 'https://www.v2ex.com/',
        category: 'promotion',
        categoryName: '冷启动与推广平台',
        tags: ['中文开发者', '技术爱好者', '社区'],
        pricing: 'free'
    },

    // 12. 课程相关示例与资源
    {
        id: 'answer-book',
        name: 'Answer Book',
        description: '基础篇产品示例',
        url: 'https://answer-book-two.vercel.app/',
        category: 'learning',
        categoryName: '课程相关示例与资源',
        tags: ['基础篇', '产品示例', '问答'],
        pricing: 'free'
    },
    {
        id: 'screensharing',
        name: 'Screensharing.net',
        description: '基础篇产品示例',
        url: 'https://screensharing.net/',
        category: 'learning',
        categoryName: '课程相关示例与资源',
        tags: ['基础篇', '产品示例', '屏幕共享'],
        pricing: 'free'
    },
    {
        id: 'raphael-app',
        name: 'Raphael App',
        description: '成熟商业产品示例',
        url: 'https://raphael.app/',
        category: 'learning',
        categoryName: '课程相关示例与资源',
        tags: ['成熟产品', '商业产品', '示例'],
        pricing: 'freemium'
    },
    {
        id: 'bilibili-course',
        name: 'AI产品课程',
        description: '什么不是 AI 产品 - Bilibili课程',
        url: 'https://www.bilibili.com/video/BV16s41187Kt/',
        category: 'learning',
        categoryName: '课程相关示例与资源',
        tags: ['AI产品', 'Bilibili', '课程'],
        pricing: 'free'
    },

    // 13. 其他工具/平台
    {
        id: 'yeka-ai',
        name: 'Yeka.ai',
        description: '提供虚拟信用卡的平台',
        url: 'https://yeka.ai/',
        category: 'other',
        categoryName: '其他工具/平台',
        tags: ['虚拟信用卡', '支付', '平台'],
        pricing: 'paid'
    },
    {
        id: 'moyu-raphael',
        name: 'Moyu计算器',
        description: '实时工资计算器阉割版',
        url: 'https://moyu.raphael.app',
        category: 'other',
        categoryName: '其他工具/平台',
        tags: ['工资计算器', '实时', '有趣'],
        pricing: 'free'
    }
];

// 全局变量
let currentCategory = 'all';
let filteredTools = [...tools];

// DOM 元素
const searchInput = document.getElementById('searchInput');
let categoryItems; // 将在DOM加载后初始化

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    initializeLucide();
    renderAllSections();
    setupEventListeners();
});

// 初始化 Lucide 图标
function initializeLucide() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// 设置事件监听器
function setupEventListeners() {
    // 初始化categoryItems
    categoryItems = document.querySelectorAll('.category-item');
    
    // 搜索功能
    searchInput.addEventListener('input', handleSearch);
    
    // 分类点击 - 支持锚点跳转
    categoryItems.forEach(item => {
        item.addEventListener('click', handleCategoryClick);
    });

    // 汉堡包菜单功能
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    
    function toggleMobileMenu(show) {
        const isActive = show !== undefined ? show : !navMenu.classList.contains('active');
        
        if (isActive) {
            mobileMenuBtn.classList.add('active');
            navMenu.classList.add('active');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    if (mobileMenuBtn && navMenu && menuOverlay) {
        // 点击汉堡包按钮
        mobileMenuBtn.addEventListener('click', function() {
            toggleMobileMenu();
        });
        
        // 点击遮罩层关闭菜单
        menuOverlay.addEventListener('click', function() {
            toggleMobileMenu(false);
        });
        
        // 点击菜单项后关闭菜单
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function() {
                toggleMobileMenu(false);
            });
        });
        
        // 监听屏幕尺寸变化
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                toggleMobileMenu(false);
            }
        });
        
        // ESC键关闭菜单
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                toggleMobileMenu(false);
            }
        });
    }

    // 添加平滑滚动支持
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 渲染所有内容区块
function renderAllSections() {
    renderPopularTools();
    renderLatestTools();
    renderCategorySections();
}

// 渲染热门推荐
function renderPopularTools() {
    const popularGrid = document.getElementById('popularGrid');
    if (!popularGrid) return;
    
    // 选择每个分类的前2个工具作为热门推荐
    const categories = ['ai-ide', 'ai-assistant', 'api', 'deploy'];
    const popularTools = [];
    
    categories.forEach(category => {
        const categoryTools = tools.filter(tool => tool.category === category).slice(0, 2);
        popularTools.push(...categoryTools);
    });
    
    popularGrid.innerHTML = popularTools.map(tool => createToolCard(tool)).join('');
    
    // 重新初始化图标
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 100);
}

// 渲染最新收录
function renderLatestTools() {
    const latestGrid = document.getElementById('latestGrid');
    if (!latestGrid) return;
    
    // 获取最后添加的8个工具作为最新收录
    const latestTools = tools.slice(-8);
    
    latestGrid.innerHTML = latestTools.map(tool => createToolCard(tool)).join('');
    
    // 重新初始化图标
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 100);
}

// 渲染各分类区块
function renderCategorySections() {
    const categories = [
        'ai-ide', 'ai-assistant', 'api', 'product-idea', 
        'deploy', 'domain', 'analytics', 'design', 
        'templates', 'opensource', 'promotion', 'learning', 'other'
    ];
    
    categories.forEach(category => {
        const grid = document.getElementById(`${category}-grid`);
        if (grid) {
            const categoryTools = tools.filter(tool => tool.category === category);
            grid.innerHTML = categoryTools.map(tool => createToolCard(tool)).join('');
        }
    });
    
    // 重新初始化图标
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 100);
}

// 创建工具卡片
function createToolCard(tool) {
    const pricingClass = `pricing-${tool.pricing}`;
    const pricingText = {
        'free': '免费',
        'paid': '付费',
        'freemium': '免费试用'
    }[tool.pricing];

    const logoText = tool.name.substring(0, 2).toUpperCase();

    return `
        <div class="tool-card" onclick="openTool('${tool.url}')">
            <div class="tool-header">
                <div class="tool-logo">${logoText}</div>
                <div class="tool-info">
                    <h3>${tool.name}</h3>
                    <div class="tool-category">${tool.categoryName}</div>
                </div>
            </div>
            <div class="tool-description">${tool.description}</div>
            <div class="tool-footer">
                <div class="tool-tags">
                    ${tool.tags.slice(0, 3).map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
                </div>
                <div class="tool-pricing ${pricingClass}">${pricingText}</div>
            </div>
            <a href="${tool.url}" target="_blank" class="tool-link" onclick="event.stopPropagation()">
                访问工具
                <i data-lucide="external-link"></i>
            </a>
        </div>
    `;
}

// 处理搜索
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        // 恢复所有区块显示
        showAllSections();
        renderAllSections();
    } else {
        // 隐藏所有区块，只显示搜索结果
        hideAllSections();
        showSearchResults(searchTerm);
    }
}

// 显示搜索结果
function showSearchResults(searchTerm) {
    const filteredTools = tools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm) ||
        tool.description.toLowerCase().includes(searchTerm) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    
    // 创建临时搜索结果区块
    const contentArea = document.querySelector('.content-area');
    const searchSection = document.createElement('section');
    searchSection.id = 'search-results';
    searchSection.className = 'content-section';
    searchSection.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">🔍 搜索结果</h2>
            <p class="section-subtitle">找到 ${filteredTools.length} 个相关工具</p>
        </div>
        <div class="tools-grid">
            ${filteredTools.length > 0 
                ? filteredTools.map(tool => createToolCard(tool)).join('') 
                : '<div class="no-results">未找到相关工具</div>'
            }
        </div>
    `;
    
    contentArea.prepend(searchSection);
    
    // 重新初始化图标
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 100);
}

// 隐藏所有区块
function hideAllSections() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
}

// 显示所有区块
function showAllSections() {
    // 移除搜索结果区块
    const searchResults = document.getElementById('search-results');
    if (searchResults) {
        searchResults.remove();
    }
    
    // 显示所有原有区块
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'block';
    });
}

// 处理分类点击
function handleCategoryClick(e) {
    e.preventDefault();
    
    const category = e.currentTarget.dataset.category;
    
    // 更新活动状态
    categoryItems.forEach(item => item.classList.remove('active'));
    e.currentTarget.classList.add('active');
    
    // 清空搜索框
    searchInput.value = '';
    
    if (category === 'all') {
        // 显示所有区块
        showAllSections();
        renderAllSections();
        // 滚动到页面顶部，方便用户使用搜索功能
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        // 跳转到对应分类区块
        const targetSection = document.getElementById(category);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    currentCategory = category;
}

// 打开工具链接
function openTool(url) {
    window.open(url, '_blank');
}

// 获取分类统计
function getCategoryStats() {
    const stats = {};
    tools.forEach(tool => {
        stats[tool.category] = (stats[tool.category] || 0) + 1;
    });
    return stats;
}

// 获取热门工具（每个分类前3个）
function getPopularTools() {
    const categories = ['ai-ide', 'ai-assistant', 'api', 'product-idea', 'deploy', 'domain', 'analytics', 'design', 'templates', 'opensource', 'promotion', 'learning', 'other'];
    const popularTools = [];
    
    categories.forEach(category => {
        const categoryTools = tools.filter(tool => tool.category === category).slice(0, 3);
        popularTools.push(...categoryTools);
    });
    
    return popularTools;
}

// 工具数据验证
function validateTools() {
    const requiredFields = ['id', 'name', 'description', 'url', 'category', 'categoryName', 'tags', 'pricing'];
    const validPricing = ['free', 'paid', 'freemium'];
    const validCategories = ['ai-ide', 'ai-assistant', 'api', 'product-idea', 'deploy', 'domain', 'analytics', 'design', 'templates', 'opensource', 'promotion', 'learning', 'other'];
    
    const errors = [];
    
    tools.forEach((tool, index) => {
        // 检查必需字段
        requiredFields.forEach(field => {
            if (!tool[field]) {
                errors.push(`工具 ${index + 1}: 缺少字段 ${field}`);
            }
        });
        
        // 检查价格类型
        if (tool.pricing && !validPricing.includes(tool.pricing)) {
            errors.push(`工具 ${tool.name}: 无效的价格类型 ${tool.pricing}`);
        }
        
        // 检查分类
        if (tool.category && !validCategories.includes(tool.category)) {
            errors.push(`工具 ${tool.name}: 无效的分类 ${tool.category}`);
        }
        
        // 检查URL格式
        if (tool.url && !tool.url.startsWith('http')) {
            errors.push(`工具 ${tool.name}: 无效的URL格式`);
        }
    });
    
    if (errors.length > 0) {
        console.warn('工具数据验证错误:', errors);
    } else {
        console.log('工具数据验证通过');
    }
    
    return errors.length === 0;
}

// 运行验证
validateTools();

// 输出统计信息
console.log('工具总数:', tools.length);
console.log('分类统计:', getCategoryStats());

// 鼠标跟踪粒子效果
let particles = [];
const maxParticles = 30;

function createParticle(x, y) {
    const particle = {
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 1,
        decay: 0.02,
        size: Math.random() * 3 + 1,
        color: Math.random() > 0.5 ? '#00ffff' : '#ff00ff'
    };
    particles.push(particle);
    
    if (particles.length > maxParticles) {
        particles.shift();
    }
}

function updateParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles = particles.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= particle.decay;
        
        if (particle.life > 0) {
            ctx.globalAlpha = particle.life;
            ctx.fillStyle = particle.color;
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            return true;
        }
        return false;
    });
    
    requestAnimationFrame(updateParticles);
}

// 创建粒子画布
function createParticleCanvas() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particleCanvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    
    // 监听鼠标移动
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.7) {
            createParticle(e.clientX, e.clientY);
        }
    });
    
    // 监听窗口大小变化
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    updateParticles();
}

// 启动画面控制
function initBootScreen() {
    const bootScreen = document.getElementById('bootScreen');
    if (bootScreen) {
        // 5秒后隐藏启动画面
        setTimeout(() => {
            bootScreen.style.display = 'none';
            // 启动画面消失后创建粒子效果
            createParticleCanvas();
        }, 5000);
    } else {
        // 如果没有启动画面，直接创建粒子效果
        createParticleCanvas();
    }
}

// 页面加载完成后初始化启动画面
document.addEventListener('DOMContentLoaded', initBootScreen); 