<template>
  <div>
    <form class="s-form" @submit.prevent>
      <h3 class="s-title">Добавить жанр</h3>
      <s-input type="text" placeholder="Название" v-model="genres.name"/>
      <s-input type="text" placeholder="Описание" v-model="genres.description"/>
      <s-button @click="addGenre">Добавить</s-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateFormGenres",
  data() {
    return {
      genres: {
        name: "",
        description: "",
      }
    }
  },
  methods: {
    addGenre() {
      this.$ajax.post('api/genre/', {...this.genres}).then(() => {
        this.$emit('create', {...this.genres})
        this.genres.name = ''
        this.genres.description = ''
      })
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