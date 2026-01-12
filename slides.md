---
# try also 'default' to start simple
theme: dracula
title: 首页
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply UnoCSS classes to the current slide
layout: cover
class: bg-blend-overlay bg-black65
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# duration of the presentation
duration: 35min
---

<div class="absolute inset-0 overflow-hidden">
  <div class="absolute top-20 left-20 w-64 h-64 bg-[#bd93f9]/10 rounded-full blur-3xl"></div>
  <div class="absolute bottom-20 right-20 w-80 h-80 bg-[#50fa7b]/10 rounded-full blur-3xl"></div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8be9fd]/5 rounded-full blur-3xl"></div>
</div>

<div class="relative z-10 flex flex-col items-center justify-center h-full">
  <div v-motion :initial="{ scale: 0.8, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { duration: 800 } }" class="text-center">
    <h1 class="text-8xl font-black mb-4 !text-transparent bg-clip-text bg-gradient-to-r from-[#50fa7b] via-[#8be9fd] to-[#bd93f9]">减熵</h1>
    <div class="flex items-center justify-center gap-2 mb-6">
      <div class="h-px w-12 bg-gradient-to-r from-transparent to-[#8be9fd]"></div>
      <span class="text-sm text-gray-400 tracking-widest">REDUCE ENTROPY</span>
      <div class="h-px w-12 bg-gradient-to-l from-transparent to-[#8be9fd]"></div>
    </div>
    <p v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 300 } }" class="text-lg text-gray-300">帆软软件有限公司 · 2025 年年度个人复盘</p>
  </div>
</div>

<div class="abs-bl ml-14 mb-12 flex items-center" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 600 } }">
  <img src="https://cdn.sa.net/2025/01/23/Q7RM4B6Yeo1l92m.jpg" class="size-12 object-cover rounded-full border-2 border-[#8be9fd]/50">
  <div class="ml-3 flex flex-col text-left">
    <span class="text-xl font-bold text-white">Alan</span>
    <span class="text-xs text-gray-400">alan@fanruan.com</span>
  </div>
</div>

<div class="abs-br mr-6 mb-12" v-motion :initial="{ x: 30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 600 } }">
  <span @click="$slidev.nav.next" class="px-4 py-2 rounded-full bg-white/10 border border-white/20 cursor-pointer text-white text-sm flex items-center gap-2 hover:bg-white/20 transition-all">
    开始
    <carbon:chevron-right class="inline" />
  </span>
</div>

<!--
大家好，我是 alan

下面开始我个人 2025 年的年度复盘

如果用一个关键字来形容我 2025 年的主要工作，那么 “减熵” 这个词最准确了。

什么是熵？

熵的概念最早起源于物理学，用于度量一个热力学系统的无序程度。热力学第二定律，又称“熵增定律”，表明了在自然过程中，一个孤立的系统总是从最初的集中、有序的排列状态，趋向于分散、混乱和无序；当熵达到最大时，系统就会处于一种静寂状态。
-->

---
title: 软件开发中的熵
transition: fade-out
layout: center
class: text-center
---

<div class="flex flex-col items-center">
  <h1 v-motion :initial="{ y: -20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { duration: 600 } }" class="text-3xl font-extrabold mb-4 !text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-500">
    软件开发中的熵
  </h1>
  <p class="text-base opacity-80 mb-6 max-w-3xl px-4 line-tight">熵代表系统的混乱、复杂、不确定性和不可控程度。随着系统演进，熵往往不可避免地增加。</p>
  <div class="grid grid-cols-2 gap-4 w-full max-w-3xl scale-95 origin-top">
    <div v-motion :initial="{ scale: 0.9, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { delay: 300 } }" class="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all text-center">
      <div class="i-carbon-code text-3xl mb-2 text-blue-400 group-hover:scale-110 transition-transform" />
      <h3 class="text-lg font-bold mb-1">可读性下降</h3>
      <p class="text-xs opacity-60">代码逻辑破碎、耦合度上升，维护成本指数增加</p>
    </div>
    <div v-motion :initial="{ scale: 0.9, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { delay: 500 } }" class="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all text-center">
      <div class="i-carbon-document-blank text-3xl mb-2 text-emerald-400 group-hover:scale-110 transition-transform" />
      <h3 class="text-lg font-bold mb-1">文档滞后</h3>
      <p class="text-xs opacity-60">文档与代码脱节，失去指导价值，增加认知负荷</p>
    </div>
    <div v-motion :initial="{ scale: 0.9, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { delay: 700 } }" class="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all text-center">
      <div class="i-carbon-debug text-3xl mb-2 text-amber-400 group-hover:scale-110 transition-transform" />
      <h3 class="text-lg font-bold mb-1">测试失效</h3>
      <p class="text-xs opacity-60">覆盖率下降，旧功能频繁回退，bug 修复后重现</p>
    </div>
    <div v-motion :initial="{ scale: 0.9, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { delay: 900 } }" class="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all text-center">
      <div class="i-carbon-flash text-3xl mb-2 text-rose-400 group-hover:scale-110 transition-transform" />
      <h3 class="text-lg font-bold mb-1">架构僵化</h3>
      <p class="text-xs opacity-60">底层堆砌，牵一发而动全身，难以应对业务变化</p>
    </div>
  </div>
</div>

<!--
而软件开发中的熵则代表系统的混乱、复杂、不确定性和不可控程度。随着系统演进，熵往往不可避免地增加。

最终导致：代码可读性下降，文档与代码脱节滞后，测试覆盖率降低，自动化测试失败。架构僵化，牵一发而动全身。

导致代码要么不敢改，要么很容易改出其他bug。
-->

---
transition: slide-up
level: 2
title: 熵增公式
layout: center
clicks: 7
---

<FormulaExplainer :clicks="$clicks" />

<v-clicks v-show="false">
  <div v-for="i in 7" :key="i" />
</v-clicks>

<!--
正如热力学系统中随时间“自发熵增”的现象：如果没有额外的能量（如重构、标准化）投入，系统必然走向混乱。

熵增虽是必然趋势，但通过系统性干预可显著延缓其速度。即通过组织文化、技术架构、工程流程，持续引入秩序，减缓混乱的蔓延。

于是有人参考计算熵的玻尔兹曼公式来设计了软件工程的熵增公式：

通过这个公式我们可以看出，最终团队的熵值，是跟一系列参数的取值有关。

[click] 首先我们看这个公式，S steam 代表整个项目的熵值，它是一系列因素累计的结果

[click] K 代表行业经验系数，是一个自己定义的正数

[click] C 代表沟通链路，和团队人数相关，代表沟通的成本

[click] L 代表决策层级，决策路径越长越复杂

[click] D 代表技术复杂度，和代码量，模块数量，耦合度有关

[click] T 代表工具减熵因子，我们可以通过一些工具来减少熵值，比如增加单元测试，增加 CICD 流程，完善文档等。

[click] P 代表开发模式成熟度，比如敏捷开发，持续反馈组织机制带来的有序性。
-->

---
layout: center
title: 能够解决熵减的三个方向
---

<div class="flex flex-col gap-10 w-full max-w-2xl mx-auto">
  <div class="flex items-center gap-8">
    <div 
      v-motion
      :initial="{ x: -50, opacity: 0 }"
      :enter="{ x: 0, opacity: 1, transition: { duration: 600 } }"
      class="text-7xl font-black w-24 text-center" 
      style="color: #ffb86c"
    >D</div>
    <div class="flex flex-col text-left">
      <div class="text-2xl font-bold mb-1" style="color: #ffb86c">减少技术复杂度</div>
      <div class="text-gray-400">通过标准化、组件化与持续重构，降低系统熵增速率</div>
    </div>
  </div>

  <div class="flex items-center gap-8">
    <div 
      v-motion
      :initial="{ x: -50, opacity: 0 }"
      :enter="{ x: 0, opacity: 1, transition: { duration: 600 } }"
      class="text-7xl font-black w-24 text-center" 
      style="color: #bd93f9"
    >T</div>
    <div class="flex flex-col text-left">
      <div class="text-2xl font-bold mb-1" style="color: #bd93f9">提升工具减熵因子</div>
      <div class="text-gray-400">建设高效的基建平台、自动化测试与 CI/CD 流程</div>
    </div>
  </div>

  <div class="flex items-center gap-8">
    <div 
      v-motion
      :initial="{ x: -50, opacity: 0 }"
      :enter="{ x: 0, opacity: 1, transition: { duration: 600 } }"
      class="text-7xl font-black w-24 text-center" 
      style="color: #ff5555"
    >P</div>
    <div class="flex flex-col text-left">
      <div class="text-2xl font-bold mb-1" style="color: #ff5555">优化开发模式成熟度</div>
      <div class="text-gray-400">推行敏捷、持续交付与沉淀良好的工程文化</div>
    </div>
  </div>
</div>

<!--
而对于我们开发同学来说，可以从这三个层面来实现减熵。

比如：通过标准化、组件化与持续重构，降低系统熵增速率

比如：建设高效的基建平台、自动化测试与 CI/CD 流程

再比如：推行敏捷、持续交付与沉淀良好的工程文化
-->


---
title: 反熵增是每一个优秀的程序员都该做的事情
layout: center
class: text-center
---

<div class="relative">
  <!-- 背景装饰 -->
  <div class="absolute -top-20 -left-40 w-80 h-80 bg-[#50fa7b]/10 rounded-full blur-3xl"></div>
  <div class="absolute -bottom-20 -right-40 w-80 h-80 bg-[#bd93f9]/10 rounded-full blur-3xl"></div>
  
  <div class="flex flex-col items-center gap-8">
    <!-- 图标 -->
    <div v-motion :initial="{ scale: 0, rotate: -180 }" :enter="{ scale: 1, rotate: 0, transition: { duration: 800, type: 'spring' } }" class="w-24 h-24 rounded-full bg-gradient-to-br from-[#50fa7b] to-[#8be9fd] flex items-center justify-center shadow-[0_0_40px_rgba(80,250,123,0.4)]">
      <div class="i-carbon-clean text-5xl text-black/80"></div>
    </div>
    
  <h1 v-motion :initial="{ y: 30, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 300 } }" class="text-4xl font-black !text-transparent bg-clip-text bg-gradient-to-r from-[#50fa7b] via-[#8be9fd] to-[#bd93f9]">
      反熵增
    </h1>
    
  <p v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 500 } }" class="text-2xl text-gray-300 font-medium">
      是每一个优秀的程序员都该做的事情
    </p>
    
  <div v-motion :initial="{ scaleX: 0 }" :enter="{ scaleX: 1, transition: { delay: 700, duration: 600 } }" class="w-40 h-1 bg-gradient-to-r from-transparent via-[#50fa7b] to-transparent rounded-full"></div>
    
  <p v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 900 } }" class="text-sm text-gray-500 italic max-w-md">
      "对抗混乱，追求秩序，是工程师的本能"
    </p>
  </div>
