<script setup lang="ts">
import { ref } from 'vue'

const url = ref('https://vuejs.org/')
</script>

<template>
  <p><a v-bind:href="url" target="_blank">Vue.js のサイト</a></p>
  <p><a :href="url" target="_blank">Vue.js のサイト（省略系）</a></p>
  <p><a v-bind:href="url + 'guide/introduction.html'" target="_blank">Vue.js ガイドのページ</a></p>
</template>
