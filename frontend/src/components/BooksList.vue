<template>
  <div>
    <div class="books" v-for="book in books">
      <div class="x-item">
        <p><strong>id:</strong> {{ book.id }}</p>
        <p><strong>Название:</strong> {{ book.name }}</p>
        <p><strong>Аннотация:</strong> {{ book.annotation }}</p>
        <p><strong>Автор:</strong> {{ book.author }}</p>
        <p><strong>Жанры:</strong> {{ book.genres }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    books: {
     type: Array,
     required: true,
    }
  },
  name: "BooksList"
}
</script>

<style scoped>

</style>