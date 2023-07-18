<template>
  <div>
    <form class="s-form" @submit.prevent>
      <h3 class="s-title">Добавить книгу</h3>
      <s-input type="text" placeholder="Название" v-model="book.name"/>
      <s-input type="text" placeholder="Аннотация" v-model="book.annotation"/>
      <s-select style="margin-bottom: 10px; height: 25px; border-radius: 8px;"
                v-model.number="authorValue" :options="authorsOption"></s-select>
      <select multiple="multiple" style="border-radius: 5px; margin-bottom: 10px" v-model="genreValue" >
        <option v-for="option in genresOption">
          {{ option.name }}
        </option>
      </select>
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
      genreValue: [],
      authorValue: [],
      genresList: {},
      authorsList: {},
      genresOption: [],
      authorsOption: [],
    }
  },
  methods: {
    addBook() {
      this.book.genres = this.genreValue
      // console.log(this.genreValue)
      this.book.author = `${this.authorsList.authors[this.authorValue - 1].first_name} ${this.authorsList.authors[this.authorValue - 1].second_name}`
      // console.log(this.book.author)
      this.$ajax.post('api/book/', {...this.book}).then(() => {
        this.$emit('create', {...this.book})
        this.book.name = ''
        this.book.annotation = ''
        this.book.author = ''
        this.book.genres = ''
      })
    }
  },
  mounted() {
    this.genresList = this.$store.state.genre
    const genresListLength = this.genresList.genres.length
    let i = 0
    while (genresListLength > i) {
      this.genresOption.push(
          {value: this.genresList.genres[i].id, name: this.genresList.genres[i].name}
      )
      i++
    }
    this.authorsList = this.$store.state.author
    const authorsListLength = this.authorsList.authors.length
    let j = 0
    while (authorsListLength > j) {
      this.authorsOption.push(
          {
            value: this.authorsList.authors[j].id,
            name: `${this.authorsList.authors[j].first_name} ${this.authorsList.authors[j].second_name}`
          }
      )
      j++
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