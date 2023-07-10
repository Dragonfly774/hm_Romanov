<template>
<div>
    <form class="x-form" @submit.prevent>
      <h3 class="x-title">Добавить жанр</h3>
      <input type="text" placeholder="Название" class="x-input" v-model="genres.name">
      <input type="text" placeholder="Описание" class="x-input" v-model="genres.description">
      <button class="x-btn" @click="addGenre">Добавить</button>
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
      this.$emit('create', { ...this.genres })
      this.genres.name = ''
      this.genres.description = ''
    }
  }
}
</script>

<style scoped>

</style>