</div>

<!--
所以，反熵增是每一个优秀的程序员都该做的事情
-->

---
title: 新预览重构
layout: center
class: text-center
---

<div class="relative">
  <!-- 背景装饰 -->
  <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#8be9fd]/8 rounded-full blur-3xl"></div>
  
  <div class="flex flex-col items-center gap-6">
    <!-- 上方标签 -->
    <div v-motion :initial="{ y: -20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 0 } }" class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
      <div class="w-2 h-2 rounded-full bg-[#50fa7b] animate-pulse"></div>
      <span class="text-sm text-gray-400 tracking-wider">2025 年度重点项目</span>
    </div>
    
  <h1 v-motion :initial="{ scale: 0.8, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { delay: 200, type: 'spring' } }" class="text-6xl font-black tracking-tight">
      <span class="!text-transparent bg-clip-text bg-gradient-to-r from-[#ff79c6] via-[#bd93f9] to-[#8be9fd]">新预览</span>
      <span class="text-blue">重构</span>
    </h1>
    
  <p v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 400 } }" class="text-lg text-gray-400 max-w-lg text-center">
      从底层架构到性能优化，全方位提升大屏编辑器体验
    </p>
    
  <div v-motion :initial="{ y: 30, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 600 } }" class="flex gap-6 mt-4">
      <div class="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ffb86c]/10 border border-[#ffb86c]/30">
        <div class="i-carbon-cube text-[#ffb86c]"></div>
        <span class="text-sm text-[#ffb86c]">架构升级</span>
      </div>
      <div class="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#bd93f9]/10 border border-[#bd93f9]/30">
        <div class="i-carbon-tool-kit text-[#bd93f9]"></div>
        <span class="text-sm text-[#bd93f9]">工具提效</span>
      </div>
      <div class="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#50fa7b]/10 border border-[#50fa7b]/30">
        <div class="i-carbon-rocket text-[#50fa7b]"></div>
        <span class="text-sm text-[#50fa7b]">性能飞跃</span>
      </div>
    </div>
  </div>
</div>

<!--
于是在 2025 年，我们开启了预览重构的计划。

我们依靠本来预览重构的机会，重新编写了 FVS 预览模式下的所有代码，不管是底层架构，还是业务实现，都完完全全重新进行了设计和开发。

最终实现了不止是预览模式性能上的提升，还产出了一整套优秀的代码设计和工具配套，最终完成了 FVS 代码大幅度熵减。

下面我将围绕上述列出的可以造成熵减的三个点，来讲述一下我们预览重构都做了什么。
-->

---
title: 多 packages 拆分
layout: center
---

<div class="abs-tl m-10 flex items-center gap-2">
  <div class="w-3 h-3 rounded-full bg-[#ffb86c] shadow-[0_0_8px_#ffb86c]"></div>
  <div class="text-[#ffb86c] font-bold tracking-widest uppercase">减少技术复杂度 (D)：多 packages 拆分</div>
</div>
<div class="relative z-10 flex flex-col items-center gap-6">
````md magic-move
```sh
├── packages
│   ├── duchamp-build               # 打包相关代码, 包含各个自定义vite插件的实现
│   ├── duchamp-calculte            # 计算中心
│   ├── duchamp-editor              # 编辑器主体代码
│   └── duchamp-template-load       # 模板加载相关代码
├── package.json
└── README.md
```
```sh
├── packages
│   ├── duchamp-ai                  # AI 输入框入口
│   ├── duchamp-build               # 打包相关代码, 包含各个自定义vite插件的实现
│   ├── duchamp-calculte            # 计算中心
│   ├── duchamp-compatibility       # 兼容处理
│   ├── duchamp-components          # 基础组件
│   ├── duchamp-core                # 核心代码
│   ├── duchamp-editor              # 旧编辑器主体代码
│   ├── duchamp-graph               # 画布
│   ├── duchamp-plugin              # 插件 SDK
│   ├── duchamp-preview             # 预览模式
│   ├── duchamp-resource            # 资源处理
│   ├── duchamp-studio              # 编辑模式
│   ├── duchamp-template-load       # 模板加载相关代码
│   ├── duchamp-utils.              # 底层工具
│   └── duchamp-widgets             # 组件层代码
├── package.json
└── README.md
```
````
</div>

<!--
之前的 FVS 代码中，几乎所有的业务代码都是写在 duchamp-editor 里面，导致里面的代码依赖混乱，各个模块互相耦合，且即使是组件里面也能随意使用公共层 store 里的任意内容，完全没有任何约束能力。

[click] 所以在新预览重构一开始，我们就进行了合理的 packages 划分，将整个预览模式中的代码拆分成多个 package，各个 package 之间具有明确的依赖关系，从底层就解决了模块依赖混乱的问题，后续的开发者也永远不会写出依赖有问题的代码。实现了所谓的让做错的事情更困难。
-->

---
title: 组件基于 meta 的底层设计
layout: center
class: text-center
---

<div class="abs-tl m-10 flex items-center gap-2">
  <div class="w-3 h-3 rounded-full bg-[#ffb86c] shadow-[0_0_8px_#ffb86c]"></div>
  <div class="text-[#ffb86c] font-bold tracking-widest uppercase">减少技术复杂度 (D)：组件基于 meta 的底层设计</div>
</div>
<div class="flex flex-col items-center justify-center h-full">
  <div v-motion :initial="{ y: 40, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { duration: 800, delay: 300 } }" class="max-w-2xl bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group">
    <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#ffb86c]/5 rounded-full blur-3xl transition-all group-hover:bg-[#ffb86c]/10"></div>
    <div class="relative z-10 flex flex-col items-center gap-6">
      <p class="text-2xl leading-relaxed font-light italic text-gray-200">
        “由 <span class="text-[#ffb86c] font-medium">Meta</span> 指导基于 <span class="font-mono text-blue-400">TS 类型约束</span> 的组件底层架构设计”
      </p>
    </div>
  </div>
</div>

<!--
在本次的新预览设计中，我们重新设计了一套基于 meta 的组件顶层架构设计。由 meta 来描述一个组件的业务行为，由 React 来实现组件的视图。也就是说想事先一个基本的 FVS 中可拖入画布的组件，只需要描述它的 meta 和实现 React 视图就可以了。
-->

---
title: 组件基于 meta 的底层设计(前端公式)
layout: center
class: text-center
---

<div class="abs-tl m-10 flex items-center gap-2">
  <div class="w-3 h-3 rounded-full bg-[#ffb86c] shadow-[0_0_8px_#ffb86c]"></div>
  <div class="text-[#ffb86c] font-bold tracking-widest uppercase">减少技术复杂度 (D)：组件基于 meta 的底层设计与 handler 的扩展设计</div>
</div>
<div class="flex flex-col items-center gap-6 text-4xl" style="--slidev-code-font-size: 50px; --slidev-code-line-height: 70px;">
````md magic-move
```js
v=f(s)
```
```js
v=f(t(meta))
```
```js
Widget=View(t(meta))
```
```js
Widget=View(t(meta, handler))
```
````
</div>

<!--
我相信所有的前端开发者对这个公式都很数据，它是当前我们前端基于数据驱动的框架的基础模型。
那么 FVS 中的组件也不例外，因为它本质就是一个 React 组件，那么只要明确了它的 s 和 f，那么这个组件就明确了。

[click] 那么组件的 s 是什么，在新预览的设计中，组件的 s 就是公共层针对组件的 meta 而生成的数据。当一个组件的 meta 确定了，那么它的数据就确定了。

[click] 而组件的 f 则对应组件的 React 视图实现。当然为了方便开发者进行开发，新预览还支持组件开发者使用 Class 的写法实现一个组件，原理类似所以就不赘述了。

就这样，在新预览中实现一个组件极其简单，开发者只需要声明 meta 和实现 View 视图即可。

[click] 另外，如果一个组件有一些特殊的业务逻辑，那么我们还引入了 handler 的设计。handler 为一系列穿插在 fvs 业务逻辑之间的 钩子，每个组件都可以选择实现这些钩子来实现对普通业务逻辑的改造。

至此，我们得到了实现一个组件的三个元素：
meta：为一段 json 配置，没有流程所以不会出现问题
view：为一个 React Fuc，很容易编写单元测试
handler：为一系列纯函数，也十分容易编写单元测试
至此我们就完成了一个数据流明确实现简单且特别容易编写单元测试的组件基础架构。
-->

---
title: Meta 的类型约束
layout: default
---

<div class="abs-tl m-10 flex items-center gap-2">
  <div class="w-3 h-3 rounded-full bg-[#ffb86c] shadow-[0_0_8px_#ffb86c]"></div>
  <div class="text-[#ffb86c] font-bold tracking-widest uppercase">减少技术复杂度 (D)：组件基于 meta 的底层设计与 handler 的扩展设计</div>
</div>
<div class="mt-16">
```ts {monaco}
import { WidgetMeta, ReactWidget } from "./meta"
const titleMeta = {
  id: "d-text-title",
  name: "Duchamp-Title",
  version: "0.0.2",
  configurations: {
    style: {
      type: "style",
      defaultValue: {
        fontSize: 16,
        fontWeight: "bold",
      },
    },
  },
} satisfies WidgetMeta;


const Title: ReactWidget<typeof titleMeta> = (props) => {
  // 可以使用 style 属性
  return props.style.fontSize;
}
```
</div>

<!--
为了方便理解我们来看一个最简单的例子。
我声明了一个组件的 meta 并实现了一个视图。
我们可以看到，一个组件视图里面能够使用哪些数据，完全是由 meta 决定的。
我们来试着修改一下 meta 的内容，发现视图报错了。
这也就意味着，一个组件内使用哪些数据是被严格管控和限制的，这也就避免我们平时在开发组件时，引入不应该引入的东西，使用根本不应该使用的内容。最终实现通过底层架构的方式约束开发者做正确的事情更容易，做错误的事情更困难。
-->

---
title: JS API 的三层结构设计
layout: center
class: text-center
---

<div class="abs-tl m-10 flex items-center gap-2">
  <div class="w-3 h-3 rounded-full bg-[#ffb86c] shadow-[0_0_8px_#ffb86c]"></div>
  <div class="text-[#ffb86c] font-bold tracking-widest uppercase">减少技术复杂度 (D)：JS API 的三层结构设计</div>
