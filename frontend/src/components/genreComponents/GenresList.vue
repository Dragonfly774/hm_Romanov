<template>
  <div>
    <div class="genre" v-for="genre in genres">
      <div class="x-item">
        <tr class="x-tr">
          <td><p><strong>id:</strong></p></td>
          <td><p><strong>Название:</strong></p></td>
          <td><p><strong>Описание:</strong></p></td>
        </tr>
        <tr class="x-tr">
          <td><p>{{ genre.id }}</p></td>
          <td><p>{{ genre.name }}</p></td>
          <td><p>{{ genre.description }}</p></td>
        </tr>
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