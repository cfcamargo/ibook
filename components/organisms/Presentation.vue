<template>
  <div class="presentation">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
      laudantium earum adipisci delectus quod cum illum labore nemo, sit optio,
      aspernatur id cumque enim libero magnam nobis, ipsam mollitia repellat.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ratione
      molestiae asperiores dolores nisi corrupti facere odit veniam accusantium,
      suscipit, laborum illo fugiat eveniet quod non similique atque, quia
      commodi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
      totam nobis quidem rerum ipsa consectetur mollitia architecto accusamus
      consequatur molestias quam corporis, sequi vero voluptatem incidunt eos
      fugiat quasi ex?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Illum a rerum odio ipsam possimus tempore, nostrum alias placeat quas
      officiis! Incidunt illo magni velit et officiis cum placeat earum
      impedit!lo
    </p>

    <img src="@/assets/img/presentation.svg" alt="Apresentacao do Ibook">
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>
