<script setup lang="ts">
import { ref, computed, inject } from 'vue'

const props = defineProps({
  clicks: {
    type: Number,
    default: 0
  }
})

// Some versions of Slidev prefer injected clicks
const injectedClicks = inject('clicks', ref(0))

const params = [
  { symbol: 'S_{team}', name: '团队熵值', desc: '表示系统复杂性、组织混乱度', color: '#ff79c6' },
  { symbol: 'k', name: '行业经验系数', desc: '行业内单位规模下的经验性调整系数，默认为 1', color: '#8be9fd' },
  { symbol: 'C', name: '沟通链路', desc: '与团队人数相关，反映沟通成本', color: '#50fa7b' },
  { symbol: 'L', name: '决策层级', desc: '层级越深，决策路径越长，复杂度呈非线性上升', color: '#f1fa8c' },
  { symbol: 'D', name: '技术复杂度', desc: '如代码量、模块数、耦合度等', color: '#ffb86c' },
  { symbol: 'T', name: '工具减熵因子', desc: '如自动化测试覆盖率、CI/CD、文档完备性等', color: '#bd93f9' },
  { symbol: 'P', name: '开发模式成熟度', desc: '敏捷、DevOps、持续反馈等组织机制带来的有序性', color: '#ff5555' }
]

const currentIndex = computed(() => {
  // Use whichever value is higher to be safe
  const val = Math.max(props.clicks, injectedClicks.value)
  return val - 1
})

const getStyle = (index: number) => {
  if (currentIndex.value === index) {
    return {
      color: params[index].color,
      textShadow: `0 0 15px ${params[index].color}`,
      fontWeight: 'bold',
      scale: '1.1',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }
  }
  return { 
    opacity: currentIndex.value === -1 ? 1 : 0.4,
    transition: 'all 0.3s ease' 
  }
}
</script>

<template>
  <div class="relative flex flex-col items-center justify-center p-8 w-full">
    <!-- Formula Display -->
    <div class="text-4xl mb-12 font-mono">
      <span :style="getStyle(0)">S<sub>team</sub></span>
      <span class="mx-2">=</span>
      <span :style="getStyle(1)">k</span>
      <span class="mx-1">·</span>
      <span>ln(</span>
      <div class="inline-flex flex-col items-center align-middle mx-1">
        <div class="border-b-2 border-current px-2">
          <span :style="getStyle(2)">C</span>
          <span class="mx-1">·</span>
          <span :style="getStyle(3)">L</span>
          <span class="mx-1">·</span>
          <span :style="getStyle(4)">D</span>
        </div>
        <div>
          <span :style="getStyle(5)">T</span>
          <span class="mx-1">·</span>
          <span :style="getStyle(6)">P</span>
        </div>
      </div>
      <span>)</span>
    </div>

    <!-- Description Card -->
    <div class="h-32 w-full max-w-2xl">
      <Transition name="fade" mode="out-in">
        <div v-if="currentIndex >= 0 && currentIndex < params.length" :key="currentIndex" 
             class="bg-gray-800 bg-opacity-50 p-6"
             >
          <div class="flex items-center gap-4 mb-2">
            <span class="text-2xl font-bold" :style="{ color: params[currentIndex].color }">
              {{ params[currentIndex].name }}
            </span>
            <span class="px-2 py-0.5 rounded text-xs bg-gray-700 uppercase tracking-wider">
              {{ params[currentIndex].symbol.replace(/\\text\{(\w+)\}/, '$1') }}
            </span>
          </div>
          <p class="text-gray-300 text-lg leading-relaxed">
            {{ params[currentIndex].desc }}
          </p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

sub {
  font-size: 0.6em;
  vertical-align: sub;
}
</style>
