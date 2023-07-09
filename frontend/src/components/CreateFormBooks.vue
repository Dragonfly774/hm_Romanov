<template>
  <div>
    <form class="x-form" @submit.prevent>
      <h3 class="x-title">Добавить книгу</h3>
      <input type="text" placeholder="Название" class="x-input" v-model="book.name">
      <input type="text" placeholder="Аннотация" class="x-input" v-model="book.annotation">
      <input type="text" placeholder="Автор" class="x-input" v-model="book.author">
      <input type="text" placeholder="Жанры" class="x-input" v-model="book.genres">
      <button class="x-btn" @click="addBook">Добавить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateFormBooks",
  data() {
    return {
      book: {
        name: '',
        annotation: '',
        author: '',
        genres: '',
      }
    }
  },
  methods: {
    addBook() {
      this.$emit('create', { ...this.book })
      this.book.name = ''
      this.book.annotation = ''
      this.book.author = ''
      this.book.genres = ''
    }
  }

}
</script>

<style scoped>

</style>