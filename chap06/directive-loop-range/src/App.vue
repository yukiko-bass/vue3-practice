<template>
  <ul>
    <li v-for="r in 5" v-bind:key="r">半径{{ r }} の円の円周：{{ 2 * r * 3.14 }}</li>
  </ul>

  <br>
  <section>
    <select>
      <option v-for="year in 60" v-bind:key="year" v-bind:value="year + 1965">{{ year + 1965 }}</option>
    </select>
  </section>
</template>
