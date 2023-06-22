<script setup lang="ts">
import OneSection from './components/OneSection.vue'
import { ref } from 'vue'

const taro = ref('田中太郎')
const jiro = ref('鈴木二郎')
</script>

<template>
  <section>
    <h2>Slot の利用</h2>
    <OneSection v-bind:name="taro">
      <p>連絡がつきません</p>
    </OneSection>
    <OneSection v-bind:name="jiro"></OneSection>
  </section>
</template>
