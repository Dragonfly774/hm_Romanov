<template>
  <div>
    <form class="s-form" @submit.prevent>
      <h3 class="s-title">Добавить книгу</h3>
      <s-input type="text" placeholder="Название" v-model="book.name"/>
      <s-input type="text" placeholder="Аннотация" v-model="book.annotation"/>
      <s-input type="text" placeholder="Автор" v-model="book.author"/>
      <s-select v-model.number="genreValue" :options="genresOption"></s-select>
      <!--      <s-input placeholder="Жанры" v-model="book.genres"/>-->
      <s-button @click="addBook">Добавить</s-button>
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
        genres: [],
      },
      genreValue: '',
      genresList: {},
      genresOption: [],
    }
  },
  methods: {
    addBook() {
      this.book.genres.push(this.genreValue)
      console.log(this.book.genres)
      this.$ajax.post('api/book/', {...this.book}).then(() => {
        this.$emit('create', {...this.book})
        this.book.name = ''
        this.book.annotation = ''
        this.book.author = ''
        this.genres = ''
      })
    }
  },
  mounted() {
    this.genresList = this.$store.state.genre
    const genresListLength = this.genresList.genres.length
    let i = 0
    this.genresOption.push({value: '', name: 'Выберите'})
    while (genresListLength > i) {
      this.genresOption.push(
          {value: this.genresList.genres[i].id, name: this.genresList.genres[i].name}
      )
      i++
    }

  }
}
</script>

<style scoped>
.s-form {
  background: #a5eaa5;
  border-radius: 8px;
  padding: 1px 10px 10px 10px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}
</style>