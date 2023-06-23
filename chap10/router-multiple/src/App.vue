<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<template>
  <header><h1>マルチビューサンプル</h1></header>
  <main>
    <RouterView />
  </main>
  <section id="sub">
    <RouterView name="sub" />
  </section>
</template>

