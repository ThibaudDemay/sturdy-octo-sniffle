<template>
  <div>
    <h1>Home</h1>
    <router-link :to="{ name: 'Waiting' }">Waiting</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView'
})
</script>