</div>

<div class="flex flex-col items-center gap-6 mt-8">
  <div class="flex items-end gap-4 w-full max-w-4xl justify-center">
  <div v-motion :initial="{ y: 50, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 0, duration: 600 } }" class="flex-1 p-5 bg-gradient-to-b from-[#50fa7b]/20 to-[#50fa7b]/5 rounded-2xl border border-[#50fa7b]/30 backdrop-blur-sm group hover:border-[#50fa7b]/60 transition-all h-48">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 rounded-xl bg-[#50fa7b]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <div class="i-carbon-layers text-xl text-[#50fa7b]"></div>
        </div>
        <div class="text-left">
          <div class="text-lg font-bold text-[#50fa7b]">通用层</div>
          <div class="text-xs text-gray-400">Base Layer</div>
        </div>
      </div>
      <div class="text-left text-sm text-gray-300 space-y-2">
        <div class="flex items-center gap-2">
          <span class="text-[#50fa7b]">•</span>
          <span>组件隐藏/显示</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[#50fa7b]">•</span>
          <span>通用属性控制</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[#50fa7b]">•</span>
          <span>基础交互能力</span>
        </div>
      </div>
    </div>
    
  <div v-motion :initial="{ y: 50, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 200, duration: 600 } }" class="flex-1 p-5 bg-gradient-to-b from-[#8be9fd]/20 to-[#8be9fd]/5 rounded-2xl border border-[#8be9fd]/30 backdrop-blur-sm group hover:border-[#8be9fd]/60 transition-all h-48">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 rounded-xl bg-[#8be9fd]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <div class="i-carbon-settings text-xl text-[#8be9fd]"></div>
        </div>
        <div class="text-left">
          <div class="text-lg font-bold text-[#8be9fd]">配置面板层</div>
          <div class="text-xs text-gray-400">Configuration Layer</div>
        </div>
      </div>
      <div class="text-left text-sm text-gray-300 space-y-2">
        <div class="flex items-center gap-2">
          <span class="text-[#8be9fd]">•</span>
          <span>跑马灯开启/关闭</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[#8be9fd]">•</span>
          <span>配置项动态修改</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[#8be9fd]">•</span>
          <span>面板联动控制</span>
        </div>
      </div>
    </div>
    
  <div v-motion :initial="{ y: 50, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 400, duration: 600 } }" class="flex-1 p-5 bg-gradient-to-b from-[#bd93f9]/20 to-[#bd93f9]/5 rounded-2xl border border-[#bd93f9]/30 backdrop-blur-sm group hover:border-[#bd93f9]/60 transition-all h-48">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 rounded-xl bg-[#bd93f9]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <div class="i-carbon-view text-xl text-[#bd93f9]"></div>
        </div>
        <div class="text-left">
          <div class="text-lg font-bold text-[#bd93f9]">视图层</div>
          <div class="text-xs text-gray-400">View Layer</div>
        </div>
      </div>
      <div class="text-left text-sm text-gray-300 space-y-2">
        <div class="flex items-center gap-2">
          <span class="text-[#bd93f9]">•</span>
          <span>表格：设置单元格颜色</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[#bd93f9]">•</span>
          <span>图表：更新数据源</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[#bd93f9]">•</span>
          <span>组件特有视图操作</span>
        </div>
      </div>
    </div>
  </div>
  
  <div v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 700 } }" class="flex items-center gap-4 text-xs text-gray-400 mt-2">
    <div class="flex items-center gap-2">
      <div class="w-3 h-3 rounded bg-[#50fa7b]/30 border border-[#50fa7b]/50"></div>
      <span>所有组件通用</span>
    </div>
    <div class="i-carbon-arrow-right text-gray-600"></div>
    <div class="flex items-center gap-2">
      <div class="w-3 h-3 rounded bg-[#8be9fd]/30 border border-[#8be9fd]/50"></div>
      <span>配置面板映射</span>
    </div>
    <div class="i-carbon-arrow-right text-gray-600"></div>
    <div class="flex items-center gap-2">
      <div class="w-3 h-3 rounded bg-[#bd93f9]/30 border border-[#bd93f9]/50"></div>
      <span>组件视图特有</span>
    </div>
  </div>
</div>

<!--
同时我们组件还有一个比较重要的功能是自定义 JS。
在之前的设计中，组件的自定义 JS 的代码完全由组件开发者自己实现而且耦合在自身的业务代码中，导致代码冗长难以阅读。

在新预览的设计中，我们给组件的自定义 JS 分成三个层级。

1:通用层，代码所有组件肯定都有的东西，比如隐藏显示，这些无须组件开发者自己实现，只要组件开发者创建了一个组件，那么它就会自动拥有这些自定义 JS。

2: 配置面板层，当一个组件在 meta 中声明使用某个配置面板组件时，那么它就会自动拥有这个配置面板组件所携带的 JS API。比如表格，标题等组件都有跑马灯配置，那么他们就自动拥有了跑马灯相关的 JS API 而无须组件开发者实现。

3: 最后就是组件自己需要实现的 JS API，它一般和组件的视图相关，是某个组件绝对独有的东西。
我们通过对 JS API 的三层划分，并且把组件的 JS API 和本身业务逻辑拆分开来，既使得组件核心逻辑更加简洁，也使得整个 JS API 功能变得可插拔。
-->

---
title: 单元测试覆盖率
layout: center
clicks: 1
---

<div class="abs-tl m-10 flex items-center gap-2">
  <div class="w-3 h-3 rounded-full bg-[#bd93f9] shadow-[0_0_8px_#bd93f9]"></div>
  <div class="text-[#bd93f9] font-bold tracking-widest uppercase">提升工具减熵因子 (T)：单元测试覆盖率 100%</div>
</div>

<div class="w-full max-w-4xl mx-auto mt-12">
  <div v-click="1" class="grid grid-cols-7 gap-1 text-center text-xs font-bold mb-2 px-2 opacity-60">
    <div class="col-span-2 text-left">包名</div>
    <div>测试文件</div>
    <div>测试用例</div>
    <div class="col-span-3">覆盖率</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 0 } }" class="grid grid-cols-7 gap-1 items-center p-3 bg-white/5 rounded-lg mb-2 border border-white/10 hover:bg-white/10 transition-all group">
    <div class="col-span-2 font-mono text-[#bd93f9] font-semibold text-left">duchamp-core</div>
    <div class="text-center text-gray-300">97</div>
    <div class="text-center text-gray-300">877</div>
    <div class="col-span-3 flex items-center gap-2">
      <div class="flex-1 h-2 bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#bd93f9] to-[#ff79c6] rounded-full" style="width: 100%"></div></div>
      <span class="text-[#50fa7b] font-bold text-xs w-12">100%</span>
    </div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 100 } }" class="grid grid-cols-7 gap-1 items-center p-3 bg-white/5 rounded-lg mb-2 border border-white/10 hover:bg-white/10 transition-all group">
    <div class="col-span-2 font-mono text-[#bd93f9] font-semibold text-left">duchamp-widgets</div>
    <div class="text-center text-gray-300">90</div>
    <div class="text-center text-gray-300">646</div>
    <div class="col-span-3 flex items-center gap-2">
      <div class="flex-1 h-2 bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#bd93f9] to-[#ff79c6] rounded-full" style="width: 100%"></div></div>
      <span class="text-[#50fa7b] font-bold text-xs w-12">100%</span>
    </div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 200 } }" class="grid grid-cols-7 gap-1 items-center p-3 bg-white/5 rounded-lg mb-2 border border-white/10 hover:bg-white/10 transition-all group">
    <div class="col-span-2 font-mono text-[#bd93f9] font-semibold text-left">duchamp-graph</div>
    <div class="text-center text-gray-300">47</div>
    <div class="text-center text-gray-300">415</div>
    <div class="col-span-3 flex items-center gap-2">
      <div class="flex-1 h-2 bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#bd93f9] to-[#ff79c6] rounded-full" style="width: 100%"></div></div>
      <span class="text-[#50fa7b] font-bold text-xs w-12">100%</span>
    </div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 300 } }" class="grid grid-cols-7 gap-1 items-center p-3 bg-white/5 rounded-lg mb-2 border border-white/10 hover:bg-white/10 transition-all group">
    <div class="col-span-2 font-mono text-[#bd93f9] font-semibold text-left">duchamp-preview</div>
    <div class="text-center text-gray-300">56</div>
    <div class="text-center text-gray-300">363</div>
    <div class="col-span-3 flex items-center gap-2">
      <div class="flex-1 h-2 bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#bd93f9] to-[#ff79c6] rounded-full" style="width: 100%"></div></div>
      <span class="text-[#50fa7b] font-bold text-xs w-12">100%</span>
    </div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 400 } }" class="grid grid-cols-7 gap-1 items-center p-3 bg-white/5 rounded-lg mb-2 border border-white/10 hover:bg-white/10 transition-all group">
    <div class="col-span-2 font-mono text-[#bd93f9] font-semibold text-left">duchamp-utils</div>
    <div class="text-center text-gray-300">19</div>
    <div class="text-center text-gray-300">216</div>
    <div class="col-span-3 flex items-center gap-2">
      <div class="flex-1 h-2 bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#bd93f9] to-[#ff79c6] rounded-full" style="width: 100%"></div></div>
      <span class="text-[#50fa7b] font-bold text-xs w-12">100%</span>
    </div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 500 } }" class="grid grid-cols-7 gap-1 items-center p-3 bg-white/5 rounded-lg mb-2 border border-white/10 hover:bg-white/10 transition-all group">
    <div class="col-span-2 font-mono text-[#bd93f9] font-semibold text-left">duchamp-components</div>
    <div class="text-center text-gray-300">9</div>
    <div class="text-center text-gray-300">51</div>
    <div class="col-span-3 flex items-center gap-2">
      <div class="flex-1 h-2 bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#bd93f9] to-[#ff79c6] rounded-full" style="width: 100%"></div></div>
      <span class="text-[#50fa7b] font-bold text-xs w-12">100%</span>
    </div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 600 } }" class="grid grid-cols-7 gap-1 items-center p-3 bg-white/5 rounded-lg mb-2 border border-white/10 hover:bg-white/10 transition-all group">
    <div class="col-span-2 font-mono text-[#bd93f9] font-semibold text-left">duchamp-compatibility</div>
    <div class="text-center text-gray-300">3</div>
    <div class="text-center text-gray-300">23</div>
    <div class="col-span-3 flex items-center gap-2">
      <div class="flex-1 h-2 bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#bd93f9] to-[#ff79c6] rounded-full" style="width: 100%"></div></div>
      <span class="text-[#50fa7b] font-bold text-xs w-12">100%</span>
    </div>
  </div>
