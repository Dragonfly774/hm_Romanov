<template>
  <div class="x-content-books">
    <create-form-books @create="addBook"></create-form-books>
    <books-list :books="books"></books-list>
  </div>
</template>

<script>
import CreateFormBooks from "@/components/CreateFormBooks.vue";
import BooksList from "@/components/BooksList.vue";

export default {
  name: "AppContentBooks",
  components: {BooksList, CreateFormBooks},
  data() {
    return {
      books: [
        {id: 1, name: "Труды Ленине", annotation: "Книга про труды Ленина", author: "Ленин", genres: "Автобиография"},
        {id: 1, name: "Гулаг", annotation: "Книга про гулаг", author: "Солженицен", genres: "Автобиография, Роман"},
      ],
    }
  },
  methods: {
    addBook(book) {
      this.books.push(book)
    }
  }
}
</script>

<style scoped>

</style>