<script setup lang="ts">
import { ref, computed } from 'vue'

const radiusInit = Math.round(Math.random() * 10)

const PI = ref(3.14)

const raduis = ref(radiusInit)

const area = computed((): number => {
  return raduis.value + raduis.value * PI.value
})

setInterval((): void => {
  raduis.value = Math.round(Math.random() * 10)
}, 1000)
</script>

<template>
  <p>半径{{ raduis }}の円の面積を円周率{{ PI }}で計算すると、{{ area }}</p>
</template>