</div>

<!--
新预览除了在架构层面实现熵减以外，我们还尝试通过提升工具熵减因子来实现熵减。

首先想到的就是补充单元测试，我们在一开始就秉承着一个原则：单元测试覆盖率从 99% 降到 90% 很容易，但是从 100% 降到 99% 很困难。

[click] 所以我们从一开始就约束新预览的代码，除了 React Func 之外必须实现 100% 的单元测试覆盖率。由于我们把这个约束增加到了 pr-check 中，不满足的话根本无法合并代码，所以 100% 单元测试覆盖率这项要求自然而然的一种持续下去并永远不会下降。这也实现了我们对让做正确的事情更简单的愿景，因为只能这么做。
-->

---
title: 严格的 lint 检查
layout: center
clicks: 1
---

<div class="abs-tl m-10 flex items-center gap-2">
  <div class="w-3 h-3 rounded-full bg-[#bd93f9] shadow-[0_0_8px_#bd93f9]"></div>
  <div class="text-[#bd93f9] font-bold tracking-widest uppercase">提升工具减熵因子 (T)：严格的 lint 检查</div>
</div>

<div class="w-full max-w-5xl mx-auto mt-12">
  <div class="grid grid-cols-3 gap-4">
  <div v-click="1" v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 0 } }" class="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
      <div class="flex items-center gap-2 mb-3">
        <div class="i-carbon-plug text-2xl text-[#8be9fd]"></div>
        <span class="font-bold text-[#8be9fd]">12+ 插件集成</span>
      </div>
      <div class="text-xs text-gray-400 space-y-1">
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> typescript-eslint (strict)</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> eslint-plugin-react-hooks</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> eslint-plugin-react-refresh</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> eslint-plugin-import-x</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> eslint-plugin-unused-imports</div>
      </div>
    </div>
    
  <div v-click="1" v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 100 } }" class="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
      <div class="flex items-center gap-2 mb-3">
        <div class="i-carbon-code text-2xl text-[#ff79c6]"></div>
        <span class="font-bold text-[#ff79c6]">TypeScript 严格模式</span>
      </div>
      <div class="text-xs text-gray-400 space-y-1">
        <div class="flex items-center gap-1"><span class="text-[#ff5555]">✗</span> 禁止使用 enum</div>
        <div class="flex items-center gap-1"><span class="text-[#ff5555]">✗</span> 禁止使用 any</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> 一致的类型导入/导出</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> 必须显式成员访问性</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> 无不必要条件检查</div>
      </div>
    </div>
    
  <div v-click="1" v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 200 } }" class="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
      <div class="flex items-center gap-2 mb-3">
        <div class="i-carbon-logo-react text-2xl text-[#61dafb]"></div>
        <span class="font-bold text-[#61dafb]">React 规范</span>
      </div>
      <div class="text-xs text-gray-400 space-y-1">
        <div class="flex items-center gap-1"><span class="text-[#ff5555]">✗</span> 禁止 React.xxx 形式</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> exhaustive-deps 强制</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> fast-refresh 兼容检查</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> 条件渲染泄漏检测</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> 自闭合组件强制</div>
      </div>
    </div>
    
  <div v-click="1" v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 300 } }" class="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
      <div class="flex items-center gap-2 mb-3">
        <div class="i-carbon-data-share text-2xl text-[#ffb86c]"></div>
        <span class="font-bold text-[#ffb86c]">导入规范</span>
      </div>
      <div class="text-xs text-gray-400 space-y-1">
        <div class="flex items-center gap-1"><span class="text-[#ff5555]">✗</span> 禁止相对路径跨包引入</div>
        <div class="flex items-center gap-1"><span class="text-[#ff5555]">✗</span> 禁止使用 lodash</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> 导入自动排序 (A-Z)</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> 未使用导入自动移除</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> 禁止重复导入</div>
      </div>
    </div>
    
  <div v-click="1" v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 400 } }" class="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
      <div class="flex items-center gap-2 mb-3">
        <div class="i-carbon-folder-details text-2xl text-[#f1fa8c]"></div>
        <span class="font-bold text-[#f1fa8c]">文件结构约束</span>
      </div>
      <div class="text-xs text-gray-400 space-y-1">
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> index.ts 仅允许导入导出</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> constant.ts 禁止定义函数</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> widgets 路径层级限制</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> mobile/desktop 分离</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> 禁止默认导出</div>
      </div>
    </div>
    
  <div v-click="1" v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 500 } }" class="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
      <div class="flex items-center gap-2 mb-3">
        <div class="i-carbon-chat text-2xl text-[#bd93f9]"></div>
        <span class="font-bold text-[#bd93f9]">注释与测试</span>
      </div>
      <div class="text-xs text-gray-400 space-y-1">
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> eslint-disable 必须说明</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> 未使用禁用指令报错</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> vitest 规则集成</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> 注释格式标准化</div>
        <div class="flex items-center gap-1"><span class="text-[#50fa7b]">✓</span> Prettier 自动格式化</div>
      </div>
    </div>
  </div>
</div>

<!--
同时我们对新预览的代码也配置了极其严格的代码 lint 约束，比如不能使用 any，比如 react hooks 的依赖数组必须严格匹配，甚至都不允许使用不必要的可选链操作符。甚至我们手写了一堆自定义的 lint 来保证代码风格的一致且减少容易出 bug 的写法。同时我们也把 lint 检查放到 pr-check 中，只要不符合这些 lint 的规范则不允许合并代码。

所以在这里特别感谢 kira 实现的 pr-check 流程和 聪聪实现的 check 失败时的 AI 解读，极大的提高了我们的开发效率。
-->

---
title: 技术分享
clicks: 1
---

<div class="abs-tl m-10 flex items-center gap-2">
  <div class="w-3 h-3 rounded-full bg-[#ff5555] shadow-[0_0_8px_#ff5555]"></div>
  <div class="text-[#ff5555] font-bold tracking-widest uppercase">优化开发模式成熟度 (P)：技术分享</div>
</div>

<div class="w-full max-w-6xl mx-auto mt-30 flex gap-10 items-center">
  <!-- 左侧：大数字统计 -->
  <div v-click="1" class="flex flex-col items-center justify-center min-w-48">
    <div v-motion :initial="{ scale: 0.5, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { duration: 600, type: 'spring' } }" class="text-8xl font-black bg-gradient-to-br from-[#ff5555] via-[#ff79c6] to-[#bd93f9] bg-clip-text text-transparent">
      26
    </div>
    <div class="text-gray-400 text-sm mt-2">次技术分享</div>
    <div v-motion :initial="{ y: 10, opacity: 0 }" :enter="{ y: 0, opacity: 1 }" class="mt-4 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs text-gray-300 flex gap-2">
      <div>📅</div>
      平均每两周一次
    </div>
  </div>
  
  <!-- 右侧：分享类型分布 -->
  <div class="flex-1 space-y-3">
    <div v-click="1" v-motion :initial="{ x: 30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 0 } }" class="flex items-center gap-3">
      <div class="w-28 text-sm text-gray-300 text-right">工作内容分享</div>
      <div class="flex-1 h-6 bg-white/5 rounded-full overflow-hidden">
        <div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full flex items-center justify-end pr-2" style="width: 100%">
          <span class="text-xs font-bold text-white">13</span>
        </div>
      </div>
    </div>
    <div v-click="1" v-motion :initial="{ x: 30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 80 } }" class="flex items-center gap-3">
      <div class="w-28 text-sm text-gray-300 text-right">Live Coding</div>
      <div class="flex-1 h-6 bg-white/5 rounded-full overflow-hidden">
        <div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full flex items-center justify-end pr-2" style="width: 38.5%">
          <span class="text-xs font-bold text-white">5</span>
        </div>
      </div>
    </div>

  <div v-click="1" v-motion :initial="{ x: 30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 160 } }" class="flex items-center gap-3">
      <div class="w-28 text-sm text-gray-300 text-right">React</div>
      <div class="flex-1 h-6 bg-white/5 rounded-full overflow-hidden">
        <div class="h-full bg-gradient-to-r from-[#61dafb] to-[#bd93f9] rounded-full flex items-center justify-end pr-2" style="width: 23%">
          <span class="text-xs font-bold text-white">3</span>
        </div>
      </div>
    </div>

  <div v-click="1" v-motion :initial="{ x: 30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 240 } }" class="flex items-center gap-3">
      <div class="w-28 text-sm text-gray-300 text-right">Git</div>
      <div class="flex-1 h-6 bg-white/5 rounded-full overflow-hidden">
        <div class="h-full bg-gradient-to-r from-[#f14e32] to-[#ffb86c] rounded-full flex items-center justify-end pr-2" style="width: 15.4%">
          <span class="text-xs font-bold text-white">2</span>
        </div>
      </div>
    </div>

  <div v-click="1" v-motion :initial="{ x: 30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 320 } }" class="flex items-center gap-3">
      <div class="w-28 text-sm text-gray-300 text-right">TypeScript</div>
      <div class="flex-1 h-6 bg-white/5 rounded-full overflow-hidden">
        <div class="h-full bg-gradient-to-r from-[#3178c6] to-[#8be9fd] rounded-full flex items-center justify-end pr-2" style="width: 7.7%">
          <span class="text-xs font-bold text-white">1</span>
        </div>
      </div>
    </div>

  <div v-click="1" v-motion :initial="{ x: 30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 400 } }" class="flex items-center gap-3">
      <div class="w-28 text-sm text-gray-300 text-right">CSS</div>
      <div class="flex-1 h-6 bg-white/5 rounded-full overflow-hidden">
        <div class="h-full bg-gradient-to-r from-[#264de4] to-[#ff79c6] rounded-full flex items-center justify-end pr-2" style="width: 7.7%">
          <span class="text-xs font-bold text-white">1</span>
        </div>
      </div>
    </div>

  <div v-click="1" v-motion :initial="{ x: 30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 480 } }" class="flex items-center gap-3">
      <div class="w-28 text-sm text-gray-300 text-right">AI Agent</div>
      <div class="flex-1 h-6 bg-white/5 rounded-full overflow-hidden">
        <div class="h-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] rounded-full flex items-center justify-end pr-2" style="width: 7.7%">
          <span class="text-xs font-bold text-white">1</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!--
另外，由于我们是一个团队，所以让更多的人了解我们的项目和提高团队成员的技术水平也有助于减少项目的熵值。

