<template>
  <div>
    <div class="genre" v-for="genre in genres">
      <div class="x-item">
        <p><strong>id:</strong>{{ genre.id }}</p>
        <p><strong>Название:</strong>{{ genre.name }}</p>
        <p><strong>Описание:</strong>{{ genre.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GenresList",
  props: {
    genres: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>