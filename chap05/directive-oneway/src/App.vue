<script setup lang="ts">
import { ref } from 'vue'

const inputNameBind = ref('どな')
const inputNameOn = ref('ななち')
const onInputName = (event: Event): void => {
  const element = event.target as HTMLInputElement
  inputNameOn.value = element.value
}
</script>

<template>
  <section>
    <input type="text" v-bind:value="inputNameBind" />
  </section>
  <br />
  <section>
    <input type="text" v-on:input="onInputName" />
    <p>{{ inputNameOn }}</p>
  </section>
</template>
