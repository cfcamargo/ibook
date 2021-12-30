<template>
  <div class="component">
    <BookDetailsTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  layout: 'ibook',
  async asyncData({ params, redirect }) {
    await books.show({ id: params.id as any }).catch(() => {
      return redirect('/404.html')
    })
  },
  head() {
    return {
      title: books.$single.title,
      meta: [{
        hid: 'description',
        name: 'description',
        content: books.$single.description
      }]
    }
  }
})
</script>

<style lang="scss" scoped>
.component {
}
</style>
