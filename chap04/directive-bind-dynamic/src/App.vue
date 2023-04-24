<script setup lang="ts">
import { ref } from 'vue'

const widthOrHeight = ref('height')
const widthHeightValue = ref(100)
</script>

<template>
  <p><img alt="VueLogo" src="./assets/logo.svg" v-bind:[widthOrHeight]="widthHeightValue" /></p>
</template>