[click]在 2025 年全年，我共完成了 26 次分享，先不说这些分享是否给其他同学带来些许收获，但是对我来说还是很有益处的，比如在工作内容分享中，几乎每次都可以在分享的时候能够找到自身代码设计和实现上的一些问题。

我觉得我现在进入了一个正反馈循环中，就是越在周会中进行分享，也越想继续分享。同时我也想让这种正反馈体验落实到其他人身上，于是我在周会中增加了一个流程，既每个人都需要在周会中来吐槽一下现在的问题，这其中有两个目的，一是让大家积极的去发现当下存在的问题并试图解决，令一个就是让大家去熟悉在周会上进行发言，从而喜欢上这种感觉，目前这种流程还在试运行阶段，后面看一下效果。
-->

---
title: 新预览重构性能提升
layout: center
class: text-center
---

# 新预览重构性能提升

<!--
当然了，我们也没有忘记预览重构的本职目的：提升预览模式下的性能。
-->

---
title: 简单模板性能提升
clicks: 1
---

<div class="abs-tl m-10 flex items-center gap-2">
  <div class="w-3 h-3 rounded-full bg-[#50fa7b] shadow-[0_0_8px_#50fa7b]"></div>
  <div class="text-[#50fa7b] font-bold tracking-widest uppercase">性能提升：简单模板加载耗时对比</div>
</div>

<div class="w-full max-w-4xl mx-auto mt-8">
  <div v-click="1" class="grid grid-cols-12 gap-2 text-center text-xs font-bold mb-3 px-2 opacity-60">
    <div class="col-span-4 text-left">模板名称</div>
    <div class="col-span-6">加载耗时对比</div>
    <div class="col-span-2">提升</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 0 } }" class="grid grid-cols-12 gap-2 items-center p-3 bg-white/5 rounded-lg mb-2 border border-white/10 hover:bg-white/10 transition-all">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm">tab场景</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-12">1.93s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 80%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 43%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-12 text-right">3.59s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 46%</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 80 } }" class="grid grid-cols-12 gap-2 items-center p-3 bg-white/5 rounded-lg mb-2 border border-white/10 hover:bg-white/10 transition-all">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm">复杂指标卡</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-12">0.58s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 32%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 13%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-12 text-right">1.45s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 60%</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 160 } }" class="grid grid-cols-12 gap-2 items-center p-3 bg-white/5 rounded-lg mb-2 border border-white/10 hover:bg-white/10 transition-all">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm">明细表格_200数据量</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-12">2.04s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 71%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 46%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-12 text-right">3.18s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 36%</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 240 } }" class="grid grid-cols-12 gap-2 items-center p-3 bg-white/5 rounded-lg mb-2 border border-white/10 hover:bg-white/10 transition-all">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm">多控件联动查询</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-12">1.72s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 53%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 38%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-12 text-right">2.36s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 27%</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 320 } }" class="grid grid-cols-12 gap-2 items-center p-3 bg-white/5 rounded-lg mb-2 border border-white/10 hover:bg-white/10 transition-all">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm">移动端综合模板</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-12">0.47s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 37%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 10%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-12 text-right">1.65s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 71%</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 400 } }" class="grid grid-cols-12 gap-2 items-center p-3 bg-white/5 rounded-lg mb-2 border border-white/10 hover:bg-white/10 transition-all">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm truncate" title="多控件联动查询_带扩展图表">多控件联动_扩展图表</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-12">2.00s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 80%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 44%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-12 text-right">3.60s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 44%</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 480 } }" class="grid grid-cols-12 gap-2 items-center p-3 bg-white/5 rounded-lg mb-2 border border-white/10 hover:bg-white/10 transition-all">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm truncate" title="tab场景_带扩展图表">tab场景_扩展图表</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-12">2.71s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 100%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 61%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-12 text-right">4.47s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 39%</div>
  </div>

  <div v-click="1" v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 600 } }" class="mt-4 flex items-center justify-center gap-6 text-xs">
    <div class="flex items-center gap-2">
      <div class="w-3 h-3 rounded-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd]"></div>
      <span class="text-gray-300">新预览</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="w-3 h-3 rounded-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] opacity-50"></div>
      <span class="text-gray-300">旧预览</span>
    </div>
    <div class="px-3 py-1 bg-[#50fa7b]/20 rounded-full border border-[#50fa7b]/30">
      <span class="text-[#50fa7b] font-bold">平均提升 46%</span>
    </div>
  </div>
</div>

<!--
目前 FVS 预览模式已经发布，一下是性能测试同学实际进行的性能测试结果。

[click] 针对构造的简单模板，新预览都有或多或少的性能提升，平均提升 46%
-->

---
title: 复杂模板性能提升
clicks: 1
---

<div class="abs-tl m-10 flex items-center gap-2">
  <div class="w-3 h-3 rounded-full bg-[#50fa7b] shadow-[0_0_8px_#50fa7b]"></div>
  <div class="text-[#50fa7b] font-bold tracking-widest uppercase">性能提升：复杂模板加载耗时对比（N×M = 每页N组件 × M页）</div>
</div>

<div class="w-full max-w-4xl mx-auto mt-16">
  <div v-click="1" class="grid grid-cols-12 gap-2 text-center text-xs font-bold mb-3 px-2 opacity-60">
    <div class="col-span-4 text-left">模板规格</div>
    <div class="col-span-6">加载耗时对比</div>
    <div class="col-span-2">提升</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 0 } }" class="grid grid-cols-12 gap-2 items-center p-2 bg-white/5 rounded-lg mb-1.5 border border-white/10">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm">90×1</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-14">7.56s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 12%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 9%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-14 text-right">9.52s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 21%</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 60 } }" class="grid grid-cols-12 gap-2 items-center p-2 bg-white/5 rounded-lg mb-1.5 border border-white/10">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm">90×5</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-14">8.10s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 13%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 10%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-14 text-right">10.38s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 22%</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 120 } }" class="grid grid-cols-12 gap-2 items-center p-2 bg-white/5 rounded-lg mb-1.5 border border-white/10">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm">90×20</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-14">9.08s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 15%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 11%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-14 text-right">12.03s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 25%</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 180 } }" class="grid grid-cols-12 gap-2 items-center p-2 bg-white/5 rounded-lg mb-1.5 border border-white/10">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm">90×50</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-14">12.10s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 18%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 15%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-14 text-right">14.51s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 17%</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 240 } }" class="grid grid-cols-12 gap-2 items-center p-2 bg-white/5 rounded-lg mb-1.5 border border-white/10">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm">150×1</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-14">7.78s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 12%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 10%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-14 text-right">9.65s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 19%</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 300 } }" class="grid grid-cols-12 gap-2 items-center p-2 bg-white/5 rounded-lg mb-1.5 border border-white/10">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm">150×5</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-14">7.81s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 13%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 10%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-14 text-right">10.61s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 26%</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 360 } }" class="grid grid-cols-12 gap-2 items-center p-2 bg-white/5 rounded-lg mb-1.5 border border-white/10">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm">150×20</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-14">8.56s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 40%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 11%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-14 text-right">32.16s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 73%</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 420 } }" class="grid grid-cols-12 gap-2 items-center p-2 bg-white/5 rounded-lg mb-1.5 border border-white/10">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm">150×50</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-14">9.85s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 99%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 12%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-14 text-right">78.88s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 88%</div>
  </div>

  <div v-click="1" v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 500 } }" class="mt-3 flex items-center justify-center gap-6 text-xs">
    <div class="flex items-center gap-2">
      <div class="w-3 h-3 rounded-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd]"></div>
      <span class="text-gray-300">新预览</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="w-3 h-3 rounded-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] opacity-50"></div>
      <span class="text-gray-300">旧预览</span>
    </div>
    <div class="px-3 py-1 bg-[#50fa7b]/20 rounded-full border border-[#50fa7b]/30">
      <span class="text-[#50fa7b] font-bold">最高提升 88%</span>
    </div>
  </div>
</div>

<!--
在这个数据中我们可以看出，对于越复杂的模板，新预览的性能提升效果越明显。
-->

---
title: 客户 bug 性能提升
clicks: 1
---

<div class="abs-tl m-10 flex items-center gap-2">
  <div class="w-3 h-3 rounded-full bg-[#50fa7b] shadow-[0_0_8px_#50fa7b]"></div>
  <div class="text-[#50fa7b] font-bold tracking-widest uppercase">性能提升：客户 bug 场景加载耗时对比</div>
</div>

<div class="w-full max-w-4xl mx-auto mt-18">
  <div v-click="1" class="grid grid-cols-12 gap-2 text-center text-xs font-bold mb-3 px-2 opacity-60">
    <div class="col-span-4 text-left">客户场景</div>
    <div class="col-span-6">加载耗时对比</div>
    <div class="col-span-2">提升</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 0 } }" class="grid grid-cols-12 gap-2 items-center p-2 bg-white/5 rounded-lg mb-1.5 border border-white/10">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm truncate" title="湖南大学2023年个人年度报告">湖南大学年度报告</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-12">0.41s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 16%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 4%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-12 text-right">1.57s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 74%</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 60 } }" class="grid grid-cols-12 gap-2 items-center p-2 bg-white/5 rounded-lg mb-1.5 border border-white/10">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm truncate" title="财务决策支撑系统-内置数据集">财务决策支撑系统</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-12">0.53s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 23%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 5%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-12 text-right">2.25s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 76%</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 120 } }" class="grid grid-cols-12 gap-2 items-center p-2 bg-white/5 rounded-lg mb-1.5 border border-white/10">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm">生产调度中心</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-12">1.24s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 25%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 12%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-12 text-right">2.47s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 50%</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 180 } }" class="grid grid-cols-12 gap-2 items-center p-2 bg-white/5 rounded-lg mb-1.5 border border-white/10">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm">OGCIO DASHBOARD_V9</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-12">2.13s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 34%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 21%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-12 text-right">3.41s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 38%</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 240 } }" class="grid grid-cols-12 gap-2 items-center p-2 bg-white/5 rounded-lg mb-1.5 border border-white/10">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm">整体运营态势无数据</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-12">2.28s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 34%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 23%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-12 text-right">3.39s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 33%</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 300 } }" class="grid grid-cols-12 gap-2 items-center p-2 bg-white/5 rounded-lg mb-1.5 border border-white/10">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm">数字化服务指挥中心</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-12">5.83s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 97%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 58%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-12 text-right">9.73s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 40%</div>
  </div>
  
  <div v-click="1" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 360 } }" class="grid grid-cols-12 gap-2 items-center p-2 bg-white/5 rounded-lg mb-1.5 border border-white/10">
    <div class="col-span-4 font-mono text-[#8be9fd] font-semibold text-left text-sm">125427-预览慢</div>
    <div class="col-span-6 flex items-center gap-2">
      <span class="text-xs font-bold text-[#50fa7b] w-12">3.39s</span>
      <div class="flex-1 relative h-5">
        <div class="absolute inset-0 h-full bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] rounded-full opacity-50" style="width: 72%"></div></div>
        <div class="absolute inset-0 h-full rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] rounded-full" style="width: 34%"></div></div>
      </div>
      <span class="text-xs text-gray-400 w-12 text-right">7.17s</span>
    </div>
    <div class="col-span-2 text-[#50fa7b] font-bold text-sm">↓ 53%</div>
  </div>

  <div v-click="1" v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 450 } }" class="mt-3 flex items-center justify-center gap-6 text-xs">
    <div class="flex items-center gap-2">
      <div class="w-3 h-3 rounded-full bg-gradient-to-r from-[#50fa7b] to-[#8be9fd]"></div>
      <span class="text-gray-300">新预览</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="w-3 h-3 rounded-full bg-gradient-to-r from-[#ff5555] to-[#ff79c6] opacity-50"></div>
      <span class="text-gray-300">旧预览</span>
    </div>
    <div class="px-3 py-1 bg-[#50fa7b]/20 rounded-full border border-[#50fa7b]/30">
      <span class="text-[#50fa7b] font-bold">最高提升 76%</span>
    </div>
  </div>
