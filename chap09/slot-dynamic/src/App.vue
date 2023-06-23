<script setup lang="ts">
import OneSection from './components/OneSection.vue'
import { ref } from 'vue'

const taroProblemsInit: string[] = ['電話が通じません。', '留守です。']
const taro = ref('田中太郎')
const taroProblems = ref(taroProblemsInit)
const jiro = ref('鈴木二郎')
</script>

<template>
  <section>
    <h2>Slot の利用</h2>
    <OneSection v-bind:name="taro">
      <ul>
        <li v-for="problem in taroProblems" v-bind:key="problem">
          {{ problem }}
        </li>
      </ul>
    </OneSection>
    <OneSection v-bind:name="jiro"></OneSection>
  </section>
</template>
