<template>
  <div class="read">
    <div class="read-header">
      <h2>{{ $book.title }}</h2>
      <div class="read-content">
        <div class="page-list">Pagina</div>
        <div class="page-reading">Pagina</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  layout: 'ibook',
  computed: {
    $book() {
      return books.$single
    },
  },
})
</script>

<style lang="scss" scoped>
.read-header {
  display: grid;
  gap: 1rem;
}

.read-content {
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 1rem;
}
</style>