</div>

<!--
而放到实际客户的模板中，以上都是提过性能 bug 的客户目标，我们看到针对客户的模板新预览提升效果更加明显。因为客户都相对比较复杂。
-->

---
title: 性能优化总结
layout: center
---

<div class="flex flex-col items-center justify-center">
  <h1 v-motion :initial="{ y: -30, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { duration: 600 } }" class="text-4xl font-extrabold mb-8 !text-transparent bg-clip-text bg-gradient-to-r from-[#50fa7b] via-[#8be9fd] to-[#bd93f9]">
    新预览重构性能优化总结
  </h1>
  
  <div v-motion :initial="{ scale: 0.8, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { duration: 500 } }" class="relative mb-1">
    <div class="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#50fa7b] to-[#8be9fd]">
      50%
    </div>
  </div>
  
  <div class="grid grid-cols-3 gap-6 mt-8 max-w-3xl">
    <div v-motion :initial="{ y: 30, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 100 } }" class="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10">
      <div class="text-3xl font-bold text-[#50fa7b] mb-1">46%</div>
      <div class="text-xs text-gray-400 text-center">简单模板<br/>平均提升</div>
    </div>
    <div v-motion :initial="{ y: 30, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 200 } }" class="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10">
      <div class="text-3xl font-bold text-[#8be9fd] mb-1">88%</div>
      <div class="text-xs text-gray-400 text-center">复杂模板<br/>最高提升</div>
    </div>
    <div v-motion :initial="{ y: 30, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 300 } }" class="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10">
      <div class="text-3xl font-bold text-[#bd93f9] mb-1">76%</div>
      <div class="text-xs text-gray-400 text-center">客户场景<br/>最高提升</div>
    </div>
  </div>
  
  <div v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 500 } }" class="mt-10 px-8 py-4 bg-gradient-to-r from-[#50fa7b]/10 via-[#8be9fd]/10 to-[#bd93f9]/10 rounded-2xl border border-[#50fa7b]/30">
    <div class="flex items-center gap-3">
      <div class="i-carbon-checkmark-filled text-3xl text-[#50fa7b]"></div>
      <span class="text-xl font-bold text-white">新预览重构圆满成功！</span>
    </div>
  </div>
</div>

<!--
所以针对本次新预览重构，我们基本上达成了任意模板的性能均得到提升且平均性能提升 50% 的预期，再加上在新预览中我们对减熵所做的操作，最终可以认为新预览重构得到圆满成功。
-->

---
title: 在一体化平台上线新预览
layout: center
---

<style>
@keyframes progress-flow {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}
@keyframes check-pop {
  0% { transform: scale(0) rotate(-45deg); }
  50% { transform: scale(1.2) rotate(0deg); }
  100% { transform: scale(1) rotate(0deg); }
}
@keyframes node-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(80, 250, 123, 0.4); }
  50% { box-shadow: 0 0 0 10px rgba(80, 250, 123, 0); }
}
.progress-line {
  background: linear-gradient(90deg, #50fa7b, #8be9fd, #50fa7b);
  background-size: 200% 100%;
  animation: progress-flow 2s linear infinite;
}
.node-current { animation: node-pulse 2s ease-in-out infinite; }
.check-animation { animation: check-pop 0.5s ease-out forwards; }
</style>

<div class="absolute inset-0 overflow-hidden pointer-events-none">
  <div class="absolute top-20 left-1/4 w-64 h-64 bg-[#50fa7b]/8 rounded-full blur-3xl"></div>
  <div class="absolute bottom-20 right-1/4 w-72 h-72 bg-[#8be9fd]/8 rounded-full blur-3xl"></div>
</div>

<div class="flex flex-col items-center gap-10 relative z-10">
  <div class="text-center">
    <div v-motion :initial="{ y: -30, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { duration: 600 } }" class="flex items-center justify-center gap-3 mb-4">
      <div class="w-2 h-2 rounded-full bg-[#50fa7b] animate-pulse"></div>
      <span class="text-sm text-gray-400 tracking-wider">2025 年度重点工作</span>
      <div class="w-2 h-2 rounded-full bg-[#50fa7b] animate-pulse"></div>
    </div>
    <h1 v-motion :initial="{ scale: 0.8, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { delay: 200, type: 'spring' } }" class="text-5xl font-black !text-transparent bg-clip-text bg-gradient-to-r from-[#50fa7b] via-[#8be9fd] to-[#bd93f9]">在一体化平台上线新预览</h1>
    <p v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 400 } }" class="text-gray-400 mt-3">将预览重构的成果落地到一体化平台，实现全平台统一体验</p>
  </div>
  <div v-motion :initial="{ y: 40, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 600, duration: 800 } }" class="w-full max-w-5xl px-12">
    <div class="relative flex items-center justify-between">
      <div class="absolute inset-x-0 top-3 h-0.5 bg-white/10"></div>
      <div class="absolute left-0 top-3 h-0.5 progress-line" style="width: 90%;"></div>
      <div class="relative z-10 flex flex-col items-center gap-2">
        <div v-motion :initial="{ scale: 0 }" :enter="{ scale: 1, transition: { delay: 800, type: 'spring' } }" class="w-6 h-6 rounded-full bg-[#50fa7b] flex items-center justify-center shadow-[0_0_12px_rgba(80,250,123,0.5)]">
          <div class="i-carbon-checkmark text-xs text-black"></div>
        </div>
        <span class="text-xs font-medium text-[#50fa7b] mt-1">合并代码</span>
      </div>
      <div class="relative z-10 flex flex-col items-center gap-2">
        <div v-motion :initial="{ scale: 0 }" :enter="{ scale: 1, transition: { delay: 900, type: 'spring' } }" class="w-6 h-6 rounded-full bg-[#50fa7b] flex items-center justify-center shadow-[0_0_12px_rgba(80,250,123,0.5)]">
          <div class="i-carbon-checkmark text-xs text-black"></div>
        </div>
        <span class="text-xs font-medium text-[#50fa7b] mt-1">跟随发布</span>
      </div>
      <div class="relative z-10 flex flex-col items-center gap-2">
        <div v-motion :initial="{ scale: 0 }" :enter="{ scale: 1, transition: { delay: 1000, type: 'spring' } }" class="w-6 h-6 rounded-full bg-[#50fa7b] flex items-center justify-center shadow-[0_0_12px_rgba(80,250,123,0.5)]">
          <div class="i-carbon-checkmark text-xs text-black"></div>
        </div>
        <span class="text-xs font-medium text-[#50fa7b] mt-1">适配功能</span>
      </div>
      <div class="relative z-10 flex flex-col items-center gap-2">
        <div v-motion :initial="{ scale: 0 }" :enter="{ scale: 1, transition: { delay: 1100, type: 'spring' } }" class="w-6 h-6 rounded-full bg-[#50fa7b] flex items-center justify-center shadow-[0_0_12px_rgba(80,250,123,0.5)]">
          <div class="i-carbon-checkmark text-xs text-black"></div>
        </div>
        <span class="text-xs font-medium text-[#50fa7b] mt-1">完成转测</span>
      </div>
      <div class="relative z-10 flex flex-col items-center gap-2">
        <div v-motion :initial="{ scale: 0 }" :enter="{ scale: 1, transition: { delay: 1200, type: 'spring' } }" class="w-7 h-7 rounded-full bg-gradient-to-br from-[#8be9fd] to-[#bd93f9] flex items-center justify-center node-current shadow-[0_0_15px_rgba(139,233,253,0.5)]">
          <div class="i-carbon-rocket text-xs text-black"></div>
        </div>
        <span class="text-xs font-medium text-[#8be9fd] mt-1">成功发布</span>
      </div>
    </div>
  </div>
  <div v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 1400 } }" class="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#8be9fd]/10 to-[#bd93f9]/10 rounded-full border border-white/10">
    <div class="i-carbon-calendar text-[#8be9fd]"></div>
    <span class="text-sm text-gray-300">预计发布：<span class="text-[#50fa7b] font-semibold">农历年前</span></span>
  </div>
</div>

<!--
在 FVS 新预览成功发布以后，我们有马上开始在一体化平台上线新预览，目前所有代码开发工作已经完成且转测。预计会在农历年放假之前发布。

至此，为期一年的新预览重构终于全部完成。

通过本次新预览重构，我们不仅普适性的优化的所有模板的预览性能，同时重新设计了预览模式底层设计，严格了代码 lint，增加了单元测试 100% 覆盖率的设计，为后续的代码继续优化奠定了基础。

可以说，新预览重构是 FVS 整个生命周期中最有意义的里程碑。
-->

---
title: 存在的问题和改进措施
layout: default
---

<style>
@keyframes float-slow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(255, 85, 85, 0.3); }
  50% { box-shadow: 0 0 40px rgba(255, 85, 85, 0.6); }
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px) rotate(-1deg); }
  75% { transform: translateX(2px) rotate(1deg); }
}
.float-animation { animation: float-slow 6s ease-in-out infinite; }
.pulse-glow-animation { animation: pulse-glow 2s ease-in-out infinite; }
.shake-animation:hover { animation: shake 0.3s ease-in-out; }
</style>

