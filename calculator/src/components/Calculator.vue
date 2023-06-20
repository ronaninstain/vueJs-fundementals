<script setup>
import { ref } from 'vue'

const x = ref(0)
const y = ref(0)
const result = ref(0)
</script>

<template>
  <div class="...">
    <input id="x" class="..." type="text" v-model="x" />
    <button id="add" @click="result = parseInt(x) + parseInt(y)" type="button">+</button>
    <button id="sub" @click="result = parseInt(x) - parseInt(y)" type="button">-</button>
    <button id="mul" @click="result = parseInt(x) * parseInt(y)" type="button">x</button>
    <button id="div" @click="result = parseInt(x) / parseInt(y)" type="button">/</button>
    <input id="y" type="text" v-model="y" />
    =
    <input id="result" class="..." type="text" v-model="result" />
  </div>
</template>

<style>
.number {
  padding: 0.6em 1.2em;
  width: 50px;
}
</style>
