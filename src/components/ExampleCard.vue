<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()

defineEmits<{
  viewExample: []
}>()
</script>

<template>
  <div class="card group cursor-pointer">
    <div class="mb-4 aspect-video bg-gradient-to-br from-primary-900/30 to-dark-900 rounded-lg flex items-center justify-center">
      <div class="text-6xl group-hover:scale-110 transition-transform duration-300">
        🖥️
      </div>
    </div>
    
    <h3 class="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
      {{ title }}
    </h3>
    
    <p class="text-gray-400 mb-6 leading-relaxed">
      {{ description }}
    </p>
    
    <button
      @click="$emit('viewExample')"
      class="text-primary-400 hover:text-primary-300 font-semibold transition-colors flex items-center gap-2 group"
      aria-label="Voir cet exemple"
    >
      Voir un exemple
      <span class="group-hover:translate-x-1 transition-transform">→</span>
    </button>
  </div>
</template>
