<script setup lang="ts">
import { ref, computed } from 'vue'

import OneMember from './components/OneMember.vue'

const memberListInit = new Map<number, Member>()
memberListInit.set(33456, {
  id: 33456,
  name: '田中太郎',
  email: 'bow@example.com',
  points: 35,
  note: '初回入会特典あり'
})
memberListInit.set(47783, { id: 47783, name: '鈴木二郎', email: 'mue@example.com', points: 53 })
const memberList = ref(memberListInit)

const totalPoints = computed((): number => {
  let total = 0
  for (const member of memberList.value.values()) {
    total += member.points
  }
  return total
})

const onIncrementPoint = (id: number): void => {
  const member = memberList.value.get(id)
  if (member != undefined) {
    member.points++
  }
}

interface Member {
  id: number
  name: string
  email: string
  points: number
  note?: string
}
</script>

<template>
  <section>
    <h1>会員リスト</h1>
    <p>全会員の保有ポイントの合計：{{ totalPoints }}</p>
    <OneMember
      v-for="[id, member] in memberList"
      v-bind:key="id"
      v-bind:id="id"
      v-bind:name="member.name"
      v-bind:email="member.email"
      v-bind:points="member.points"
      v-bind:note="member.note"
      v-on:incrementPoint="onIncrementPoint"
    />
  </section>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