<div class="absolute inset-0 overflow-hidden pointer-events-none">
  <div class="absolute top-10 right-20 w-72 h-72 bg-[#ff5555]/8 rounded-full blur-3xl float-animation"></div>
  <div class="absolute bottom-10 left-20 w-64 h-64 bg-[#ffb86c]/8 rounded-full blur-3xl float-animation" style="animation-delay: -3s;"></div>
</div>

<div class="abs-tl m-10 flex items-center gap-2">
  <div v-motion :initial="{ scale: 0 }" :enter="{ scale: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } }" class="w-3 h-3 rounded-full bg-[#ff5555] pulse-glow-animation"></div>
  <div v-motion :initial="{ x: -20, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 200 } }" class="text-[#ff5555] font-bold tracking-widest uppercase">存在的问题和改进措施</div>
</div>

<div class="mt-20 grid grid-cols-2 gap-8 px-4 relative z-10">
  <div v-motion :initial="{ rotateY: -90, opacity: 0 }" :enter="{ rotateY: 0, opacity: 1, transition: { duration: 800, type: 'spring' } }" class="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-[#ffb86c]/30 backdrop-blur-sm group hover:border-[#ffb86c]/60 hover:shadow-[0_0_30px_rgba(255,184,108,0.2)] transition-all duration-500 shake-animation">
    <div class="flex items-center gap-3 mb-4">
      <div v-motion :initial="{ rotate: -180, scale: 0 }" :enter="{ rotate: 0, scale: 1, transition: { delay: 400, type: 'spring' } }" class="w-12 h-12 rounded-xl bg-[#ffb86c]/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
        <div class="i-carbon-time text-2xl text-[#ffb86c]"></div>
      </div>
      <h3 class="text-xl font-bold text-[#ffb86c]">任务预估不准确</h3>
    </div>
    
  <p v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 600 } }" class="text-sm italic text-gray-300 mb-3 border-l-2 border-[#ffb86c]/50 pl-3">"我们常常高估自己对事物的理解程度"</p>
    
  <div class="space-y-2 text-sm text-gray-300">
      <div v-motion :initial="{ x: -20, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 700 } }" class="flex items-start gap-2 group/item">
        <span class="text-[#ff5555] group-hover/item:animate-pulse">✗</span>
        <span>前期预估与实际执行差异巨大</span>
      </div>
      <div v-motion :initial="{ x: -20, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 800 } }" class="flex items-start gap-2 group/item">
        <span class="text-[#ff5555] group-hover/item:animate-pulse">✗</span>
        <span>对已有业务不了解或自认为了解</span>
      </div>
      <div v-motion :initial="{ x: -20, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 900 } }" class="flex items-start gap-2 group/item">
        <span class="text-[#ff5555] group-hover/item:animate-pulse">✗</span>
        <span>无法将所有业务逻辑装入大脑</span>
      </div>
    </div>
    
  <div v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 1000 } }" class="mt-4 pt-4 border-t border-white/10">
      <div class="text-xs text-[#50fa7b] font-bold mb-2 flex items-center gap-2">
        <div class="i-carbon-arrow-right animate-pulse"></div>
        改进方向
      </div>
      <p class="text-sm text-gray-400">需要一个了解所有业务逻辑的 <span class="text-[#8be9fd] font-semibold">"人"</span> 或 <span class="text-[#8be9fd] font-semibold">"东西"</span>，在修改业务时提供有价值的建议</p>
    </div>
  </div>
  
  <div v-click="1" v-motion :initial="{ rotateY: 90, opacity: 0 }" :enter="{ rotateY: 0, opacity: 1, transition: { duration: 800, delay: 200, type: 'spring' } }" class="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-[#bd93f9]/30 backdrop-blur-sm group hover:border-[#bd93f9]/60 hover:shadow-[0_0_30px_rgba(189,147,249,0.2)] transition-all duration-500 shake-animation">
    <div class="flex items-center gap-3 mb-4">
      <div v-motion :initial="{ rotate: 180, scale: 0 }" :enter="{ rotate: 0, scale: 1, transition: { delay: 600, type: 'spring' } }" class="w-12 h-12 rounded-xl bg-[#bd93f9]/20 flex items-center justify-center group-hover:-rotate-12 transition-transform duration-300">
        <div class="i-carbon-code text-2xl text-[#bd93f9]"></div>
      </div>
      <h3 class="text-xl font-bold text-[#bd93f9]">架构设计更新滞后</h3>
    </div>
    
  <p v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 800 } }" class="text-sm italic text-gray-300 mb-3 border-l-2 border-[#bd93f9]/50 pl-3">"好的代码不是写出来的，而是改出来的"</p>
    
  <div class="space-y-2 text-sm text-gray-300">
      <div v-motion :initial="{ x: 20, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 900 } }" class="flex items-start gap-2 group/item">
        <span class="text-[#ff5555] group-hover/item:animate-pulse">✗</span>
        <span>优秀设计仅在项目初期落地</span>
      </div>
      <div v-motion :initial="{ x: 20, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 1000 } }" class="flex items-start gap-2 group/item">
        <span class="text-[#ff5555] group-hover/item:animate-pulse">✗</span>
        <span>设计随功能迭代逐渐过时</span>
      </div>
      <div v-motion :initial="{ x: 20, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 1100 } }" class="flex items-start gap-2 group/item">
        <span class="text-[#ff5555] group-hover/item:animate-pulse">✗</span>
        <span>特殊处理导致难以维护</span>
      </div>
    </div>
    
  <div v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 1200 } }" class="mt-4 pt-4 border-t border-white/10">
      <div class="text-xs text-[#50fa7b] font-bold mb-2 flex items-center gap-2">
        <div class="i-carbon-arrow-right animate-pulse"></div>
        改进方向
      </div>
      <div class="text-sm text-gray-400 space-y-1">
        <div v-motion :initial="{ x: 10, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 1300 } }" class="flex items-center gap-2"><span class="text-[#50fa7b]">1.</span> 整理现有代码问题</div>
        <div v-motion :initial="{ x: 10, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 1400 } }" class="flex items-center gap-2"><span class="text-[#50fa7b]">2.</span> 思考解决方案</div>
        <div v-motion :initial="{ x: 10, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 1500 } }" class="flex items-center gap-2"><span class="text-[#50fa7b]">3.</span> 提成重构任务逐步处理</div>
      </div>
    </div>
  </div>
</div>

<!--
当前了，所有的事情没有绝对完美的。
通过这次预览重构也暴露了一些问题。

在这次新预览的重构中，一些前期的任务时间预估和最终执行的时间差异巨大。本质原因是因为在进行时间预估之前，对已有的内容并不了解或者自认为了解。最终导致复盘时才发现自己当时想的实在是太简单了。但是把 FVS 中所有的业务实现都装到大脑中且可被随意调用并不存在遗漏，这是一件几乎不可能完成的事情。之前一直在探索有没有行之有效的方法来解决这个问题，比如通过思维导图的方式来建立“索引”，或者说经常把这些业务逻辑拿出来在周会上进行分享等等，今年都因为时间和工作的重心等问题而搁置了，我觉得 FVS 需要一个了解所有业务逻辑和实现方案的“人”或“东西”，从而在对这些业务发生修改时能够给予更有价值的建议。

[click] 另外FVS 中大多优秀的架构设计都是在新预览重构开始之初落地的，原因也很简单，那个时候距离 DDL 还比较遥远。世界上不存在完美的设计，设计只会随着产品功能的迭代而变得逐渐过时，那么我们就需要时时更新我们的设计，不然就又会重蹈覆辙（设计不满足需求 → 特殊处理 → 难以维护）。所以好的代码肯定是一点一点改出来的。虽然我觉得新预览之后，在编写业务代码中间已经会穿插一些架构优化的代码调整了（之前几乎不会有），但是我仍觉得远远不够且参与的人员特别少。我觉得可以一点一点来，先有意识得去整理现在代码存在而问题，然后再去思考解决方案，然后把这些都提成重构任务，这样就可以逐步进行处理了。
-->

---
title: 未来规划和展望
layout: default
---

