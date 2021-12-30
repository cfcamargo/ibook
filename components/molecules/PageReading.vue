<template>
  <div class="component">

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'



export default Vue.extend({
    computed: {
    $book() {
      return books.$single
    },
  },
})
</script>

<style lang="scss" scoped>
.component{}
</style>