<style>
@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}
@keyframes rise-up {
  0% { transform: translateY(100%) scale(0.8); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}
@keyframes glow-pulse {
  0%, 100% { filter: drop-shadow(0 0 5px currentColor); }
  50% { filter: drop-shadow(0 0 20px currentColor); }
}
@keyframes rotate-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.twinkle-star { animation: twinkle 2s ease-in-out infinite; }
.glow-icon { animation: glow-pulse 2s ease-in-out infinite; }
.rotate-slow { animation: rotate-slow 20s linear infinite; }
</style>

<!-- 星空背景 -->
<div class="absolute inset-0 overflow-hidden pointer-events-none">
  <!-- 旋转光环 -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#8be9fd]/10 rotate-slow"></div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#bd93f9]/10 rotate-slow" style="animation-direction: reverse; animation-duration: 15s;"></div>
  
  <!-- 闪烁星星 -->
  <div class="absolute top-20 left-[15%] w-1 h-1 bg-[#8be9fd] rounded-full twinkle-star"></div>
  <div class="absolute top-32 right-[20%] w-1.5 h-1.5 bg-[#50fa7b] rounded-full twinkle-star" style="animation-delay: 0.5s;"></div>
  <div class="absolute top-48 left-[30%] w-1 h-1 bg-[#bd93f9] rounded-full twinkle-star" style="animation-delay: 1s;"></div>
  <div class="absolute bottom-32 right-[35%] w-1 h-1 bg-[#ff79c6] rounded-full twinkle-star" style="animation-delay: 1.5s;"></div>
  <div class="absolute bottom-48 left-[25%] w-1.5 h-1.5 bg-[#ffb86c] rounded-full twinkle-star" style="animation-delay: 0.7s;"></div>
  <div class="absolute top-60 right-[10%] w-1 h-1 bg-[#8be9fd] rounded-full twinkle-star" style="animation-delay: 1.2s;"></div>
  <div class="absolute bottom-20 left-[10%] w-1 h-1 bg-[#50fa7b] rounded-full twinkle-star" style="animation-delay: 0.3s;"></div>
  
  <!-- 渐变光晕 -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[#8be9fd]/10 to-transparent rounded-full blur-3xl"></div>
</div>

<div class="abs-tl m-10 flex items-center gap-2">
  <div v-motion :initial="{ scale: 0, rotate: -180 }" :enter="{ scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 200 } }" class="w-3 h-3 rounded-full bg-[#8be9fd] shadow-[0_0_15px_#8be9fd]"></div>
  <div v-motion :initial="{ y: -20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 300 } }" class="text-[#8be9fd] font-bold tracking-widest uppercase">未来规划和展望</div>
</div>

<div class="mt-25 grid grid-cols-2 gap-8 px-4 relative z-10">
  <!-- 左侧卡片 - 从下方升起 -->
  <div v-motion :initial="{ y: 100, opacity: 0, scale: 0.8 }" :enter="{ y: 0, opacity: 1, scale: 1, transition: { duration: 800, type: 'spring', stiffness: 100 } }" class="relative bg-gradient-to-br from-[#8be9fd]/10 via-white/5 to-transparent rounded-2xl p-6 border border-[#8be9fd]/30 backdrop-blur-sm group hover:border-[#8be9fd]/60 hover:shadow-[0_0_40px_rgba(139,233,253,0.15)] transition-all duration-500 overflow-hidden">
    <!-- 卡片内光效 -->
    <div class="absolute top-0 right-0 w-32 h-32 bg-[#8be9fd]/10 rounded-full blur-2xl group-hover:bg-[#8be9fd]/20 transition-all"></div>
    
  <div class="flex items-center gap-3 mb-4 relative">
      <div v-motion :initial="{ scale: 0 }" :enter="{ scale: 1, transition: { delay: 500, type: 'spring', stiffness: 300 } }" class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8be9fd]/30 to-[#8be9fd]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <div class="i-carbon-education text-2xl text-[#8be9fd] glow-icon"></div>
      </div>
      <h3 class="text-xl font-bold text-[#8be9fd]">增加传道的能力</h3>
    </div>
    
  <p v-motion :initial="{ opacity: 0, x: -20 }" :enter="{ opacity: 1, x: 0, transition: { delay: 600 } }" class="text-sm italic text-gray-300 mb-3 border-l-2 border-[#8be9fd]/50 pl-3 bg-[#8be9fd]/5 py-2 rounded-r">"形而上者谓之道，形而下者谓之器"</p>
    
  <div class="space-y-2 text-sm text-gray-300 mt-4">
      <div v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 700 } }" class="flex items-start gap-2 group/item hover:translate-x-1 transition-transform">
        <span class="text-[#ff5555]">✗</span>
        <span>分享多停留在<span class="text-[#ffb86c] font-semibold">术</span>的层面</span>
      </div>
      <div v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 800 } }" class="flex items-start gap-2 group/item hover:translate-x-1 transition-transform">
        <span class="text-[#ff5555]">✗</span>
        <span>具体技术分享，授人以鱼</span>
      </div>
    </div>
    
  <div v-motion :initial="{ y: 30, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 900 } }" class="mt-4 pt-4 border-t border-white/10">
      <div class="text-xs text-[#50fa7b] font-bold mb-2 flex items-center gap-2">
        <div class="i-carbon-rocket text-sm"></div>
        改进方向
      </div>
      <div class="text-sm text-gray-400">
        <div v-motion :initial="{ scale: 0.8, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { delay: 1000 } }" class="flex items-start gap-2 p-2 rounded-lg hover:bg-[#50fa7b]/10 transition-colors">
          <span class="text-[#50fa7b]">✓</span>
          <span>从<span class="text-[#ffb86c] font-semibold">术</span>到<span class="text-[#8be9fd] font-semibold">道</span>，分享编码的思想和方法</span>
        </div>
        <div v-motion :initial="{ scale: 0.8, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { delay: 1100 } }" class="flex items-start gap-2 p-2 rounded-lg hover:bg-[#50fa7b]/10 transition-colors">
          <span class="text-[#50fa7b]">✓</span>
          <span>授人以渔，而非具体技术</span>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 右侧卡片 - 从下方升起，延迟 -->
  <div v-motion :initial="{ y: 100, opacity: 0, scale: 0.8 }" :enter="{ y: 0, opacity: 1, scale: 1, transition: { duration: 800, delay: 200, type: 'spring', stiffness: 100 } }" class="relative bg-gradient-to-br from-[#bd93f9]/10 via-white/5 to-transparent rounded-2xl p-6 border border-[#bd93f9]/30 backdrop-blur-sm group hover:border-[#bd93f9]/60 hover:shadow-[0_0_40px_rgba(189,147,249,0.15)] transition-all duration-500 overflow-hidden">
    <!-- 卡片内光效 -->
    <div class="absolute top-0 right-0 w-32 h-32 bg-[#bd93f9]/10 rounded-full blur-2xl group-hover:bg-[#bd93f9]/20 transition-all"></div>
    
  <div class="flex items-center gap-3 mb-4 relative">
      <div v-motion :initial="{ scale: 0 }" :enter="{ scale: 1, transition: { delay: 700, type: 'spring', stiffness: 300 } }" class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#bd93f9]/30 to-[#bd93f9]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <div class="i-carbon-idea text-2xl text-[#bd93f9] glow-icon" style="animation-delay: 1s;"></div>
      </div>
      <h3 class="text-xl font-bold text-[#bd93f9]">三思而后行</h3>
    </div>
    
   <p v-motion :initial="{ opacity: 0, x: 20 }" :enter="{ opacity: 1, x: 0, transition: { delay: 800 } }" class="text-sm italic text-gray-300 mb-3 border-l-2 border-[#bd93f9]/50 pl-3 bg-[#bd93f9]/5 py-2 rounded-r">"慢就是顺利，顺利就是快"</p>
    
  <div class="space-y-2 text-sm text-gray-300 mt-4">
      <div v-motion :initial="{ x: 30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 900 } }" class="flex items-start gap-2 group/item hover:translate-x-1 transition-transform">
        <span class="text-[#ff5555]">✗</span>
        <span>急于开始，未思考清楚</span>
      </div>
      <div v-motion :initial="{ x: 30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 1000 } }" class="flex items-start gap-2 group/item hover:translate-x-1 transition-transform">
        <span class="text-[#ff5555]">✗</span>
        <span>执行中发现预期外状况</span>
      </div>
    </div>
    
  <div v-motion :initial="{ y: 30, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 1100 } }" class="mt-4 pt-4 border-t border-white/10">
      <div class="text-xs text-[#50fa7b] font-bold mb-2 flex items-center gap-2">
        <div class="i-carbon-rocket text-sm"></div>
        改进方向
      </div>
      <div class="text-sm text-gray-400">
        <div v-motion :initial="{ scale: 0.8, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { delay: 1200 } }" class="flex items-start gap-2 p-2 rounded-lg hover:bg-[#50fa7b]/10 transition-colors">
          <span class="text-[#50fa7b]">✓</span>
          <span>事先多花时间在<span class="text-[#bd93f9] font-semibold">业务梳理</span>上</span>
        </div>
        <div v-motion :initial="{ scale: 0.8, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { delay: 1300 } }" class="flex items-start gap-2 p-2 rounded-lg hover:bg-[#50fa7b]/10 transition-colors">
          <span class="text-[#50fa7b]">✓</span>
          <span>看似慢，实则<span class="text-[#50fa7b] font-semibold">更快</span></span>
        </div>
      </div>
    </div>
  </div>
</div>

<!--
关于未来的规划和展望，
首先我希望未来能增加自己传道的能力，虽然今年一年进行的分享很多，但是大多都只停留在术上，所谓授人以鱼不如授人以渔。新的一年我需要我进行一些思想上的总结，多向大家分享编码的思想和方法，而非具体的技术。

还有就是以后尽量三思而后行，这是一个老生常谈的问题了，我们总是急于去开始做某件事情，甚至一开始都没有思考清楚。实际执行起来才发现有很多预期外的状况出现甚至需要推倒重来。所以我希望以后再做任何事情能够事先多花费一些时间在已有业务的梳理上，这样看似影响了后续任务的时间，但是如果能够让后续任务进行得更加顺利，那么肯定反而会节省时间。
-->

---
title: 致谢
layout: cover
class: bg-blend-overlay bg-black65
---

<div class="absolute inset-0 overflow-hidden">
  <div class="absolute top-20 left-20 w-64 h-64 bg-[#bd93f9]/10 rounded-full blur-3xl"></div>
  <div class="absolute bottom-20 right-20 w-80 h-80 bg-[#50fa7b]/10 rounded-full blur-3xl"></div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8be9fd]/5 rounded-full blur-3xl"></div>
</div>

<div class="relative z-10 flex flex-col items-center justify-center h-full">
  <div v-motion :initial="{ scale: 0.8, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { duration: 800 } }" class="text-center mb-8">
    <h1 class="text-6xl font-black mb-4 !text-transparent bg-clip-text bg-gradient-to-r from-[#50fa7b] via-[#8be9fd] to-[#bd93f9]">感谢观看</h1>
    <div class="flex items-center justify-center gap-2">
      <div class="h-px w-12 bg-gradient-to-r from-transparent to-[#8be9fd]"></div>
      <span class="text-sm text-gray-400 tracking-widest">THANKS</span>
      <div class="h-px w-12 bg-gradient-to-l from-transparent to-[#8be9fd]"></div>
    </div>
  </div>
  
  <div v-motion :initial="{ y: 30, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 400 } }" class="max-w-lg bg-white/5 rounded-2xl p-8 px-18 border border-white/10 backdrop-blur-sm">
    <div class="text-center gap-2">
      <p class="text-xl text-gray-200 leading-relaxed font-serif">时来岁终莫彷徨，</p>
      <p class="text-xl text-[#bd93f9] leading-relaxed font-serif">蓄力前行路更长。</p>
      <p class="text-xl text-[#ffb86c] leading-relaxed font-serif">只盼大屏编辑器，</p>
      <p class="text-xl text-[#50fa7b] leading-relaxed font-serif">一年更比一年强。</p>
    </div>
  </div>
  
  <p v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 1400 } }" class="mt-8 text-gray-400 text-sm">
    2025 年年度个人复盘 · 完
  </p>
</div>

<div class="abs-bl ml-14 mb-12 flex items-center" v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { delay: 600 } }">
  <img src="https://cdn.sa.net/2025/01/23/Q7RM4B6Yeo1l92m.jpg" class="size-12 object-cover rounded-full border-2 border-[#8be9fd]/50">
  <div class="ml-3 flex flex-col text-left">
    <span class="text-xl font-bold text-white">Alan</span>
    <span class="text-xs text-gray-400">alan@fanruan.com</span>
  </div>
</div>

<!--
最后按照惯例一首打油诗结束我本次的年度复盘：

时来岁终莫彷徨，蓄力前行路更长。
只盼大屏编辑器，一年更比一年强。
-->
